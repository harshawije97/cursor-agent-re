/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from 'react'
import Header from './_components/header';
import SelectionBox from './_components/selection-box';
import ComponentManager from '@/components/ComponentManager';
import useComponentStore from '@/hooks/zustand/use-component';
import useSelectElement from '@/hooks/zustand/use-select-element';

function DuplicateLandingPage() {
  const [selectionBox, setSelectionBox] = React.useState<any>(null);
  const [jsonBody, setJsonBody] = React.useState<any>(null);
  const { getComponent } = useComponentStore();

  // When select a element
  const { setSelectedElement } = useSelectElement();

  React.useEffect(() => {

    const jsonComponent = getComponent();
    if (jsonComponent) {
      const { body: { renderedOutput } } = jsonComponent as any;
      setJsonBody(renderedOutput);
    }

    let startPoint: any = null;
    let isDragging: boolean = false;

    const elementPosition = (point: any) => {
      if (point) {
        const element = document.elementFromPoint(point.x, point.y);
        return {
          tagName: element?.tagName,
          id: element?.id,
        };
      }
    }

    const mouseDown = (event: any) => {
      isDragging = true;
      startPoint = {
        x: event.clientX,
        y: event.clientY
      };
    }

    const mouseMove = (event: any) => {
      if (isDragging && startPoint) {
        const currentX = event.clientX;
        const currentY = event.clientY;

        const box = {
          left: Math.min(startPoint.x, currentX),
          top: Math.min(startPoint.y, currentY),
          width: Math.abs(currentX - startPoint.x),
          height: Math.abs(currentY - startPoint.y)
        }

        setSelectionBox(box);
      }
    }

    const mouseRelease = (event: any) => {
      if (isDragging) {
        const endPoint = {
          x: event.clientX,
          y: event.clientY
        };

        const elements = document.elementsFromPoint(endPoint.x, endPoint.y);

        // elements.forEach((element: any) => {
        //   const dnp = element.getBoundingClientRect();
        //   console.log('Element:', element);
        //   console.log('Dimensions:', {
        //     width: dnp.width,
        //     height: dnp.height,
        //     x: dnp.x,
        //     y: dnp.y
        //   });
        // })

        const selectedElement = elements[0];
        setSelectedElement(selectedElement);

        // console.log('Complete drag:', {
        //   start: elementPosition(startPoint),
        //   end: elementPosition(endPoint),
        //   distance: {
        //     x: endPoint.x - startPoint.x,
        //     y: endPoint.y - startPoint.y
        //   }
        // });

        isDragging = false;
        startPoint = null;
        setSelectionBox(null);
      }
    }

    document.addEventListener('mousedown', mouseDown);
    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseRelease);

    return () => {
      document.removeEventListener('mousedown', mouseDown);
      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseup', mouseRelease);
    }
  }, [])
  return (
    <ComponentManager>
      {selectionBox && <SelectionBox rectangle={selectionBox} />}
      {jsonBody && (
        <div id='canvas' className='w-full'>
          <Header config={jsonBody} />
        </div>
      )}
    </ComponentManager>
  )
}

export default DuplicateLandingPage