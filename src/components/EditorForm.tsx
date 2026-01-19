/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from 'react'
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';

type JsonForm = {
    id: string
    label: string
    optional: any
}

function EditorForm({ jsonBody }: any) {
    return (
        <div className='w-full h-full flex flex-col pt-8 pb-4'>
            <form>
                <div className='py-3'>
                    <Label htmlFor="label">Label</Label>
                    <Input
                        id="label"
                        name='label'
                        placeholder="Label"
                        value={jsonBody.label || ""}
                        onChange={() => { }} />
                </div>
                <div className='mt-6 flex w-full gap-2'>
                    <Button>Save</Button>
                    <Button type='button' variant={"outline"}>Save</Button>
                </div>
            </form>
        </div>
    )
}

export default EditorForm