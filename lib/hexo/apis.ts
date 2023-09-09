// @ts-nocheck
import hexoIndexGenerator from 'hexo-generator-index/lib/generator';
import toc from 'hexo/lib/plugins/helper/toc';
import getWordCount from './getWordCount';
import { stripHTML } from 'hexo/lib/plugins/helper/format';
import { initHexo } from '.';

function countWordsAndFormat(wordCount: number) {
  if (wordCount > 10000) {
    return [(wordCount / 10000).toFixed(2), '万字'];
  } else if (wordCount > 1000) {
    return [(wordCount / 1000).toFixed(2), '千字'];
  } else {
    return [wordCount, '字'];
  }
}

export async function getPostInfo() {
  const hexo = await initHexo();
  const { data: posts } = hexo.database.model('Post').find({});
  const tags = hexo.database.model('Tag').find({});
  const categories = hexo.database.model('Category').find({});

  let wordCount = 0;
  const postCount = posts.length;
  for (let i = 0; i < postCount; i++) {
    const [cd, en] = getWordCount(posts[i].content);
    wordCount += cd + en;
  }

  const [count, wordCountUnit] = countWordsAndFormat(wordCount);

  return {
    postCount,
    tagCount: tags.length,
    categoryCount: categories.length,
    wordCount: count,
    wordCountUnit,
  };
}

export async function getArticlesByIndex(index: number) {
  const hexo = await initHexo();
  const data = hexoIndexGenerator.call(hexo, hexo.locals.toObject());
  let matchIndexPage = data.find((item: any) => item.data.current == index);

  return matchIndexPage.data.posts.find({}).map((post: any) => {
    return {
      ...post,
      title: post.title,
      date: post.date.format('YYYY-MM-DD'),
      updated: post.updated.format('YYYY-MM-DD'),
      articlePath: post.articlePath,
      more: post.more,
      excerpt: post.excerpt || stripHTML(post.content).substring(0, 200) + '……',
      tags: post.tags.find({}).map((item) => item.name),
      categories: post.categories.find({}).map((item) => item.name),
      slug: post.slug,
    };
  });
}

export async function getPaginationByIndex(index) {
  const hexo = await initHexo();
  const data = hexoIndexGenerator.call(hexo, hexo.locals.toObject());
  let matchIndexPage = data.find((item) => item.data.current == index);

  return {
    path: matchIndexPage.path,
    base: matchIndexPage.data.base,
    total: matchIndexPage.data.total,
    current: matchIndexPage.data.current,
    current_url: matchIndexPage.data.current_url,
    prev: matchIndexPage.data.prev,
    prev_link: matchIndexPage.data.prev_link,
    next: matchIndexPage.data.next,
    next_link: matchIndexPage.data.next_link,
  };
}

export async function findPostBySlug(slug: string) {
  const hexo = await initHexo();

  // 直接在 React 组件中调用 Hexo 的 API
  const post = hexo.database.model('Post').findOne({ slug: slug });

  const [cn, en] = getWordCount(post.content);
  const wordCount = cn + en;

  return {
    ...post,
    date: post.date.format('YYYY-MM-DD'),
    updated: post.updated.format('YYYY-MM-DD'),
    wordCount,
    categories: post.categories.find({}).map((item) => item.name),
    toc: toc(post.content, {
      list_number: false,
      // max_depth: 4,
    }),
  };
}
