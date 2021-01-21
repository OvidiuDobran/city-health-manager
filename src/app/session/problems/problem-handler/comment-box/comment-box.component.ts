import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ProblemsService } from 'src/app/problems.service';

@Component({
    selector: 'app-comment-box',
    templateUrl: './comment-box.component.html',
    styleUrls: [ './comment-box.component.css' ]
})
export class CommentBoxComponent implements OnInit {
    @Output() addComment = new EventEmitter<{ comment: string }>();

    comment: string;

    constructor() {}

    ngOnInit() {}

    onAddComment() {
        const addedComment = this.comment;
        this.addComment.emit({ comment: addedComment });
        this.comment = '';
    }
}
