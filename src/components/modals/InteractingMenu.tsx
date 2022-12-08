import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { modalActions, ModalConfigs, Text } from '@metacraft/ui';
import Pen from 'components/icons/feather/Pen';
import { blueWhale } from 'utils/colors';
import { onEdit } from 'utils/helper';
import { useSnapshot } from 'utils/hook';
import { accountState } from 'utils/state/account';
import { Comment, Thread } from 'utils/types';

interface Props {
	config: ModalConfigs;
}

interface ModalContext {
	item: Thread | Comment;
}

const InteractingMenu: FC<Props> = ({ config }) => {
	const { item } = config.context as ModalContext;
	const objectTypeName = item.__typename === 'Thread' ? 'Post' : 'Comment';
	const { profile } = useSnapshot(accountState);
	const isOwner = profile.id === item.owner?.id;

	const closeModal = () => modalActions.hide(config.id as string);

	const onEditPress = () => {
		onEdit({
			item,
			isThreadEditing: item.__typename === 'Thread' ? true : false,
		});
		closeModal();
	};

	return (
		<View style={styles.container}>
			{isOwner && (
				<TouchableOpacity
					style={styles.touchableContainer}
					onPress={onEditPress}
				>
					<Pen style={styles.icon} size={14} />
					<Text>Edit {objectTypeName}</Text>
				</TouchableOpacity>
			)}
		</View>
	);
};

export default InteractingMenu;

const styles = StyleSheet.create({
	container: {
		padding: 15,
		backgroundColor: blueWhale,
		borderRadius: 10,
	},
	touchableContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	icon: {
		marginRight: 10,
	},
});
