import { StudentsInfo } from "./students-info";

export interface ClassesInfo {
    period: string;
    code: number;
    name: string;
    teacher: string;
    students: StudentsInfo[];
}
