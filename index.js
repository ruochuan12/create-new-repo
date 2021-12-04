import {execaCommand} from 'execa';

export async function main() {
	const {stdout} = await execaCommand('echo ruochuan');
	return stdout;
}

main();
