# gulp - ブラウザのリロード自動化

html と css が変更されたら、自動でブラウザをリロードする手順を書きます。


## 前提
#### 1. インストールソフト

- Node.js がインストールされていること。
- gulp がグローバルでインストールされていること。

gulp をグローバルでインストールしていない場合、次のコマンドでインストールします。

```
> npm install -g gulp
```

#### 2. ディレクトリ構成

src ディレクトリ配下に、html と css ファイルを置きます。

```
gulp-reload
  - src
  - node_modules
  - gulpfile.js
  - package.json
```

node_modules, gulpfile.js,  package.json は、手順の中で作成していきます。


## 手順
#### 1. 開発用ライブラリのインストール

```
> npm install --save-dev gulp
> npm install browser-sync gulp --save-dev
```

#### 2. gulpfile.js を編集

内容は、gulpfile.js を参照。


#### 3. gulp 実行

次のコマンドを実行します。

```
> gulp
```

ブラウザが起動されて、gulp が常駐します。html, css を更新すると、起動されたブラウザが自動的にリロードされます。

終了するには `ctrl + c` を押します。
