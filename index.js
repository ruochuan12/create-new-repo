import execa from 'execa'
export async function main(){
    await execa.command('echo ruochuan');
}
main();