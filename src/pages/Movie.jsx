import {
    useParams,
    useNavigate,
    useLocation,
    // useMatch,
} from 'react-router-dom';

function Movie() {
    const { title } = useParams();
    const goBack = useNavigate();
    // const valueMatch = useMatch();
    // console.log(valueMatch);
    const valueLocation = useLocation();
    console.log(valueLocation);
    return (
        <>
            <h1>some movie {title}</h1>;
            <button className='btn' onClick={() => goBack(-1)}>
                Go back
            </button>
        </>
    );
}

export { Movie };
