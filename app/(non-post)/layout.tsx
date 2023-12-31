import AboutMeCard from '@/components/AboutMeCard';
import CategoriesCard from '@/components/CategoriesCard';
import ChangeLogsCard from '@/components/ChangeLogsCard';
import PostsInfoCard from '@/components/PostsInfoCard';
import TagsCard from '@/components/TagsCard';

const NonPostLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="flex flex-col col-span-4 gap-4 sm:col-span-1">
        <AboutMeCard />
        <PostsInfoCard />
        <CategoriesCard />
        <TagsCard />
      </div>
      <div className="col-span-4 sm:col-span-2">{children}</div>
      <div className="col-span-4 sm:col-span-1">
        <ChangeLogsCard />
      </div>
    </div>
  );
};

export default NonPostLayout;
