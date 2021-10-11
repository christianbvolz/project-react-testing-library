import React from 'react';
import { screen } from '@testing-library/react';

import renderWithRouter from './utilities/renderWithRouter';
import App from '../App';

describe('Teste se o topo da aplicação contém um conjunto fixo de links de navegação.',
  () => {
    it('O primeiro link deve possuir o texto Home.', () => {
      renderWithRouter(<App />);
      const homeLink = screen.getByRole('link', { name: 'Home' });
      expect(homeLink).toBeInTheDocument();
    });
    it('O segundo link deve possuir o texto About.', () => {
      renderWithRouter(<App />);
      const aboutLink = screen.getByRole('link', { name: 'About' });
      expect(aboutLink).toBeInTheDocument();
    });
    it('O terceiro link deve possuir o texto Favorite Pokémons.', () => {
      renderWithRouter(<App />);
      const favoriteLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
      expect(favoriteLink).toBeInTheDocument();
    });
  });
