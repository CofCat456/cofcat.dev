// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Page = defineDocumentType(() => ({
  computedFields: {
    path: {
      resolve: (page) => `/pages/${page._raw.flattenedPath}`,
      type: 'string',
    },
  },
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
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
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

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Page, Post],
});
