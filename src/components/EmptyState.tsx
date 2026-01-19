"use client";

import React from 'react'
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from './ui/empty';
import { Component1Icon } from '@radix-ui/react-icons';

function EmptyState() {
    return (
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
    )
}

export default EmptyState