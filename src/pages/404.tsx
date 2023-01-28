import CustomLink from '@/components/Custom/CustomLink';

import ArrowRight from '@/assets/icon/ArrowRight.svg';
import Error from '@/assets/icon/Error';

const ErrorPage = () => {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-y-6 px-5 py-4">
      <Error />
      <p>You have found a secret place.</p>
      <p>
        Unfortunately, this is only a 404 page. You may have mistyped the address or the page has
        been moved to another URL.
      </p>
      <CustomLink
        className="group flex items-center text-sky-400 transition-all hover:opacity-75"
        href="/"
      >
        Go back home <ArrowRight />
      </CustomLink>
    </div>
  );
};

export default ErrorPage;
