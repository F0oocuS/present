import * as CounterActions from './store.action';

export interface CounterStateInterface {
	count: number;
}

const initialState: CounterStateInterface = {
	count: 0
};

export function counterReducer(state: CounterStateInterface = initialState, action: CounterActions.CounterActions) {
	switch (action.type) {
		case CounterActions.COUNTER_INCREMENT: {
			return {
				...state,
				count: state.count + 1
			};
		}

		case CounterActions.COUNTER_DECREMENT: {
			return {
				...state,
				count: state.count - 1
			};
		}

		case CounterActions.COUNTER_RESET: {
			return {
				...state,
				count: 0
			};
		}

		case CounterActions.COUNTER_MULTIPLY: {
			return {
				...state,
				count: state.count * action.payload
			};
		}

		default: {
			return {
				...state
			};
		}
	}
}
