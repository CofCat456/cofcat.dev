import type { NextPage } from 'next';

import { allPosts } from '@/lib/contentLayerAdapter';
import styles from '@/styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          {/* {posts.map((post) => (
            <a key={post.slug} href={post.path} className={styles.card}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </a>
          ))} */}
        </div>
      </main>
    </div>
  );
};

export default Home;
