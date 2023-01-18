import React, { useEffect, useRef } from 'react';
import styles from './style.css';
interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
  width?: string | number;
  height?: string | number;
  spin?: boolean;
  rtl?: boolean;
  color?: string;
  fill?: string;
  stroke?: string;
}

export default function KucunMoren(props: IconProps) {
  const root = useRef<SVGSVGElement>(null);
  const {
    size = '1em',
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = props;
  const _width = width || size;
  const _height = height || size;
  const _stroke = stroke || color;
  const _fill = fill || color;
  useEffect(() => {
    if (!_fill) {
      (root.current as SVGSVGElement)
        ?.querySelectorAll('[data-follow-fill]')
        .forEach((item) => {
          item.setAttribute(
            'fill',
            item.getAttribute('data-follow-fill') || '',
          );
        });
    }
    if (!_stroke) {
      (root.current as SVGSVGElement)
        ?.querySelectorAll('[data-follow-stroke]')
        .forEach((item) => {
          item.setAttribute(
            'stroke',
            item.getAttribute('data-follow-stroke') || '',
          );
        });
    }
  }, [stroke, color, fill]);
  return (
    <svg
      ref={root}
      width={_width}
      height={_height}
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      role="presentation"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className || ''} ${spin ? styles.spin : ''} ${
        rtl ? styles.rtl : ''
      }`.trim()}
      {...rest}
    >
      <g>
        <defs>
          <clipPath id="b2144__a">
            <rect rx="0" height="24" width="24" />
          </clipPath>
          <clipPath id="b2144__b">
            <rect rx="0" height="24" width="24" />
          </clipPath>
        </defs>
        <g clipPath="url(#b2144__a)" style={{ mixBlendMode: 'passthrough' }}>
          <g clipPath="url(#b2144__b)">
            <path
              fill="#C8C8C8"
              d="M20.26 13.886h-5.276a2.933 2.933 0 0 1-5.86 0H3.849c-1.09 0-1.974.883-1.974 1.974v4.089c0 1.09.884 1.974 1.974 1.974h16.413c1.09 0 1.974-.884 1.974-1.974v-4.09a1.976 1.976 0 0 0-1.974-1.973Z"
            />
            <path
              fill="#C8C8C8"
              d="M18.719 19.747H5.39a1.807 1.807 0 0 1-1.807-1.807V4c0-.999.809-1.808 1.807-1.808h13.328c.998 0 1.807.81 1.807 1.808v13.94a1.805 1.805 0 0 1-1.806 1.807Z"
            />
            <path
              fill="#666"
              d="M20.526 13.906a1.94 1.94 0 0 0-.265-.02h-5.277a2.933 2.933 0 0 1-5.86 0H3.848c-.09 0-.178.008-.265.02v4.034c0 .998.809 1.807 1.807 1.807h13.328c.998 0 1.807-.809 1.807-1.807v-4.034Z"
            />
            <path
              fill="#FFF"
              d="M12.567 6.98H8.542a.96.96 0 1 1 0-1.92h4.025a.96.96 0 1 1 0 1.92Zm3 3.58H8.542a.96.96 0 1 1 0-1.92h7.025a.96.96 0 1 1 0 1.92Z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
