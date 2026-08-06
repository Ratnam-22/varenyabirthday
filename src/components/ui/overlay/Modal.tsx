'use client';

import React, { useEffect } from 'react';
import { Portal } from '../portal/Portal';
import { Backdrop } from './Backdrop';
import { Surface } from '../surface/Surface';
import { Heading } from '../typography/Heading';
import { IconButton } from '../button/IconButton';
import { CloseIcon } from '../icon/icons';
import { ModalProps } from './types';

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  'data-testid': testId = 'modal-component',
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Portal>
      <Backdrop isVisible={isOpen} onClick={onClose}>
        <Surface
          variant="glass"
          radius="xl"
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg p-6 sm:p-8 m-4 z-50 border border-[#d4af37]/30 shadow-[0_0_50px_rgba(0,0,0,0.8)] animate-in fade-in zoom-in-95 duration-200"
          data-testid={testId}
          role="dialog"
          aria-modal="true"
          aria-label={title || 'Modal Dialog'}
        >
          <div className="flex items-center justify-between mb-4">
            {title ? (
              <Heading level={3} size="h4" font="garamond">
                {title}
              </Heading>
            ) : (
              <div />
            )}
            <IconButton
              icon={<CloseIcon />}
              aria-label="Close modal"
              variant="ghost"
              size="sm"
              onClick={onClose}
            />
          </div>
          <div>{children}</div>
        </Surface>
      </Backdrop>
    </Portal>
  );
};
