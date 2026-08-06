'use client';

import React, { useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  children: React.ReactNode;
  containerId?: string;
}

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export const Portal: React.FC<PortalProps> = ({ children, containerId = 'portal-root' }) => {
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!mounted || typeof document === 'undefined') return null;

  let target = document.getElementById(containerId);
  if (!target) {
    target = document.createElement('div');
    target.id = containerId;
    document.body.appendChild(target);
  }

  return createPortal(children, target);
};
