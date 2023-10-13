import { Link } from 'react-router-dom';

function Drink(props) {
    const { strDrink, strDrinkThumb, idDrink, strCategory } = props;

    return (
        <div className='card'>
            <div className='card-image'>
                <img src={strDrinkThumb} alt={strDrink} title={strCategory} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{strDrink}</span>
            </div>
            <div className='card-action'>
                <Link to={`/drink/${idDrink}`} className='btn'>
                    Watch recipe
                </Link>
            </div>
        </div>
    );
}

export { Drink };
