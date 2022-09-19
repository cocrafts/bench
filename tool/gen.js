const { readFileSync, writeFileSync } = require('fs');
const { render } = require('mustache');

const args = process.argv.slice(2);
const gitBranch = args[0] || 'dev';
const isProduction = gitBranch === 'master';
const template = readFileSync('./tool/automation.tf').toString('utf-8');

const generatedScript = render(template, {
	gitBranch,
	id: `metacraft-craft-${gitBranch}`,
	region: 'ap-northeast-1',
	alias: isProduction ? 'craft.stormgate.io' : 'dev-craft.stormgate.io',
	sslArn:
		'arn:aws:acm:us-east-1:984261700405:certificate/2fc55c46-3c09-4d58-a754-56583bc42053',
});

writeFileSync('./main.tf', generatedScript);
