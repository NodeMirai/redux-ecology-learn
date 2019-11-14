// Initial welcome page. Delete the following line to remove it.
import React from 'react';
import ReactDOM from 'react-dom';

import rootReducer from './redux/rootReducer';
import { createStore } from 'redux';
import Home from './page/home';

export const store = createStore(rootReducer)

const App: React.FC = () => {
    return <div>
        hello world
        <Home />
    </div>  ;
}

const rootElement = document.createElement('div');
const bodyElement = document.getElementsByTagName('body')[0];
bodyElement.appendChild(rootElement)

ReactDOM.render(<App />, rootElement);