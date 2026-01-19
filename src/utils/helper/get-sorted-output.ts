/* eslint-disable @typescript-eslint/no-explicit-any */
interface RenderedObject {
    [key: string]: any;
}

const searchParentProperty = (obj: RenderedObject, targetValue: any, currentPath: any[] = []) => {
    const paths: any[][] = [];

    if (typeof obj !== 'object' || obj === null) {
        return paths;
    }

    for (const key in obj) {
        const value = obj[key];
        const newPath = [...currentPath, { key, value }];

        if (value === targetValue) {
            paths.push(newPath);
        }

        if (typeof value === 'object' && value !== null) {
            const subPaths = searchParentProperty(value, targetValue, newPath);
            paths.push(...subPaths);
            
        } else if (Array.isArray(value)) {

            value.forEach((item, index) => {
                const arrayPath = [...newPath, index.toString()];
                if (item === targetValue) {
                    paths.push(arrayPath);
                }
                if (typeof item === 'object' && item !== null) {
                    const subPaths = searchParentProperty(item, targetValue, arrayPath);
                    paths.push(...subPaths);
                }
            });
        }
    }

    return paths;
}

const getSortedOutputBody = (element: Element, body: any) => {
    if (!element.id) return null;

    const paths = searchParentProperty(body, element.id);
    console.log({ "paths": paths }, element.id);
}

export default getSortedOutputBody;