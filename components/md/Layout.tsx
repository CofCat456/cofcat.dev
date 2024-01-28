'use client';

import { motion } from 'framer-motion';
import { type PropsWithChildren } from 'react';
import { Balancer } from 'react-wrap-balancer';

import { ArrowLeftIcon, ArrowRightIcon, CalendarIcon, TagIcon } from '~/assets';
import FABContainer from '~/components/FABContainer';
// import Comment from '~/components/md/Comment';
import { Post } from '~/components/md/Post';
import Link from '~/components/ui/Link';
import RelativeTime from '~/components/ui/RelativeTime';
import { type MarkdownPost } from '~/types';

import TableOfContents from './TableOfContents';

export type RelatedMarkdownPostForPostLayout = {
  path: string;
  title: string;
} | null;

type MarkdownLayoutProps<T> = PropsWithChildren<{
  markdownPost: T;
  nextMarkdownPost?: RelatedMarkdownPostForPostLayout;
  prevMarkdownPost?: RelatedMarkdownPostForPostLayout;
}>;

export default function MarkdownLayout<T extends MarkdownPost>(
  props: MarkdownLayoutProps<T>
) {
  const { children, markdownPost, nextMarkdownPost, prevMarkdownPost } = props;

  const {
    body: { raw },
    createdAt,
    description,
    tags,
    title,
    updatedAt,
  } = markdownPost;

  return (
    <div className="mx-auto max-w-2xl lg:max-w-5xl">
      <div className="w-full md:flex md:justify-between xl:relative">
        <div className="md:flex-1 md:shrink-0">
          <article key={title}>
            <div className="mx-auto mt-8 w-full lg:mt-[80px]">
              <header className="py-4 md:py-8">
                <motion.h1
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 w-full text-center text-3xl font-bold tracking-tight"
                  initial={{ opacity: 0, y: 8 }}
                  transition={{
                    damping: 20,
                    delay: 0.1,
                    duration: 0.15,
                    stiffness: 150,
                    type: 'spring',
                  }}
                >
                  <Balancer>{title}</Balancer>
                </motion.h1>
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 flex w-full items-center justify-center space-x-4 text-sm font-medium text-zinc-600/80 dark:text-zinc-400/80"
                  initial={{ opacity: 0, y: 10 }}
                  transition={{
                    damping: 30,
                    delay: 0.2,
                    duration: 0.2,
                    stiffness: 150,
                    type: 'spring',
                  }}
                >
                  {!!createdAt && createdAt === updatedAt ? (
                    <>
                      <CalendarIcon />
                      <span>
                        <RelativeTime date={createdAt} />
                      </span>
                    </>
                  ) : (
                    <>
                      <CalendarIcon />
                      <span>
                        <RelativeTime date={updatedAt} />
                        (已編輯)
                      </span>
                    </>
                  )}
                  <span className="inline-flex items-center space-x-1.5">
                    <TagIcon />
                    <span>{tags?.join(', ')}</span>
                  </span>
                </motion.div>
                {description && (
                  <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    className="mx-auto my-4 w-full max-w-4xl text-sm font-medium text-zinc-500"
                    initial={{ opacity: 0, y: 8 }}
                    transition={{
                      damping: 20,
                      delay: 0.23,
                      duration: 0.2,
                      stiffness: 150,
                      type: 'spring',
                    }}
                  >
                    <div className="space-y-2 rounded-xl border border-gray-200 p-4 dark:border-neutral-800">
                      <p className="leading-loose">{description}</p>
                    </div>
                  </motion.div>
                )}
              </header>
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 divide-y divide-gray-200 dark:divide-gray-700"
                initial={{ opacity: 0, y: 8 }}
                transition={{
                  damping: 20,
                  delay: 0.28,
                  duration: 0.2,
                  stiffness: 150,
                  type: 'spring',
                }}
              >
                <div
                  className="pb-8 lg:grid lg:grid-cols-4 lg:gap-x-6"
                  style={{ gridTemplateRows: 'auto 1fr' }}
                >
                  <div className="divide-y divide-gray-200 dark:divide-gray-700 lg:col-span-3">
                    <Post.Body>{children}</Post.Body>
                  </div>
                  <aside>
                    <div className="hidden lg:sticky lg:top-24 lg:col-span-1 lg:block">
                      <TableOfContents source={raw} />
                    </div>
                  </aside>
                </div>
              </motion.div>
              <div className="divide-y divide-gray-200 pb-8 dark:divide-gray-700">
                {/* <Comment /> */}
                <footer>
                  <div className="flex flex-col gap-8 py-8 text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                    {prevMarkdownPost && (
                      <div className="basis-6/12">
                        <p className="mb-1 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          上一篇
                        </p>
                        <Link
                          className="flex items-center gap-1 transition-colors duration-300 hover:text-sky-500 dark:hover:text-sky-400"
                          href={prevMarkdownPost.path}
                        >
                          <ArrowLeftIcon />
                          <span className="grow">
                            <Balancer>{prevMarkdownPost.title}</Balancer>
                          </span>
                        </Link>
                      </div>
                    )}
                    {nextMarkdownPost && (
                      <div className="basis-6/12">
                        <h2 className="mb-1 text-left text-xs uppercase tracking-wide text-gray-500 transition-colors duration-300 dark:text-gray-400 sm:text-right">
                          下一篇
                        </h2>
                        <Link
                          className="flex items-center gap-1 transition-colors duration-300 hover:text-sky-500 dark:hover:text-sky-400 sm:flex-row-reverse sm:text-right"
                          href={nextMarkdownPost.path}
                        >
                          <ArrowRightIcon />
                          <span className="grow">
                            <Balancer>{nextMarkdownPost.title}</Balancer>
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>
                </footer>
              </div>
            </div>
            <FABContainer />
          </article>
        </div>
      </div>
    </div>
  );
}
