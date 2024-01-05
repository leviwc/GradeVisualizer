import React, { useState } from "react";
import "./../App.css";
import { useParams } from "react-router-dom";
import Course from "./course";
import { allUniversitiesMap } from "../data/allUniversities";

const CoursePage = () => {
  const { universityId, courseId } = useParams();
  const initialCourse = allUniversitiesMap
    .get(universityId)
    .coursesMap.get(courseId).data.semestre;

  const [semestres, setSemestres] = useState(initialCourse);

  return (
    <div>
      <Course
        semestres={semestres}
        setSemestres={setSemestres}
        universityId={universityId}
        courseId={courseId}
      />
    </div>
  );
};

export default CoursePage;
