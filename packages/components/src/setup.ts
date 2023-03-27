import { validatePartialUsage } from './utils/validation/partials/validatePartialUsage';
import { injectGlobalStyle } from './utils';

export default (): void => {
  if (process.env.NODE_ENV !== 'development') {
    // not available during `yarn start` of components package
    document.porscheDesignSystem[ROLLUP_REPLACE_VERSION].readyResolve(); // provided via load() of components-js package
  }

  injectGlobalStyle();
  validatePartialUsage();
};
