import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectYoutubeCardById } from 'src/app/store/selectors/youtube-cards.selector';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent {
  protected card!: Card;

  constructor(private router: Router, private idRoute: ActivatedRoute, private store: Store) {
    const idCard = this.idRoute.snapshot.params['id'];
    this.store.select(selectYoutubeCardById(idCard)).subscribe((item) => {
      if (item) {
        this.card = item;
      } else {
        this.goToNotFoundPage();
      }
    });
  }

  private goToNotFoundPage() {
    this.router.navigate(['/404']);
  }
}
