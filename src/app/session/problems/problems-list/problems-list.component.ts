import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Problem, STATUS } from 'src/app/data/problem';

@Component({
    selector: 'app-problems-list',
    templateUrl: './problems-list.component.html',
    styleUrls: [ './problems-list.component.css' ]
})
export class ProblemsListComponent implements OnInit {
    @Input() problems: Problem[];
    @Input() tab: string;
    @Output() problemSelected = new EventEmitter<{ problemId: any }>();
    tabs = STATUS;

    constructor() {}

    ngOnInit() {}

    onProblemSelected(problemId: any) {
        console.log('problem ' + problemId + 'selected!');
        this.problemSelected.emit({ problemId });
    }
}
