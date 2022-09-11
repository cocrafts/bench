import React, { FC } from 'react';
import { Text, View } from 'react-native';
import UserInfo from 'components/UserInfo';

interface Props {
	name: string;
	avatarUrl: string;
	postedTime: string;
	thread: string;
	nbLikes: number;
}

const Reply: FC<Props> = ({
	avatarUrl = '',
	name = '',
	postedTime = '',
	thread = '',
	nbLikes = 0,
}: Props) => {
	return (
		<View>
			<UserInfo
				avatarUrl={avatarUrl}
				name={name}
				postedTime={new Date(postedTime)}
			/>
		</View>
	);
};

export default Reply;
