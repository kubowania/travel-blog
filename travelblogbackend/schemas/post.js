
const getPosition = (options) => {
    if (navigator.geolocation) {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, options)
        })
    }
}


export default {
    name: 'post',
    type: 'document',
    title: 'Blog Post',
    initialValue: async () => ({
        postedAt: await getPosition()
            .then(({coords}) => {
                const { latitude, longitude, altitude } = coords

                return {
                    _type: 'geopoint',
                    lat: latitude,
                    lng: longitude,
                    alt: altitude || undefined
                }
            })
            .catch(() => undefined)
    }),
    fields: [
        {
            name: 'postedAt',
            type: 'geopoint',
            title: 'Location',
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'author',
            type: 'reference',
            title: 'Author',
            to: { type: 'author'},
        },
        {
            name: 'mainImage',
            type: 'image',
            title: 'Main Image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'categories',
            type: 'array',
            title: 'Categories',
            of: [{ type: 'reference', to: { type: 'category'}}]
        },
        {
            name: 'publishedAt',
            type: 'datetime',
            title: 'Published At',
        },
        {
            name: 'body',
            type: 'blockContent',
            title: 'Body',
        }
    ]
}