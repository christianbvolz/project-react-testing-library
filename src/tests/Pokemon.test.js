import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithRouter from './utilities/renderWithRouter';
import Pokemon from '../components/Pokemon';
import pokemons from '../data';

const snorlax = pokemons[7];

describe('. Teste o componente <Pokemon.js />', () => {
  it('Teste se é renderizado um card com as informações de determinado pokémon.', () => {
    renderWithRouter(<Pokemon
      pokemon={ snorlax }
      isFavorite
    />);
    const name = screen.getByTestId('pokemon-name');
    const type = screen.getByTestId('pokemon-type');
    const weight = screen.getByTestId('pokemon-weight');
    const img = screen.getByAltText('Snorlax sprite');
    expect(name.innerHTML).toEqual('Snorlax');
    expect(type.innerHTML).toEqual('Normal');
    expect(weight.innerHTML).toEqual('Average weight: 460.0 kg');
    expect(img.src).toEqual('https://cdn2.bulbagarden.net/upload/4/40/Spr_5b_143.png');
  });

  it('Teste se o card do Pokémon indicado na Pokédex contém um link de navegação'
  + ' para exibir detalhes deste Pokémon. O link deve possuir a URL '
  + '/pokemons/<id>, onde <id> é o id do Pokémon exibido;', () => {
    renderWithRouter(<Pokemon
      pokemon={ snorlax }
      isFavorite
    />);
    const detailsLink = screen.getByRole('link', { name: 'More details' });
    expect(detailsLink).toBeInTheDocument();
    expect(detailsLink.href).toEqual('http://localhost/pokemons/143');
  });

  it('Teste se ao clicar no link de navegação do Pokémon, é feito o '
  + 'redirecionamento da aplicação para a página de detalhes de Pokémon.', () => {
    const { history } = renderWithRouter(<Pokemon
      pokemon={ snorlax }
      isFavorite
    />);
    const detailsLink = screen.getByRole('link', { name: 'More details' });
    userEvent.click(detailsLink);
    expect(history.location.pathname).toEqual('/pokemons/143');
  });

  it('Teste se existe um ícone de estrela nos Pokémons favoritados.', () => {
    renderWithRouter(<Pokemon
      pokemon={ snorlax }
      isFavorite
    />);
    const img = screen.getByAltText('Snorlax is marked as favorite');
    expect(img).toBeInTheDocument();
    expect(img.src).toEqual('http://localhost/star-icon.svg');
  });
});
