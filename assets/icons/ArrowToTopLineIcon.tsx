import { type IconProps } from '..'

export function ArrowToTopLineIcon(props: IconProps = {}) {
  return (
    <svg
      className="rotate-180"
      fill="none"
      height="1em"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M19 20H5m1-9.83a30.23 30.23 0 0 0 5.406 5.62c.174.14.384.21.594.21m6-5.83a30.232 30.232 0 0 1-5.406 5.62A.949.949 0 0 1 12 16m0 0V4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}
