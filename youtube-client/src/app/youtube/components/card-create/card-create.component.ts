import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  CardCreateValidationText,
  MaxLengthDescriptionCardCreate,
  MaxLengthTitleCardCreate,
  MinLengthTitleCardCreate,
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

  protected message = CardCreateValidationText;

  ngOnInit(): void {
    const urlRegex = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

    this.formCard = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(MinLengthTitleCardCreate),
        Validators.maxLength(MaxLengthTitleCardCreate),
      ]),
      description: new FormControl('', [Validators.maxLength(MaxLengthDescriptionCardCreate)]),
      linkImage: new FormControl('', [Validators.required, Validators.pattern(urlRegex)]),
      linkVideo: new FormControl('', [Validators.required, Validators.pattern(urlRegex)]),
      dateCreation: new FormControl('', [Validators.required, correctDateValidator]),
    });
  }

  onSubmit() {
    if (this.formCard.valid) {
      const formData = { ...this.formCard.value };

      // check submitting Form
      // eslint-disable-next-line no-console
      console.log(formData);
    }
  }
}
