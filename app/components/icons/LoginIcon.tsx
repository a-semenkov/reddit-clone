import { IconProps } from './icons.types';

export function LoginIcon({ ...props }: IconProps) {
  return (
    <svg
      fill='none'
      width='20'
      height='20'
      viewBox='0 0 24 24'
      {...props}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13 12h8M16 15l-2.913-2.913v0a.123.123 0 0 1 0-.174v0L16 9'
        stroke='#323232'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16 5v-.5 0A1.5 1.5 0 0 0 14.5 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9.5a1.5 1.5 0 0 0 1.5-1.5v0-.5'
        stroke='#323232'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
