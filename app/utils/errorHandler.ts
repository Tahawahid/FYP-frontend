export interface ErrorInfo {
  message: string;
  code?: string | number;
  stack?: string;
  timestamp: string;
  url: string;
  userAgent: string;
}

export class ErrorHandler {
  static logError(error: Error, additionalInfo?: any): void {
    const errorInfo: ErrorInfo = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      url: typeof window !== 'undefined' ? window.location.href : '',
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : '',
      ...additionalInfo
    };

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error logged:', errorInfo);
    }

    // Send to error reporting service in production
    if (process.env.NODE_ENV === 'production') {
      this.reportError(errorInfo);
    }
  }

  private static async reportError(errorInfo: ErrorInfo): Promise<void> {
    try {
      // Replace with your error reporting service endpoint
      await fetch('/api/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorInfo),
      });
    } catch (reportingError) {
      console.error('Failed to report error:', reportingError);
    }
  }

  static handleAsyncError(promise: Promise<any>): Promise<any> {
    return promise.catch((error) => {
      this.logError(error);
      throw error;
    });
  }
}

// Global error handler for unhandled promise rejections
if (typeof window !== 'undefined') {
  window.addEventListener('unhandledrejection', (event) => {
    ErrorHandler.logError(new Error(event.reason), {
      type: 'unhandledrejection',
      reason: event.reason
    });
  });

  window.addEventListener('error', (event) => {
    ErrorHandler.logError(event.error || new Error(event.message), {
      type: 'javascript',
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno
    });
  });
}
