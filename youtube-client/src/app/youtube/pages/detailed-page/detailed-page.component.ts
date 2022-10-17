import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Card } from '../../models/card.model';
import { CardService } from '../../services/card.service';
import { CardsStateService } from '../../services/cards-state.service';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent implements OnInit {
  constructor(
    private router: Router,
    private idRoute: ActivatedRoute,
    private cardsStateService: CardsStateService,
    private cardService: CardService,
  ) {}

  public card: Card = this.cardsStateService.state[5];

  public goToMainPage() {
    this.router.navigate(['/main']);
  }

  ngOnInit(): void {
    this.idRoute.params.subscribe((params: Params) => {
      this.card = this.cardService.getCardById(params['id']) as Card;
    });
  }
}
