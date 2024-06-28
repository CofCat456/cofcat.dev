import NextLink from 'next/link'

import { GitHubBrandIcon } from '~/assets'
import Link from '~/components/ui/Link'
import { footerConfig } from '~/config/info'
import { navigationItems } from '~/config/nav'
import siteMetadata from '~/config/siteMetadata'

function Links() {
  return (
    <nav className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
      {navigationItems.map(({ path, title }) => (
        <Link href={path} key={title}>
          {title}
        </Link>
      ))}
    </nav>
  )
}

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="sm:px-8">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="border-t border-zinc-100 py-10 dark:border-zinc-700/40">
            <div className="mx-4 mb-10 space-x-2 space-y-3 md:mx-0 md:mb-4 md:space-x-4 md:space-y-0">
              <b className="font-medium">關於</b>
              {footerConfig.map((info) => (
                <NextLink
                  className="font-bold text-[#D8D8D9E6] no-underline hover:underline"
                  href={info.href}
                  key={info.title}
                  target="_blank"
                >
                  {info.title}
                </NextLink>
              ))}
            </div>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="inline-flex items-center text-sm text-zinc-500/80 dark:text-zinc-400/80">
                &copy; {new Date().getFullYear()} CofCat
                <span className="mx-1">：</span>
                <GitHubBrandIcon className="mr-1" />
                <Link href={siteMetadata.social.github}>GitHub</Link>
              </div>
              <Links />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
