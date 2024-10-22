# Chunirec-International

For more information please refer to [this page](https://mango0908.github.io/chunirec-international/?lang=en_US)

若要取得更多資訊，請參考[此頁面](https://mango0908.github.io/chunirec-international/?lang=zh_TW)

## Credits & about this project

This project is a remake of [chuni-tools](https://github.com/Dogeon188/chuni-tools).
This project is heavily inspired by [@kyroslee/chuni_intl_viewer](https://github.com/kyroslee/chuni_intl_viewer) and [@myjian/mai-tools](https://github.com/myjian/mai-tools).

The chart constant data is from [CHUNITHM譜面定数メインフレーム](https://twitter.com/RCMF_chunithm).

## Dev

To initialize the repository, first copy the `./docs` folder and rename to `./build`. (If you know what you're doing, you can also just take advantages of the symlinks.) Then, use

```sh
npm install
```

to initialize the repo. BTW, it's recommended to install Live Server plugin if you're using VSCode.

After that, use the following command to create a dev session:

```sh
npm run dev
```

With the following command, you can build and compile the code to `./docs`, then GitHub Pages will handle the rest.

```sh
npm run build
```
