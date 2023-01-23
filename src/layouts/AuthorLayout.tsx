import PostBody from '@/components/Post/PostBody';

interface Props {
  children: React.ReactNode;
}

const AuthorLayout: React.FC<Props> = ({ children }: Props) => {
  return <PostBody>{children}</PostBody>;
};

export default AuthorLayout;
