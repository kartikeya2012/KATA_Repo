import { render, screen } from '@testing-library/react';
import BookList from '../pages/BookList';
import axios from 'axios';
jest.mock('axios');
test('renders book list', async () => {
  axios.get.mockResolvedValue({ data: [{ id:1, title:'A', author:'B', price:10 }] });
  render(<BookList />);
  expect(await screen.findByText(/A/)).toBeInTheDocument();
});