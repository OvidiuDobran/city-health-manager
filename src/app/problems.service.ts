import { Injectable } from '@angular/core';
import { PROBLEMS } from './data/mock-problems';
import { Problem } from './data/problem';
import { Status } from './data/status';

@Injectable({
  providedIn: 'root'
})
export class ProblemsService {

  problems: Problem[];

  getNewProblems(): Problem[] {
    return this.getAllProblems().filter(
      problem => problem.status === Status.NEW
    );
  }

  getAssignedProblems(): Problem[] {
    return this.getAllProblems().filter(
      problem => problem.status === Status.ASSIGNED
    );
  }

  getSolvedProblems(): Problem[] {
    return this.getAllProblems().filter(
      problem => problem.status === Status.SOLVED
    );
  }

  getProblem(id: number) {
    return this.getAllProblems().find(problem => problem.id === id);
  }

  constructor() {}

  getAllProblems() {
    if (!this.problems || this.problems.length === 0) {
      this.problems = PROBLEMS.map(
        p =>
          new Problem(
            p.id,
            p.title,
            p.longitude,
            p.latitude,
            p.description,
            p.city,
            p.createdAt,
            p.status,
            p.assignedAt,
            p.solvedAt
          )
      );
    }
    return this.problems;
  }
}
