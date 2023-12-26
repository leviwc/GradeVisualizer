import { ufbaCoursesMap } from "./ufba/ufbaList";
import { UniversityType } from "./universityType";

export const allUniversities = [
  new UniversityType("ufba", "Universidade Federal da Bahia", ufbaCoursesMap),
];

export const allUniversitiesMap = new Map();
allUniversities.forEach((university) =>
  allUniversitiesMap.set(university.id, university)
);
