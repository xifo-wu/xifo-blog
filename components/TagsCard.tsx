import { initHexo } from '@/lib/hexo';

const TagsCard = async () => {
  const hexo = await initHexo();
  const tags = hexo.database.model('Tag').find({});

  return (
    <div className="p-4 bg-white rounded-md dark:bg-slate-900">
      <div className="mb-2 text-sm text-gray-500">标签</div>
      <div className="flex flex-wrap gap-2 ">
        {tags.map((item: any) => (
          <div
            key={item.slug}
            className="p-0.5 text-sm transition-all rounded-md cursor-pointer hover:bg-gray-100"
          >
            #{item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagsCard;
