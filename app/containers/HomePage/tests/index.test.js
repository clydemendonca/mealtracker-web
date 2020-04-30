import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import HomePage from '../index';

describe('<HomePage />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
        <HomePage />,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
