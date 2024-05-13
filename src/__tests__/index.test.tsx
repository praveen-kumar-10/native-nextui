import React from 'react';
import { render } from '@testing-library/react-native';

import { Button } from '../../src';

describe('Button', () => {
  it('renders correctly', () => {
    const tree = render(<Button>Text Button</Button>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
