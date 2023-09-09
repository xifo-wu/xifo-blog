import { initHexo } from '@/lib/hexo';

const ChangeLogsCard = async () => {
  const hexo = await initHexo();
  const category = hexo.database.model('Category').findOne({ name: '更新日志' }, { lean: true });

  const postIds = hexo.database
    .model('PostCategory')
    .find({ category_id: category._id })
    .map((item: any) => item.post_id);

  const { data: posts } = hexo.database
    .model('Post')
    .find({ _id: { $in: postIds } })
    .sort('-date')
    .limit(10);

  return (
    <div className="p-4 bg-white rounded-md dark:bg-slate-900">
      <div className="mb-2 text-sm text-gray-500">更新日志</div>
      {posts.map((item: any) => (
        <div key={item.slug}>
          <div className="mb-1 text-xs">{item.date.format('YYYY-MM-DD')}</div>
          <div className="text-sm font-semibold">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default ChangeLogsCard;
