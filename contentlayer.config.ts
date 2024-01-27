// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';

export const Page = defineDocumentType(() => ({
  contentType: 'mdx',
  fields: {
    date: { required: true, type: 'date' },
    public: { required: true, type: 'boolean' },
    slug: { required: true, type: 'string' },
    title: { required: true, type: 'string' },
  },
  filePathPattern: `**/*.mdx`,
  name: 'Page',
}));

export const Post = defineDocumentType(() => ({
  computedFields: {
    path: {
      resolve: (post) => `/${post._raw.flattenedPath}`,
      type: 'string',
    },
  },
  contentType: 'mdx',
  fields: {
    createdAt: { required: true, type: 'number' },
    description: { required: true, type: 'string' },
    pin: { required: true, type: 'boolean' },
    public: { required: true, type: 'boolean' },
    slug: { required: true, type: 'string' },
    socialImage: { required: true, type: 'string' },
    tags: { of: { type: 'string' }, required: true, type: 'list' },
    title: { required: true, type: 'string' },
    updatedAt: { required: true, type: 'number' },
  },
  filePathPattern: `**/*.mdx`,
  name: 'Post',
}));

export const Project = defineDocumentType(() => ({
  computedFields: {
    path: {
      resolve: (project) => `/${project._raw.flattenedPath}`,
      type: 'string',
    },
  },
  contentType: 'mdx',
  fields: {
    createdAt: { required: true, type: 'number' },
    description: { required: true, type: 'string' },
    public: { required: true, type: 'boolean' },
    slug: { required: true, type: 'string' },
    socialImage: { required: true, type: 'string' },
    tags: { of: { type: 'string' }, required: true, type: 'list' },
    title: { required: true, type: 'string' },
    updatedAt: { required: true, type: 'number' },
  },
  filePathPattern: `**/*.mdx`,
  name: 'Project',
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Page, Post, Project],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      [rehypePrism, { ignoreMissing: true }],
    ],
  },
});
