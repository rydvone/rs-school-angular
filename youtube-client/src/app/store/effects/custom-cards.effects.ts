import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions } from '@ngrx/effects';

@Injectable()
export class CustomCardsEffects {
  constructor(private readonly actions$: Actions, private readonly router: Router) {}

  // loadVideos$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(loadCoursesAction),
  //     switchMap(({ searchString }: { searchString: string }) => this.cardService.getResponse(searchString)),
  //     map((videos: SearchItem[]) => successfulLoadCardsAction({ payload: videos })),
  //   );
  // });
}
