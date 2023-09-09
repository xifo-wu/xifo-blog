import Pagination from '@/components/Pagination';
import PostCard from '@/components/PostCard';
// @ts-ignore
import hexoIndexGenerator from 'hexo-generator-index/lib/generator';
import { initHexo } from '@/lib/hexo';
import { getArticlesByIndex, getPaginationByIndex } from '@/lib/hexo/apis';
import React from 'react';

export async function generateStaticParams() {
  const hexo = await initHexo();
  const data = hexoIndexGenerator.call(hexo, hexo.locals.toObject());

  return data.map((item: { current: number }) => ({
    page: item.current,
  }));
}

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
