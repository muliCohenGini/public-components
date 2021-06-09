import React from 'react';
import { header } from '../../Types';

export interface HeadingProps {
    element: header;
    title: string;
    className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Heading = ({element='h1', title, className}: HeadingProps) => {
    return React.createElement(element, {
        className
    }, title);
}
