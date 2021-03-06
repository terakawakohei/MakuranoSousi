# ユースケース 6： タイマーをセットする

## 概要
ユーザーがタイマーセットボタンにおいて，タイマーをセットする

## アクター
- ユーザー

## 事前条件
- ユーザーがルーム画面に参加していること
- タイマーが止まっていること

## 事後条件
- ルームのタイマーに時間が設定された状態になる

## トリガ―
- ユーザーがタイマーセットボタンを押す．

## 基本フロー
1. ユーザーが，タイマーセットボタンを押す．
2. システムは，ボタンを押したユーザーに設定画面を表示する．
3. ユーザーは，設定画面から時間，アラームを設定し決定ボタンを押す．
4. システムは，入力からタイマーとアラームを設定する．

## 代替フロー
### 代替フロー1
- 3.a.1  基本フロー3において,59分もしくは59秒を超える入力があった場合，
- X.a.2  システムは，59分または59秒の入力があったものとする．
### 代替フロー2
- 3.c.1  基本フロー3において，入力が無いまま決定ボタンが押された場合，
- 3.c.2  システムは，時間に入力が無かった時は0秒をセット，アラームの入力が無かった場合はアラームをセットしない．
### 代替フロー3
- 3.c.1  基本フロー3において，アラームついかボタンが押された場合，
- 3.c.2  システムは，アラーム2の設定欄を追加，2つ目のアラームをセットする．

## GUI紙芝居
### 設定画面
<img src="./timer_setting.png">

