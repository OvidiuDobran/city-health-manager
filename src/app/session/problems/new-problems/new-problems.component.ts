import { Component, OnInit } from '@angular/core';
import { Problem } from 'src/app/data/problem';
import { ProblemsService } from 'src/app/problems.service';


@Component({
  selector: 'app-new-problems',
  templateUrl: './new-problems.component.html',
  styleUrls: ['./new-problems.component.css']
})
export class NewProblemsComponent implements OnInit {

  problems: Problem[];

  constructor(private problemsService: ProblemsService) { }

  ngOnInit() {
    this.problems = this.problemsService.getNewProblems();
    console.log(this.problems[0].title);
  }

}
