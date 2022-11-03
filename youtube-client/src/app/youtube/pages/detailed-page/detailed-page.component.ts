import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectYoutubeCardById } from 'src/app/store/selectors/youtube-cards.selector';
import { Card } from '../../models/card.model';
import { CardsStateService } from '../../services/cards-state.service';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent implements OnInit {
  protected youtubeCard$!: Observable<Card | undefined>;

  constructor(
    private router: Router,
    private idRoute: ActivatedRoute,
    private cardsState: CardsStateService,
    private store: Store,
  ) {
    const idCard = this.idRoute.snapshot.params['id'];
    console.log('idCards', idCard);
    this.youtubeCard$ = this.store.select(selectYoutubeCardById(idCard));
  }

  protected card!: Card;

  private cards: Card[] = [];

  ngOnInit(): void {


    // this.cardsState.getCards().subscribe((items) => {
    //   this.cards = items.slice();
    // });

    // this.idRoute.params.subscribe((params: Params) => {
    //   this.card = this.getCardById(params['id']) as Card;
    // });
  }

  // private getCardById(idCard: string) {
  //   const card = this.cards.find(({ id }) => id === idCard);
  //   if (!card) {
  //     this.goToNotFoundPage();
  //   }
  //   return card;
  // }

  private goToNotFoundPage() {
    this.router.navigate(['/404']);
  }
}
