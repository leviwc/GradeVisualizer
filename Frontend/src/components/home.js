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
import unorm from "unorm"; // Import unorm library
import { allUniversities } from "../data/allUniversities";

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const normalizedSearchTerm = unorm.nfkd(searchTerm.toLowerCase());

  const filteredUniversities = allUniversities.filter((university) => {
    const normalizedUniversityName = unorm.nfkd(university.name.toLowerCase());
    return normalizedUniversityName.includes(normalizedSearchTerm);
  });

  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        Faculdade
      </Typography>
      <TextField
        label="Search by University Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <List>
        {filteredUniversities.map((university) => (
          <ListItem key={university.id}>
            <Button
              component={Link}
              to={`/${university.id}`}
              variant="contained"
              color="primary"
            >
              <ListItemText
                primary={
                  university.name.toLowerCase().charAt(0).toUpperCase() +
                  university.name.slice(1)
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

export default Home;
