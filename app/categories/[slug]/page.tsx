// @ts-ignore
import hexoPagination from 'hexo-pagination/lib/pagination';
import { initHexo } from '@/lib/hexo';

export async function generateStaticParams() {
  const hexo = await initHexo();
  const categories = hexo.database.model('Category').find({});

  return categories.map((item: { slug: any }) => ({
    slug: item.slug,
  }));
}

export default async function Categories({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const hexo = await initHexo();
  const { config, database } = hexo;

  const category = database.model('Category').findOne({ name: decodeURI(slug) });

  const paginations = hexoPagination(
    `/categories/${slug}`,
    category.posts.sort(config.index_generator.order_by),
    {
      perPage: config.index_generator.per_page,
      format: `page/%d`,
      data: {
        __index: true,
      },
    },
  );

  const currentPagination = paginations.find(
    (pagination: any) => pagination.path === `/categories/${slug}/`,
  );

  return <div>{slug}</div>;
}
