import { ClassesInfo } from "../classes-info";
import { MOCK_STUDENTS_INFO } from "./mock-students-info";

export const MOCK_CLASSES_INFO: ClassesInfo =
{
    period: "Manhã",
    code: 43,
    name: "materia",
    teacher: "professor",
    students: [MOCK_STUDENTS_INFO, MOCK_STUDENTS_INFO, MOCK_STUDENTS_INFO, MOCK_STUDENTS_INFO, MOCK_STUDENTS_INFO, MOCK_STUDENTS_INFO, MOCK_STUDENTS_INFO]
}