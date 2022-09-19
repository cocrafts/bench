const {
	CloudFrontClient,
	CreateInvalidationCommand,
} = require('@aws-sdk/client-cloudfront');
const { cloudFrontId } = require('../tf-output.json');

const client = new CloudFrontClient({ region: 'ap-northeast-1' });

const invalidator = new CreateInvalidationCommand({
	DistributionId: cloudFrontId.value,
	InvalidationBatch: {
		CallerReference: new Date().getTime().toString(),
		Paths: {
			Quantity: 1,
			Items: ['/*'],
		},
	},
});

client.send(invalidator).then((data) => {
	console.log(data);
});
