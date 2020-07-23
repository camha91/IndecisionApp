// import React from 'react';

console.log('App.js is running');

// if statements
// ternary operators
// logical and operator

const app = {
    title: 'Indecision App',
    subtitle: 'This is some info',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const removeAll = () => {
    app.options= 0;
    render();
};

// JSX - JavaScript XML
const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No option'}</p>
            <p>{app.options.length}</p>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                <li>Item One</li>
                <li>Item Two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();
