import React from 'react';
import '../styles/components/banner.scss';

export default function Banner({ text, className }) {

	return (
		<div className={"banner ${className}"}>
			<h2>{text}</h2>
		</div>
	)
}
