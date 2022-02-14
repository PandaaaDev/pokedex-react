import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PokemonCard.scss';
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
	const pokemonTypeAddClass = `pokemon-card__type ${pokemonType}`;
	const pokemonIdAddClass = `pokemon-card__id ${pokemonType}`
	const pokemonAltMessage = `Image of ${name}`
	if (pokemonLoading)
		return (
			<li className='pokemon-card pokemon-card__loading'>
				Pokemon is loading. Please wait...
			</li>
		);
	return (
		<li className='pokemon-card'>
			<div className={pokemonIdAddClass}>#{pokemonId}</div>
			<h2 className='pokemon-card__name'>{name.toUpperCase()}</h2>
			<img className='pokemon-card__img' src={pokemonImg} alt={pokemonAltMessage}></img>
			<div className={pokemonTypeAddClass}>Type: {pokemonType}</div>
		</li>
	);
};
