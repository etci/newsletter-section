import cx from 'classnames';
import type { FC, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import Badge from '../Badge/Badge';
import styles from './Toast.module.css';

export function getToastContainer(): HTMLElement {
  let el = document.getElementById('toast-container');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toast-container';
    document.body.appendChild(el);
  }
  return el;
}

export type ToastVariant = 'success' | 'warning' | 'error';

export interface ToastItem {
  id: number;
  variant: ToastVariant;
  message: string;
}

interface ToastProps {
  variant: ToastVariant;
  message: string;
}

interface ToastContainerProps extends PropsWithChildren {
  toasts?: ToastItem[];
}

const Toast: FC<ToastProps> = ({ variant, message }) => {
  return (
    <div className={cx(styles.toast, styles[variant])}>
      <Badge variant={variant} />
      <span>{message}</span>
    </div>
  );
};

const ToastContainer: FC<ToastContainerProps> = ({ toasts, children }) => {
  const container = getToastContainer();
  const content =
    toasts !== undefined && toasts.length > 0
      ? toasts.map((t) => (
          <Toast key={t.id} variant={t.variant} message={t.message} />
        ))
      : children;
  return createPortal(content, container);
};

export { Toast, ToastContainer };
export default ToastContainer;
