import { IconProps } from './icons.types';

export function CryptoIcon({ ...props }: IconProps) {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M10 6V4M14 6V4M14 6H7M14 6C15.6569 6 17 7.34315 17 9C17 10.6569 15.6569 12 14 12M9 18L9 12M9 6V12M10 20V18M14 20V18M9 12H15C16.6569 12 18 13.3431 18 15C18 16.6569 16.6569 18 15 18H7'
        stroke='#000000'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
