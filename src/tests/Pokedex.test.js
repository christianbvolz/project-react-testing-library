import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './utilities/renderWithRouter';
import Pokedex from '../components/Pokedex';
import pokemons from '../data';

describe('Teste o componente <Pokedex.js />', () => {
  beforeEach(() => {
    renderWithRouter(<Pokedex
      pokemons={ pokemons }
      isPokemonFavoriteById={ {} }
    />);
  });

  it('Teste se página contém um heading h2 com o texto Encountered pokémons.', () => {
    const text = screen.getByRole('heading', { name: 'Encountered pokémons' });
    expect(text).toBeInTheDocument();
  });
  it('Teste se é exibido o próximo Pokémon da lista quando o botão Próximo '
  + 'pokémon é clicado.', () => {
    const nextBtn = screen.getByTestId('next-pokemon');
    expect(nextBtn.innerHTML).toEqual('Próximo pokémon');
  });
  it('Teste se a Pokédex contém um botão para resetar o filtro.', () => {
    const clearBtn = screen.getByText('All');
    userEvent.click(clearBtn);
  });
  it('Teste se a Pokédex tem os botões de filtro.', () => {
    const totalTypes = 7;
    const allTypes = screen.getAllByTestId('pokemon-type-button');
    expect(allTypes).toHaveLength(totalTypes);
    const clearBtn = screen.getByText('All');
    expect(clearBtn).toHaveTextContent('All');
    expect(clearBtn).toBeInTheDocument();
    const elecBtn = screen.getByRole('button', { name: 'Electric' });
    expect(elecBtn.innerHTML).toEqual('Electric');
    expect(elecBtn).toBeInTheDocument();
    const fireBtn = screen.getByRole('button', { name: 'Fire' });
    expect(fireBtn.innerHTML).toEqual('Fire');
    expect(fireBtn).toBeInTheDocument();
    const bugBtn = screen.getByRole('button', { name: 'Bug' });
    expect(bugBtn.innerHTML).toEqual('Bug');
    expect(bugBtn).toBeInTheDocument();
    const poisonBtn = screen.getByRole('button', { name: 'Poison' });
    expect(poisonBtn.innerHTML).toEqual('Poison');
    expect(poisonBtn).toBeInTheDocument();
    const psyBtn = screen.getByRole('button', { name: 'Psychic' });
    expect(psyBtn.innerHTML).toEqual('Psychic');
    expect(psyBtn).toBeInTheDocument();
    const normalBtn = screen.getByRole('button', { name: 'Normal' });
    expect(normalBtn.innerHTML).toEqual('Normal');
    expect(normalBtn).toBeInTheDocument();
    const dragBtn = screen.getByRole('button', { name: 'Dragon' });
    expect(dragBtn.innerHTML).toEqual('Dragon');
    expect(dragBtn).toBeInTheDocument();
    expect(clearBtn).toBeVisible();
  });
});
