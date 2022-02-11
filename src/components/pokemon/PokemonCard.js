import React, { useState, useEffect } from 'react';
import axios from 'axios';
export const PokemonCard = ({ name }) => {
	const [pokemonId, setPokemonId] = useState('');
	const [pokemonType, setPokemonType] = useState('');
	const [pokemonImg, setPokemonImg] = useState('');
	const [pokemonLoading, setPokemonLoading] = useState(true);
	useEffect(() => {
		setPokemonLoading(true);
		let cancel;
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${name}`, {
				cancelToken: new axios.CancelToken((c) => (cancel = c)),
			})
			.then((res) => {
				setPokemonId(res.data.id);
				setPokemonType(res.data.types[0].type.name);
				setPokemonImg(res.data.sprites.other.dream_world.front_default);
				setPokemonLoading(false);
			});
		return () => {
			cancel();
		};
	}, [name]);
	if (pokemonLoading) return <div>Pokemon is loading. Please wait...</div>;
	return (
		<li className='pokemon-card'>
			<h2 className='pokemon-card__name'>{name}</h2>
			<div className='pokemon-card__type'>
				<div>Type:</div>
				<div>{pokemonType}</div>
			</div>
			<img className='pokemon-card__img' src={pokemonImg}></img>
			<div className='pokemon-card__id'>#{pokemonId}</div>
		</li>
	);
};
