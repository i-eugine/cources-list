import React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';

import { router } from '@routing';
import { store } from '@store';

const App = () => {
	return (
		<Provider store={store}>
			<React.StrictMode>
				<RouterProvider router={router} />
			</React.StrictMode>
		</Provider>
	);
};

export default App;
