import { Component, OnInit } from '@angular/core';
import { CityRank } from 'src/app/data/city-rank';
import { CityStatus } from 'src/app/data/city-status';
import { GeographyService } from 'src/app/geography.service';
import { SessionService } from 'src/app/session.service';

@Component({
    selector: 'app-cities-ranking',
    templateUrl: './cities-ranking.component.html',
    styleUrls: [ './cities-ranking.component.css' ]
})
export class CitiesRankingComponent implements OnInit {
    ranking: CityRank[] = [];
    cityStatus: CityStatus;

    public pieChartLabels: string[] = [ 'NEW', 'IN_PROGRESS', 'RESOLVED', 'CLOSED' ];
    public pieChartData: number[] = [ 1, 1, 1, 1 ];
    public pieChartType = 'pie';

    colors = [ { backgroundColor: [ '#26b3ff', '#ffda45', '#45efff', '#52db02' ] } ];

    constructor(private sessionService: SessionService, private geographyService: GeographyService) {}

    ngOnInit() {
        const city = this.sessionService.clerkUser.city;
        this.geographyService.getCityStatus(city.name, city.country.name).subscribe((cityStatus) => {
            this.cityStatus = cityStatus;
            this.loadPieChartDate();
        });
        this.geographyService.getRanking().subscribe((ranking) => (this.ranking = ranking));
    }

    loadPieChartDate(): void {
        this.pieChartData = [
            this.cityStatus.newCount,
            this.cityStatus.inProgressCount,
            this.cityStatus.solvedCount,
            this.cityStatus.closedCount
        ];
    }

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }
}
