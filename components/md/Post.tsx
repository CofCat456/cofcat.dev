import clsx from 'clsx';
import { type Post as PostType } from 'contentlayer/generated';
import { type PropsWithChildren } from 'react';
import { Balancer } from 'react-wrap-balancer';

import { ArrowRightIcon, CalendarIcon, PostPinIcon, TagIcon } from '~/assets';
import HoverOverlay from '~/components/md/HoverOverlay';
import Link from '~/components/ui/Link';
import RelativeTime from '~/components/ui/RelativeTime';
import BottomToUpTransitionView from '~/components/ui/transition/BottomToUpTransitionView';

import styles from './body.module.scss';

function Item({
  createdAt,
  description,
  path,
  pin,
  socialImage,
  tags,
  title,
  updatedAt,
}: PostType) {
  return (
    <Link
      className="relative flex flex-col py-8 focus-visible:!shadow-none"
      href={path}
    >
      <HoverOverlay />
      <h2 className="relative break-words text-2xl font-medium">
        <Balancer>{title}</Balancer>

        {pin && (
          <PostPinIcon className="absolute right-0 top-[4px] h-5 w-5 text-red-500/70" />
        )}
      </h2>
      <main className="relative mt-8 space-y-2">
        <div className="relative overflow-hidden text-justify">
          {socialImage && (
            <div
              className={clsx(
                'float-right mb-2 ml-3 h-[5.5rem] w-[5.5rem] overflow-hidden rounded-md',
                'bg-cover bg-center bg-no-repeat'
              )}
              style={{ backgroundImage: `url(${socialImage})` }}
            />
          )}
          <p className="line-clamp-5 break-all text-sm leading-loose text-gray-800/90 dark:text-gray-200/90">
            {description}
          </p>
        </div>
      </main>
      <div className="z-10 mt-2 flex select-none flex-wrap items-center justify-end gap-4 font-bold text-zinc-400">
        <div className="flex min-w-0 flex-shrink flex-grow flex-wrap gap-2 text-sm">
          <div className="flex min-w-0 items-center space-x-1">
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
          </div>
          <div className="flex min-w-0 items-center space-x-1">
            <span className="inline-flex items-center space-x-1.5">
              <TagIcon />
              <span>{tags?.join(', ')}</span>
            </span>
          </div>
        </div>
        {!!createdAt && (
          <span className="hover:text-accent flex flex-shrink-0 select-none items-center space-x-1 text-right text-sky-300">
            <span>閱讀全文</span>
            <ArrowRightIcon className="text-lg" />
          </span>
        )}
      </div>
    </Link>
  );
}

function List({ posts }: { posts: PostType[] }) {
  return (
    <ul className="mx-auto mt-12 max-w-2xl px-2 sm:mt-20 lg:px-0 2xl:max-w-3xl">
      {posts.map((post, index) => {
        const { slug } = post;

        return (
          <BottomToUpTransitionView delay={index / 10} key={slug}>
            <Item {...post} />
          </BottomToUpTransitionView>
        );
      })}
    </ul>
  );
}

function Body({ children }: PropsWithChildren) {
  return (
    <div
      className={clsx(
        'prose max-w-none transition-colors dark:prose-dark',
        styles.postBody
      )}
    >
      {children}
    </div>
  );
}

export const Post = {
  Body,
  Item,
  List,
} as const;
