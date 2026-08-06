'use client';

import { useEffect, useRef } from 'react';

export function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
  element?: HTMLElement | Window | null
): void {
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const targetElement: HTMLElement | Window = element || window;
    if (!targetElement || !targetElement.addEventListener) return;

    const eventListener: typeof handler = (event) => savedHandler.current(event);

    targetElement.addEventListener(eventName, eventListener as EventListener);

    return () => {
      targetElement.removeEventListener(eventName, eventListener as EventListener);
    };
  }, [eventName, element]);
}
