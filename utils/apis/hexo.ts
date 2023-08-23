import { initHexo } from '@/hexo';
import { basename } from 'path';

// 获取所有文章的路径，供 Next.js 的 getStaticPaths 构建路径索引时使用
export const fetchAllPostsPaths = async () => {
  const hexo = await initHexo();
  const posts = hexo.database.model('Post').find({}).sort('-date');

  // TODO Fix Any
  return posts.map((post: any) => basename(post.slug));
};
