import React, { FC } from 'react';
import { Provider as MetacraftProvider, themeState } from '@metacraft/ui';
import { NavigationContainer } from '@react-navigation/native';
import { useSnapshot } from 'valtio';

import BuildStack from './stack';

export const AppContainer: FC = () => {
	const theme = useSnapshot(themeState);

	return (
		<MetacraftProvider>
			<NavigationContainer theme={theme}>
				<BuildStack />
			</NavigationContainer>
		</MetacraftProvider>
	);
};

export default AppContainer;
