/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from 'react'
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Component1Icon } from '@radix-ui/react-icons';

type JsonForm = {
    id: string
    label: string
    optional: any
}

function EditorForm({ jsonBody }: any) {
    const [labelInnerText, setLabelInnerText] = React.useState<string>("");

    React.useEffect(() => {
        if (jsonBody) {
            setLabelInnerText(jsonBody.label);
        }
        console.log(jsonBody.styles);
    }, [jsonBody]);

    return (
        <div className='w-full h-full flex flex-col pt-8 pb-4'>
            <div className='pb-6 w-full flex flex-col gap-y-2'>
                <div className='flex items-center gap-2'>
                    <Component1Icon className='size-4 text-slate-600' />
                    <h4 className='text-base text-slate-600 font-semibold'>#{jsonBody.id}</h4>
                </div>
                <p className='text-[13px] text-slate-600 mb-1'>
                    Editing information about this component are given below
                </p>
            </div>
            <form>
                <div className='py-3 flex flex-col space-y-2'>
                    <Label htmlFor="label">Label</Label>
                    <Input
                        id={jsonBody.label}
                        name='label'
                        placeholder="Label"
                        value={labelInnerText || ""}
                        onChange={(e) => setLabelInnerText(e.target.value)} />
                </div>
                <div className='mt-6 flex w-full gap-2'>
                    <Button>Save</Button>
                    <Button type='button' variant={"destructive"}>Cancel</Button>
                </div>
            </form>
        </div>
    )
}

export default EditorForm