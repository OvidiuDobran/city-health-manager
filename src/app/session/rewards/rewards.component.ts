import { Component, OnInit } from '@angular/core';
import { Reward } from 'src/app/data/reward';
import { RewardService } from 'src/app/reward.service';
import { SessionService } from 'src/app/session.service';

@Component({
    selector: 'app-rewards',
    templateUrl: './rewards.component.html',
    styleUrls: [ './rewards.component.css' ]
})
export class RewardsComponent implements OnInit {
    rewards: Reward[] = [];

    constructor(private rewardService: RewardService, private sessionService: SessionService) {}

    ngOnInit() {
        this.rewardService.getRewardsByCity(this.sessionService.clerkUser.city).subscribe((rewards) => {
            rewards.forEach((reward) => {
                this.rewards.push(
                    new Reward({
                        id: reward.id,
                        title: reward.title,
                        author: reward.author,
                        city: reward.city,
                        cost: reward.cost,
                        description: reward.description,
                        creationDate: reward.creationDate
                    })
                );
            });
            console.log(JSON.stringify(this.rewards));
        });
    }
}
