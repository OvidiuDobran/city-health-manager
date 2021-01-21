import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-rating-bar',
    templateUrl: './rating-bar.component.html',
    styleUrls: [ './rating-bar.component.css' ]
})
export class RatingBarComponent implements OnInit {
    @Input() rating: number;

    maxRating = 5;

    constructor() {}

    ngOnInit() {}

    array(size: number) {
        return Array(size);
    }
}
