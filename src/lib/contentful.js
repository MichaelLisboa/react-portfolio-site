import {
    createClient
} from 'contentful'

const SPACE_ID = process.env.REACT_APP_CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;
const client = createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})

export function getPosts () {
    return client.getEntries({
        content_type: 'portfolioDetail'
    })
}

export function getPostBySlug (slug) {
    return client.getEntries({
        'content_type': 'portfolioDetail',
        'fields.entrySlug': slug
    })
}

export function getBlogPosts () {
    return client.getEntries({
        content_type: 'blog'
    })
}

export function getBlogPostBySlug (slug) {
    return client.getEntries({
        'content_type': 'blog',
        'fields.path': slug
    })
}

export function getHeroCtas () {
    return client.getEntries({
        content_type: 'heroCta'
    })
}
