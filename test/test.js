import test from 'ava';
import { main } from '../index.js';
test('async', async t => {
    const res = await main();
	t.is(res, 'echo ruochuan');
});