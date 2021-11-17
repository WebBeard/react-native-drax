import { AnimatedTransform, AnimatedViewStyleProp, AnimatedViewStyleWithoutLayout } from './types';
export declare const flattenStylesWithoutLayout: (styles: AnimatedViewStyleProp[]) => AnimatedViewStyleWithoutLayout;
export declare const mergeStyleTransform: (style: AnimatedViewStyleWithoutLayout, transform: AnimatedTransform) => AnimatedViewStyleWithoutLayout;
