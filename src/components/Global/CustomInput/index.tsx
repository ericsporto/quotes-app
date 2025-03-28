import clsx from 'clsx';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error: string;
  ref: React.RefCallback<HTMLInputElement>;
};

enum InputType {
  TEXT = 'text',
  PASSWORD = 'password',
  NUMBER = 'number',
}

export const CustomInput = (props: Partial<InputProps>) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <div className="flex flex-col w-full">
      <label className="lg:text-xl font-semibold">{props.label}</label>
      <div className="flex items-center justify-between border border-gray-300 rounded-[14px] px-4 text-gray-700 text-lg font-medium mt-1.5 h-13 lg:h-[58px]">
        <input
          {...props}
          ref={props.ref}
          autoComplete='off'
          className=" focus:outline-hidden placeholder:text-gray-400 placeholder:font-normal placeholder:text-sm lg:placeholder:text-lg w-full"
          type={
            props.type === InputType.PASSWORD && !showPassword
              ? 'password'
              : props.type === InputType.PASSWORD && showPassword
              ? 'text'
              : props.type
          }
        />
        {props.type === InputType.PASSWORD && (
          <span
            className={clsx('cursor-pointer text-gray-500', props.error && 'text-red-500')}
            aria-label={showPassword ? 'Show password' : 'Hide password'}
            onClick={handleShowPassword}
          >
            {showPassword ? <FaEye size={28} /> : <FaEyeSlash size={28} />}
          </span>
        )}
      </div>
      {props.error && (
        <span className="text-red-700 text-sm mt-2.5">{props.error}</span>
      )}
    </div>
  );
};
