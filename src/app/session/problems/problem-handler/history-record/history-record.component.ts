import { Component, OnInit, Input } from '@angular/core';
import { ProblemHistory, STATUS, ChangeType } from 'src/app/data/problem';
import { ClerkUser } from 'src/app/data/clerk-user';

@Component({
    selector: 'app-history-record',
    templateUrl: './history-record.component.html',
    styleUrls: [ './history-record.component.css' ]
})
export class HistoryRecordComponent implements OnInit {
    @Input() currentHistory: ProblemHistory;
    @Input() previousHistory: ProblemHistory;
    @Input() clerk: ClerkUser;
    @Input() rating: number;

    status = STATUS;
    changeTypes = ChangeType;

    constructor() {}

    ngOnInit() {}

    array(size: number) {
        return new Array(size);
    }
}
