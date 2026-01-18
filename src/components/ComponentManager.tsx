/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import useComponentStore from '@/hooks/zustand/use-component';
import { headerComponent } from '@/utils/header/header';
import React from 'react'
import ComponentEditor from './ComponentEditor';


function ComponentManager({ children }: { children: React.ReactNode }) {
    const { saveToLocalStorage, loadFromLocalStorage } = useComponentStore() as any;

    React.useEffect(() => {
        // Load from localStorage on mount
        loadFromLocalStorage();
        saveToLocalStorage(headerComponent);
    }, []);

    return (
        <div className='w-full h-full grid grid-cols-[auto_360px]'>
            <section className='container z-9999 flex flex-wrap'>
                {children}
            </section>
            <ComponentEditor />
        </div>
    )
}

export default ComponentManager