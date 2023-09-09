import { initHexo } from '@/lib/hexo';

const CategoriesCard = async () => {
  const hexo = await initHexo();
  const categories = hexo.database.model('Category').find({});
  const filteredCategories = categories.filter((category: any) => !category.parent);

  return (
    <div className="p-4 bg-white rounded-md dark:bg-slate-900">
      <div className="mb-2 text-sm text-gray-500">分类</div>
      {filteredCategories.map((item: any) => (
        <div
          key={item.slug}
          className="flex items-center justify-between px-4 py-2 transition-all rounded-md hover:bg-gray-100"
        >
          <div>{item.name}</div>
          <div>{item.posts.length}</div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesCard;
