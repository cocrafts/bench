import React, { FC, Fragment, useRef, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native';
import { useQuery } from '@apollo/client';
import { Button, Text } from '@metacraft/ui';
import {
	NavigationProp,
	RouteProp,
	useNavigation,
	useRoute,
} from '@react-navigation/native';
import ControllerRow from 'components/ControllerRow';
import ReplyIcon from 'components/icons/feather/Reply';
import ScrollLayout from 'components/layouts/Scroll';
import Post from 'components/Post';
import Reply from 'components/Reply';
import { RootParamList } from 'stacks/shared';
import { blackPearl, midnightDream } from 'utils/colors';
import { graphQlClient } from 'utils/graphql';
import * as queries from 'utils/graphql/query';
import { onEdit } from 'utils/helper';
import { iStyles } from 'utils/styles';
import { Thread } from 'utils/types';

type StackRouteProp = RouteProp<RootParamList, 'DetailPost'>;
type StackProp = NavigationProp<RootParamList>;

const DetailPostScreen: FC = () => {
	const scrollRef = useRef<ScrollView>(null);
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

	const onSearchPress = () => {
		setIsSearchModalVisible(true);
	};

	const onReplyPress = () => {
		onEdit({
			threadId: threadId || '',
			isThreadEditing: false,
		});
	};

	return (
		<ScrollLayout style={styles.mainContainer} scrollRef={scrollRef}>
			<View style={[iStyles.contentContainer, styles.container]}>
				<ControllerRow
					isRoot={false}
					onAvatarPress={onAvatarPress}
					onSearchPress={onSearchPress}
				/>
				<Post item={thread} isShortForm={false} />
				{loading && <ActivityIndicator style={{ marginTop: 10 }} />}

				{!loading &&
					thread.comments &&
					thread.comments?.map((item) => (
						<Fragment key={item?.id}>
							{item && (
								<View style={styles.replyContainer}>
									<Reply item={item} scrollRef={scrollRef} />
								</View>
							)}
						</Fragment>
					))}

				<View style={styles.footerContainer}>
					<Button style={styles.replyBtn} onPress={onReplyPress}>
						<ReplyIcon style={styles.replyBtnInner} size={14} color="#fafafa" />
						<Text style={styles.replyBtnInner}>Reply</Text>
					</Button>
				</View>
			</View>
		</ScrollLayout>
	);
};

export default DetailPostScreen;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: blackPearl,
	},
	replyContainer: {
		marginTop: 5,
	},
	container: {
		width: '100%',
		height: '100%',
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
