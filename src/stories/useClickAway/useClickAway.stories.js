import React from 'react';
import { storiesOf } from '@storybook/react';
import { useClickAway } from 'fh-hooks';
import './styles.css';

function Clicker() {
	const { ref, active, toggle } = useClickAway();

	return (
		<div className='container' ref={ref}>
			<div className='button' onClick={toggle}>
				Click
			</div>
			{active && <div className='content'>content</div>}
		</div>
	);
}
storiesOf('Examples/useClickAway', module).add('Simple use case', Clicker);
