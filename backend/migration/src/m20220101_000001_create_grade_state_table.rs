use sea_orm_migration::prelude::*;

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {

        manager
            .create_table(
                Table::create()
                    .table(GradeState::Table)
                    .if_not_exists()
                    .col(
                        ColumnDef::new(GradeState::Id)
                            .integer()
                            .not_null()
                            .auto_increment()
                            .primary_key(),
                    )
                    .col(ColumnDef::new(GradeState::University).string().not_null())
                    .col(ColumnDef::new(GradeState::Password).string().not_null())
                    .col(ColumnDef::new(GradeState::Course).string().not_null())
                    .col(ColumnDef::new(GradeState::GradeStates).json().not_null())
                    .to_owned(),
            )
            .await?;

        manager
            .create_index(
                Index::create()
                    .if_not_exists()
                    .name("idx-password_course_university")
                    .table(GradeState::Table)
                    .col(GradeState::Password)
                    .col(GradeState::Course)
                    .col(GradeState::University)
                    .unique()
                    .to_owned(),
            )
            .await?;

        Ok(())
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        // Replace the sample below with your own migration scripts

        manager.drop_index(Index::drop().name("idx-password_course_university").to_owned())
        .await?;

        manager
            .drop_table(Table::drop().table(GradeState::Table).to_owned())
            .await
    }
}

#[derive(DeriveIden)]
enum GradeState {
    Table,
    Id,
    Password,
    University,
    Course,
    GradeStates,
}
