import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/youtube/models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() public card!: Card;

  constructor(private router: Router) {}

  goToDetailedPage() {
    this.router.navigate(['/main/detailed', this.card.id]);
  }
}
