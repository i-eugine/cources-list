import React from 'react';
import { Provider } from 'react-redux';

import { Router } from '@routing';
import { store } from '@store';

const App = () => {
	return (
		<Provider store={store}>
			<React.StrictMode>
				<Router />
			</React.StrictMode>
		</Provider>
	);
};

export default App;
