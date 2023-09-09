import { getPostInfo } from '@/lib/hexo/apis';

const CardItem = ({ value, label }: { value: number | string; label: number | string }) => {
  return (
    <div className="text-center">
      <div className="text-lg">{value}</div>
      <div>{label}</div>
    </div>
  );
};

const PostsInfoCard = async () => {
  const { postCount, categoryCount, tagCount, wordCount, wordCountUnit } =
    (await getPostInfo()) || {};

  return (
    <div className="flex items-center justify-between gap-4 p-4 bg-white rounded-md dark:bg-slate-900">
      <CardItem value={postCount} label="文章" />
      <CardItem value={categoryCount} label="分类" />
      <CardItem value={tagCount} label="标签" />
      <CardItem value={wordCount} label={wordCountUnit} />
    </div>
  );
};

export default PostsInfoCard;
