import { Component, OnInit, Input } from '@angular/core';
import { Reward } from 'src/app/data/reward';
import { SessionService } from 'src/app/session.service';
import { RewardService } from 'src/app/reward.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-reward-definition',
    templateUrl: './reward-definition.component.html',
    styleUrls: [ './reward-definition.component.css' ]
})
export class RewardDefinitionComponent implements OnInit {
    title: string;
    cost: number;
    description: string;
    reward: Reward;

    constructor(
        private sessionService: SessionService,
        private rewardService: RewardService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        if (id) {
            this.rewardService.getRewardById(id).subscribe((reward) => {
                if (reward) {
                    this.reward = reward;
                    this.title = this.reward.title;
                    this.cost = this.reward.cost;
                    this.description = this.reward.description;
                }
            });
        }
    }

    onSave() {
        const savingReward = new Reward({
            id: this.reward ? this.reward.id : null,
            title: this.title,
            cost: this.cost,
            description: this.description,
            city: this.sessionService.clerkUser.city,
            author: this.sessionService.clerkUser,
            creationDate: new Date()
        });
        if (this.reward) {
            this.rewardService.updateReward(savingReward).subscribe(() => this.saveCallback());
        } else {
            this.rewardService.createReward(savingReward).subscribe(() => this.saveCallback());
        }
    }

    saveCallback() {
        this.title = '';
        this.cost = 1;
        this.description = '';
        this.router.navigate([ '/session', { outlets: { view: [ 'rewards' ] } } ]);
    }

    onDelete() {
        this.rewardService.deleteRewardById(this.reward.id).subscribe(() => {
            this.router.navigate([ '/session', { outlets: { view: [ 'rewards' ] } } ]);
        });
    }
}
