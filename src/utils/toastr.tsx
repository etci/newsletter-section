import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import {
  ToastContainer,
  getToastContainer,
  type ToastItem,
  type ToastVariant,
} from '@/components/Toast/Toast';

const DEFAULT_DURATION_MS = 4000;

let toasts: ToastItem[] = [];
let root: ReturnType<typeof createRoot> | null = null;

function render() {
  const container = getToastContainer();
  if (!root) {
    root = createRoot(container);
  }
  root.render(
    <StrictMode>
      <ToastContainer toasts={toasts} />
    </StrictMode>
  );
}

function show(
  variant: ToastVariant,
  message: string,
  durationMs = DEFAULT_DURATION_MS
) {
  const id = Date.now();
  toasts = [...toasts, { id, variant, message }];
  render();

  const rerender = (id: number) => {
    toasts = toasts.filter((t) => t.id !== id);
    render();
  };
  const timeoutId = window.setTimeout(() => {
    rerender(id);
  }, durationMs);

  return () => {
    window.clearTimeout(timeoutId);
    rerender(id);
  };
}

export const toastr = {
  success(message: string, durationMs?: number) {
    return show('success', message, durationMs);
  },
  error(message: string, durationMs?: number) {
    return show('error', message, durationMs);
  },
  warning(message: string, durationMs?: number) {
    return show('warning', message, durationMs);
  },
};
