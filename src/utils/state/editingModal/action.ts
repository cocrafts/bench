import { modalActions, modalState } from '@metacraft/ui';
import CloseModal from 'components/modals/CloseWarning';
import { snapshot } from 'valtio';

import { EditingModalState, editingModalState } from './instance';
export const onCloseEditingModal = (closeModal: () => void) => {
	const { isThreadEditing, title, body } =
		snapshot<EditingModalState>(editingModalState);
	const { hashmap } = snapshot(modalState);
	const isModalActive = Object.values(hashmap).length !== 0;

	if (isModalActive && (title?.value || body.value)) {
		modalActions.show({
			id: 'CloseWarning',
			component: CloseModal,
			context: {
				typeEditing: isThreadEditing ? 'Post' : 'Comment',
				onDiscard: () => {
					closeModal();
				},
				onContinueEditing: () =>
					isThreadEditing ? title?.focus?.() : body.focus?.(),
			},
		});
	} else {
		closeModal();
	}
};
