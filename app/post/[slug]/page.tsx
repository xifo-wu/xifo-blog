import { initHexo } from '@/hexo';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  // 初始化 Hexo
  const hexoInstance = await initHexo();

  // 获取所有文章数据
  const posts = hexoInstance.locals.get('posts').data;

  return posts.map((item: { slug: any }) => ({
    slug: item.slug,
  }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const hexo = await initHexo();

  // 直接在 React 组件中调用 Hexo 的 API
  const post = hexo.database.model('Post').findOne({ slug: slug });
  console.log(post, 'postpost');

  if (!post) {
    // 找不到 post 时返回 404 not found
    return notFound();
  }

  return (
    <article>
      <h1>{post.title}</h1>
      {post.path}

      <div
        dangerouslySetInnerHTML={{
          __html: post.content,
        }}
      />
    </article>
  );
}