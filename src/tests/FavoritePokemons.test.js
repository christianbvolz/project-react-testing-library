import React from 'react';
import { screen } from '@testing-library/react';

import renderWithRouter from './utilities/renderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';

describe('Teste o componente <FavoritePokemons.js />', () => {
  it('Teste se é exibido na tela a mensagem No favorite pokemon '
  + 'found, se a pessoa não tiver pokémons favoritos.', () => {
    const { history } = renderWithRouter(<FavoritePokemons />);
    history.push('/favorites');
    const notFoundPokemon = screen.getByText(/No favorite pokemon found/i);
    expect(notFoundPokemon).toBeInTheDocument();
  });

  it('Teste se é exibido todos os cards de pokémons favoritados.', () => {
    const mew = {
      id: 151,
      name: 'Mew',
      type: 'Psychic',
      averageWeight: {
        value: '4.0',
        measurementUnit: 'kg',
      },
      image: 'https://cdn2.bulbagarden.net/upload/4/43/Spr_5b_151.png',
      moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Mew_(Pok%C3%A9mon)',
      foundAt: [
        {
          location: 'Faraway Island',
          map: 'https://cdn2.bulbagarden.net/upload/e/e4/Hoenn_Faraway_Island_Map.png',
        },
      ],
      summary: 'Apparently, it appears only to those people who are '
      + 'pure of heart and have a strong desire to see it.',
    };
    const pikachu = {
      id: 25,
      name: 'Pikachu',
      type: 'Electric',
      averageWeight: {
        value: '6.0',
        measurementUnit: 'kg',
      },
      image: 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
      moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)',
      foundAt: [
        {
          location: 'Kanto Viridian Forest',
          map: 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png',
        },
        {
          location: 'Kanto Power Plant',
          map: 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png',
        },
      ],
      summary: 'This intelligent Pokémon roasts hard berries with '
      + 'electricity to make them tender enough to eat.',
    };
    const { history } = renderWithRouter(<FavoritePokemons
      pokemons={
        [pikachu, mew]
      }
    />);
    history.push('/favorites');
    const mewText = screen.getByText('Mew');
    const pikachuText = screen.getByText('Pikachu');
    expect(mewText).toBeInTheDocument();
    expect(pikachuText).toBeInTheDocument();
  });
});
