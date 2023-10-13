import { API_URL } from './config';

const getDrinkById = async (drinkId) => {
    const res = await fetch(API_URL + 'lookup.php?i=' + drinkId);
    return await res.json();
};

const getAllDrinksByFirstLetter = async () => {
    const res = await fetch(API_URL + 'search.php?f=a');
    return await res.json();
};

const getFilterByCategory = async (Cocktail) => {
    const res = await fetch(API_URL + 'filter.php?c=' + Cocktail);
    return await res.json();
};

export { getDrinkById, getAllDrinksByFirstLetter, getFilterByCategory };
