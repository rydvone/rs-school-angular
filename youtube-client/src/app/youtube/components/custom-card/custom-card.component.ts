import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CustomCard } from '../../models/custom-card.model';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
})
export class CustomCardComponent {
  @Input() public customCard!: CustomCard;

  constructor(private router: Router) {}

  goToDetailedPage() {
    this.router.navigate(['/main/custom-card-detailed', this.customCard.id]);
  }
}
