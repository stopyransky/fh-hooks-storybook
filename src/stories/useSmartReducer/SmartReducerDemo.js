import { useSmartReducer } from 'fh-hooks';

export default function SmartReducerDemo({ initialState, customReducer }) {
	const [state, setState] = useSmartReducer(initialState, customReducer);
	return (
		<div className='demo'>
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
			<h3>State:</h3>
			<div>{JSON.stringify(state)}</div>
		</div>
	);
}
