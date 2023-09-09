import { initHexo } from '@/lib/hexo';
import Link from 'next/link';

interface PaginationProps {
  data: {
    path: string;
    base: string;
    total: number;
    current: number;
    current_url: string;
    prev: number;
    prev_link: string;
    next: number;
    next_link: string;
  };
}

const Pagination = async ({ data }: PaginationProps) => {
  const hexo = await initHexo();
  const { prev, next } = data;

  const prevLink = `/${hexo.config.pagination_dir}/${prev}`;
  const nextLink = `/${hexo.config.pagination_dir}/${next}`;

  // Array.from({length: myNumber}, (_, i) => i + 1);

  return (
    <div className="flex justify-between">
      <div>
        {prev > 0 && (
          <Link href={prevLink} className="px-3 py-2 text-sm text-white bg-blue-500 rounded-md">
            上一页
          </Link>
        )}
      </div>
      <div>
        {!!next && (
          <Link href={nextLink} className="px-3 py-2 text-sm text-white bg-blue-500 rounded-md">
            下一页
          </Link>
        )}
      </div>
    </div>
  );
};

export default Pagination;
