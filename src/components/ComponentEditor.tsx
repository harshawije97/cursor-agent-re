"use client";

import React from 'react'
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from './ui/empty';
import { Component1Icon } from '@radix-ui/react-icons';
import useSelectElement from '@/hooks/zustand/use-select-element';

function ComponentEditor() {
    const [element, setElement] = React.useState<Element | null>(null);
    const { selectedElement } = useSelectElement();

    const sortSelectedElement = React.useCallback(() => {
        
    }, [])

    React.useEffect(() => {
        if (selectedElement) {
            const { element } = selectedElement;
            setElement(element);
        }
    }, [selectedElement]);



    return (
        <div className='w-full h-svh bg-slate-100 z-9999'>
            <Empty>
                <EmptyHeader>
                    <EmptyMedia variant="icon">
                        <Component1Icon />
                    </EmptyMedia>
                    <EmptyTitle>You have not selected any component</EmptyTitle>
                    <EmptyDescription>
                        You haven&apos;t created any projects yet. Get started by creating
                        your first project.
                    </EmptyDescription>
                </EmptyHeader>
            </Empty>
        </div>
    )
}

export default ComponentEditor