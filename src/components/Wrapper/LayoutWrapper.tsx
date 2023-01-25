import Header from '../Header';
import Footer from '../Footer';

interface Props {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between bg-cc-bg text-cc-text transition-colors dark:bg-cc-dark-bg dark:text-cc-dark-bg">
      <Header />
      <main className="mb-auto flex-1 px-4 pt-8 sm:p-10 md:p-0">
        <div className="mx-auto md:py-10">
          <div className="mx-auto w-full">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
