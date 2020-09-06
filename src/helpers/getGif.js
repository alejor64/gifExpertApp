export const getGift = async (category) => {
    
    const api_key = 'l2w5bVXKcfEZII0rPkiQ7Fw76p98vkm1'
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${api_key}`
    const res = await fetch(url)
    const {data} = await res.json()

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs
}