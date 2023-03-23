export interface CountryNewsResponse {
    status: string
    totalResults: number
    articles: Article[]
}

type Article = {
        "source": {
            "id": string
            "name": string
        },
        "author": string
        "title": string,
        "description": string | null,
        "url": string,
        "urlToImage": string | null,
        "publishedAt": string | Date,
        "content": string | null
}