type Optional<T, K extends keyof T> = Omit<T, K> & // 缺省字段，排除部分字段
  Partial<
    Pick<T, K> // 获取部分字段
  >; // 设置可选;

interface ArticleVO {
  title: string;
  content: string;
  author: string;
  date: Date;
  readCount: number;
}
type CreateArticle = Optional<ArticleVO, "author" | "date" | "readCount">;

declare function createArticle(data: CreateArticle): Promise<ArticleVO>;

// function createArticle(data: CreateArticle) {}
