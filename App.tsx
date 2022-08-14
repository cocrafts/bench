import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const App: React.FC = () => {
	return (
		<View style={styles.container}>
			<Text>App!</Text>
		</View>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {},
});
