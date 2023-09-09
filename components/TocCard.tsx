import { findPostBySlug } from '@/lib/hexo/apis';
import styles from './TocCard.module.css';

const TocCard = async ({ slug }: { slug: string }) => {
  const post = await findPostBySlug(slug);
  return (
    <div className="p-4 overflow-hidden bg-white rounded-md dark:bg-slate-900">
      <div className="mb-2 text-sm text-gray-500">目录</div>
      <div
        className={styles.toc}
        dangerouslySetInnerHTML={{
          __html: post.toc,
        }}
      />
    </div>
  );
};

export default TocCard;
