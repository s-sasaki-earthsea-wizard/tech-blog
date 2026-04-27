# Tech Blog

GIS / Remote Sensing / 機械学習を中心に、個人開発プロジェクトや技術エッセイも扱う英語の個人技術ブログのソースです。記事は Markdown / MDX を `src/content/blog/` に配置するだけで、トップページの記事一覧が自動生成されます。

## 技術スタック

- **静的サイトジェネレータ**: [Astro](https://astro.build/) v6 (`blog` テンプレート)
- **記事フォーマット**: Markdown (`.md`) / MDX (`.mdx`)
- **コードシンタックスハイライト**: [Shiki](https://shiki.style/) (Astro 標準, `github-dark` テーマ)
- **数式 (LaTeX)**: [remark-math](https://github.com/remarkjs/remark-math) + [rehype-katex](https://github.com/remarkjs/remark-math) + [KaTeX](https://katex.org/)
- **デプロイ**: GitHub Actions による GitHub Pages へのビルド & 自動公開

## 必要環境

- Node.js 22.12 以上
- npm 11 以上

## セットアップ

```bash
make install        # = npm ci
```

## ローカル開発

```bash
make dev            # http://localhost:4321/tech-blog/ でプレビュー
make build          # 本番ビルド (dist/ 配下に出力)
make preview        # ビルド結果をローカルで配信
make clean          # dist/ と .astro/ を削除
```

`make help` でコマンド一覧を表示します。

## 記事の追加方法

`src/content/blog/` 配下に Markdown ファイル (`.md` / `.mdx`) を作成するだけで、トップページとブログ一覧 (`/blog/`) に自動で並びます。新しい順 (`pubDate` 降順) に表示されます。

### Frontmatter スキーマ

`src/content.config.ts` で型検証されています。必須フィールドを欠くとビルドが失敗します。

```yaml
---
title: 'Post title'                              # 必須
description: 'Short summary for meta and list.'  # 必須
pubDate: 'Apr 27 2026'                           # 必須 (Date に変換可能な文字列)
updatedDate: 'May 01 2026'                       # 任意
heroImage: '../../assets/blog-placeholder-1.jpg' # 任意 (相対パス)
---
```

### コードブロックと数式の書き方

サンプルとして `src/content/blog/math-and-code-sample.md` を同梱しています。記述例:

````markdown
インライン数式: $a^2 + b^2 = c^2$

ブロック数式:
$$
\int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi}
$$

```ts
const greet = (name: string) => `Hello, ${name}!`;
```
````

## ディレクトリ構成

```
.
├── astro.config.mjs        # Astro / Markdown / KaTeX / Shiki の設定
├── src/
│   ├── components/         # 共通コンポーネント (Header, Footer, BaseHead 等)
│   ├── content/blog/       # 記事本体 (.md / .mdx)
│   ├── content.config.ts   # 記事 frontmatter のスキーマ定義
│   ├── consts.ts           # サイトタイトル・説明など
│   ├── layouts/            # 記事ページのレイアウト
│   ├── pages/              # 各ページ (トップ・記事一覧・個別記事・RSS)
│   └── styles/global.css   # グローバルスタイル + KaTeX CSS の読み込み
├── public/                 # そのまま配信される静的ファイル (favicon 等)
└── .github/workflows/deploy.yml  # GitHub Pages 自動デプロイ
```

## デプロイ

`main` ブランチへ push すると GitHub Actions が `npm ci && npm run build` を実行し、`actions/deploy-pages` で公開されます。事前に GitHub リポジトリ側で次の設定が必要です。

1. GitHub リポジトリの **Settings → Pages** で **Source** を `GitHub Actions` に変更
2. 既定では `https://s-sasaki-earthsea-wizard.github.io/tech-blog/` で公開
3. カスタムドメイン、または `<username>.github.io` リポジトリで運用する場合は `astro.config.mjs` の `site` / `base` を更新する

## 主要なカスタマイズ箇所

- サイト名・説明: [`src/consts.ts`](src/consts.ts)
- ヘッダーリンク・SNS アイコン: [`src/components/Header.astro`](src/components/Header.astro)
- フッターのコピーライト: [`src/components/Footer.astro`](src/components/Footer.astro)
- カラーテーマ・タイポグラフィ: [`src/styles/global.css`](src/styles/global.css)
- 公開先 URL / base パス: [`astro.config.mjs`](astro.config.mjs)

## 将来的な拡張メモ

- React コンポーネントを記事や UI に埋め込みたくなったら `npx astro add react` で integration を追加
- カテゴリ / タグ機能、検索、ダークモードは未実装
