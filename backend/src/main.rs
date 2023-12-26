mod grade_visualizer;

#[tokio::main]
async fn main() {
    grade_visualizer::create_db().await.unwrap();
}
