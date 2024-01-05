import React, { useState } from "react";
import "./../App.css";
import { useParams } from "react-router-dom";
import Course from "./course";
import { allUniversitiesMap } from "../data/allUniversities";
import SearchBarWithBackButton from "./materiaSearchBar";

const CoursePage = () => {
  const { universityId, courseId } = useParams();
  const initialCourse = allUniversitiesMap
    .get(universityId)
    .coursesMap.get(courseId).data.semestre;

  const [semestres, setSemestres] = useState(initialCourse);

  return (
    <div>
      <SearchBarWithBackButton />
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
