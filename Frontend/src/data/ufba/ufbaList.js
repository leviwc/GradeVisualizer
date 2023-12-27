import { CourseType } from "../courseType";
import { compScience } from "./compScience";
import { engMec } from "./engMec";
import { medicine } from "./medicina";
import { newEngProdData } from "./newEngProdData";
import { sistemasInfo } from "./sistemasInformacao";

const ufbaCourses = [
  new CourseType("EngProdNew", "Engenharia de produção", newEngProdData),
  new CourseType("CompSci", "Ciência da computação", compScience),
  new CourseType("Med", "Medicina", medicine),
  new CourseType("SistemasInfo", "Sistemas de informação", sistemasInfo),
  new CourseType("EngMec", "Engenharia Mecanica", engMec),
];

// create map where the id is the key
export const ufbaCoursesMap = new Map();
ufbaCourses.forEach((course) => ufbaCoursesMap.set(course.id, course));
