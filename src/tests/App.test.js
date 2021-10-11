import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

    it('Teste se a aplicação é redirecionada para a página'
    + 'inicial, na URL / ao clicar no link Home da barra de navegação.', () => {
      const { history } = renderWithRouter(<App />);
      history.push('/xablau');
      const homeLink = screen.getByRole('link', { name: 'Home' });
      userEvent.click(homeLink);
      expect(history.location.pathname).toEqual('/');
    });

    it('Teste se a aplicação é redirecionada para a página de'
    + 'About, na URL /about, ao clicar no link About da barra de navegação.', () => {
      const { history } = renderWithRouter(<App />);
      history.push('/xablau');
      const aboutLink = screen.getByRole('link', { name: 'About' });
      userEvent.click(aboutLink);
      expect(history.location.pathname).toEqual('/about');
    });

    it('Teste se a aplicação é redirecionada para a página de Pokémons Favoritados,na URL'
    + ' /favorites, ao clicar no link Favorite Pokémons da barra de navegação.', () => {
      const { history } = renderWithRouter(<App />);
      history.push('/xablau');
      const favoriteLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
      userEvent.click(favoriteLink);
      expect(history.location.pathname).toEqual('/favorites');
    });

    it('Teste se a aplicação é redirecionada para a página '
    + 'Not Found ao entrar em uma URL desconhecida.', () => {
      const { history } = renderWithRouter(<App />);
      history.push('/xablau');
      const notFoundText = screen.getByRole('heading', {
        name: /page requested not found/i,
      });
      expect(notFoundText).toBeInTheDocument();
    });
  });
