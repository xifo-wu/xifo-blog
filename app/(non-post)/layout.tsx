import AboutMeCard from '@/components/AboutMeCard';
import PostsInfoCard from '@/components/PostsInfoCard';

const NonPostLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="flex flex-col col-span-4 gap-4 sm:col-span-1">
        <AboutMeCard />
        <PostsInfoCard />
      </div>
      <div className="col-span-4 sm:col-span-2">{children}</div>
      <div className="col-span-4 sm:order-span-1">xxx</div>
    </div>
  );
};

export default NonPostLayout;
