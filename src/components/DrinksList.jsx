import { Drink } from './Drink';

function DrinksList({ drinks }) {
    return (
        <div className='list'>
            {drinks.map((drink) => (
                <Drink key={drink.idDrink} {...drink} />
            ))}
        </div>
    );
}

export { DrinksList };
