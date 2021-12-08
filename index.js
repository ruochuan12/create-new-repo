import {execaCommand} from 'execa';

export async function main() {
	const {stdout} = await execaCommand('echo ruochuan');
	console.log('hello, ' + stdout);
	return stdout;
}

main()
	.then(res => {
		console.log('success', res);
	})
	.catch(err => {
		console.log(err);
	});
