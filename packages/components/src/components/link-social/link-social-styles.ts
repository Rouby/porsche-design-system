import type { BreakpointCustomizable, Theme } from '../../types';
import { buildResponsiveStyles, getCss, isThemeDark } from '../../utils';
import {
  addImportantToEachRule,
  addImportantToRule,
  getFocusJssStyle,
  getTransition,
  getThemedColors,
} from '../../styles';
import { textSmallStyle } from '@porsche-design-system/utilities-v2';
import {
  getIconJssStyle,
  getLabelJssStyle,
  getRootJssStyle,
  getSlottedLinkJssStyle,
} from '../../styles/link-button-styles';
import { hoverMediaQuery } from '../../styles/hover-media-query';
import { borderRadiusSmall, borderWidthBase } from '@porsche-design-system/utilities-v2';

const {
  primaryColor: themeLightPrimaryColor,
  hoverColor: themeLightHoverColor,
  focusColor: themeLightFocusColor,
} = getThemedColors('light');
const {
  primaryColor: themeDarkPrimaryColor,
  hoverColor: themeDarkHoverColor,
  focusColor: themeDarkFocusColor,
} = getThemedColors('dark');

const getColors = (
  isDarkTheme: boolean
): { primaryColor: string; hoverColor: string; textColor: string; focusColor: string } => {
  return {
    primaryColor: isDarkTheme ? themeDarkPrimaryColor : themeLightPrimaryColor,
    hoverColor: isDarkTheme ? themeDarkHoverColor : themeLightHoverColor,
    textColor: isDarkTheme ? themeLightPrimaryColor : themeDarkPrimaryColor,
    focusColor: isDarkTheme ? themeDarkFocusColor : themeLightFocusColor,
  };
};

export const getComponentCss = (hideLabel: BreakpointCustomizable<boolean>, hasHref: boolean, theme: Theme): string => {
  const isDarkTheme = isThemeDark(theme);
  const { primaryColor, hoverColor, textColor, focusColor } = getColors(isDarkTheme);

  return getCss({
    '@global': {
      ':host': {
        display: 'inline-flex',
        verticalAlign: 'top',
        outline: addImportantToRule(0),
      },
      ...(!hasHref && {
        '::slotted': addImportantToEachRule({
          '&(a)': {
            display: 'block',
            textDecoration: 'none',
            color: 'inherit',
            lineHeight: 'inherit',
            outline: 'transparent solid 1px',
            outlineOffset: '3px',
            borderRadius: borderRadiusSmall,
            ...buildResponsiveStyles(hideLabel, getSlottedLinkJssStyle),
          },
          // TODO: combine link-social-styles with link-button-styles and tabs-bar-styles
          '&(a::-moz-focus-inner)': {
            border: 0,
          },
          '&(a:focus)': {
            outline: `${borderWidthBase} solid ${focusColor}`,
          },
          ...hoverMediaQuery({
            '&(a:hover:focus)': {
              outlineColor: hoverColor,
            },
          }),
          '&(a:focus:not(:focus-visible))': {
            outlineColor: 'transparent',
          },
        }),
      }),
      span: {
        display: 'block',
        width: '100%',
        color: textColor,
        ...textSmallStyle,
        ...(hasHref && buildResponsiveStyles(hideLabel, getLabelJssStyle)),
      },
    },
    root: {
      display: 'flex',
      position: 'relative',
      width: '100%',
      minWidth: '48px',
      minHeight: '48px',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      outline: 'transparent none',
      appearance: 'none',
      cursor: 'pointer',
      textDecoration: 'none',
      textAlign: 'left',
      alignItems: 'center',
      border: '1px solid transparent',
      borderRadius: borderRadiusSmall,
      backgroundColor: primaryColor,
      color: primaryColor,
      transition: getTransition('background-color') + ',' + getTransition('color'),
      ...hoverMediaQuery({
        '&:hover, &:active': {
          backgroundColor: hoverColor,
          ...(isDarkTheme && {
            '& span, & $icon': {
              color: themeDarkPrimaryColor,
            },
          }),
        },
      }),
      ...(hasHref && {
        ...buildResponsiveStyles(hideLabel, getRootJssStyle),
        ...getFocusJssStyle(),
      }),
    },
    icon: {
      position: 'absolute',
      width: '24px',
      height: '24px',
      color: textColor,
      pointerEvents: 'none',
      ...buildResponsiveStyles(hideLabel, getIconJssStyle),
    },
  });
};
