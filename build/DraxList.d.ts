import React, { PropsWithChildren } from 'react';
import { DraxListProps } from './types';
export declare const DraxList: <T extends unknown>({ data, style, flatListStyle, itemStyles, renderItemContent, renderItemHoverContent, onItemDragStart, onItemDragPositionChange, onItemDragEnd, onItemReorder, viewPropsExtractor, id: idProp, reorderable: reorderableProp, onScroll: onScrollProp, itemsDraggable, lockItemDragsToMainAxis, onReceiveDragEnter, onReceiveDragExit, onReceiveDragDrop, onReceiveDragOver, ...props }: React.PropsWithChildren<DraxListProps<T>>) => JSX.Element;
