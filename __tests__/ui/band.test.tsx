/* eslint-disable prettier/prettier */
import { render, screen } from '@testing-library/react';

import BandComponent from '@/pages/bands/[bandId]';

import { readFakeData } from '../__mocks__/fakeData';

test('should band component displays correct band information', async () => {
  const { fakeBands } = await readFakeData();
  render(<BandComponent error={null} band={fakeBands[0]} />);

  const heading = screen.getByRole('heading', {
    name: /the wandering bunnies/i,
  });
  expect(heading).toBeInTheDocument();

  // more tests here...
});
