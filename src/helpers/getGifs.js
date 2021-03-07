export const getGif = async (category) => {
    const url =
        `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=20&api_key=wlwro4zpe9Y5wEOlSHfEKf93FG9YlB3I`;
    const res = await fetch(url);

    const { data } = await res.json();
    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title ? img.title : 'Sin titulo',
        url: img.images.downsized_medium.url,
    }));

    return gifs.length ? gifs : [{
        id: new Date().getTime(),
        title: `${ category } not found`,
        url: 'https://media4.giphy.com/media/14uQ3cOFteDaU/giphy.gif?cid=64611a76ikrvbhq516pntx3a1nfa0uzt5e6ejsp63jh8xnnr&rid=giphy.gif'
    }];
};