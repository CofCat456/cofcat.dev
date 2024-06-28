import { type IconProps } from '..'

export function CloseIcon(props: IconProps = {}) {
  return (
    <svg fill="none" height="1em" viewBox="0 0 24 24" width="1em" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}
