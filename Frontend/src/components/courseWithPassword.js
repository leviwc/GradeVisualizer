import React, { useState, useEffect } from "react";
import "./../App.css";
import { GradeState } from "./materia";
import { useParams } from "react-router-dom";
import { allUniversitiesMap } from "../data/allUniversities";
import Course from "./course";
import axios from "axios";
import { debounce } from "lodash";

const CourseWithPassword = () => {
  const { universityId, courseId, password } = useParams();
  const initialCourse = [
    ...allUniversitiesMap.get(universityId).coursesMap.get(courseId).data
      .semestre,
  ];

  const [semestres, setSemestres] = useState(null);
  const [loading, setLoading] = useState(true);

  const alterMateriaStates = (grade_states_map) => {
    // Clone the semestres to avoid mutating the state directly

    // Iterate through the semestres and update the materia states

    // Set the updated semestres in the state using the callback function
    setSemestres(() => {
      let aux = initialCourse.map((semestre) => {
        return {
          ...semestre,
          materias: semestre.materias.map((materia) => {
            let newMateria = materia;
            if (grade_states_map.has(materia.codigo)) {
              newMateria = {
                ...materia,
                state: grade_states_map.get(materia.codigo),
              };
            }
            return newMateria;
          }),
        };
      });
      return aux;
    });
  };

  const getMateriaStates = () => {
    const map = new Map();
    semestres.forEach((semestre) => {
      semestre.materias.forEach((materia) => {
        map.set(materia.codigo, materia.state);
      });
    });
    return map;
  };

  const postData = async () => {
    try {
      const grade_states = getMateriaStates();
      const dataObject = {};
      for (let [key, value] of grade_states) {
        dataObject[key] = value;
      }
      const body = {
        password: password,
        university: universityId,
        course: courseId,
        grade_states: dataObject,
      };

      const response = await axios.post(
        "http://0.0.0.0:8080/gradeStates",
        body,
        {
          headers: {
            "Content-Type": "application/json",
            // Add other headers as needed
          },
        }
      );
    } catch (error) {
      console.error("Error making POST request:", error);
    }
  };

  const postDataDebounced = debounce(postData, 1000);

  const fetchData = async () => {
    try {
      const apiUrl = `http://0.0.0.0:8080/gradeStates?password=${password}&university=${universityId}&course=${courseId}`;

      const response = await axios.get(apiUrl);

      const map = new Map(Object.entries(response.data.grade_states));

      alterMateriaStates(map);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Cleanup function to clear the timer
    return () => {
      clearTimeout(postDataDebounced);
    };
  }, [postDataDebounced]);

  useEffect(() => {
    postDataDebounced();
  }, [semestres]); // This effect will run whenever semestres changes

  useEffect(() => {
    fetchData();
  }, [universityId, courseId, password]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Course
      semestres={semestres}
      setSemestres={setSemestres}
      universityId={universityId}
      courseId={courseId}
    />
  );
};

export default CourseWithPassword;
