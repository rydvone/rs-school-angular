import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  CARD_CREATE_VALIDATION_TEXT,
  MAX_LENGTH_DESCRIPTION_CARD_CREATE,
  MAX_LENGTH_TITLE_CARD_CREATE,
  MIN_LENGTH_TITLE_CARD_CREATE,
} from '../../constants/card-create.constant';
import { CustomCard } from '../../models/custom-card.model';
import * as CustomCardAction from '../../../store/actions/custom-cards.action';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.scss'],
})
export class CardCreateComponent implements OnInit {
  constructor(private store: Store) {}

  public formCard!: FormGroup;

  private newCustomCard: CustomCard = {
    title: '',
    description: '',
    linkImage: '',
    linkVideo: '',
    creationDate: '',
    id: 0,
  };

  protected message = CARD_CREATE_VALIDATION_TEXT;

  ngOnInit(): void {
    const urlRegex = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

    this.formCard = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(MIN_LENGTH_TITLE_CARD_CREATE),
        Validators.maxLength(MAX_LENGTH_TITLE_CARD_CREATE),
      ]),
      description: new FormControl('', [Validators.maxLength(MAX_LENGTH_DESCRIPTION_CARD_CREATE)]),
      linkImage: new FormControl('', [Validators.required, Validators.pattern(urlRegex)]),
      linkVideo: new FormControl('', [Validators.required, Validators.pattern(urlRegex)]),
    });
  }

  onSubmit() {
    if (this.formCard.valid) {
      const newCard: CustomCard = {
        title: this.formCard.value.title,
        description: this.formCard.value.description,
        linkImage: this.formCard.value.linkImage,
        linkVideo: this.formCard.value.linkVideo,
        creationDate: '',
        id: 0,
      };
      newCard.creationDate = new Date().toString();
      newCard.id = new Date(this.newCustomCard.creationDate).getTime();

      this.store.dispatch(CustomCardAction.addCustomCards({ newCard }));

      this.formCard.reset();
    }
  }

  hasFieldError(field: string, errorType: string): boolean {
    return this.formCard.get(field)?.errors && this.formCard.get(field)?.errors?.[errorType];
  }
}
