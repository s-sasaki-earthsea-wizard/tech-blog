.PHONY: help install dev build preview clean

# 既定のターゲット (引数なしで `make` 実行時のヘルプ表示)
help: ## 利用可能なコマンドの一覧を表示する
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-12s %s\n", $$1, $$2}'

install: ## 依存パッケージをインストールする (npm ci 相当)
	npm ci

dev: ## ローカル開発サーバを http://localhost:4321/tech-blog/ で起動する
	npm run dev

build: ## 本番ビルドを dist/ 配下に生成する
	npm run build

preview: ## ビルド済みサイトをローカルでプレビュー表示する
	npm run preview

clean: ## ビルド成果物と Astro の生成物を削除する
	rm -rf dist .astro
