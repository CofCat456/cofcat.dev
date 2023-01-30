import { Provider as BalancerProvider } from 'react-wrap-balancer';

import Header from '../Header';
import Footer from '../Footer';

interface Props {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<Props> = ({ children }) => {
  return (
    <BalancerProvider>
      <div className="flex min-h-screen w-full flex-col justify-between bg-cc-bg dark:bg-cc-dark-bg">
        <Header />
        <main className="mb-auto flex flex-1 items-stretch px-4 pt-8 sm:p-10 md:p-0">
          <div className="mx-auto w-full md:py-10">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </BalancerProvider>
  );
};

export default LayoutWrapper;
