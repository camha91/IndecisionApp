class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            name: 'Visibility Toggle',
            visibility: false
        };
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Hey. These are some details you can now see!</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));


// let visibility = false;
//
// const app = {
//     title: 'Visibility Toggle'
// };
//
// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// };
//
// // JSX - JavaScript XML
// const appRoot = document.getElementById('app');
//
// const render = () => {
//     const jsx = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Hey! There are some details now you can see!</p>
//                 </div>
//             )}
//         </div>
//     );
//
//     ReactDOM.render(jsx, appRoot);
// };
//
// render();
