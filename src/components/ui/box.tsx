import React from 'react';
import clsx from "clsx";


interface BoxProps {
    inline?: boolean
    block?: boolean
    inlineBlock?: boolean
    flex?: boolean
    flexRow?: boolean
    flexCol?: boolean
    itemsCenter?: boolean
    itemsEnd?: boolean
    itemsStart?: boolean
    itemsStretch?: boolean
    justifyCenter?: boolean
    justifyStart?: boolean
    justifyEnd?: boolean
    justifyAround?: boolean
    justifyBetween?: boolean
    children: React.ReactNode | React.ReactNode[]
    className?: string
}

const Box: React.FC<BoxProps> = (props) => {
    const {
        inline,
        block,
        inlineBlock,
        flex,
        flexRow,
        flexCol,
        itemsCenter,
        itemsEnd,
        itemsStart,
        itemsStretch,
        justifyCenter,
        justifyStart,
        justifyEnd,
        justifyAround,
        justifyBetween,
        className,
        children
    } = props
    return (
        <div className={clsx(
            inline && 'inline',
            block && 'block',
            inlineBlock && 'inline-block',
            flex && 'flex',
            flexRow && 'flex-row',
            flexCol && 'flex-col',
            itemsCenter && 'items-center',
            itemsEnd && 'items-end',
            itemsStart && 'items-start',
            itemsStretch && 'items-stretch',
            justifyCenter && 'justify-center',
            justifyStart && 'justify-start',
            justifyEnd && 'justify-end',
            justifyAround && 'justify-around',
            justifyBetween && 'justify-between',
            className && className
        )}>
            {children}
        </div>
    );
};

export default Box;