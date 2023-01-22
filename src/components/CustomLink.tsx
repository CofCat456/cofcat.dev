interface Props {
  href: string;
}

const CustomLink: React.FC<Props> = ({ href, ...rest }) => {
  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />;
};

export default CustomLink;
