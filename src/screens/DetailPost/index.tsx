import React, { FC, Fragment, useState } from 'react';
import {
	ActivityIndicator,
	FlatList,
	Modal,
	StyleSheet,
	View,
} from 'react-native';
import { useQuery } from '@apollo/client';
import { Button, Text } from '@metacraft/ui';
import {
	NavigationProp,
	RouteProp,
	useNavigation,
	useRoute,
} from '@react-navigation/native';
import ReplyIcon from 'components/icons/feather/Reply';
import { RootParamList } from 'stacks/shared';
import { graphQlClient } from 'utils/graphql';
import * as queries from 'utils/graphql/query';
import { onReply } from 'utils/helper';
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
	const { id } = route.params;
	const threadId = `thread#${id}`;
	const navigation = useNavigation<StackProp>();
	const [isSearchModalVisible, setIsSearchModalVisible] = useState(false);
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

	const onReplyPress = () => {
		onReply({
			threadId: threadId || '',
			isThreadEditing: false,
		});
	};

	return (
		<View style={styles.mainContainer}>
			<FlatList
				style={styles.container}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={
					<Fragment>
						<Modal visible={isSearchModalVisible} animationType={'slide'}>
							<SearchModal onCancelSearchModal={onCloseSearchModal} />
						</Modal>
						<ControllerRow
							isRoot={false}
							onAvatarPress={onAvatarPress}
							onSearchPress={onSearchPress}
						/>
						<Post item={thread} isShortForm={false} />
						{loading && <ActivityIndicator style={{ marginTop: 10 }} />}
					</Fragment>
				}
				ListFooterComponent={
					<View style={styles.footerContainer}>
						<Button style={styles.replyBtn} onPress={onReplyPress}>
							<ReplyIcon
								style={styles.replyBtnInner}
								size={14}
								color="#fafafa"
							/>
							<Text style={styles.replyBtnInner}>Reply</Text>
						</Button>
					</View>
				}
				data={thread.comments}
				renderItem={({ item }) => (
					<Fragment>
						{item && (
							<View style={styles.replyContainer}>
								<Reply item={item} />
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
	footerContainer: {
		marginVertical: 15,
		flexDirection: 'row',
	},
	replyBtn: {
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 5,
		backgroundColor: midnightDream,
	},
	replyBtnInner: {
		margin: 5,
		color: '#fafafa',
	},
	commentInputContainer: {
		marginVertical: 12,
	},
	commentInput: {
		backgroundColor: midnightDream,
	},
});
