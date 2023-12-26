mod dto;
use serde_json::json;

use axum::{
    extract::{Query, State},
    http::StatusCode,
    response::IntoResponse,
    Json,
};
use tracing::{event, Level};

use crate::AppState;

use self::dto::{GetGradeStateParams, PostGradeStateRequestBody};

pub async fn get_grade_state(
    state: State<AppState>,
    Query(params): Query<GetGradeStateParams>,
) -> impl IntoResponse {
    let password = params.password;
    let university = params.university;
    let course = params.course;
    let result =
        grade_services::grade_state::query::Query::find_grade_state_by_password_university_course(
            &state.conn,
            &password,
            &university,
            &course,
        )
        .await;
    match result {
        Ok(model_op) => match model_op {
            Some(grade_state) => (
                StatusCode::OK,
                Json(json!({"grade_states": grade_state.grade_states})),
            ),
            None => (StatusCode::OK, Json(json!({"grade_states": []}))),
        },
        Err(_) => (StatusCode::INTERNAL_SERVER_ERROR, Json(json!({}))),
    }
}

pub async fn post_grade_state(
    state: State<AppState>,
    Json(req): Json<PostGradeStateRequestBody>,
) -> impl IntoResponse {
    event!(Level::INFO, "received: {req:?}");
    let password = req.password;
    let university = req.university;
    let course = req.course;
    let grade_states = req.grade_states;
    let result =
        grade_services::grade_state::mutation::Mutation::upseart_university_course_password_states(
            &state.conn,
            password,
            university,
            course,
            grade_states,
        )
        .await;
    match result {
        Ok(()) => (StatusCode::OK, Json(json!({}))),
        Err(_) => (StatusCode::INTERNAL_SERVER_ERROR, Json(json!({}))),
    }
}
