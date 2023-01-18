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

export default function Caigouguanli(props: IconProps) {
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
          <clipPath id="b1ddf__a">
            <rect width="14" height="14" rx="0" />
          </clipPath>
        </defs>
        <g clipPath="url(#b1ddf__a)" fill="#333">
          <path
            data-follow-fill="#333"
            d="M3.5 10q0 .207.146.354.147.146.354.146t.354-.146Q4.5 10.207 4.5 10t-.146-.354Q4.207 9.5 4 9.5t-.354.146Q3.5 9.793 3.5 10Zm-1 0q0-.621.44-1.06Q3.378 8.5 4 8.5t1.06.44q.44.439.44 1.06t-.44 1.06q-.439.44-1.06.44t-1.06-.44Q2.5 10.622 2.5 10Zm7 0q0 .207.146.354.147.146.354.146t.354-.146q.146-.147.146-.354t-.146-.354Q10.207 9.5 10 9.5t-.354.146Q9.5 9.793 9.5 10Zm-1 0q0-.621.44-1.06.439-.44 1.06-.44t1.06.44q.44.439.44 1.06t-.44 1.06q-.439.44-1.06.44t-1.06-.44Q8.5 10.622 8.5 10Z"
            fill={_fill}
          />
          <path
            data-follow-fill="#333"
            d="M5 9.5h4v.5h-.5V3H9v.5H1V3h.5v7H1v-.5h1.655q.05 0 .098.01t.094.028q.045.019.086.046.04.028.076.062.035.035.062.076.027.041.046.087.019.045.029.093.01.049.01.098 0 .05-.01.098t-.029.093q-.019.046-.046.087-.027.04-.062.076-.035.034-.076.062-.041.027-.086.046-.046.019-.094.028-.049.01-.098.01H1q-.05 0-.098-.01t-.093-.028q-.046-.019-.087-.046-.04-.028-.076-.062-.034-.035-.062-.076-.027-.041-.046-.087-.019-.045-.028-.093Q.5 10.049.5 10V3q0-.05.01-.098t.028-.093q.019-.046.046-.087.028-.04.062-.076.035-.034.076-.062.041-.027.087-.046.045-.019.093-.028Q.951 2.5 1 2.5h8q.05 0 .098.01t.093.028q.046.019.087.046.04.028.076.062.034.035.062.076.027.041.046.087.019.045.028.093.01.049.01.098v7q0 .05-.01.098t-.028.093q-.019.046-.046.087-.028.04-.062.076-.035.034-.076.062-.041.027-.087.046-.045.019-.093.028-.049.01-.098.01H5q-.05 0-.098-.01t-.093-.028q-.046-.019-.087-.046-.04-.028-.076-.062-.034-.035-.062-.076-.027-.041-.046-.087-.019-.045-.028-.093-.01-.049-.01-.098 0-.05.01-.098t.028-.093q.019-.046.046-.087.028-.04.062-.076.035-.034.076-.062.041-.027.087-.046.045-.019.093-.028.049-.01.098-.01Zm.5.5q0 .05-.01.098t-.028.093q-.019.046-.046.087-.028.04-.062.076-.035.034-.076.062-.041.027-.087.046-.045.019-.093.028-.049.01-.098.01-.05 0-.098-.01t-.093-.028q-.046-.019-.087-.046-.04-.028-.076-.062-.034-.035-.062-.076-.027-.041-.046-.087-.019-.045-.028-.093-.01-.049-.01-.098 0-.05.01-.098t.028-.093q.019-.046.046-.087.028-.04.062-.076.035-.034.076-.062.041-.027.087-.046.045-.019.093-.028.049-.01.098-.01.05 0 .098.01t.093.028q.046.019.087.046.04.028.076.062.034.035.062.076.027.041.046.087.019.045.028.093.01.049.01.098Zm-2.345 0q0 .05-.01.098-.009.048-.028.093-.019.046-.046.087-.027.04-.062.076-.035.034-.076.062-.041.027-.086.046-.046.019-.094.028-.049.01-.098.01-.05 0-.097-.01-.049-.01-.094-.028-.046-.019-.087-.046-.04-.028-.075-.062-.035-.035-.063-.076-.027-.041-.046-.087-.019-.045-.028-.093-.01-.049-.01-.098 0-.05.01-.098t.028-.093q.02-.046.046-.087.028-.04.063-.076.034-.034.075-.062.041-.027.087-.046.045-.019.094-.028.048-.01.097-.01.05 0 .098.01t.094.028q.045.019.086.046.04.028.076.062.035.035.062.076.027.041.046.087.019.045.029.093.01.049.01.098Z"
            fill={_fill}
          />
          <path
            data-follow-fill="#333"
            d="M11.35 9.5H13v.5h-.5V7.5h.5l-.412.283-1.715-2.5.413-.283v.5H9V5h.5v5q0 .05-.01.098t-.028.093q-.019.046-.046.087-.028.04-.062.076-.035.034-.076.062-.041.027-.087.046-.045.019-.093.028-.049.01-.098.01-.05 0-.098-.01t-.093-.028q-.046-.019-.087-.046-.04-.028-.076-.062-.034-.035-.062-.076-.027-.041-.046-.087-.019-.045-.028-.093-.01-.049-.01-.098V5q0-.05.01-.098t.028-.093q.019-.046.046-.087.028-.04.062-.076.035-.034.076-.062.041-.027.087-.046.045-.019.093-.028.049-.01.098-.01h2.286q.123 0 .233.058.11.057.18.16l1.713 2.5q.088.127.088.282V10q0 .05-.01.098t-.028.093q-.019.046-.046.087-.028.04-.062.076-.035.034-.076.062-.041.027-.087.046-.045.019-.093.028-.049.01-.098.01h-1.65q-.05 0-.098-.01t-.094-.028q-.045-.019-.086-.046-.041-.028-.076-.062-.035-.035-.062-.076-.027-.041-.046-.087-.02-.045-.029-.093-.01-.049-.01-.098 0-.05.01-.098t.029-.093q.019-.046.046-.087.027-.04.062-.076.035-.034.076-.062.04-.027.086-.046.046-.019.094-.028.048-.01.098-.01Zm.5.5q0 .05-.01.098t-.028.093q-.02.046-.047.087-.027.04-.062.076-.035.034-.076.062-.04.027-.086.046-.046.019-.094.028-.048.01-.097.01-.05 0-.098-.01t-.094-.028q-.045-.019-.086-.046-.041-.028-.076-.062-.035-.035-.062-.076-.027-.041-.046-.087-.02-.045-.029-.093-.01-.049-.01-.098 0-.05.01-.098t.029-.093q.019-.046.046-.087.027-.04.062-.076.035-.034.076-.062.04-.027.086-.046.046-.019.094-.028.048-.01.098-.01.049 0 .097.01.049.01.094.028.045.019.086.046.041.028.076.062.035.035.062.076.028.041.047.087.018.045.028.093.01.049.01.098ZM9.5 10q0 .05-.01.098t-.028.093q-.019.046-.046.087-.028.04-.062.076-.035.034-.076.062-.041.027-.087.046-.045.019-.093.028-.049.01-.098.01-.05 0-.098-.01t-.093-.028q-.046-.019-.087-.046-.04-.028-.076-.062-.034-.035-.062-.076-.027-.041-.046-.087-.019-.045-.028-.093-.01-.049-.01-.098 0-.05.01-.098t.028-.093q.019-.046.046-.087.028-.04.062-.076.035-.034.076-.062.041-.027.087-.046.045-.019.093-.028.049-.01.098-.01.05 0 .098.01t.093.028q.046.019.087.046.04.028.076.062.034.035.062.076.027.041.046.087.019.045.028.093.01.049.01.098Z"
            fill={_fill}
          />
        </g>
      </g>
    </svg>
  );
}
