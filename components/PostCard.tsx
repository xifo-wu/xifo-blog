import Image from 'next/image';
import CalendarDays from './Icons/CalendarDays';
import Tag from './Icons/Tag';
import Link from 'next/link';

interface PostCardProps {
  data: any;
}

const PostCard = ({ data }: PostCardProps) => {
  return (
    <div
      key={data.slug}
      className="mb-4 overflow-hidden bg-white rounded-md dark:bg-slate-950"
    >
      {!!data.cover && (
        <div className="aspect-w-3 aspect-h-1">
          <Image src={data.cover} fill alt={data.title} className="object-cover" />
        </div>
      )}
      <div className="p-4">
        <Link href={data.path} className="text-base font-semibold md:text-xl">
          {data.title}
        </Link>
        <div className="flex flex-wrap items-center gap-2 mt-2">
          <div className="flex items-center">
            <CalendarDays className="w-4 h-4 text-slate-500" aria-label="发布时间" />
            <span className="block ml-2 text-xs text-slate-500">{data.date}</span>
          </div>
          <div className="flex items-center">
            <Tag className="w-4 h-4 text-slate-500" aria-label="分类" />
            <span className="block ml-2 text-sm text-slate-500">
              {data.categories.map((item: string) => (
                <div key={item}>{item}</div>
              ))}
            </span>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-500 sm:text-base">{data.excerpt}</p>

        <div className="flex items-center justify-between mt-3">
          <Link href={data.path} className="px-3 py-2 text-sm rounded-md bg-blue-50">
            继续阅读
          </Link>
          <div className="text-xs text-gray-500">最后修改于：{data.updated}</div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
