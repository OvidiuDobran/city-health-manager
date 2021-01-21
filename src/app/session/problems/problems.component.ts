import { Component, OnInit } from '@angular/core';
import { STATUS, Problem } from 'src/app/data/problem';
import { ProblemsService } from 'src/app/problems.service';

@Component({
    selector: 'app-problems',
    templateUrl: './problems.component.html',
    styleUrls: [ './problems.component.css' ]
})
export class ProblemsComponent implements OnInit {
    tabs = STATUS;
    selectedTab = this.tabs.NEW;
    problemSelected = false;
    problems: Problem[];

    constructor(private problemsService: ProblemsService) {}

    ngOnInit() {
        this.problems = this.problemsService.getProblemsByStatus(this.selectedTab);
    }

    onTabSelected(selectedTab: STATUS) {
        this.selectedTab = selectedTab;
        this.problems = this.problemsService.getProblemsByStatus(this.selectedTab);
        this.problemSelected = false;
    }
}
