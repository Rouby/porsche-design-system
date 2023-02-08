import { getInitialStyles } from '../../../src';
import { render } from '@testing-library/react';
import { INTERNAL_TAG_NAMES, TAG_NAMES } from '@porsche-design-system/shared';

const filteredTagNames = TAG_NAMES.filter((x) => !INTERNAL_TAG_NAMES.includes(x));
const tagNames = filteredTagNames.join();
const prefixedTagNames = filteredTagNames.map((x) => `custom-prefix-${x}`).join();

// to skip validation
jest.mock('../../../src/shared');

const normalizeCss = `*{font-family:'Porsche Next','Arial Narrow',Arial,'Heiti SC',SimHei,sans-serif;line-height:calc(6px + 2.125ex);text-size-adjust:none;-webkit-text-size-adjust:none}p{hyphens:auto;font-weight:400;overflow-wrap:break-word}h1,h2,h3,h4,h5,h6{font-weight:400}a{color:inherit;text-decoration:underline}b,strong{font-weight:700}em,i{font-style:normal}a,button,input,select,textarea{border-color:transparent;border-radius:4px}a:focus,button:focus,input:focus,select:focus,textarea:focus{border:2px solid #0A0AFF}a:focus:not(:focus-visible),button:focus:not(:focus-visible),input:focus:not(:focus-visible),select:focus:not(:focus-visible),textarea:focus:not(:focus-visible){border:0}[data-theme=dark] a:focus,button:focus,input:focus,select:focus,textarea:focus{border:2px solid #0A0AFF}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button,input[type=search]::-webkit-search-decoration,input::-webkit-calendar-picker-indicator{appearance:none;-webkit-appearance:none}input[type=search]::-webkit-search-cancel-button,input::-webkit-calendar-picker-indicator{display:none}@media(hover:hover){a{transition:color var(--p-transition-duration,.24s) ease}a:hover{backdrop-filter:blur(32px);background-color:rgba(148,149,152,0.20);-webkit-backdrop-filter:blur(32px)}[data-theme=dark] a:hover{background-color:rgba(126,127,130,0.20)}}`;

describe('format: html', () => {
  it('should return core styles', () => {
    const result = getInitialStyles();
    expect(result).toBe(
      `<style data-pds-initial-styles>${tagNames}{visibility:hidden}.hydrated,.ssr{visibility:inherit}${normalizeCss}</style>`
    );
  });

  it('should add custom prefixes to component names', () => {
    const result = getInitialStyles({ prefix: 'custom-prefix' });
    expect(result).toBe(
      `<style data-pds-initial-styles-custom-prefix>${prefixedTagNames}{visibility:hidden}.hydrated,.ssr{visibility:inherit}${normalizeCss}</style>`
    );
  });
});

describe('format: jsx', () => {
  it('should return core styles', () => {
    const { container } = render(getInitialStyles({ format: 'jsx' }));
    expect(container.innerHTML).toBe(
      `<style data-pds-initial-styles="">${tagNames}{visibility:hidden}.hydrated,.ssr{visibility:inherit}${normalizeCss}</style>`
    );
  });

  it('should add custom prefix to component names', () => {
    const { container } = render(getInitialStyles({ format: 'jsx', prefix: 'custom-prefix' }));
    expect(container.innerHTML).toBe(
      `<style data-pds-initial-styles-custom-prefix="">${prefixedTagNames}{visibility:hidden}.hydrated,.ssr{visibility:inherit}${normalizeCss}</style>`
    );
  });
});

describe('withoutTags: true', () => {
  it('should return core styles without style tag', () => {
    const result = getInitialStyles({ withoutTags: true });
    expect(result).toBe(`${tagNames}{visibility:hidden}.hydrated,.ssr{visibility:inherit}${normalizeCss}`);
  });
});
