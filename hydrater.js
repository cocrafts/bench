import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { AppRegistry } from 'react-native-web';

import App from './src';

AppRegistry.registerComponent('App', () => App, false);

(async () => {
	const { element, getStyleElement } = AppRegistry.getApplication('App');
	const markup = renderToString(element);
	const style = renderToStaticMarkup(getStyleElement());

	await hydrate('alter', { style, markup });
})();
