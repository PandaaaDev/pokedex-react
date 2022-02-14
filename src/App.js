import react from 'react';
import { PokemonList } from './components/pokemon/PokemonList';
import { NavBar } from './components/UI/NavBar';
function App() {
	return (
		<div className='App'>
			<NavBar />
			<PokemonList />
		</div>
	);
}

export default App;
