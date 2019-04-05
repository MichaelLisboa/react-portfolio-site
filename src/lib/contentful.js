import {
    createClient
} from 'contentful'

const SPACE_ID = '1nc0h0ipk4bl'
const ACCESS_TOKEN =
    '147d4cac6f53e3896d38a1709594a7c3d965128b7ae9d493ea882d7de3bc901a'
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
        'fields.entryKey': slug
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
