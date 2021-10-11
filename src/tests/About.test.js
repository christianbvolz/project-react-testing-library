import React from 'react';
import { screen } from '@testing-library/react';

import renderWithRouter from './utilities/renderWithRouter';
import About from '../components/About';

describe('Teste se a página contém as informações sobre a Pokédex.', () => {
  beforeEach(() => {
    const { history } = renderWithRouter(<About />);
    history.push('/about');
  });

  it('Teste se a página contém um heading h2 com o texto About Pokédex.', () => {
    const aboutText = screen.getByRole('heading', {
      name: /about pokédex/i,
    });

    expect(aboutText).toBeInTheDocument();
  });

  it('Teste se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    const paragraph1 = screen.getByText(/This application simulates a Pokédex/i);
    const paragraph2 = screen.getByText(/One can filter Pokémons by type/i);

    expect(paragraph1).toBeInTheDocument();
    expect(paragraph2).toBeInTheDocument();
  });

  it('Teste se a página contém a seguinte imagem de uma Pokédex: https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png.', () => {
    const image = screen.getByRole('img', {
      src: 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png',
    });
    console.log(image.src);
    expect(image.src).toEqual('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
