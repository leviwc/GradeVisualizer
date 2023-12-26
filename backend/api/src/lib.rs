mod grade_state;
use std::env;

use axum::{http::Method, routing::get, Router};
use migration::{
    sea_orm::{Database, DatabaseConnection},
    Migrator, MigratorTrait,
};
use tower_http::cors::{Any, CorsLayer};
use tracing::{event, Level};

use crate::grade_state::{get_grade_state, post_grade_state};

#[tokio::main]
pub async fn main() -> anyhow::Result<()> {
    dotenvy::dotenv().ok();
    let rust_log_env = env::var("RUST_LOG").unwrap_or("INFO".to_string());
    tracing_subscriber::fmt()
        .with_env_filter(rust_log_env)
        .init();

    event!(Level::INFO, "🚀 Server starting...");
    let db_url = env::var("DATABASE_URL").expect("DATABASE_URL is not set in .env file");
    let host = env::var("APP_HOST").expect("HOST is not set in .env file");
    let port = env::var("APP_PORT").expect("PORT is not set in .env file");

    event!(
        Level::INFO,
        "Server configured to accept connections on host {}...",
        host
    );
    event!(
        Level::INFO,
        "Server configured to listen connections on port {}...",
        port
    );

    let conn = Database::connect(db_url)
        .await
        .expect("Database connection failed");
    Migrator::up(&conn, None).await.unwrap();
    let state = AppState { conn };

    let cors = CorsLayer::new()
        .allow_methods([Method::GET, Method::POST])
        .allow_origin(Any);

    let app = Router::new()
        .route("/gradeStates", get(get_grade_state).post(post_grade_state))
        .layer(cors)
        .with_state(state);

    let server_url = format!("{host}:{port}");

    let listener = tokio::net::TcpListener::bind(&server_url).await.unwrap();
    axum::serve(listener, app).await?;

    event!(Level::INFO, "Server stopped");

    Ok(())
}

#[derive(Clone)]
struct AppState {
    conn: DatabaseConnection,
}
