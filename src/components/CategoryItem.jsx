import React from 'react';
import { Link } from 'react-router-dom';

function CategoryItem(props) {
    const { idDrink, strDrink, strDrinkThumb, strInstructions } = props;
    return (
        <div className='card'>
            <div className='card-image'>
                <img src={strDrinkThumb} alt={strDrink} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{strDrink}</span>
                <p>{strInstructions}</p>
            </div>
            <div className='card-action'>
                <Link to={`/category/${idDrink}`} className='btn'>
                    Watch category
                </Link>
            </div>
        </div>
    );
}

export { CategoryItem };
