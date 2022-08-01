# 大規模ソフトウェア論:グループ 6 用リポジトリ

- [2022 年度・大規模ソフトウェア論・作業シート](https://docs.google.com/spreadsheets/d/1pnvH78sYDOkxq2UYTylRxDqKGj_zEgqcnl-wCCvn24M/edit#gid=0)

## チーム名

- **MakuranoSousi**

## メンバー

- 寺川航平 220x215x
- 岩橋　陽 221x102x コメント：コミュニケーションとって楽しくやろね
- 大橋真琴 228x104x
- 竹上諒 227x211x コメント：仕事はしっかり雰囲気ゆるく，サクッと単位とっちゃいましょう

## 目標

- 中村先生を「おお！」と言わせるようなプロジェクトにすること

kokoko

## リポジトリの導入

- terminal 上で、リポジトリをダウンロードしたい場所に移動
- git clone する
  - 現在の場所の直下に MakuranoSousi リポジトリが作成される

```bash
git clone https://github.com/terakawakohei/MakuranoSousi.git
```

- VSCode 等のエディタで MakuranoSousi を開く

## 実装計画

- 各自のブラウザ上で個別に動作するタイマーの実装
  - https://zenn.dev/uchidametal/articles/4d1c7bf34777bd
- タイマーのスタート，ストップアクションを websocket を通じて全体に通知する機能の実装
  - https://zenn.dev/kirk3110/articles/508842425f904c
- websocket を通じた上記のような通知から，タイマーをスタート，ストップさせるような機能の実装
