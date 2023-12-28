import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { allUniversitiesMap } from "../data/allUniversities";
import { useParams } from "react-router-dom";

export const University = () => {
  // Access the courseId parameter from the URL
  const { universityId } = useParams();
  const courses = [...allUniversitiesMap.get(universityId).coursesMap.values()];
  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Course Selection Page
      </Typography>
      <List>
        {courses.map((course) => (
          <ListItem key={course.id}>
            <Button
              component={Link}
              to={`/${universityId}/${course.id}`}
              variant="contained"
              color="primary"
            >
              <ListItemText primary={course.name} />
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default University;
