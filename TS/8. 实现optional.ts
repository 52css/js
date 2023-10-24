interface ArticleVO {
  title: string;
  content: string;
  author: string;
  date: Date;
  readCount: number;
}

interface CreateArticleRequest {
  title: string;
  content: string;
  author: string;
  date?: Date;
  readCount?: number;
}

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
type CreateArticleRequest2 = Optional<CreateArticleRequest, 'date' | 'readCount'>;
const article: CreateArticleRequest2 = {
  title: 'title',
  content: 'content',
  author: 'author',
  date: new Date(),
  readCount: 0,
}

declare function createArticle(data: CreateArticleRequest): Promise<ArticleVO>;

// function createArticle(data: CreateArticle) {}
