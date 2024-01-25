import { allPosts } from 'contentlayer/generated';
import Balancer from 'react-wrap-balancer';

import { Post } from '~/components/md/Post';
import { compareDesc } from '~/lib/compareDesc';

const title = '我的部落格';
const description =
  '寫文章是我很喜歡的一種紀錄生活的方式，不論是學習、生活或是心情鬱悶的時候，我喜歡用文章的方式記錄下來自己當下最真實的感受。同時我也喜歡把一些好的技術或是自己碰到的坑紀錄下來，以此傳遞給給更多的人，希望能幫助到你正在看文章的你。';

export const metadata = {
  description,
  openGraph: {
    description,
    title,
  },
  title,
};

export default function PostPage() {
  const posts = allPosts.sort((a, b) => {
    if (b.pin && !a.pin) {
      return 1;
    } else if (!b.pin && a.pin) {
      return -1;
    }

    return compareDesc(a.createdAt, b.createdAt);
  });

  return (
    <div className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          歡迎來到我的部落格
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
      </header>
      <Post.List posts={posts} />
    </div>
  );
}
