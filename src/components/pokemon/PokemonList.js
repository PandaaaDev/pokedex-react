import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pagination } from './Pagination';
import { PokemonCard } from './PokemonCard';
import './PokemonList.scss';
export const PokemonList = () => {
	const [pokemonName, setPokemonName] = useState('[]');
	const [currentPageUrl, setCurrentPageUrl] = useState(
		'https://pokeapi.co/api/v2/pokemon'
	);
	const [nextPageUrl, setNextPageUrl] = useState('');
	const [previousPageUrl, setpreviousPageUrl] = useState();
	const [loadign, setLoading] = useState(true);
	useEffect(() => {
		setLoading(true);
		let cancel;
		axios
			.get(currentPageUrl, {
				cancelToken: new axios.CancelToken((c) => (cancel = c)),
			})
			.then((res) => {
				setPokemonName(res.data.results.map((p) => p.name));
				setNextPageUrl(res.data.next);
				setpreviousPageUrl(res.data.previous);
				setLoading(false);
			});

		return () => {
			cancel();
		};
	}, [currentPageUrl]);
	function goToNextpage() {
		setCurrentPageUrl(nextPageUrl);
	}
	function goToPreviousPage() {
		setCurrentPageUrl(previousPageUrl);
	}
	if (loadign) return <div>Loading...</div>;
	return (
		<>
			<Pagination
				goToPreviousPage={previousPageUrl ? goToPreviousPage : null}
				goToNextpage={nextPageUrl ? goToNextpage : null}
			/>
			<ul className='pokedex'>
				{pokemonName.map((p) => (
					<PokemonCard name={p} key={p} />
				))}
			</ul>

			<Pagination
				goToPreviousPage={previousPageUrl ? goToPreviousPage : null}
				goToNextpage={nextPageUrl ? goToNextpage : null}
			/>
		</>
	);
};
