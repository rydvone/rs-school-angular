import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Card } from '../../models/card.model';
import { CardsStateService } from '../../services/cards-state.service';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent implements OnInit {
  constructor(private router: Router, private idRoute: ActivatedRoute, private cardsState: CardsStateService) {}

  protected card!: Card;

  private cards: Card[] = [];

  ngOnInit(): void {
    this.cardsState.getCards().subscribe((items) => {
      this.cards = items.slice();
    });

    this.idRoute.params.subscribe((params: Params) => {
      this.card = this.getCardById(params['id']) as Card;
    });
  }

  private getCardById(idCard: string) {
    const card = this.cards.find(({ id }) => id === idCard);
    if (!card) {
      this.goToNotFoundPage();
    }
    return card;
  }

  private goToNotFoundPage() {
    this.router.navigate(['/404']);
  }
}
