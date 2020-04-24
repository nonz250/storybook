# Storybookのデモ
===

## 事前準備
Nodeバージョンを最新にしてください。

例）Nodebrewでnpm管理

### Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

```bash
brew update
brew install nodebrew
nodebrew install latest
# インストールされているのnodeのバージョンを確認
nodebrew list 
nodebrew use latest
```

## 構築手順メモ

これはこのリポジトリを作成したときの手順です。

このソースを起動したいだけの場合は、下の初期セットアップ方法を見て下さい。

### 参考

[https://storybook.js.org/docs/guides/guide-vue/](https://storybook.js.org/docs/guides/guide-vue/)

### Node

```bash
# npm init
npm init

# install Storybook
npm install @storybook/vue --save-dev

# install vue
npm install vue --save

# install js loader
npm install vue-loader vue-template-compiler @babel/core babel-loader babel-preset-vue --save-dev

# install css loader
npm install style-loader css-loader sass-loader node-sass --save-dev
npm rebuild node-sass 

# install eslint
npm install eslint --save-dev

# eslint setting
 ./node_modules/.bin/eslint --init
```

### Eslint

[https://eslint.org/docs/rules/](https://eslint.org/docs/rules/)

### Script

package.jsonに下記を追加。

```
"storybook": "start-storybook"
```

### Storybook Init

*コマンド一覧*
```bash
cd プロジェクトルート
mkdir .storybook
mkdir src/stories
touch .storybook/main.js
touch .storybook/config.js
touch src/stories/index.js
```

1. `.storybook/main.js`を作成し、下記のコードを追加。

```js
module.exports = {
    webpackFinal: (config) => {
        config.module.rules.push({
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        });
        return config;
    }
};
```

2. `.storybook/config.js`を作成し、下記のコードを追加。

```js
import {configure} from "@storybook/vue";

import Vue from "vue";

configure(() => {
    require('../src/stories');
}, module);
```

3. `src`ディレクトリを作成。
4. `src/stories`ディレクトリを作成。
5. `src/stories/index.js`を作成

`index.js`の書き方は公式HPを参照して下さい。

## 初期セットアップ

```bash
# install node package
npm install 
```

## Storybook 起動

```bash
npm run storybook
```

コンソールにリンクが表示されるので、クリックして確認してください。

## docker

このプロジェクトには`docker-compose.yml`が配置しています。

最新のnodeイメージを取得してくるので、こちらを使用して`npm`コマンドを実行できます。

```bash
docker-compose run --rm node npm コマンド
```

ただし、

```bash
docker-compose run --rm node npm storybook
```

で起動したサーバーはdocker内に存在するのでアクセスできません。

dockerコンテナのみで完結したい場合は別途ポート設定をして下さい。
