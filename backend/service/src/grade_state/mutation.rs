use std::collections::HashMap;

use ::entity::{grade_state, grade_state::Entity as GradeState};
use sea_orm::{sea_query::OnConflict, *};

pub struct Mutation;

impl Mutation {
    pub async fn upseart_university_course_password_states(
        db: &DbConn,
        password: String,
        university: String,
        course: String,
        grade_states: HashMap<String, String>,
    ) -> Result<(), DbErr> {
        let json_grade_states =
            serde_json::to_value(grade_states).map_err(|e| DbErr::Custom(e.to_string()))?;
        let new_grade_state = grade_state::ActiveModel {
            university: ActiveValue::Set(university),
            password: ActiveValue::Set(password),
            course: ActiveValue::Set(course),
            grade_states: ActiveValue::Set(json_grade_states),
            ..Default::default()
        };
        let query = GradeState::insert(new_grade_state)
            .on_conflict(
                OnConflict::columns([
                    grade_state::Column::Password,
                    grade_state::Column::Course,
                    grade_state::Column::University,
                ])
                .update_column(grade_state::Column::GradeStates)
                .to_owned(),
            )
            .build(DbBackend::Postgres);

        db.execute(query).await?;
        Ok(())
    }
}
