import { Post } from 'contentlayer/generated';
import Balancer from 'react-wrap-balancer';

import PostWrapper from '@/components/Wrapper/PostWrapper';
import PageTitle from '@/components/Post/PostTitle';
import PostBody from '@/components/Post/PostBody';
import TableOfContents from '@/components/Post/TableOfContents';
import Comment from '@/components/Post/Comment';
import CustomLink from '@/components/Custom/CustomLink';

import formatDate from '@/lib/formatDate';

export type RelatedPostForPostLayout = {
  title: string;
  path: string;
} | null;

type Props = {
  post: Post;
  nextPost?: RelatedPostForPostLayout;
  prevPost?: RelatedPostForPostLayout;
  children: React.ReactNode;
};

const PostLayout: React.FC<Props> = ({ post, nextPost, prevPost, children }) => {
  const { title, date, body: { raw } = { raw: '' } } = post;

  return (
    <article>
      <PostWrapper>
        <div key={title} className="divide-y divide-gray-200 dark:divide-gray-700">
          <header className="py-6">
            <div className="space-y-1 text-center">
              <div className="mb-4">
                <PageTitle>{title}</PageTitle>
              </div>
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">發佈時間</dt>
                  <dd className="text-base font-medium leading-6">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </dd>
                </div>
              </dl>
            </div>
          </header>
          <div className="divide-y divide-gray-200 pt-10 pb-8 dark:divide-gray-700">
            <div
              className="pb-8 lg:grid lg:grid-cols-4 lg:gap-x-6"
              style={{ gridTemplateRows: 'auto 1fr' }}
            >
              <div className="divide-y divide-gray-200 pt-10 pb-8 dark:divide-gray-700 lg:col-span-3">
                <PostBody>{children}</PostBody>
              </div>
              <aside>
                <div className="hidden lg:sticky lg:top-24 lg:col-span-1 lg:block">
                  <TableOfContents source={raw} />
                </div>
              </aside>
            </div>
          </div>
          <div className="divide-y divide-gray-200 pb-8 dark:divide-gray-700">
            <Comment />
            <footer>
              <div className="flex flex-col gap-8 py-8 text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {prevPost && (
                  <div className="basis-6/12">
                    <p className="mb-1 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      上一篇
                    </p>
                    <CustomLink
                      href={prevPost.path}
                      className="flex gap-1 transition-colors duration-300 hover:text-sky-500 dark:hover:text-sky-400"
                    >
                      <span>&larr;</span>
                      <span className="grow">
                        <Balancer>{prevPost.title}</Balancer>
                      </span>
                    </CustomLink>
                  </div>
                )}
                {nextPost && (
                  <div className="basis-6/12">
                    <h2 className="mb-1 text-left text-xs uppercase tracking-wide text-gray-500 transition-colors duration-300 dark:text-gray-400 sm:text-right">
                      下一篇
                    </h2>
                    <CustomLink
                      href={nextPost.path}
                      className="flex gap-1 transition-colors duration-300 hover:text-sky-500 dark:hover:text-sky-400 sm:flex-row-reverse sm:text-right"
                    >
                      <span>&rarr;</span>
                      <span className="grow">
                        <Balancer>{nextPost.title}</Balancer>
                      </span>
                    </CustomLink>
                  </div>
                )}
              </div>
            </footer>
            {/* <footer>
              <div className="flex flex-col gap-8 py-8 text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {prev && (
                  <div className="basis-6/12">
                    <p className="mb-1 text-xs uppercase tracking-wide text-gray-500 transition-colors dark:text-gray-400">
                      {t('previous-article')}
                    </p>
                    <CustomLink
                      href={prev.path}
                      className="flex gap-1 text-primary-500 transition-colors hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      <span>&larr;</span>
                      <span className="grow">
                        <Balancer>{prev.title}</Balancer>
                      </span>
                    </CustomLink>
                  </div>
                )}
                {next && (
                  <div className="basis-6/12">
                    <p className="mb-1 text-left text-xs uppercase tracking-wide text-gray-500 transition-colors dark:text-gray-400 sm:text-right">
                      {t('next-article')}
                    </p>
                    <CustomLink
                      href={next.path}
                      className="flex gap-1 text-primary-500 transition-colors hover:text-primary-600 dark:hover:text-primary-400 sm:flex-row-reverse sm:text-right"
                    >
                      <span>&rarr;</span>
                      <span className="grow">
                        <Balancer>{next.title}</Balancer>
                      </span>
                    </CustomLink>
                  </div>
                )}
              </div>
            </footer> */}
          </div>
        </div>
      </PostWrapper>
    </article>
  );
};

export default PostLayout;
