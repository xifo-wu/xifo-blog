import Pagination from '@/components/Pagination';
import PostCard from '@/components/PostCard';
import { getArticlesByIndex, getPaginationByIndex } from '@/lib/hexo/apis';
import React from 'react';

const PostPage = async ({ params }: { params: { page: string } }) => {
  const { page } = params;
  const posts = await getArticlesByIndex(parseInt(page));
  const pagination = await getPaginationByIndex(page);

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
};

export default PostPage;
