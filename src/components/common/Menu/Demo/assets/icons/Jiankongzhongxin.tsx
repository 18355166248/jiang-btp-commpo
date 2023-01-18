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

export default function Jiankongzhongxin(props: IconProps) {
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
          <clipPath id="b1de4__a">
            <rect width="14" height="14" rx="0" />
          </clipPath>
        </defs>
        <g clipPath="url(#b1de4__a)" fill="#333">
          <path
            data-follow-fill="#333"
            d="M12.167 2.917V7q0 2.14-1.514 3.653Q9.14 12.167 7 12.167t-3.653-1.514Q1.833 9.14 1.833 7V2.917h1V7q0 1.726 1.22 2.946 1.221 1.22 2.947 1.22t2.946-1.22q1.22-1.22 1.22-2.946V2.917h1Z"
            fill={_fill}
          />
          <path
            data-follow-fill="#333"
            d="M12.833 3.417H1.167q-.05 0-.098-.01t-.094-.029Q.93 3.36.89 3.332.848 3.305.813 3.27q-.035-.035-.062-.076-.027-.04-.046-.086-.02-.046-.029-.094-.01-.048-.01-.097 0-.05.01-.098t.029-.094Q.724 2.68.75 2.64q.027-.041.062-.076.035-.035.076-.062.04-.028.086-.046.046-.02.094-.029.048-.01.098-.01h11.666q.05 0 .098.01t.094.029q.045.018.086.046.041.027.076.062.035.035.062.076.027.04.046.086.02.046.029.094.01.048.01.098 0 .049-.01.097t-.029.094q-.019.045-.046.086-.027.041-.062.076-.035.035-.076.062-.04.028-.086.046-.046.02-.094.029-.048.01-.098.01Zm.5-.5q0 .049-.01.097-.009.048-.028.094-.019.045-.046.086-.027.041-.062.076-.035.035-.076.062-.04.028-.086.046-.046.02-.094.029-.048.01-.098.01-.049 0-.097-.01-.049-.01-.094-.029-.046-.018-.086-.046-.041-.027-.076-.062-.035-.035-.062-.076-.028-.04-.047-.086-.018-.046-.028-.094-.01-.048-.01-.097 0-.05.01-.098t.028-.094q.02-.045.047-.086.027-.041.062-.076.035-.035.076-.062.04-.028.086-.046.045-.02.094-.029.048-.01.097-.01.05 0 .098.01t.094.029q.045.018.086.046.041.027.076.062.035.035.062.076.027.04.046.086.02.046.029.094.01.048.01.098Zm-11.666 0q0 .049-.01.097t-.028.094q-.02.045-.047.086-.027.041-.062.076-.035.035-.076.062-.04.028-.086.046-.045.02-.094.029-.048.01-.097.01-.05 0-.098-.01t-.094-.029Q.93 3.36.89 3.332.848 3.305.813 3.27q-.035-.035-.062-.076-.027-.04-.046-.086-.02-.046-.029-.094-.01-.048-.01-.097 0-.05.01-.098t.029-.094Q.724 2.68.75 2.64q.027-.041.062-.076.035-.035.076-.062.04-.028.086-.046.046-.02.094-.029.048-.01.098-.01.049 0 .097.01.049.01.094.029.046.018.086.046.041.027.076.062.035.035.062.076.028.04.047.086.018.046.028.094.01.048.01.098ZM5.75 7q0 .518.366.884T7 8.25q.518 0 .884-.366T8.25 7q0-.518-.366-.884T7 5.75q-.518 0-.884.366T5.75 7Zm-1 0q0-.932.659-1.591Q6.068 4.75 7 4.75q.932 0 1.591.659.659.659.659 1.591 0 .932-.659 1.591Q7.932 9.25 7 9.25q-.932 0-1.591-.659Q4.75 7.932 4.75 7Z"
            fill={_fill}
          />
        </g>
      </g>
    </svg>
  );
}
