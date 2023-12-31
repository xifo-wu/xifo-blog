import Pagination from '@/components/Pagination';
import PostCard from '@/components/PostCard';
import { getArticlesByIndex, getPaginationByIndex } from '@/lib/hexo/apis';

export default async function Home() {
  const posts = await getArticlesByIndex(1);
  const pagination = await getPaginationByIndex(1);

  return (
    <main className="container mx-auto">
      <div>
        {posts.map((item: any) => (
          <PostCard key={item.slug} data={item} />
        ))}
        <Pagination data={pagination} />
      </div>
    </main>
  );
}
