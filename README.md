# 白い恋人 ランディングページ

北海道を代表する洋菓子「白い恋人」のランディングページです。Next.js 14、TypeScript、Tailwind CSSを使用して構築されています。

## 🎯 プロジェクト概要

このプロジェクトは、白い恋人の魅力を効果的に伝え、購買意欲を高めることを目的としたシングルページアプリケーション（SPA）です。

### 主な機能

- ✨ レスポンシブデザイン（モバイル、タブレット、デスクトップ対応）
- 🎬 Framer Motionによるスムーズなアニメーション
- 🖼️ 画像ギャラリーとライトボックス機能
- ⭐ レビュースライダー
- 📝 お問い合わせフォーム（バリデーション付き）
- 🧭 スムーズスクロールナビゲーション
- 📊 Google Analytics統合（準備済み）

## 🛠️ 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion
- **フォーム**: React Hook Form + Zod
- **開発ツール**: ESLint

## 📁 プロジェクト構造

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # メインページ
│   └── globals.css        # グローバルスタイル
├── components/            # Reactコンポーネント
│   ├── ui/               # 共通UIコンポーネント
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── FormField.tsx
│   │   └── Modal.tsx
│   ├── layout/           # レイアウトコンポーネント
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   └── sections/         # セクションコンポーネント
│       ├── HeroSection.tsx
│       ├── ProductFeaturesSection.tsx
│       ├── ProductVariantsSection.tsx
│       ├── StorySection.tsx
│       ├── GallerySection.tsx
│       ├── ReviewsSection.tsx
│       ├── PurchaseSection.tsx
│       └── ContactSection.tsx
├── hooks/                 # カスタムフック
│   ├── useScrollPosition.ts
│   ├── useActiveSection.ts
│   ├── useResponsive.ts
│   └── useAnalytics.ts
├── types/                 # TypeScript型定義
│   ├── index.ts
│   └── schemas.ts
├── data/                  # 静的データ
│   └── content.json
└── utils/                 # ユーティリティ関数
```

## 🚀 セットアップ

### 前提条件

- Node.js 18.x以上
- npm または yarn

### インストール

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### ビルド

```bash
# プロダクションビルド
npm run build

# プロダクションサーバーの起動
npm start
```

## 📝 開発ガイド

### コンテンツの編集

`src/data/content.json`ファイルを編集することで、サイトのコンテンツを変更できます。

### スタイルのカスタマイズ

`tailwind.config.ts`でカラーテーマやその他のデザイントークンをカスタマイズできます。

### 新しいセクションの追加

1. `src/components/sections/`に新しいコンポーネントを作成
2. `src/components/sections/index.ts`でエクスポート
3. `src/app/page.tsx`に追加
4. 必要に応じて`src/data/content.json`にデータを追加

## 📊 主要なコンポーネント

### HeroSection
- フルスクリーンのヒーローセクション
- アニメーション付きテキスト
- CTAボタン

### ProductFeaturesSection
- グリッドレイアウトで製品特徴を表示
- ホバーエフェクト付きカード

### ProductVariantsSection
- タブ形式で製品バリエーションを切り替え
- ホワイトとブラックの2種類

### StorySection
- ブランドストーリーとタイムライン
- 歴史の可視化

### GallerySection
- 画像グリッド表示
- ライトボックス機能
- ナビゲーション付き

### ReviewsSection
- レビュースライダー
- 星評価表示
- 平均評価スコア

### PurchaseSection
- オンラインストア情報
- 実店舗情報
- 価格表示

### ContactSection
- React Hook Formによるフォーム
- Zodバリデーション
- エラーメッセージ表示

## 🎨 デザインシステム

### カラーパレット
- Primary: Blue (#0ea5e9系)
- Secondary: Purple (#a855f7系)
- Neutral: Gray系

### ブレークポイント
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

## 🔧 カスタムフック

### useScrollPosition
スクロール位置とスクロール方向を追跡

### useActiveSection
Intersection Observer APIを使用して現在表示中のセクションを検出

### useResponsive
デバイスタイプとブレークポイントを検出

### useAnalytics
Google Analyticsイベントの追跡

## 📄 ライセンス

このプロジェクトは教育・デモンストレーション目的で作成されています。

## 🤝 貢献

バグ報告や機能リクエストは、Issuesでお願いします。

---

Made with ❤️ using Next.js, TypeScript, and Tailwind CSS
