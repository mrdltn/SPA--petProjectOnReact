import { API_URL } from './config';

const getDrinkById = async (drinkId) => {
    const res = await fetch(API_URL + 'lookup.php?i=' + drinkId);
    return await res.json();
};

const getAllDrinksByFirstLetter = async () => {
    const res = await fetch(API_URL + 'search.php?f=a');
    return await res.json();
};

const getFilteredCategory = async (catName) => {
    const res = await fetch(API_URL + 'filter.php?c' + catName);
    return await res.json();
};

export { getDrinkById, getAllDrinksByFirstLetter, getFilteredCategory };
