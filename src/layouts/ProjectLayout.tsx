import { Project } from 'contentlayer/generated';

import PostWrapper from '@/components/Wrapper/PostWrapper';
import PageTitle from '@/components/Post/PostTitle';
import PostBody from '@/components/Post/PostBody';
import TableOfContents from '@/components/Post/TableOfContents';

import formatDate from '@/lib/formatDate';

export type RelatedPostForPostLayout = {
  title: string;
  path: string;
} | null;

type Props = {
  project: Project;
  children: React.ReactNode;
};

const PostLayout: React.FC<Props> = ({ project, children }) => {
  const { title, date, body: { raw } = { raw: '' } } = project;

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
        </div>
      </PostWrapper>
    </article>
  );
};

export default PostLayout;
