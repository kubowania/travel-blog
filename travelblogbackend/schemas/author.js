export default {
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
        {
            name: 'username',
            title: 'Username',
            type: 'string',
        },
        {
            name: 'avatar',
            title: 'Avatar',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'username',
                maxLength: 96,
            },
        },
        {
            name: 'bio',
            title: 'Bio',
            type: 'text',
        },
    ],
    preview: {
        select: {
            title: 'username',
            media: 'avatar',
        }
    }
}