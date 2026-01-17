/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import useComponentStore from '@/hooks/zustand/use-component';
import { headerComponent } from '@/utils/header/header';
import React from 'react'

function ComponentManager({children}:{children: React.ReactNode}) {
    const { saveToLocalStorage, loadFromLocalStorage } = useComponentStore() as any;

    React.useEffect(() => {
        // Load from localStorage on mount
        loadFromLocalStorage();
        saveToLocalStorage(headerComponent);
    }, []);

    return (
        <>
            {children}
        </>
    )
}

export default ComponentManager