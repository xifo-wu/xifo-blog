// @ts-ignore
import Hexo from 'hexo';
import fs from 'fs';
import { join } from 'path';
import { cache } from 'react';

let __SECRET_HEXO_INSTANCE__: Hexo | null = null;

export const initHexo = cache(async () => {
  if (__SECRET_HEXO_INSTANCE__) {
    return __SECRET_HEXO_INSTANCE__;
  }
  const hexo = new Hexo(process.cwd(), {
    silent: true,
    // 在 next dev 时包含草稿
    draft: process.env.NODE_ENV !== 'production',
  });

  const dbPath = join(hexo.base_dir, 'db.json');
  if (process.env.NODE_ENV !== 'production') {
    if (fs.existsSync(dbPath)) {
      await fs.promises.unlink(dbPath);
    }
  }

  await hexo.init();
  await hexo.load();

  // @ts-ignore
  if (hexo.env.init && hexo._dbLoaded) {
    if (!fs.existsSync(dbPath)) {
      if (process.env.NODE_ENV === 'production') {
        // @ts-ignore
        await hexo.database.save();
      }
    }
  }

  __SECRET_HEXO_INSTANCE__ = hexo;
  return hexo;
});
