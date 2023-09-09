import Link from 'next/link';
import { initHexo } from '@/lib/hexo';
import { Permanent_Marker } from 'next/font/google';

const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  weight: '400',
});

const Header = async () => {
  const hexo = await initHexo();
  const categories = hexo.database.model('Category').find({});
  const filteredCategories = categories.filter((category: any) => !category.parent);

  return (
    <div>
      <div className="container flex items-center justify-between mx-auto mb-8">
        <Link href="/" className="flex items-center">
          <h1 className={`${permanentMarker.className} inline-block text-xl font-bold`}>
            {hexo.config.title}
          </h1>
        </Link>

        {/* <div className="flex gap-4">
          {filteredCategories.map((category: any) => {
            return (
              <Link
                key={category.path}
                className="text-slate-900 hover:text-blue-500 hover:-translate-y-0.5 text-lg transition-all duration-150 ease-out"
                href={`/categories/${category.name}`}
              >
                {category.name}
              </Link>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default Header;
