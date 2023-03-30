import { Article } from '../services/types'

export const News = (elem: Article, index: number) => {
  console.log(elem)
  const postedAt = new Date(elem.articleObject.publishedAt)
  return (
    <div key={index}>
      <div>{JSON.stringify(elem.articleObject.title)}</div>
      <div>{postedAt.toUTCString()}</div>
      <div>
        <a href={elem.articleObject.url} target="_blank" rel="noreferrer">
          Idz do artykułu
        </a>
      </div>
    </div>
  )
}
