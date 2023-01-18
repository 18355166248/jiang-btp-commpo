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

export default function Shenhezhongxin(props: IconProps) {
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
          <clipPath id="b1de2__a">
            <rect width="14" height="14" rx="0" />
          </clipPath>
        </defs>
        <g clipPath="url(#b1de2__a)">
          <path
            data-follow-fill="#333"
            d="M1.312 10.985h11.376V8.289q0-.317-.248-.531-.22-.19-.518-.19H8.838q-.002-.13-.002-.347 0-.076.37-.418.55-.51.796-.911.433-.709.433-1.63 0-1.562-1.113-2.342-.867-.608-2.217-.607-1.367 0-2.284.599-1.204.787-1.204 2.35 0 .957.466 1.713.262.423.833.956.217.202.278.277.02.026.031.043 0 .204-.006.317H2.08q-.298 0-.517.19-.247.213-.248.53l-.002 2.697Zm10.5-.875H2.189l.001-1.667h3.173q.534 0 .682-.495.056-.187.056-.718v-.01q0-.382-.587-.93-.485-.453-.685-.776-.336-.545-.336-1.253 0-1.09.808-1.618.699-.457 1.805-.457 1.074 0 1.715.45.74.518.74 1.625 0 .675-.305 1.173-.182.298-.644.726-.296.273-.41.42-.24.31-.24.64 0 .614.05.783.13.439.643.439h3.159v1.667ZM1.75 12.688h10.5a.438.438 0 0 0 0-.876H1.75a.437.437 0 1 0 0 .876Z"
            fillRule="evenodd"
            fill={_fill}
          />
        </g>
      </g>
    </svg>
  );
}
