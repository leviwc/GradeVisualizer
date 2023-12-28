import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import { allUniversitiesMap } from "../data/allUniversities";
import { useParams } from "react-router-dom";
import unorm from "unorm";

export const University = () => {
  // Access the courseId parameter from the URL
  const { universityId } = useParams();
  const allCourses = [
    ...allUniversitiesMap.get(universityId).coursesMap.values(),
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const normalizedSearchTerm = unorm.nfkd(searchTerm.toLowerCase());

  const filteredCourses = allCourses.filter((course) => {
    const normalizedCourseName = unorm.nfkd(course.name.toLowerCase());
    return normalizedCourseName.includes(normalizedSearchTerm);
  });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        Selecione o curso
      </Typography>
      <TextField
        label="Search by Course Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <List>
        {filteredCourses.map((course) => (
          <ListItem key={course.id}>
            <Button
              component={Link}
              to={`/${universityId}/${course.id}`}
              variant="contained"
              color="primary"
              fullWidth
            >
              <ListItemText
                primary={
                  course.name.toLowerCase().charAt(0).toUpperCase() +
                  course.name.slice(1)
                }
                style={{ textTransform: "none" }}
              />
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default University;
