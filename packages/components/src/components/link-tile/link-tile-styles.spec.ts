import { getComponentCss, getSlottedCss } from './link-tile-styles';

describe('getComponentCss()', () => {
  it.each<Parameters<typeof getComponentCss>>([
    ['4:3', 'default', 'semibold', 'bottom', false, true],
    ['1:1', 'inherit', 'regular', 'bottom', false, true],
    ['3:4', 'default', 'semibold', 'top', false, true],
    ['16:9', 'inherit', 'regular', 'top', true, false],
    ['9:16', 'default', 'semibold', 'bottom', false, false],
    [
      { base: '1:1', xs: '4:3', s: '3:4', m: '16:9', l: '9:16', xl: '1:1' },
      { base: 'inherit', xs: 'default', s: 'inherit', m: 'default', l: 'inherit', xl: 'default' },
      { base: 'semibold', xs: 'regular', s: 'semibold', m: 'regular', l: 'semibold', xl: 'regular' },
      'top',
      { base: true, xs: false, s: true, m: false, l: true, xl: false },
      true,
    ],
  ])(
    'should return correct css for aspectRatio: %s, size: %s, weight: %s, align: %s, isCompact: %s and hasGradient: %s',
    (...args) => {
      expect(getComponentCss(...args)).toMatchSnapshot();
    }
  );
});

describe('getSlottedCss()', () => {
  it('should return correct css', () => {
    const host = document.createElement('p-link-tile');
    expect(getSlottedCss(host)).toMatchSnapshot();
  });

  it('should return correct css with prefix', () => {
    const host = document.createElement('prefixed-p-link-tile');
    expect(getSlottedCss(host)).toMatchSnapshot();
  });
});
