/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React from 'react'
import useSelectElement from '@/hooks/zustand/use-select-element';
import getSortedOutputBody, { updateSortedOutputBody } from '@/utils/helper/get-sorted-output';
import useComponentStore from '@/hooks/zustand/use-component';
import EmptyState from './EmptyState';
import EditorForm from './EditorForm';

function ComponentEditor() {
    const [sortedBody, setSortedBody] = React.useState<any>(null);
    const { component } = useComponentStore();
    const { selectedElement } = useSelectElement();

    React.useEffect(() => {

        if (selectedElement) {
            const { element } = selectedElement;
            if (element && component) {
                const { renderedOutput } = component.body;

                // pass rendered output and selected element into the function
                const sortedOutput = getSortedOutputBody(element, renderedOutput);
                const res = updateSortedOutputBody(sortedOutput);

                setSortedBody(res);
            }
        }
    }, [selectedElement]);



    return (
        <div className='w-full h-svh bg-slate-50 z-9999'>
            {sortedBody ? (
                <div className='mx-4'>
                    <EditorForm jsonBody={sortedBody} />
                </div>
            ) : (
                <EmptyState />
            )}
        </div>
    )
}

export default ComponentEditor