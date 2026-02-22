import { ButtonHTMLAttributes, FC } from 'react';
import cx from 'classnames';
import styles from './Button.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'disabled';
  stretch?: boolean;
}

const Button: FC<Props> = ({
  variant = 'primary',
  stretch = true,
  children,
  ...rest
}) => {
  return (
    <button
      className={cx(
        styles.base,
        styles[`${variant}`],
        stretch && styles.stretch
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
