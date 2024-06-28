import type { Post, Project } from 'contentlayer/generated'

export type MarkdownType = {
  pin?: boolean
  type: 'Post' | 'Project'
}

// 定義一個找到共有屬性的工具型別
export type CommonProperties<T, U> = {
  [K in Extract<keyof T, keyof U>]: T[K]
}

export type MarkdownPost = Omit<
  CommonProperties<Post, Project>,
  'pin' | 'type'
> &
  MarkdownType
