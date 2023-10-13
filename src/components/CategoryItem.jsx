import React from 'react';
import { Link } from 'react-router-dom';

function CategoryItem(props) {
    const { strDrink, strDrinkThumb, strInstructions, strCategory } = props;

    return (
        <div className='card'>
            <div className='card-image'>
                <img
                    src={strDrinkThumb}
                    alt={strCategory}
                    title={strCategory}
                />
            </div>
            <div className='card-content'>
                <span className='card-title'>{strDrink}</span>
                <p>{strInstructions.slice(0, 60)}...</p> <br />
            </div>
            <div className='card-action'>
                <Link to={`/category/${strCategory}`} className='btn'>
                    Watch category
                </Link>
            </div>
        </div>
    );
}

export { CategoryItem };
