import renderer from 'react-test-renderer';
import React from 'react';
import Albums from './Albums';

test('Albums renders correctly', () => {
  const tree = renderer.create(
    <Albums />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});