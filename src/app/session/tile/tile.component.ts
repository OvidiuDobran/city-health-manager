import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-tile',
    templateUrl: './tile.component.html',
    styleUrls: [ './tile.component.css' ]
})
export class TileComponent implements OnInit {
    @Input() title: string;
    @Input() description: string;
    @Input() imagePath: string;

    constructor() {}

    ngOnInit() {}
}
