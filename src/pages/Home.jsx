import { useState, useEffect } from 'react';
import { getAllDrinksByFirstLetter } from '../api';
import { Preloader } from '../components/Preloader';
import { CategoryList } from '../components/CategoryList';
import { Search } from '../components/Search';

function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter((item) =>
                item.strDrink.toLowerCase().includes(str.toLowerCase())
            )
        );
    };

    useEffect(() => {
        getAllDrinksByFirstLetter().then((data) => {
            setCatalog(data.drinks);
            setFilteredCatalog(data.drinks);
        });
    }, []);

    return (
        <>
            <Search cb={handleSearch} />
            {!catalog.length ? (
                <Preloader />
            ) : (
                <CategoryList catalog={filteredCatalog} />
            )}
        </>
    );
}

export { Home };
