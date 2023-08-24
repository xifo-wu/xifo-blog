import { initHexo } from '@/lib/hexo';

async function fetchData() {
  // 初始化 Hexo
  const hexo = await initHexo();

  // 获取所有文章数据
  const posts = hexo.database.model('Post').find({}).sort('-date').skip(0).limit(10)

  // 返回博客数据
  return {
    posts: posts.map((post: any) => ({
      title: post.title,
      date: post.date.toDate(),
      excerpt: post.excerpt,
      content: post.content,
      slug: post.slug,
    })),
  };
};

export default async function Home() {
  const { posts } = await fetchData();

  console.log(posts.length, "length")

  return (
    <main className="container mx-auto">
    </main>
  )
}
