import { Component, OnInit } from '@angular/core';
import { Problem } from 'src/app/data/problem';
import { ProblemsService } from 'src/app/problems.service';

@Component({
  selector: 'app-solved-problems',
  templateUrl: './solved-problems.component.html',
  styleUrls: ['./solved-problems.component.css']
})
export class SolvedProblemsComponent implements OnInit {

  solvedProblems: Problem[];

  constructor(private problemsService: ProblemsService) {}

  ngOnInit() {
    this.solvedProblems = this.problemsService.getSolvedProblems();
  }
}
