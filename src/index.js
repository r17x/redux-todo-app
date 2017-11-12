import React from 'react';
//import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';

let store = createStore(todoApp);
//ReactDOM.render(<App />, document.getElementById('root'));
render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
