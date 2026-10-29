export default function customImageLoader({
  src,
}: {
  src: string;
  width?: number;
  quality?: number;
}) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
    return src;
  }
  const cleanSrc = src.startsWith('/') ? src : `/${src}`;
  return `${basePath}${cleanSrc}`;
}

