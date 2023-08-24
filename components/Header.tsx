import Image from 'next/image';
import Link from 'next/link';
import { initHexo } from '@/lib/hexo';

const Header = async () => {
  const hexo = await initHexo();
  const categories = hexo.database.model('Category').find({});
  // TODO 支持树状结构
  const filteredCategories = categories.filter((category: any) => !category.parent);

  return (
    <div>
      <div className="container flex items-center justify-between mx-auto">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt={hexo.config.title} width={40} height={40} priority />
          <h1 className="inline-block ml-4 text-xl font-bold">{hexo.config.title}</h1>
        </Link>

        <div className="flex gap-4">
          {filteredCategories.map((category: any) => {
            return (
              <Link
                key={category.path}
                className="text-slate-900 hover:text-green-500 hover:-translate-y-0.5 text-lg transition-all duration-150 ease-out"
                href={`/categories/${category.name}`}
              >
                {category.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
