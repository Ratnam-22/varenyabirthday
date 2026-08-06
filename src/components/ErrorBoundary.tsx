'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Uncaught error in ErrorBoundary:', error, errorInfo);
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0f] p-6 text-center text-[#fdfbf7]">
          <h2 className="font-heading-primary text-3xl mb-4">Something went wrong</h2>
          <p className="text-[#a0a0b0] max-w-md mb-6">
            An unforeseen issue occurred. The application has safely caught the error.
          </p>
          <button
            onClick={() => this.setState({ hasError: false, error: undefined })}
            className="rounded-[18px] bg-[#d4af37] px-6 py-2.5 text-sm font-medium text-[#0a0a0f] transition-opacity hover:opacity-90"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
