import { initHexo } from '@/lib/hexo';
import Image from 'next/image';
import Link from 'next/link';

const AboutMeCard = async () => {
  const hexo = await initHexo();
  const { config } = hexo;

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 bg-white rounded-md dark:bg-slate-900">
      <Image
        src={config.avatar}
        width={128}
        height={128}
        alt={config.title}
        className="rounded-md"
      />
      <span className="text-lg font-bold">{config.author}</span>
      <span className="block text-sm text-center text-gray-400">{config.description}</span>

      <div className="flex gap-4">
        <Link href={config.github} target="_blank">
          <Image src="/github.svg" width={16} height={16} alt="github" />
        </Link>
        <Image src="/rss.svg" width={16} height={16} alt="rss" />
      </div>
    </div>
  );
};

export default AboutMeCard;
