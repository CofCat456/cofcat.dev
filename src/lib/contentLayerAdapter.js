import { allPages, allPosts, allProjects, Page, Post, Project } from 'contentlayer/generated';
import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files';
import { compareDesc } from 'date-fns';

export {
  allPages,
  allPosts,
  allProjects,
  defineDocumentType,
  defineNestedType,
  makeSource,
  Page,
  Post,
  Project,
};

export const allPostsNew2Old =
  allPosts?.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  }) || [];
