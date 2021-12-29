import { useEffect, useRef } from 'react';


export const useClickOutside = (handler) => {
    let domNode = useRef();

    useEffect(() => {
        let oneHandler = (event)=> {
            if (!domNode.current.contains(event.target)) handler(false);
        }
        document.addEventListener('mousedown', oneHandler);
        return () => { document.removeEventListener('mousedown', oneHandler)}
    });
    return domNode;
}
