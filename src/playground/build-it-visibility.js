let visibility = false;

const app = {
    title: 'Visibility Toggle'
};

const toggleVisibility = () => {
    visibility = !visibility;
    render();
};

// JSX - JavaScript XML
const appRoot = document.getElementById('app');

const render = () => {
    const jsx = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility && (
                <div>
                    <p>Hey! There are some details now you can see!</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(jsx, appRoot);
};

render();
