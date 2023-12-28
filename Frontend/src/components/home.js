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
import { allUniversities } from "../data/allUniversities";

export const Home = () => {
  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        Faculdade
      </Typography>
      <List>
        {allUniversities.map((university) => (
          <ListItem key={university.id}>
            <Button
              component={Link}
              to={`/${university.id}`}
              variant="contained"
              color="primary"
            >
              <ListItemText primary={university.name} />
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Home;
