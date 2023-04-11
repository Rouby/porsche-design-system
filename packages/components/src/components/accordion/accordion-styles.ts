import type { BreakpointCustomizable, Theme } from '../../types';
import type { AccordionSize } from './accordion-utils';
import { buildResponsiveStyles, getCss, mergeDeep } from '../../utils';
import {
  getTransition,
  transitionDuration,
  getThemedColors,
  addImportantToEachRule,
  hostHiddenStyles,
  hoverMediaQuery,
} from '../../styles';
import {
  fontWeight,
  fontSizeText,
  spacingStaticSmall,
  textSmallStyle,
  fontLineHeight,
  borderRadiusSmall,
  borderWidthBase,
} from '@porsche-design-system/utilities-v2';

export const getComponentCss = (
  size: BreakpointCustomizable<AccordionSize>,
  compact: boolean,
  open: boolean,
  theme: Theme
): string => {
  const { primaryColor, hoverColor, focusColor, contrastLowColor } = getThemedColors(theme);

  return getCss({
    '@global': {
      ':host': addImportantToEachRule({
        display: 'block',
        ...hostHiddenStyles,
        ...(!compact && {
          borderBottom: `1px solid ${contrastLowColor}`,
        }),
      }),
      button: {
        display: 'flex',
        position: 'relative',
        justifyContent: 'space-between',
        margin: '2px 0',
        width: '100%',
        textDecoration: 'none',
        border: 0,
        outline: 0,
        gap: '24px',
        background: 'transparent',
        cursor: 'pointer',
        textAlign: 'left',
        color: primaryColor,
        ...textSmallStyle,
        fontWeight: fontWeight.semiBold,
        ...buildResponsiveStyles(size, (s: AccordionSize) => ({
          fontSize: fontSizeText[s],
          padding: compact ? '4px 0' : `${s === 'medium' ? '20px' : '12px'} 0`,
        })),
        // mergeDeep needed because of hoverMediaQuery in certain modes not wrapping keys and therefore overriding "&::before" key
        ...mergeDeep(
          {
            '&::before': {
              content: '""',
              position: 'absolute',
              borderRadius: borderRadiusSmall,
              left: '-4px',
              right: '-4px',
              ...(compact
                ? {
                    top: '2px',
                    bottom: '2px',
                  }
                : {
                    top: '6px',
                    bottom: '6px',
                  }),
            },
          },
          hoverMediaQuery({
            '&::before': {
              transition: getTransition('background-color'),
            },
            '&:hover::before': {
              background: hoverColor,
            },
          })
        ),
        '&:focus::before': {
          border: `${borderWidthBase} solid ${focusColor}`,
        },
        '&:not(:focus-visible)::before': {
          border: 0,
        },
      },
    },
    heading: {
      margin: 0,
      padding: 0,
    },
    icon: {
      width: fontLineHeight,
      height: fontLineHeight,
      transform: open ? 'rotate3d(0)' : 'rotate3d(0,0,1,90deg)',
      transition: getTransition('transform'),
    },
    collapsible: {
      color: primaryColor, // enables color inheritance for slotted content
      overflow: 'hidden',
      ...(open
        ? {
            height: 'auto',
            paddingBottom: compact ? spacingStaticSmall : '24px',
            visibility: 'visible',
            transition: getTransition('height') + ',' + getTransition('padding-bottom'),
            animation: `$open 0s ${transitionDuration} forwards`, // delay overflow change
          }
        : {
            height: 0,
            visibility: 'hidden',
            transition: getTransition('height') + `,visibility 0s linear ${transitionDuration}`,
          }),
    },
    // TODO: this doesn't get shortened and results in `keyframes-open` for some unknown reason
    '@keyframes open': {
      to: {
        overflow: 'visible',
      },
    },
  });
};
