import { render, screen } from '@testing-library/react'
import Header from './header'
import { BrowserRouter } from 'react-router-dom'
describe('Header', () => {
  it('renders logo with alt test', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )
    expect(screen.getByTestId('Header.logo').getAttribute('alt')).toBeTruthy()
  })
})
