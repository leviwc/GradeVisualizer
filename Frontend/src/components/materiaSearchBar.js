import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Box } from "@mui/material";

const MateriaSearchBar = () => {
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

  const handleForwardClick = () => {
    const currentPathname = window.location.pathname;
    const match = currentPathname.match(/\/([^/]+)\/([^/]+)\/$/);

    console.log("Current Pathname:", currentPathname);
    console.log("Match Result:", match);

    if (match) {
      const universityId = match[1];
      const courseId = match[2];
      const forwardUrl = `/${universityId}/${courseId}/${encodeURIComponent(
        searchQuery
      )}`;
      navigate(forwardUrl);
    } else {
      console.error(
        "Cannot determine the current course. Forward navigation aborted."
      );
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
      <Input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ flex: 1, padding: "5px" }}
      />
      <Button
        onClick={handleForwardClick}
        variant="contained"
        style={{ marginLeft: "10px" }}
      >
        Search
      </Button>
    </Box>
  );
};

export default MateriaSearchBar;
