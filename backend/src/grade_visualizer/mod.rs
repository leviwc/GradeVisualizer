use sea_orm::{Database, DbErr};

// Change this according to your database implementation,
// or supply it as an environment variable.
// the whole database URL string follows the following format:
// "protocol://username:password@host:port/database"
// We put the database name (that last bit) in a separate variable simply for convenience.
const DATABASE_URL: &str = "postgres://grade:grade@localhost:3306/grade";
// const DB_NAME: &str = "grade";

pub async fn create_db() -> Result<(), DbErr> {
    let db = Database::connect(DATABASE_URL).await?;
    Ok(())
}