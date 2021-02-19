import React from 'react';
import { storiesOf } from '@storybook/react';
import './styles.css';
import { useSmartReducer } from 'fh-hooks';

const mockState = {
	firstName: 'Jane',
	lastName: 'Doe',
};

const PrettyPrintJson = ({ data }) => {
	return (
		<div>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	);
};

storiesOf('useSmartReducer', module)
	.add('No Reducer', () => {
		const defaultState = { ...mockState };
		const [state, setState] = useSmartReducer(defaultState);
		return (
			<div className='demo'>
				<button onClick={() => setState('firstName', 'John')}>
					set firstName to John
				</button>

				<PrettyPrintJson data={state} />
			</div>
		);
	})
	.add('Smart Reducer', () => {
		const defaultState = { ...mockState };

		function reducer(state, action) {
			switch (action.type) {
				case 'name':
					return {
						...state,
						firstName: action.value.firstName,
						lastName: action.value.lastName,
					};
				default:
					return null;
			}
		}

		const [state, setState] = useSmartReducer(defaultState, reducer);
		return (
			<div className='demo'>
				<div className='controls'>
					<button
						onClick={() =>
							setState('name', { firstName: 'James', lastName: 'Bond' })
						}
					>
						set name to James Bond
					</button>
					<button onClick={() => setState('firstName', 'John')}>
						set firstName to John
					</button>
					<button onClick={() => setState('lastName', 'Wayne')}>
						set lastName to Wayne
					</button>
				</div>
				<PrettyPrintJson data={state} />
			</div>
		);
	})
	.add('Own Reducer with error', () => {
		const defaultState = { ...mockState };

		function reducer(state, action) {
			switch (action.type) {
				case 'name':
					return {
						...state,
						firstName: action.value.firstName,
						lastName: action.value.lastName,
					};
				default:
					return state;
			}
		}

		const [state, setState] = useSmartReducer(defaultState, reducer);

		return (
			<div className='demo'>
				<div className='controls'>
					<button
						onClick={() =>
							setState('name', { firstName: 'James', lastName: 'Bond' })
						}
					>
						set name to James Bond
					</button>
					<button
						style={{ color: 'red' }}
						onClick={() => setState('firstName', 'John')}
					>
						set firstName to John
					</button>
				</div>
				<PrettyPrintJson data={state} />
			</div>
		);
	})
	.add('Own Reducer fixed', () => {
		const defaultState = { ...mockState };

		function reducer(state, action) {
			switch (action.type) {
				case 'firstName':
					return {
						...state,
						firstName: action.value,
					};
				case 'name':
					return {
						...state,
						firstName: action.value.firstName,
						lastName: action.value.lastName,
					};
				default:
					return state;
			}
		}

		const [state, setState] = useSmartReducer(defaultState, reducer);

		return (
			<div className='demo'>
				<div className='controls'>
					<button
						onClick={() => {
							setState('name', { firstName: 'James', lastName: 'Bond' });
						}}
					>
						set name to James Bond
					</button>
					<button onClick={() => setState('firstName', 'John')}>
						set firstName to John
					</button>
				</div>
				<PrettyPrintJson data={state} />
			</div>
		);
	});
