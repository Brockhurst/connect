import { Component } from '@angular/core';
import { IAssignment } from 'app/shared/interfaces/assignment.interface';
import { Assignment } from 'app/shared/services/resources/assignment';

import './assignments.component.scss';

@Component({
  selector: 'ab-assignments',
  host: { class: 'ab-assignments' },
  templateUrl: './assignments.component.html'
})
export class AssignmentsComponent {
  public assignments: IAssignment[];

  constructor(private assignmentService: Assignment) {
    this.assignments = assignmentService.query();
  }
}
