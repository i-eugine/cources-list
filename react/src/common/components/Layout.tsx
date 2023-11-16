import { Header } from '@pages/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from './style/Box';

export const Layout = () => (
	<>
		<Header />
		<Box
			$height='calc(100vh - 80px)'
			$margin='auto'
			$paddingTop='xl'
			$width='1122px'
		>
			<Outlet />
		</Box>
	</>
);
