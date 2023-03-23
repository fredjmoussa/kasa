import React from 'react';
import '../styles/components/banner.scss';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Banner() {
    const [about, setAbout] = useState(false);

    const location = useLocation();

	useEffect(() => {
		if(location.pathname === '/about'){
			setAbout(true)
		};
		// eslint-disable-next-line
	}, [])

	return (
		<div className={about ? 'bannerabout' : 'banner'}>
			{!about && <p>Chez vous, partout et ailleurs</p>}
		</div>
	)
}
