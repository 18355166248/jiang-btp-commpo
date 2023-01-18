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

export default function GuanliMoren(props: IconProps) {
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
          <clipPath id="b2143__a">
            <rect rx="0" height="24" width="24" />
          </clipPath>
          <clipPath id="b2143__b">
            <rect rx="0" height="24" width="24" />
          </clipPath>
        </defs>
        <g clipPath="url(#b2143__a)" style={{ mixBlendMode: 'passthrough' }}>
          <g clipPath="url(#b2143__b)">
            <path
              fill="#C8C8C8"
              d="M15.178 22H4.822C3.264 22 2 20.6 2 18.872V5.128C2 3.4 3.264 2 4.822 2h10.356C16.736 2 18 3.4 18 5.128v13.744C18 20.6 16.736 22 15.178 22Z"
            />
            <path
              fill="#666"
              d="M14 2v3a1 1 0 0 0 1 1h3v-.872C18 3.4 16.736 2 15.178 2H14Z"
            />
            <path
              fill="#FFF"
              d="M14.09 9H5.91C5.406 9 5 8.553 5 8c0-.553.407-1 .91-1h8.18c.503 0 .91.447.91 1 0 .553-.407 1-.91 1Zm-3.299 3H6.21C5.54 12 5 11.553 5 11c0-.553.54-1 1.209-1h4.582c.668 0 1.209.447 1.209 1 0 .552-.54 1-1.209 1Zm-2 3H6.21C5.54 15 5 14.553 5 14c0-.553.54-1 1.209-1H8.79c.67 0 1.21.447 1.21 1 0 .553-.54 1-1.209 1Z"
            />
            <path
              fill="#C8C8C8"
              d="m26.83 12.289 3.33 1.922a1 1 0 0 1 .5.866v3.846a1 1 0 0 1-.5.866l-3.33 1.922a1 1 0 0 1-1 0L22.5 19.79a1 1 0 0 1-.5-.866v-3.846a1 1 0 0 1 .5-.866l3.33-1.922a1 1 0 0 1 1 0"
              transform="rotate(90 22 12)"
              style={{ mixBlendMode: 'passthrough' }}
            />
            <path
              fill="#666"
              d="M18 14.923a1 1 0 0 0 .5.866l3.33 1.922a1 1 0 0 0 1 0l3.33-1.922a1 1 0 0 0 .5-.866V12H18v2.923Z"
              transform="rotate(90 18 12)"
              style={{ mixBlendMode: 'passthrough' }}
            />
            <circle
              fill="#FFF"
              cy="16.3"
              cx="17"
              r="2"
              style={{ mixBlendMode: 'passthrough' }}
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
