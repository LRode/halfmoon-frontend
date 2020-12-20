import { useEffect } from 'react';

/**
 * This hook allows you to detect clicks outside of a specified element
 *
 * @param {Node} ref  - Reference to element that we want to watch for when we click outside of
 * @param {Function} handler - Function that handles what happens when a click outside happens
 */
function useOnClickOutside(ref, handler, extraRef = null) {
    useEffect(
        () => {
            const listener = event => {
                // Do nothing if clicking ref's element or descendent elements
                if (!ref.current || ref.current.contains(event.target) || (extraRef && (!extraRef.current || extraRef.current.contains(event.target))) ) {
                    return;
                }

                handler(event);
            };

            document.addEventListener('mousedown', listener);
            document.addEventListener('keydown', listener);
            document.addEventListener('touchstart', listener);

            return () => {
                document.removeEventListener('mousedown', listener);
                document.removeEventListener('keydown', listener);
                document.removeEventListener('touchstart', listener);
            };
        },
        [ref, handler]
    );
}

export default useOnClickOutside;
