import { Action } from '@ngrx/store';

export const COUNTER_READ = '[Counter] Read';
export const COUNTER_READ_SUCCESS = '[Counter] Read success';
export const COUNTER_READ_ERROR = '[Counter] Read error';

export const COUNTER_INCREMENT = '[Counter] Increment';
export const COUNTER_DECREMENT = '[Counter] Decrement';
export const COUNTER_RESET = '[Counter] Reset';
export const COUNTER_MULTIPLY = '[Counter] Multiply';

export class CounterIncrement implements Action {
	readonly type = COUNTER_INCREMENT;
}

export class CounterDecrement implements Action {
	readonly type = COUNTER_DECREMENT;
}

export class CounterReset implements Action {
	readonly type = COUNTER_RESET;
}

export class CounterMultiply implements Action {
	readonly type = COUNTER_MULTIPLY;

	constructor(public payload: any) {}
}

export class CounterRead implements Action {
	readonly type = COUNTER_READ;
}

export class CounterReadSuccess implements Action {
	readonly type = COUNTER_READ_SUCCESS;

	constructor(public payload: number) {}
}

export class CounterReadError implements Action {
	readonly type = COUNTER_READ_ERROR;

	constructor(public payload: number) {}
}

// export type CounterActions = CounterIncrement | CounterDecrement | CounterReset | CounterMultiply;


export type CounterActions = CounterIncrement | CounterDecrement | CounterReset | CounterMultiply | CounterRead | CounterReadSuccess | CounterReadError;
