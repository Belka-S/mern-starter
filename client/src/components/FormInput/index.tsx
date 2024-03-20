import classNames from 'classnames';
import {
  FieldValues,
  GlobalError,
  Path,
  UseFormRegister,
} from 'react-hook-form';

import s from './index.module.scss';

type TInputProps<T extends FieldValues> = {
  className?: string;
  inputName: Path<T>;
  errors: Record<string, GlobalError>;
  register: UseFormRegister<T>;
  placeholder?: string;
  size?: 's' | 'm' | 'l';
};

const FormInput = <T extends FieldValues>(props: TInputProps<T>) => {
  const {
    className,
    inputName,
    errors,
    register,
    placeholder = '',
    size = 'm',
  } = props;

  return (
    <label className={className}>
      <span className={classNames(s.label, s[size])}>{inputName}</span>
      &nbsp;
      <span className={classNames(s.error, s[size])}>
        {errors[inputName]?.message}
      </span>
      <input
        type={inputName}
        placeholder={placeholder}
        readOnly
        onFocus={e => e.target.removeAttribute('readonly')}
        className={classNames(
          s.input,
          s[size],
          errors[inputName] ? s.invalid : s.valid,
        )}
        {...register(inputName, { required: true })}
      />
    </label>
  );
};

export default FormInput;
