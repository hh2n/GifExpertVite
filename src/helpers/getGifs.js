export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=pwqflfumd1BzeT0R7YGu8gASCUz3LUGQ&q=${category}&limit=30`
    const resp = await fetch(url)
    const { data } = await resp.json()

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }) )
    return gifs
}