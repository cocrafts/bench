import React, {
	FC,
	Fragment,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import {
	ActivityIndicator,
	FlatList,
	Modal,
	StyleSheet,
	TextInput,
	View,
} from 'react-native';
import { useQuery } from '@apollo/client';
import {
	NavigationProp,
	RouteProp,
	useNavigation,
	useRoute,
} from '@react-navigation/native';
import { RootParamList } from 'stacks/shared';
import { graphQlClient } from 'utils/graphql';
import * as queries from 'utils/graphql/query';
import { Thread } from 'utils/types';

import ControllerRow from '../../components/ControllerRow';
import Post from '../../components/Post';
import SearchModal from '../../components/SearchModal';
import { blackPearl, midnightDream } from '../../utils/colors';
import { MAX_WIDTH } from '../../utils/constants';

import Reply from './Reply';

type StackRouteProp = RouteProp<RootParamList, 'DetailPost'>;
type StackProp = NavigationProp<RootParamList>;

const DetailPostScreen: FC = () => {
	const route = useRoute<StackRouteProp>();
	const { id, comment } = route.params;
	const threadId = `thread#${id}`;
	const navigation = useNavigation<StackProp>();
	const [isSearchModalVisible, setIsSearchModalVisible] = useState(false);
	const [currentReplyActiveIndex, setCurrentReplyActiveIndex] = useState(-1);
	const commentInputRef = useRef<TextInput>(null);
	const threadInCache = graphQlClient.readFragment({
		id: `Thread:${threadId}`,
		fragment: queries.threadFields,
	});
	const [thread, setThread] = useState<Thread>({
		...threadInCache,
		commments: [],
	});
	const { loading } = useQuery(queries.thread, {
		variables: { input: threadId },
		onCompleted(data) {
			setThread(data.thread);
		},
	});

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
		comment && commentInputRef.current && commentInputRef.current?.focus();
	}, [comment, commentInputRef.current]);

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
						<Post item={thread} isShortForm={false} />
						{loading && <ActivityIndicator style={{ marginTop: 10 }} />}
					</View>
				}
				data={thread.comments}
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
