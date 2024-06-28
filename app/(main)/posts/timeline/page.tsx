import Balancer from 'react-wrap-balancer'
import { allPosts } from 'contentlayer/generated'

import { Post } from '~/components/md/Post'
import { compareDesc } from '~/lib/compareDesc'

const title = '生活'
const description = '我喜歡用文字記錄我的生活，紀錄我成為工程師的點點滴滴'

export const metadata = {
  description,
  openGraph: {
    description,
    title,
  },
  title,
}

export default function TimeLinePage() {
  const posts = allPosts
    .filter((post) => post.tags.includes('心得'))
    .sort((a, b) => {
      if (b.pin && !a.pin) {
        return 1
      } else if (!b.pin && a.pin) {
        return -1
      }

      return compareDesc(a.createdAt, b.createdAt)
    })

  return (
    <div className="mt-6 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          歡迎來到我的生活
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
      </header>
      <Post.List posts={posts} />
    </div>
  )
}
