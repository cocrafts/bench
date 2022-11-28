import React, {
	FC,
	Fragment,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import { FlatList, Modal, StyleSheet, TextInput, View } from 'react-native';
import {
	NavigationProp,
	RouteProp,
	useNavigation,
	useRoute,
} from '@react-navigation/native';

import CommentInput from '../../components/CommentInput';
import ControllerRow from '../../components/ControllerRow';
import Post from '../../components/Post';
import SearchModal from '../../components/SearchModal';
import { StackParamList } from '../../stack';
import { blackPearl, midnightDream } from '../../utils/colors';
import { MAX_WIDTH } from '../../utils/constants';

import Reply from './Reply';

type DetailPostStackRouteProp = RouteProp<StackParamList, 'DetailPost'>;
type DetailPostNavigationProp = NavigationProp<StackParamList, 'DetailPost'>;

interface Props {
	route?: DetailPostStackRouteProp;
}

const DetailPostScreen: FC<Props> = () => {
	const route = useRoute<DetailPostStackRouteProp>();
	const navigation = useNavigation<DetailPostNavigationProp>();
	const [isSearchModalVisible, setIsSearchModalVisible] = useState(false);
	const [currentReplyActiveIndex, setCurrentReplyActiveIndex] = useState(-1);
	const commentInputRef = useRef<TextInput>(null);

	const { item, autoFocus } = route.params;
	const { comments } = item;

	const onAvatarPress = () => {
		navigation.navigate('SignIn');
	};

	const onCloseSearchModal = () => {
		setIsSearchModalVisible(false);
	};

	const onSearchPress = () => {
		setIsSearchModalVisible(true);
	};

	const onReplyPress = useCallback(
		(index: number) => {
			commentInputRef.current && commentInputRef.current?.focus();
			setCurrentReplyActiveIndex(index);
		},
		[commentInputRef.current],
	);

	useEffect(() => {
		autoFocus && commentInputRef.current && commentInputRef.current?.focus();
	}, [autoFocus, commentInputRef.current]);

	useEffect(() => {
		if (!commentInputRef.current?.isFocused && currentReplyActiveIndex !== -1) {
			setCurrentReplyActiveIndex(-1);
		}
	}, [currentReplyActiveIndex, commentInputRef.current?.isFocused]);

	return (
		<View style={styles.mainContainer}>
			<FlatList
				style={styles.container}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={
					<View>
						<Modal visible={isSearchModalVisible} animationType={'slide'}>
							<SearchModal onCancelSearchModal={onCloseSearchModal} />
						</Modal>
						<ControllerRow
							canGoBack={true}
							onAvatarPress={onAvatarPress}
							onSearchPress={onSearchPress}
						/>
						<Post item={item} isShortForm={false} />
					</View>
				}
				ListFooterComponent={
					<View style={styles.commentInputContainer}>
						<CommentInput
							commentInputRef={commentInputRef}
							autoFocus={autoFocus}
							containerStyle={styles.commentInput}
						/>
					</View>
				}
				data={comments}
				renderItem={({ item, index }) => (
					<Fragment>
						{item && (
							<View style={styles.replyContainer}>
								<Reply
									isActive={currentReplyActiveIndex === index}
									onReplyPress={() => onReplyPress(index)}
									item={item}
								/>
							</View>
						)}
					</Fragment>
				)}
			/>
		</View>
	);
};

export default DetailPostScreen;

const styles = StyleSheet.create({
	mainContainer: { flex: 1, alignItems: 'center', backgroundColor: blackPearl },
	replyContainer: {
		marginTop: 5,
	},
	container: {
		width: '100%',
		height: '100%',
		maxWidth: MAX_WIDTH,
		alignSelf: 'center',
		paddingTop: 32,
		paddingHorizontal: 15,
		backgroundColor: blackPearl,
	},
	commentInputContainer: {
		marginVertical: 12,
	},
	commentInput: {
		backgroundColor: midnightDream,
	},
});
