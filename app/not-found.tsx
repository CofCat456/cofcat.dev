import { ArrowRightIcon } from '~/assets'
import Link from '~/components/ui/Link'

const ErrorComponent = () => {
  return (
    <svg width="100%">
      <text className="errorIcon" fill="rgb(229 231 235)" x="50%" y="50%">
        404
      </text>
    </svg>
  )
}

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex min-h-[100dvh] max-w-2xl flex-col justify-center gap-y-6 px-5 py-4">
      <ErrorComponent />
      <p>You have found a secret place.</p>
      <p>
        Unfortunately, this is only a 404 page. You may have mistyped the
        address or the page has been moved to another URL.
      </p>
      <Link
        className="group flex items-center gap-2 text-cc-primary transition-all hover:opacity-75"
        href="/"
      >
        Go back home <ArrowRightIcon />
      </Link>
    </div>
  )
}
