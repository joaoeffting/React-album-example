import renderer from 'react-test-renderer';
import React from 'react';
import Photos from './Photos';

test('Photos renders correctly', () => {
  const tree = renderer.create(
    <Photos id="1" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});