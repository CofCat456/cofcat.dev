import PostBody from '@/components/PostBody';

interface Props {
  children: React.ReactNode;
}

const AuthorLayout: React.FC<Props> = ({ children }: Props) => {
  return <PostBody>{children}</PostBody>;
};

export default AuthorLayout;
