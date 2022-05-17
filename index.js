const domContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(domContainer);

const useFetch = (url, options) => {
    const [response, setResponse] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url, options);
                setResponse(await res.json());
            } catch (e) {
                setError(e)
            }
        }
        fetchData();
    }, [])

    return {data: response, error};
}

const e = React.createElement;

const FetchPerson = props => {
    const response = useFetch('https://swapi.dev/api/people/1', {});
    console.log(response)
    if (!response.data) {
        return e('div', null, 'Loading...')
    }

    return e(
        'div',
        null,
        response.data.name
    );
}


root.render(e(FetchPerson));