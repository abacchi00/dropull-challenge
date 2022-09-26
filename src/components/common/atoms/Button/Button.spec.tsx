import { theme } from '@/styles';
import { ThemeProvider } from '@emotion/react';
import { act, fireEvent, render } from '@testing-library/react';

import Button from './Button.component';

describe('The common/atoms component Button', () => {
  const promise = Promise.resolve();

  const mockClick = jest.fn(() => promise);

  const test = render(
    <ThemeProvider theme={theme}>
      <Button onClick={mockClick}>TestBtn</Button>
    </ThemeProvider>
  );

  it('should perform the passed onClick funtion when clicked', async () => {
    fireEvent.click(test.getByText('TestBtn'));

    expect(mockClick.mock.calls.length).toBe(1);

    await act(async () => {
      await promise; // Info: need this beacuause of the loading button state (???)
    })
  })
})
