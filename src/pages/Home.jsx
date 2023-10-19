import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllDrinksByFirstLetter } from '../api';
import { Preloader } from '../components/Preloader';
import { CategoryList } from '../components/CategoryList';
import { Search } from '../components/Search';

function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const { search } = useLocation();
    const navigate = useNavigate();

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter((item) =>
                item.strDrink.toLowerCase().includes(str.toLowerCase())
            )
        );
        navigate(`?search=${str}`);
    };

    useEffect(() => {
        getAllDrinksByFirstLetter().then((data) => {
            setCatalog(data.drinks);
            setFilteredCatalog(
                search
                    ? data.drinks.filter((item) =>
                          item.strDrink
                              .toLowerCase()
                              .includes(search.split('=')[1].toLowerCase())
                      )
                    : data.drinks
            );
        });
    }, [search]);

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
