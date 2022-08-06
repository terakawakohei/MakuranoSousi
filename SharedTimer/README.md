# SharedTimer

複数人で共有できるタイマーアプリ．
タイマーのスタート・ストップがユーザごとに同期される

## デモ

![Animation](https://user-images.githubusercontent.com/51079124/183240536-35ffc374-08e4-4e3e-bbc1-d3d21cb9b2ca.gif)

## 環境

- springboot 2.6.10
  - thymeleaf
  - starter-web
  - websocket
- java 11
- webjars
  - sockjs-client 1.0.2
  - stomp-websocket 2.3.3
  - bootstrap 3.3.7
  - jquery 3.1.1-1

## 使い方

### ツール

- ブラウザ(Chrome)
- VSCode

1. リポジトリを clone
2. VSCode 上で Tomcat を起動(java ファイルを開いている状態で F5 を押す)
3. springboot の起動を確認後，ブラウザで localhost:8080 にアクセス
4. Connect ボタンを押して websocket 通信を開始
5. タイマーの start, stop が通信を介して共有される

## 文責

[terakawa kohei](https://github.com/terakawakohei)
