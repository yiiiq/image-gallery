const KEY = '?client_id=3PinzL1qMicgLrVfznb5ug8UQvnl60mugTe3UH_-hYU';
const URL = `https://api.unsplash.com/photos/`;
const fetchImages = async page => {
    const response = await fetch(`${URL}${KEY}&per_page=3&page=${page}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};
export { fetchImages };
