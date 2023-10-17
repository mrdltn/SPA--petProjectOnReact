import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getDrinkById } from '../api';
import { Preloader } from '../components/Preloader';

function Recipe() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});
    const goBack = useNavigate();

    useEffect(() => {
        getDrinkById(id).then((data) => setRecipe(data.drinks[0]));
    }, [id]);

    return (
        <>
            <button className='btn' onClick={() => goBack(-1)}>
                Go back
            </button>

            {!recipe.idDrink ? (
                <Preloader />
            ) : (
                <div className='recipe'>
                    <img src={recipe.strDrinkThumb} alt={recipe.strDrink} />
                    <h1>{recipe.strDrink}</h1>
                    <h6>category: {recipe.strCategory}</h6>
                    <p>{recipe.strInstructions}</p>

                    <table className='centered'>
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(recipe).map((key) => {
                                if (key.includes('Ingredient') && recipe[key]) {
                                    return (
                                        <tr key={key}>
                                            <td>{recipe[key]}</td>
                                            <td>
                                                {
                                                    recipe[
                                                        `strMeasure${key.slice(
                                                            13
                                                        )}`
                                                    ]
                                                }
                                            </td>
                                        </tr>
                                    );
                                }
                                return null;
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
}

export { Recipe };
