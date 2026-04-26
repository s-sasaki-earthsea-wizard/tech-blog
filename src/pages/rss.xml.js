import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	// BASE_URL は環境により末尾スラッシュの有無が変わるため、無し側に正規化してから '/' を付け直す
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	return rss({
		title: SITE_TITLE,
		// チャンネル自身の link を base 込みのトップページ URL に揃える
		site: new URL(`${base}/`, context.site).toString(),
		description: SITE_DESCRIPTION,
		items: posts.map((post) => ({
			...post.data,
			link: `${base}/blog/${post.id}/`,
		})),
	});
}
