import { type Page, allPages } from 'contentlayer/generated';
import { type MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';

import About from '~/app/(main)/About';
import Body from '~/components/md/Body';
import mdxComponents from '~/lib/mdxComponents';

function getAboutPage() {
  const page = allPages.find((page) => page.slug === 'about-me');
  return { props: { page } };
}

export default function BlogHomePage() {
  const page = getAboutPage().props.page as Page;
  const MDXContent = useMDXComponent(page.body.code);

  return (
    <div className="mx-auto max-w-5xl">
      <About>
        <Body>
          <MDXContent components={mdxComponents as MDXComponents} />
        </Body>
      </About>
    </div>
  );
}
