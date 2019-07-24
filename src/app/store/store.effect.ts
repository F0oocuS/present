// import { Injectable } from '@angular/core';
// import { Actions, Effect, ofType } from '@ngrx/effects';
//
// import * as CounterActions from './store.action';
//
// import { AppService } from '../services/app.service';
// import { catchError, map, switchMap } from 'rxjs/operators';
// import { of } from 'rxjs';
//
// @Injectable()
// export class StoreEffect {
// 	constructor(private actions$: Actions, private appService: AppService) {}
//
// 	@Effect()
// 	public getNumber = this.actions$.pipe(
// 		ofType(CounterActions.COUNTER_READ),
// 		switchMap(() => this.appService.getNumber().pipe(
// 			map(data => new CounterActions.CounterReadSuccess(data.count)),
// 			catchError(error => of(new CounterActions.CounterReadError(error)))
// 		))
// 	);
// }
