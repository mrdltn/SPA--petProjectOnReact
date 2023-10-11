import { useState, useEffect } from 'react';
import { getAllDrinksByFirstLetter } from '../api';
import { Preloader } from '../components/Preloader';
import { CategoryList } from '../components/CategoryList';

function Home() {
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        getAllDrinksByFirstLetter().then((data) => {
            setCatalog(data.drinks);
        });
    }, []);

    return (
        <>
            {!catalog.length ? (
                <Preloader />
            ) : (
                <CategoryList catalog={catalog} />
            )}
        </>
    );
}

export { Home };
