import React from 'react';
import Heading from './Heading';

export default {
    title: 'Heading',
    component: Heading,
};

export const h1 = () => <Heading text="Heading 1" level={1} />;
export const h2 = () => <Heading text="Heading 2" level={2} />;
export const h3 = () => <Heading text="Heading 3" level={3} />;
export const h4 = () => <Heading text="Heading 4" level={4} />;
export const h5 = () => <Heading text="Heading 5" level={5} />;

export const h1AsH2 = () => <Heading text="Heading 1 as Heading 2" level={1} asHeading={2} />;
export const h1AsH3 = () => <Heading text="Heading 1 as Heading 3" level={1} asHeading={3} />;
export const h1AsH4 = () => <Heading text="Heading 1 as Heading 4" level={1} asHeading={4} />;
export const h1AsH5 = () => <Heading text="Heading 1 as Heading 5" level={1} asHeading={5} />;
export const h2AsH1 = () => <Heading text="Heading 2 as Heading 1" level={5} asHeading={1} />;
