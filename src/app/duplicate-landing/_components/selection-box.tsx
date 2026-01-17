/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

function SelectionBox({ rectangle }: any) {
    return (
        <div className="fixed pointer-events-none bg-blue-400 border-2 border-blue-600 z-9999 opacity-50" style={{
            left: `${rectangle.left}px`,
            top: `${rectangle.top}px`,
            width: `${rectangle.width}px`,
            height: `${rectangle.height}px`
        }}></div>
    )
}

export default SelectionBox