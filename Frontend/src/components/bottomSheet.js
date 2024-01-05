import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const BottomSheet = () => {
  const authorName = "Levi Weber Costa";
  const githubLink = "https://github.com/leviwc/GradeVisualizer";

  return (
    <Card>
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          By: {authorName}
          <br />
          Github project:
          <br />
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            {githubLink}
          </a>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BottomSheet;
