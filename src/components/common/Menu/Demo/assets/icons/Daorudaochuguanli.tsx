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

export default function Daorudaochuguanli(props: IconProps) {
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
      viewBox="0 0 14 14"
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
          <clipPath id="b1de7__a">
            <rect width="14" height="14" rx="0" />
          </clipPath>
        </defs>
        <g clipPath="url(#b1de7__a)" fillRule="evenodd" fill="#333">
          <path
            data-follow-fill="#333"
            d="M1.79 4.812h2.346a.437.437 0 1 0 0-.875H2.665V2.466a.437.437 0 1 0-.875 0v2.346Z"
            fill={_fill}
          />
          <path
            data-follow-fill="#333"
            d="M4.116 2.097q-1.291.761-2.042 2.058a.438.438 0 0 0-.059.22v.023a.438.438 0 0 0 .438.414h.023a.437.437 0 0 0 .355-.218q.636-1.099 1.73-1.743Q5.685 2.188 7 2.188q1.993 0 3.403 1.409 1.41 1.41 1.41 3.403t-1.41 3.403q-1.41 1.41-3.403 1.41t-3.403-1.41Q2.187 8.993 2.187 7a.437.437 0 1 0-.874 0q0 2.356 1.665 4.022Q4.644 12.687 7 12.687q2.356 0 4.022-1.665Q12.687 9.356 12.687 7q0-2.356-1.665-4.022Q9.356 1.312 7 1.312q-1.553 0-2.884.785Z"
            fill={_fill}
          />
          <path
            data-follow-fill="#333"
            d="M8.917 9.537a.437.437 0 0 0 .62-.618h-.001L7.439 6.82V3.85a.438.438 0 0 0-.875-.001v3.334l2.353 2.353Z"
            fill={_fill}
          />
        </g>
      </g>
    </svg>
  );
}
