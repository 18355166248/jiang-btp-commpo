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

export default function Qudaoshangpinguanli(props: IconProps) {
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
          <clipPath id="b1dde__a">
            <rect width="14" height="14" rx="0" />
          </clipPath>
        </defs>
        <g
          style={{ mixBlendMode: 'passthrough' }}
          clipPath="url(#b1dde__a)"
          fillRule="evenodd"
          fill="#333"
        >
          <path
            data-follow-fill="#333"
            d="M7.438 9.625V4.812a.437.437 0 1 0-.875 0v4.813a.438.438 0 0 0 .875 0Z"
            fill={_fill}
          />
          <path
            data-follow-fill="#333"
            d="M10.638 2.188H3.363a.3.3 0 0 0-.3.3v2.025a.3.3 0 0 0 .3.3h7.275a.3.3 0 0 0 .3-.3V2.487a.3.3 0 0 0-.3-.3m-6.7 1.75v-.874h6.125v.874H3.938Zm7.066 5.92a.437.437 0 0 0 .371.206h.008a.437.437 0 0 0 .43-.438v-.014a.437.437 0 0 0-.067-.219l-1.777-2.83H4.023L2.254 9.393a.438.438 0 0 0-.066.232v.003a.438.438 0 0 0 .437.434h.009a.438.438 0 0 0 .362-.205l1.512-2.42h4.977l1.52 2.42Z"
            fill={_fill}
          />
          <path
            data-follow-fill="#333"
            d="M3.638 9.188H1.613a.3.3 0 0 0-.3.3v2.024a.3.3 0 0 0 .3.3h2.025a.3.3 0 0 0 .3-.3V9.488a.3.3 0 0 0-.3-.3m-1.45 1.75v-.876h.875v.876h-.875Zm5.825-1.75H5.988a.3.3 0 0 0-.3.3v2.024a.3.3 0 0 0 .3.3h2.025a.3.3 0 0 0 .3-.3V9.488a.3.3 0 0 0-.3-.3m-1.45 1.75v-.876h.875v.876h-.875Zm5.825-1.75h-2.025a.3.3 0 0 0-.3.3v2.024a.3.3 0 0 0 .3.3h2.025a.3.3 0 0 0 .3-.3V9.488a.3.3 0 0 0-.3-.3m-1.45 1.75v-.876h.875v.876h-.875Z"
            fill={_fill}
          />
        </g>
      </g>
    </svg>
  );
}
