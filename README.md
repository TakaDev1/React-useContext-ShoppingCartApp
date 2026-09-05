# React-useContext-ShoppingCartApp

Reactの`useContext`と`Context API`を使用して、複数コンポーネント間でショッピングカートの状態を共有する練習用アプリです。

## 📌 概要

`Context`でカート内の商品情報を管理し、複数のコンポーネントからカート情報を共有できるようにしています。

商品を追加・削除する機能を実装し、`useContext`を使用してコンポーネント間で状態を共有する方法を学習します。

## 🎯 学習目的

* `Context API`の基本的な使い方を理解する
* `useContext`を使用した状態共有を理解する
* 複数コンポーネント間でデータを共有する方法を学ぶ
* `useState`と`Context`を組み合わせた状態管理を理解する
* Reactコンポーネントの役割分割を理解する
* TailwindCSSを使用したUI構築を学ぶ

## 🛠️ 使用技術

* React
* TypeScript
* Context API
* useContext
* useState
* TailwindCSS
* Vite

## ✨ 機能

* 商品の追加
* カート内商品の表示
* 商品の削除
* カート情報のコンポーネント間共有
* TailwindCSSによるUIデザイン

## 📂 ディレクトリ構成

```text
src/
├── components/
│   ├── DisplayCart.tsx
│   └── HandleAddItem.tsx
├── contexts/
│   └── CartContext.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## 🔄 データ共有の流れ

```text
CartProvider
     │
     ├── cart
     ├── addItem()
     └── removeItem()
          │
          ↓
      useCart()
          │
     ┌────┴────┐
     ↓         ↓
HandleAddItem  DisplayCart
     │         │
  商品追加    商品表示・削除
```

## 📖 実装内容

### Contextによる状態管理

`CartContext`でカート内の商品情報を管理します。

```tsx
const [cart, setCart] = useState<ProductType[]>([]);
```

商品追加時には`addItem`、削除時には`removeItem`を使用してカートの状態を更新します。

### useContextによる共有

カスタムフック`useCart`を作成し、各コンポーネントからContextの値を取得できるようにしています。

```tsx
const { cart, addItem, removeItem } = useCart();
```

これにより、Propsでデータを何階層も渡すことなく、必要なコンポーネントからカート情報を利用できます。

## 🎨 UI

TailwindCSSを使用して、商品追加フォームやカート一覧を見やすくデザインしています。

## 🚀 起動方法

### 1. リポジトリをクローン

```bash
git clone <repository-url>
```

### 2. ディレクトリへ移動

```bash
cd React-useContext-ShoppingCartApp
```

### 3. パッケージをインストール

```bash
npm install
```

### 4. 開発サーバーを起動

```bash
npm run dev
```

ブラウザで表示されたURLにアクセスしてください。

## 📝 学習ポイント

このアプリでは、ReactのContext APIを使用することで、コンポーネント間で状態を共有する方法を実践しています。

特に、Propsによるバケツリレーを避けながら、複数のコンポーネントから同じカート情報を操作・参照できる構成を学習しました。
