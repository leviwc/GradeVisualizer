import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Box } from "@mui/material";
import { Link } from "react-router-dom";

const MateriaSearchBar = ({ universityId, courseId }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleBackClick = () => {
    const currentPathname = window.location.pathname;
    const match = currentPathname.match(/\/(\w+)\/(\w+)\/$/);

    if (match) {
      const universityId = match[1];
      navigate(`/${universityId}`);
    } else {
      navigate(-1); // Go back to the previous page if the URL doesn't match the expected pattern
    }
  };

  return (
    <Box display="flex" alignItems="center" padding="10px" bgcolor="#f0f0f0">
      <Button
        onClick={handleBackClick}
        variant="contained"
        style={{ marginRight: "10px" }}
      >
        Back
      </Button>
      <div>{`/${universityId}/${courseId}/`}</div>

      <Input
        type="text"
        placeholder="crie-ou-va-para-pagina-pessoal"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ flex: 1, padding: "5px" }}
      />
      <Button
        component={Link}
        to={{
          pathname: `/${universityId}/${courseId}/${searchQuery}`,
        }}
        variant="contained"
        style={{ marginLeft: "10px" }}
      >
        Ir para pagina salva
      </Button>
    </Box>
  );
};

export default MateriaSearchBar;
