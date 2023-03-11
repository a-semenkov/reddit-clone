import { IconProps } from './icons.types';

export function AdvertiseIcon({ ...props }: IconProps) {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 48 48'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M0 0h48v48H0z' fill='none' stroke='#fff' />
      <path
        d='M13.091 12C8.07 12 4 16.477 4 22c0 4.701 2.952 8.633 6.926 9.703L14 44h12l-2.74-10.961L44 39.647V4l-24 8h-6.909zm4.032 28-2-8h3.754l2 8h-3.754zM20 16v12h-6.909C10.284 28 8 25.308 8 22s2.284-6 5.091-6H20zm20 18.174-16-5.098V14.883L40 9.55v24.624z'
        stroke='#fff'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
