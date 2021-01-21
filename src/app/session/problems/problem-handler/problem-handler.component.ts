import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ClerkUserService } from 'src/app/clerk-user.service';
import { Problem, ProblemHistory, STATUS } from 'src/app/data/problem';
import { ProblemsService } from 'src/app/problems.service';

@Component({
    selector: 'app-problem-handler',
    templateUrl: './problem-handler.component.html',
    styleUrls: [ './problem-handler.component.css' ]
})
export class ProblemHandlerComponent implements OnInit {
    problem: Problem;
    problemStatus: string;
    images: any[] = [];
    sortedHistories: ProblemHistory[];
    status = STATUS;
    contributors = new Map();

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private problemsService: ProblemsService,
        private clerkService: ClerkUserService,
        private sanitizer: DomSanitizer
    ) {}

    ngOnInit() {
        this.getProblem();
    }

    setProblem(problem: Problem) {
        this.images = [];
        this.problem = new Problem(problem);
        this.problemStatus = this.problem.getLastHisotry().status;
        this.sortedHistories = this.problem.getSortedHistories(-1);
        this.problem.images.map((image) =>
            this.problemsService.getFile(image.name).subscribe((blob: any) => {
                const objectURL = URL.createObjectURL(blob);
                this.images.push(this.sanitizer.bypassSecurityTrustUrl(objectURL));
            })
        );

        const emailList: string[] = [];
        this.sortedHistories.forEach((history) => {
            if (history.clerk && !emailList.includes(history.clerk)) {
                emailList.push(history.clerk);
                this.clerkService.getClerk(history.clerk).subscribe((clerk) => {
                    if (clerk) {
                        this.contributors.set(clerk.email, clerk);
                    }
                });
            }
        });
    }

    getProblem(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.problemsService.getProblem(id).subscribe((problem) => {
            this.setProblem(problem);
        });
    }

    getCreationDate(problem: Problem) {
        return problem.getCreationDate();
    }

    onProblemActionClick() {
        this.location.back();
    }

    onProblemStatusUpdate(status: string) {
        this.problemsService
            .updateProblemStatus(this.problem.id, status)
            .subscribe((problem) => this.setProblem(problem));
    }

    onAddComment(event: any) {
        this.problemsService
            .addComment(this.problem.id, event.comment)
            .subscribe((problem) => this.setProblem(problem));
    }
}
