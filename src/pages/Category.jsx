import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFilterByCategory } from '../api';
import { Preloader } from '../components/Preloader';
import { DrinksList } from '../components/DrinksList';

function Category() {
    const { name } = useParams();
    const [drinks, setDrinks] = useState([]);
    const goBack = useNavigate();

    useEffect(() => {
        getFilterByCategory(name).then((data) => setDrinks(data.drinks));
    }, [name]);

    return (
        <>
            <button className='btn' onClick={() => goBack(-1)}>
                Go back
            </button>
            {!drinks.length ? <Preloader /> : <DrinksList drinks={drinks} />}
        </>
    );
}

export { Category };
