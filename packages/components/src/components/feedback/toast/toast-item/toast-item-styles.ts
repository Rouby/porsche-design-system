import type { Theme } from '../../../../types';
import type { ToastState } from '../toast/toast-utils';
import { getCss } from '../../../../utils';
import {
  getCloseIconStyles,
  getNotificationContentStyles,
  getNotificationIconStyles,
  getNotificationRootStyles,
} from '../../inline-notification/inline-notification-styles';
import { getBoxShadow } from '../../banner/banner-styles';

export const getComponentCss = (state: ToastState, theme: Theme): string => {
  return getCss({
    '@global': {
      ':host': {
        ...getNotificationRootStyles(state, theme),
        ...getBoxShadow(),
      },
    },
    icon: getNotificationIconStyles(state),
    content: getNotificationContentStyles(),
    close: getCloseIconStyles(),
  });
};
