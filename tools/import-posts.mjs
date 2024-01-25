import './env.mjs';

import { LiveExporter, toKebabCase } from '@inkdropapp/live-export';

const {
  INKDROP_USERNAME = '',
  INKDROP_PASSWORD = '',
  INKDROP_PORT,
  INKDROP_BOOKID_POSTS = '',
} = process.env;

const liveExport = new LiveExporter({
  username: INKDROP_USERNAME,
  password: INKDROP_PASSWORD,
  port: Number(INKDROP_PORT),
});

const basePath = `./content/posts`;
const publicPath = `./public/posts`;

(async () =>
  await liveExport.start({
    live: true,
    bookId: INKDROP_BOOKID_POSTS,
    preProcessNote: ({ note, frontmatter, tags }) => {
      frontmatter.title = note.title;
      frontmatter.tags = tags?.map((t) => t.name) ?? [];
      frontmatter.createdAt = note.createdAt;
      frontmatter.updatedAt = note.updatedAt;
    },
    pathForNote: ({ /* note, */ frontmatter }) => {
      // export only if it's public
      if (frontmatter.public) {
        return `${basePath}/${frontmatter.slug}.mdx`;
      } else return false;
    },
    urlForNote: ({ frontmatter }) => {
      if (frontmatter.public) {
        return `/posts/${frontmatter.slug}`;
      } else return false;
    },
    pathForFile: ({ mdastNode, /* note, file, */ extension, frontmatter }) => {
      if (frontmatter.slug && mdastNode.alt) {
        const fn = `${frontmatter.slug}_${toKebabCase(
          mdastNode.alt
        )}${extension}`;
        const res = {
          filePath: `${publicPath}/${fn}`,
          url: `/posts/${fn}`,
        };
        // If the `alt` attribute of the image is 'thumbnail', use it as a hero image
        if (mdastNode.alt === 'thumbnail') {
          frontmatter.heroImage = res.filePath;
        }
        return res;
      } else return false;
    },
    postProcessNote: ({ md }) => {
      // Remove the thumbnail image from the Markdown body
      const md2 = md.replace(/\!\[thumbnail\]\(.*\)\n/, '');
      return md2;
    },
  }))();
