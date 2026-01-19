/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React from 'react'
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from './ui/empty';
import { Component1Icon } from '@radix-ui/react-icons';
import useSelectElement from '@/hooks/zustand/use-select-element';
import getSortedOutputBody from '@/utils/helper/get-sorted-output';
import useComponentStore from '@/hooks/zustand/use-component';

function ComponentEditor() {
    const { component } = useComponentStore();
    const { selectedElement } = useSelectElement();

    React.useEffect(() => {

        if (selectedElement) {
            const { element } = selectedElement;
            if (element && component) {
                const { renderedOutput } = component.body;
                
                // pass rendered output and selected element into the function
                getSortedOutputBody(element, renderedOutput);
            }
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