import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CounterStateInterface } from '../store/store.reducer';
import { CounterDecrement, CounterIncrement, CounterMultiply, /*CounterRead, CounterReadError,*/ CounterReset } from '../store/store.action';
// import { selectCounter } from '../store/store.selector';

@Component({
	selector: 'app-counter',
	templateUrl: './counter.component.html',
	styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
	public value = 1;
	public counter$: Observable<{ count: number }>;
	// public counterValue$: Observable<number>;

	public constructor(private store: Store<CounterStateInterface>) {}

	public ngOnInit(): void {
		this.counter$ = this.store.pipe(select('counter'));

		// this.counterValue$ = this.store.select(selectCounter);

		// For effects
		// this.store.dispatch(new CounterRead());
	}

	public onIncrement(): void {
		this.store.dispatch(new CounterIncrement());
	}

	public onDecrement(): void {
		this.store.dispatch(new CounterDecrement());
	}

	public onReset(): void {
		this.store.dispatch(new CounterReset());
	}

	public onMultiply(): void {
		this.store.dispatch(new CounterMultiply(this.value));
	}
}
