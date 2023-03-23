import { getThemedColors } from './colors';
import * as a11yUtils from '../utils/a11y/a11y';

describe('getThemedColors()', () => {
  it.each<Parameters<typeof getThemedColors>>([['light'], ['dark']])(
    'should return correct colors for theme: %s',
    (theme) => {
      expect(getThemedColors(theme)).toMatchSnapshot();
    }
  );
  it.each<Parameters<typeof getThemedColors>>([['light'], ['dark']])(
    'should return correct partial high contrast mode scheme colors for theme: %s',
    (theme) => {
      Object.defineProperty(a11yUtils, 'isHighContrastMode', { value: true });
      expect(getThemedColors(theme)).toMatchSnapshot();
    }
  );
});
