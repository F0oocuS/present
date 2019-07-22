import { createSelector } from '@ngrx/store';

const getCounter = state =>  state.counter;

export const selectCounter = createSelector(
	getCounter,
	counter => counter.count
);
