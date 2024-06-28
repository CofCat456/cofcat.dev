import { allPosts } from 'contentlayer/generated'
import { type MDXComponents } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'
import type { RelatedMarkdownPostForPostLayout } from '~/components/md/Layout'
import type { Post } from 'contentlayer/generated'

import Layout from '~/components/md/Layout'
import { compareDesc } from '~/lib/compareDesc'
import mdxComponents from '~/lib/mdxComponents'

function getPost(slug: string) {
  const posts = allPosts.sort((a, b) => {
    if (b.pin && !a.pin) {
      return 1
    } else if (!b.pin && a.pin) {
      return -1
    }

    return compareDesc(a.createdAt, b.createdAt)
  })

  const postIndex = posts.findIndex((post: Post) => post.slug === slug)

  if (postIndex === -1) {
    notFound()
  }

  const prevFull = posts[postIndex + 1] || null
  const prevPost: RelatedMarkdownPostForPostLayout = prevFull
    ? { path: prevFull.path, title: prevFull.title }
    : null
  const nextFull = posts[postIndex - 1] || null
  const nextPost: RelatedMarkdownPostForPostLayout = nextFull
    ? { path: nextFull.path, title: nextFull.title }
    : null
  const post: Post = posts[postIndex]

  if (!post) {
    notFound()
  }

  return {
    nextPost,
    post,
    prevPost,
  }
}

export default function BlogPage({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const { nextPost, post, prevPost } = getPost(slug)

  const {
    body: { code },
  } = post

  const MDXContent = useMDXComponent(code)

  return (
    <Layout
      markdownPost={post}
      nextMarkdownPost={nextPost}
      prevMarkdownPost={prevPost}
    >
      <MDXContent components={mdxComponents as MDXComponents} />
    </Layout>
  )
}
