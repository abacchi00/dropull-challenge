import { act, fireEvent, render } from '@testing-library/react';

import { EmotionThemeMock } from '@/test_utils';

import Button from './Button.component';

describe('The common/atoms component Button', () => {
  const promise = Promise.resolve();

  const onClickCallback = jest.fn(() => promise);

  const test = render(
    <EmotionThemeMock>
      <Button onClick={onClickCallback}>TestBtn</Button>
    </EmotionThemeMock>
  );

  it('should perform the passed onClick funtion when clicked', async () => {
    fireEvent.click(test.getByText('TestBtn'));

    expect(onClickCallback.mock.calls.length).toBe(1);

    await act(async () => {
      await promise; // Info: need this beacuause of the loading button state (???)
    })
  })
})
