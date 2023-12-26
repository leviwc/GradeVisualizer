use ::entity::{grade_state, grade_state::Entity as GradeState};
use sea_orm::*;

pub struct Query;

impl Query {
    pub async fn find_grade_state_by_password_university_course(
        db: &DbConn,
        password: &str,
        university: &str,
        course: &str,
    ) -> Result<Option<grade_state::Model>, DbErr> {
        GradeState::find()
            .filter(grade_state::Column::Password.eq(password))
            .filter(grade_state::Column::University.eq(university))
            .filter(grade_state::Column::Course.eq(course))
            .one(db)
            .await
    }
}
