import { extendedViewports, getVisualRegressionTester, vrtTest } from '@porsche-design-system/shared/testing';

const id = 'styles-media-query';
it.each(extendedViewports)('should have no visual regression for viewport %s', async (viewport) => {
  expect(await vrtTest(getVisualRegressionTester(viewport), id, `/${id}`)).toBeFalsy();
});
