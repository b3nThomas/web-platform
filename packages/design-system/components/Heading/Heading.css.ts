import { style } from '@vanilla-extract/css';
import { fontSizes } from '../../atoms';

export const getFontSize = (tag: /* Get the object keys in union */ keyof typeof fontSizes) => {};

export const h1 = style({
    fontSize: fontSizes.h1,
});
