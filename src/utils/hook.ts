import { useState } from 'react';

interface UseInput {
	value: string;
	onChangeText: (next: string) => void;
}

export const useInput = (initialValue = ''): UseInput => {
	const [value, setValue] = useState<string>(initialValue);

	return {
		value,
		onChangeText: (next) => setValue(next),
	};
};
