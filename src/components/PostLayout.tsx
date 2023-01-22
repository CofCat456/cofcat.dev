import PageTitle from '@/components/PageTitle';
import PostBody from '@/components/PostBody';

export interface PostForPostLayout {
  date: string;
  title: string;
}

export type RelatedPostForPostLayout = {
  title: string;
  path: string;
} | null;

type Props = {
  post: PostForPostLayout;
  nextPost: RelatedPostForPostLayout;
  prevPost: RelatedPostForPostLayout;
  children: React.ReactNode;
};

export default function PostLayout({ post, nextPost, prevPost, children }: Props) {
  const { date, title } = post;

  return (
    <article>
      <div className="divide-y divide-gray-200 transition-colors dark:divide-gray-700">
        <header className="py-6">
          <div className="space-y-1 text-center">
            <div className="mb-4">
              <PageTitle>{title}</PageTitle>
            </div>
          </div>
        </header>

        <div className="divide-y divide-gray-200 pt-10 pb-8 transition-colors dark:divide-gray-700">
          <PostBody>{children}</PostBody>
        </div>

        <div
          className="divide-y divide-gray-200 pb-8 transition-colors dark:divide-gray-700"
          // style={{ gridTemplateRows: 'auto 1fr' }}
        ></div>
      </div>
    </article>
  );
}
