import { val__be_derive_pair_ } from '@btakita/domain--all--blog'
import { nullish__check_ } from '@ctx-core/function'
import { Astro__url_ } from './Astro__url'
export const [
	Astro__url__pathname$_,
	Astro__url__pathname_,
] = val__be_derive_pair_(ctx=>
	nullish__check_([Astro__url_(ctx)], Astro__url=>
		Astro__url.pathname))
