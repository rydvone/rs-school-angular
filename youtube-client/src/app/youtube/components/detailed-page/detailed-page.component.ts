import { Component } from '@angular/core';
import response from 'src/assets/response/response.json';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent {
  private responseInner: Card[] = <Card[]>JSON.parse(JSON.stringify(response.items));

  public card: Card = this.responseInner[4];
}
