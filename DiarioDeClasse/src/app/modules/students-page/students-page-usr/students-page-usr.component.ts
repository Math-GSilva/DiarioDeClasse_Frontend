import { Component } from '@angular/core';
import { StudentsDetailsComponent } from "../../../components/students-details/students-details.component";
import { MOCK_STUDENTS_INFO } from '../../../interfaces/mocks/mock-students-info';
import { StudentsGradesComponent } from "../../../components/students-grades/students-grades.component";
import { MOCK_STUDENTS_GRADES } from '../../../interfaces/mocks/mock-students-grades';
import { MOCK_STUDENTS_GRADES_BYCLASS } from '../../../interfaces/mocks/mock-students-grades-byclass';
import { MOCK_STUDENTS_ABSENCES } from '../../../interfaces/mocks/mock-students-absences';
import { StudentsAbsencesComponent } from "../../../components/students-absences/students-absences.component";

@Component({
  selector: 'app-students-page-usr',
  standalone: true,
  imports: [StudentsDetailsComponent, StudentsGradesComponent, StudentsAbsencesComponent],
  templateUrl: './students-page-usr.component.html',
  styleUrl: './students-page-usr.component.scss'
})
export class StudentsPageUsrComponent {
  student_info = MOCK_STUDENTS_INFO;
  grades_info = MOCK_STUDENTS_GRADES_BYCLASS;
  absences_info = MOCK_STUDENTS_ABSENCES;

  generateList(){
    let list = [];

    for(let rep = 0; rep < 16; rep++){
      list.push(...MOCK_STUDENTS_GRADES);
    }

    return list;
  }
}
