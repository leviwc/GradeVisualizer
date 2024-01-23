# GradeVisualizer
This is a grade visualizer with persistence, the idea is that if you pass an id on the url you will have the saved state of your grades

The website is hosted at:
https://suagrade.netlify.app/

It is composed of a frontend in react, a backend in rust and a c++ script made to help parsing the grades requirements

# Frontend

The frontend is in react and uses the state checking of react to see from each grade if any grades it has dependencies has been changed, and if so updates accordinly


# Backend

The backend is made in rust and consists of a axum http endpoint
And seaORM that uses tables in postgresql to save the grade states for the saved pages


# Hosting

The frontend hosting was made in netfly, while the backend server was done in digital ocean with a Dokku and a docker file and the postgres was also done with the Dokku app