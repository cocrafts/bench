import { useEffect } from 'react';
import { useSnapshot } from 'utils/hook';
import {
	buildActions,
	BuildActivity,
	BuildState,
	buildState,
} from 'utils/state/buildActivities';

export const useBuildActivities = (): BuildActivity[] => {
	const { allActivity } = useSnapshot(buildState) as BuildState;

	useEffect(() => {
		if (!allActivity.ready) {
			buildActions.fetchActivities();
		}
	}, []);

	return allActivity.list;
};
