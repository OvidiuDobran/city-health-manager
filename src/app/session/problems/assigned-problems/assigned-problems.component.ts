import { Component, OnInit } from '@angular/core';
import { Problem } from 'src/app/data/problem';
import { ProblemsService } from 'src/app/problems.service';

@Component({
  selector: 'app-assigned-problems',
  templateUrl: './assigned-problems.component.html',
  styleUrls: ['./assigned-problems.component.css']
})
export class AssignedProblemsComponent implements OnInit {

  assignedProblems: Problem[];

  constructor(private problemsService: ProblemsService) { }

  ngOnInit() {
    this.assignedProblems = this.problemsService.getAssignedProblems();
  }

}
