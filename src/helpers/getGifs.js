export const getGifs = async (category) => {
    const url = `${process.env.REACT_APP_URL_GIFS_SEARCH}?api_key=ksWsabunuHtBBI92cm2QNSLm6A8yQiBC&q=${encodeURI(category)}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    return data.map(g => {
        return {
            id: g.id,
            title: g.title,
            url: g.images?.downsized_medium.url
        };
    });
};
