import { proxy } from 'valtio';

interface Input {
	focus: (() => void) | null;
	value: string;
}

export interface EditingModalState {
	isThreadEditing: boolean;
	title?: Input;
	body: Input;
}

export const editingModalState = proxy<EditingModalState>({
	isThreadEditing: false,
	title: {
		focus: null,
		value: '',
	},
	body: {
		focus: null,
		value: '',
	},
});
