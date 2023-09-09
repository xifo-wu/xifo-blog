import Image from 'next/image';
import { initHexo } from '@/lib/hexo';
import { findPostBySlug } from '@/lib/hexo/apis';
import { notFound } from 'next/navigation';
import CalendarDays from '@/components/Icons/CalendarDays';
import Tag from '@/components/Icons/Tag';

export async function generateStaticParams() {
  const hexo = await initHexo();

  // 获取所有文章数据
  const { data: posts } = hexo.database.model('Post').find({});
  return posts.map((item: { slug: any }) => ({
    slug: item.slug,
  }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await findPostBySlug(slug);

  if (!post) {
    // 找不到 post 时返回 404 not found
    return notFound();
  }

  return (
    <div className="mb-4 overflow-hidden bg-white rounded-md dark:bg-slate-900">
      {!!post.cover && (
        <div className="aspect-w-3 aspect-h-1">
          <Image src={post.cover} fill alt={post.title} className="object-cover" />
        </div>
      )}
      <div className="p-4">
        <h1 className="mb-2 text-base font-semibold md:text-xl">{post.title}</h1>

        <div className="flex flex-wrap items-center gap-2 mb-2">
          <div className="flex items-center">
            <CalendarDays className="w-4 h-4 text-slate-500" aria-label="发布时间" />
            <span className="block ml-2 text-xs text-slate-500">{post.date}</span>
          </div>
          <div className="flex items-center">
            <Tag className="w-4 h-4 text-slate-500" aria-label="分类" />
            <span className="block ml-2 text-sm text-slate-500">
              {post.categories.map((item: string) => (
                <div key={item}>{item}</div>
              ))}
            </span>
          </div>
          <div className="block ml-2 text-sm text-slate-500"> · 约 {post.wordCount} 字</div>
        </div>

        <article
          className="mx-auto"
          dangerouslySetInnerHTML={{
            __html: post.content,
          }}
        />
      </div>
    </div>
  );
}
