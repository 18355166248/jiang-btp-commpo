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

export default function DingdanMoren(props: IconProps) {
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
          <clipPath id="b2142__a">
            <rect rx="0" height="24" width="24" />
          </clipPath>
        </defs>
        <g clipPath="url(#b2142__a)">
          <path
            fill="#C8C8C8"
            d="M17.178 22H6.822C5.264 22 4 20.6 4 18.872V7.128C4 5.4 5.264 4 6.822 4h10.356C18.736 4 20 5.4 20 7.128v11.744C20 20.6 18.736 22 17.178 22Z"
          />
          <path
            fill="#C8C8C8"
            d="M7 4a2 2 0 0 1 2-2h6a2 2 0 1 1 0 4H9a2 2 0 0 1-2-2Z"
            style={{ mixBlendMode: 'passthrough' }}
          />
          <path
            fill="#666"
            d="M7 4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2H7Z"
            style={{ mixBlendMode: 'passthrough' }}
          />
          <path
            fill="#FFF"
            d="M11.042 15.781c-.264 0-.528-.1-.729-.302l-2.011-2.011a1.031 1.031 0 0 1 1.457-1.458l1.301 1.302 3.2-3.03a1.03 1.03 0 1 1 1.418 1.498l-3.928 3.719c-.19.181-.444.283-.708.282Z"
          />
        </g>
      </g>
    </svg>
  );
}
