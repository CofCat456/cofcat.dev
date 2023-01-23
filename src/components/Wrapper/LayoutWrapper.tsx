import Header from '../Header';
import Footer from '../Footer';

interface Props {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between">
      <Header />
      <main className="mb-auto flex-1 bg-cc-bg text-cc-text transition-colors dark:bg-cc-dark-bg dark:text-cc-dark-text">
        <div className="mx-auto max-w-screen-md px-6 py-10 md:py-10">
          <div className="mx-auto w-full">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
