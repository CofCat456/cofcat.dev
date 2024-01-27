import Image, { type ImageProps } from 'next/image';

type CustomImageProps = ImageProps & { base64?: string };

const imageStyle = {
  borderRadius: '6px',
};

const CustomImage = ({
  alt,
  base64,
  height,
  src,
  width,
  ...otherProps
}: CustomImageProps) => {
  if (!src) return null;

  if (typeof src === 'string' && (!height || !width)) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        alt={alt}
        height={height}
        src={src}
        style={imageStyle}
        width={width}
        {...otherProps}
      />
    );
  }

  return (
    <div className="overflow-hidden rounded-md">
      <Image
        alt={alt}
        blurDataURL={base64}
        height={height}
        layout="responsive"
        placeholder={base64 ? 'blur' : 'empty'}
        sizes="(min-width: 40em) 40em, 100vw"
        src={src}
        style={imageStyle}
        width={width}
        {...otherProps}
      />
    </div>
  );
};

export default CustomImage;
