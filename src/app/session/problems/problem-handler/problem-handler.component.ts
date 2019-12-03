import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Problem } from "src/app/data/problem";
import { ProblemsService } from "src/app/problems.service";
import { Status } from "src/app/data/status";

@Component({
  selector: "app-problem-handler",
  templateUrl: "./problem-handler.component.html",
  styleUrls: ["./problem-handler.component.css"]
})
export class ProblemHandlerComponent implements OnInit {
  problem: Problem;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private problemsService: ProblemsService
  ) {}

  ngOnInit() {
    this.problem = this.getProblem();
    console.log(this.problem);
  }

  getProblem(): Problem {
    const id = +this.route.snapshot.paramMap.get("id");
    return this.problemsService.getProblem(id);
  }

  onProblemActionClick() {
    switch (this.problem.status) {
      case Status.NEW:
        this.problem.status = Status.ASSIGNED;
        this.problem.assignetAt = new Date().getTime();
        break;
      case Status.ASSIGNED:
        this.problem.status = Status.SOLVED;
        this.problem.solvedAt = new Date().getTime();
        break;
    }
    this.location.back();
  }

  getButtonValue() {
    switch (this.problem.status) {
      case Status.NEW:
        return "Assign";
      case Status.ASSIGNED:
        return "Solve";
    }
  }

  getButtonClass() {
    switch (this.problem.status) {
      case Status.NEW:
        return "btn btn-primary bottom wrapper";
      case Status.ASSIGNED:
        return "btn btn-success bottom wrapper";
    }
  }

  getButtonIcon() {
    switch (this.problem.status) {
      case Status.NEW:
        return "thumbtack";
      case Status.ASSIGNED:
        return "check";
    }
  }
}
