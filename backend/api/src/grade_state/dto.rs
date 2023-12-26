use std::collections::HashMap;

use serde::Deserialize;

#[derive(Deserialize)]
pub struct GetGradeStateParams {
    pub password: String,
    pub university: String,
    pub course: String,
}

#[derive(Deserialize, Debug)]
pub struct PostGradeStateRequestBody {
    pub password: String,
    pub university: String,
    pub course: String,
    pub grade_states: HashMap<String, String>,
}
