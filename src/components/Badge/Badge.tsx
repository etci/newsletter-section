import { FC } from 'react';
import styles from './Badge.module.css';
import classNames from 'classnames';
import { capitalize } from '@/utils/text';

interface Props {
  variant: 'success' | 'error' | 'warning';
  message?: string;
}

const Badge: FC<Props> = ({ variant, message }) => {
  const className = classNames(styles.badge, variant);

  return (
    <div className={className}>
      <span>{message ?? capitalize(variant)}</span>
    </div>
  );
};

export default Badge;
