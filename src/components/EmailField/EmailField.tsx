import classNames from 'classnames/bind';
import { FC, InputHTMLAttributes } from 'react';
import styles from './EmailField.module.css';

interface BaseProps {
  id: string;
  label?: string;
  placeholder: string;
  error?: string;
  isDisabled?: boolean;
}

type ControlledProps = BaseProps & {
  value: string;
  onChange: (value: string) => void;
  defaultValue?: never;
};

type UncontrolledProps = BaseProps & {
  value?: never;
  onChange?: never;
  defaultValue?: string;
};

type Props = (ControlledProps | UncontrolledProps) &
  Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'defaultValue' | 'id' | 'placeholder'
  >;

// Type guard to narrow Props to ControlledProps
function isControlledProps(props: Props): props is ControlledProps {
  return 'value' in props && props.value !== undefined;
}

const EmailField: FC<Props> = (props) => {
  const { id, label, placeholder, error, isDisabled = false } = props;
  const cx = classNames.bind(styles);
  const wrapperClassName = cx(styles.field, {
    error: !!error,
    disabled: isDisabled,
  });

  if (isControlledProps(props)) {
    const {
      value,
      onChange,
      id: _,
      placeholder: __,
      label: ___,
      ...rest
    } = props;
    return (
      <div className={wrapperClassName}>
        {label && (
          <label className={styles.label} htmlFor={id}>
            {label}
          </label>
        )}
        <input
          className={styles.input}
          id={id}
          name={id}
          type="email"
          placeholder={placeholder}
          value={value}
          onChange={(evt) => onChange(evt.target.value)}
          {...rest}
        />
        {error && <span className={styles.errorMessage}>{error}</span>}
      </div>
    );
  }

  const { defaultValue, id: _, placeholder: __, label: ___, ...rest } = props;
  return (
    <div className={wrapperClassName}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={styles.input}
        id={id}
        name={id}
        type="email"
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

export default EmailField;
