import { getAnimationIn, getAnimationOut, getKeyframesMobile, KeyframesDirection } from './banner-styles-shared';

describe('getAnimationIn()', () => {
  it.each<string[]>([
    ['mobileIn', '--p-duration'],
    ['mobileIn', null],
  ])('should return correct JssStyle for keyframesName: %s and durationVar: %s', (keyframesName, durationVar) => {
    expect(getAnimationIn(keyframesName, durationVar)).toMatchSnapshot();
  });
});

describe('getAnimationOut()', () => {
  it('should return correct JssStyle', () => {
    expect(getAnimationOut('mobileOut')).toMatchSnapshot();
  });
});

describe('getKeyframesMobile()', () => {
  it.each<[KeyframesDirection, string]>([
    ['in', '--p-bottom-var'],
    ['out', '--p-bottom-var'],
  ])('should return correct JssStyle for direction: %s and bottomVar: %s', (direction, bottomVar) => {
    expect(getKeyframesMobile(direction, bottomVar)).toMatchSnapshot();
  });
});
