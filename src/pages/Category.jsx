import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilterByCategory } from '../api';
import { Preloader } from '../components/Preloader';
import { DrinksList } from '../components/DrinksList';

function Category() {
    const { name } = useParams();
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        getFilterByCategory(name).then((data) => setDrinks(data.drinks));
    }, [name]);

    return (
        <>{!drinks.length ? <Preloader /> : <DrinksList drinks={drinks} />}</>
    );
}

export { Category };
