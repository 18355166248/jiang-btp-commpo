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

export default function ShangpinMoren(props: IconProps) {
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
          <clipPath id="b2147__a">
            <rect rx="0" height="24" width="24" />
          </clipPath>
        </defs>
        <g clipPath="url(#b2147__a)">
          <path
            fill="#C8C8C8"
            d="M18.418 22.357H5.695a3.371 3.371 0 0 1-3.361-3.643l.754-9.358a3.373 3.373 0 0 1 3.36-3.102h11.216c1.758 0 3.22 1.35 3.361 3.102l.754 9.358a3.372 3.372 0 0 1-3.361 3.643Z"
          />
          <path
            fill="#C8C8C8"
            d="M17.135 11.169a.946.946 0 0 1-.946-.946V7.356c0-2.213-1.854-4.013-4.133-4.013-2.278 0-4.132 1.8-4.132 4.013v2.868a.946.946 0 0 1-1.892 0V7.356c0-3.255 2.703-5.904 6.024-5.904 3.322 0 6.024 2.649 6.024 5.904v2.868a.945.945 0 0 1-.945.945Z"
          />
          <path
            fill="#666"
            d="M16.03 6.256c.104.35.16.719.16 1.1v2.868a.946.946 0 0 0 1.892 0V7.356c0-.37-.038-.734-.105-1.086a3.38 3.38 0 0 0-.313-.014h-1.633Zm-9.052 4.913a.946.946 0 0 0 .946-.946V7.356c0-.381.056-.75.16-1.1H6.448c-.106 0-.21.005-.313.014a5.795 5.795 0 0 0-.105 1.086v2.868a.947.947 0 0 0 .947.945Z"
          />
          <path
            fill="#FFF"
            d="M16.376 18.764h-8.64a.96.96 0 1 1 0-1.92h8.64a.96.96 0 1 1 0 1.92Z"
          />
        </g>
      </g>
    </svg>
  );
}
