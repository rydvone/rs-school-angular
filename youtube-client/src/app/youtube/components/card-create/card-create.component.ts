import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  CARD_CREATE_VALIDATION_TEXT,
  MAX_LENGTH_DESCRIPTION_CARD_CREATE,
  MAX_LENGTH_TITLE_CARD_CREATE,
  MIN_LENGTH_TITLE_CARD_CREATE,
} from '../../constants/card-create.constant';
import { CardsStateService } from '../../services/cards-state.service';
import { correctDateValidator } from '../../validators/correct-date.validator';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.scss'],
})
export class CardCreateComponent implements OnInit {
  constructor(private cardsStateService: CardsStateService) {}

  public formCard!: FormGroup;

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
      dateCreation: new FormControl('', [Validators.required, correctDateValidator]),
    });
  }

  onSubmit() {
    if (this.formCard.valid) {
      // check submitting Form
      // eslint-disable-next-line no-console
      console.log(this.formCard.value);
      this.formCard.reset();
    }
  }

  hasFieldError(field: string, errorType: string): boolean {
    return this.formCard.get(field)?.errors && this.formCard.get(field)?.errors?.[errorType];
  }
}
