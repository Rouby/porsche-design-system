import { executeVisualRegressionTest } from '../helpers/playwright-helper';
import { test } from '@playwright/test';

test.describe('should have no visual regression', async () => {
  await executeVisualRegressionTest('carousel', {
    scenario: async (page) => {
      test.describe.configure({
        retries: 3,
      });
    },
  });
});
