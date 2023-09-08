import { initHexo } from '.';
import getWordCount from './getWordCount';

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

  const [count, wordCountUnit] = countWordsAndFormat(wordCount)

  return {
    postCount,
    tagCount: tags.length,
    categoryCount: categories.length,
    wordCount: count,
    wordCountUnit,
  };
}
