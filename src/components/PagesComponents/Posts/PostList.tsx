import { Post } from 'contentlayer/generated';

import CustomLink from '@/components/Custom/CustomLink';

import formatDate from '@/lib/formatDate';

type Props = {
  posts: Post[];
};

export default function PostList({ posts = [] }: Props) {
  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {posts.map((post) => {
        const { slug, date, title, description, path } = post;
        return (
          <li key={slug} className="group">
            <CustomLink href={path}>
              <article className="space-y-2 rounded-xl p-4 group-hover:bg-neutral-100 dark:group-hover:bg-neutral-800 xl:grid xl:grid-cols-4  xl:items-baseline xl:space-y-0">
                <dl>
                  <dt className="sr-only">locale</dt>
                  <dd className="text-sm font-medium leading-6 text-neutral-500 dark:text-neutral-400 md:text-base">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </dd>
                </dl>
                <div className="space-y-3 xl:col-span-3">
                  <div>
                    <h3 className="text-lg font-bold tracking-tight sm:text-xl md:text-2xl">
                      {title}
                    </h3>
                  </div>
                  <div className="prose prose-sm max-w-none text-neutral-500 dark:text-neutral-400 md:prose-base">
                    {description}
                  </div>
                </div>
              </article>
            </CustomLink>
          </li>
        );
      })}
    </ul>
  );
}
