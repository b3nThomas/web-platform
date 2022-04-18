import React, { FC } from 'react';

type HeadingProps = {
    level: 1 | 2 | 3 | 4 | 5;
    text: string;
    asHeading?: 1 | 2 | 3 | 4 | 5;
};

const Heading: FC<HeadingProps> = ({ level, text, asHeading = null }) => {
    const Tag: keyof JSX.IntrinsicElements = `h${level}`;
    const style = `h${asHeading ?? level}`;
    return <Tag>{text}</Tag>;
};

export default Heading;
