// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

// https://astro.build/config
export default defineConfig({
	// GitHub Pages のプロジェクトサイト (https://<user>.github.io/tech-blog/) を前提にした設定
	// カスタムドメイン運用時、または <username>.github.io リポジトリ運用時は base を削除すること
	site: 'https://s-sasaki-earthsea-wizard.github.io',
	base: '/tech-blog',
	integrations: [mdx(), sitemap()],
	markdown: {
		// LaTeX 数式 ($...$ / $$...$$) を KaTeX でレンダリング
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
		// コードブロックは Astro 標準の Shiki でハイライト
		shikiConfig: {
			theme: 'github-dark',
			wrap: true,
		},
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
