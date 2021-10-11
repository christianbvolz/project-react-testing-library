import React from 'react';
import { render, screen } from '@testing-library/react';

import NotFound from '../components/NotFound';

describe('Teste o componente <NotFound.js />', () => {
  it('Teste se página contém um heading h2 com o texto Page requested not found😭', () => {
    render(<NotFound />);
    const notFoundText = screen.getByRole('heading', {
      name: /Page requested not found/i,
    });
    expect(notFoundText).toBeInTheDocument();
  });
  it('Teste se página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    render(<NotFound />);
    const notFoundImg = screen.getByAltText(/Pikachu crying/i);
    expect(notFoundImg.src).toEqual('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
