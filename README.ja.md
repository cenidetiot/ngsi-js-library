# NGSI-JS Library.

## イントロダクション

JavaScript 環境用の NGSI ライブラリは、JSON エンティティを NGSI データモデルに変換する目的で、FIWARE Orion Context Broker によってマニピュレートまたはオペレートできるソフトウェア・ツールです。このライブラリは、RESTFul Web サービスやバックエンドなどの Node.js 実行環境を通じてアプリケーションに実装できます。

NGSI JavaScript Library は、2つの npm モジュールで構成されています :

### NGSI-parser モジュール

NGSI-parser モジュールは、非構造化 JSON オブジェクトの構文を解析して、それらを FIWARE NGSIv2 コンテキスト・エンティティに変換します

[ngsi-parser repository](https://github.com/cenidetiot/ngsi-parser)

### OCB-sender モジュール

OCB-sender モジュールは、FIWARE NGSIv2 コンテキスト・エンティティの更新を Orion Context Broker に送信する目的でマニピュレートし、このようにしてオペレートします。

OCB-sender は、FIWARE-NGSIv2 コンテキスト・エンティティを FIWARE Orion Context Broker に送信する目的で操作し、このようにして操作を行います。

[ocb-sender repository](https://github.com/cenidetiot/ocb-sender)

## インストールの前提条件と要件

- インストールの前提条件については、[前提条件](doc/index.md#pre-requirements-of-installation)のセクションを参照してください
- ngsi-parser npm モジュールのインストールについては、[インストール方法](doc/ngsi/index.md#how-to-install)のセクションで、このモジュールのドキュメントを参照してください
- ocb-sender npm モジュールのインストールについては、[インストール方法](doc/ocb/index.md#how-to-install)のセクションで、このモジュールのドキュメントを参照してください

## モジュールの使用

### ngsi-parser モジュール

- このモジュールの機能と実装方法の詳細については、[ngsi-parser](doc/ngsi/index.md) のセクションを参照してください

### ocb-sender モジュール
- このモジュールの機能と実装方法の詳細については、[ocb-sender](doc/ocb/index.md) のセクションを参照してください

### 例

[両方のモジュールの使用例](doc/modulesUsage/index.md)のセクションで、一緒に両方のモジュールの機能を使用する方法についての情報を参照してください。

## この GIT リポジトリのクローンに関する重要なお知らせ

このリポジトリを複製するには、サブモジュール ngsi-parser と ocb-sender のコードとリソースをダウンロードするために必要な **git clone --recursive command** コマンドを実行します。

    git clone --recursive https://github.com/cenidetiot/ngsi-js-library.git

## ドキュメントのリンク：

* [Read the docs](http://ngsi-js-library.readthedocs.io/en/latest)
* [Github pages](https://cenidetiot.github.io/ngsi-js-library)
