import { LiveExporter, toKebabCase } from '@inkdropapp/live-export'

import './env.mjs'

const {
  INKDROP_BOOKID_POSTS = '',
  INKDROP_PASSWORD = '',
  INKDROP_PORT,
  INKDROP_USERNAME = '',
} = process.env

const liveExport = new LiveExporter({
  password: INKDROP_PASSWORD,
  port: Number(INKDROP_PORT),
  username: INKDROP_USERNAME,
})

const basePath = `./content/posts`
const publicPath = `./public/posts`

;(async () =>
  await liveExport.start({
    bookId: INKDROP_BOOKID_POSTS,
    live: true,
    pathForFile: ({ extension, /* note, file, */ frontmatter, mdastNode }) => {
      if (frontmatter.slug && mdastNode.alt) {
        const fn = `${frontmatter.slug}_${toKebabCase(
          mdastNode.alt,
        )}${extension}`
        const res = {
          filePath: `${publicPath}/${fn}`,
          url: `/posts/${fn}`,
        }
        // If the `alt` attribute of the image is 'thumbnail', use it as a hero image
        if (mdastNode.alt === 'thumbnail') {
          frontmatter.heroImage = res.filePath
        }
        return res
      } else return false
    },
    pathForNote: ({ /* note, */ frontmatter }) => {
      // export only if it's public
      if (frontmatter.public) {
        return `${basePath}/${frontmatter.slug}.mdx`
      } else return false
    },
    postProcessNote: ({ md }) => {
      // Remove the thumbnail image from the Markdown body
      const md2 = md.replace(/\!\[thumbnail\]\(.*\)\n/, '')
      return md2
    },
    preProcessNote: ({ frontmatter, note, tags }) => {
      frontmatter.title = note.title
      frontmatter.tags = tags?.map((t) => t.name) ?? []
      frontmatter.createdAt = note.createdAt
      frontmatter.updatedAt = note.updatedAt
    },
    urlForNote: ({ frontmatter }) => {
      if (frontmatter.public) {
        return `/posts/${frontmatter.slug}`
      } else return false
    },
  }))()
