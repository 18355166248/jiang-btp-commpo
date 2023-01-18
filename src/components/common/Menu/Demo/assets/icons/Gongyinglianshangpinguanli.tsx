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

export default function Gongyinglianshangpinguanli(props: IconProps) {
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
          <clipPath id="b1ddc__a">
            <rect width="14" height="14" rx="0" />
          </clipPath>
        </defs>
        <g clipPath="url(#b1ddc__a)" fillRule="evenodd" fill="#333">
          <path
            data-follow-fill="#333"
            d="m7 2.142-4.668 2.61-.232.13v5.504L7 13.125l4.9-2.74V4.882L7 2.142ZM3.007 5.414v4.439L7 12.085l3.993-2.232V5.414L7 3.182 3.007 5.414Z"
            fill={_fill}
          />
          <path
            data-follow-fill="#333"
            d="M6.592 1.297v1.268c0 .233.182.422.408.422a.415.415 0 0 0 .408-.422V1.297A.416.416 0 0 0 7 .875a.416.416 0 0 0-.408.422ZM7 8.14l4.2-2.427a.42.42 0 0 0 .21-.37v-.007a.434.434 0 0 0-.052-.198.406.406 0 0 0-.356-.217h-.014a.398.398 0 0 0-.185.054L7 7.172 3.197 4.975a.398.398 0 0 0-.199-.054h-.003a.411.411 0 0 0-.353.216.434.434 0 0 0-.052.207v.003a.42.42 0 0 0 .21.366L7 8.14Zm4.312 2.402 1.225.672a.397.397 0 0 0 .18.043h.009a.408.408 0 0 0 .357-.237.434.434 0 0 0 .042-.185v-.01a.424.424 0 0 0-.23-.37l-1.224-.672a.397.397 0 0 0-.18-.043h-.005a.413.413 0 0 0-.362.237.434.434 0 0 0-.04.186v.005a.418.418 0 0 0 .229.374Zm-9.849.673 1.23-.667a.418.418 0 0 0 .229-.38v-.005a.434.434 0 0 0-.042-.18.413.413 0 0 0-.367-.237h-.005a.38.38 0 0 0-.174.043l-1.23.667a.418.418 0 0 0-.229.379v.005c0 .063.015.124.041.18a.413.413 0 0 0 .367.237h.005c.06 0 .12-.015.175-.042Z"
            fill={_fill}
          />
          <path
            data-follow-fill="#333"
            d="M6.592 7.656v4.624c0 .233.182.423.408.423.226 0 .408-.19.408-.423V7.656A.416.416 0 0 0 7 7.233a.416.416 0 0 0-.408.423Z"
            fill={_fill}
          />
        </g>
      </g>
    </svg>
  );
}
