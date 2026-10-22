# th3

An independent, clean-room anime discovery app starter built with Expo and React Native. It is not the original Th3-Anime app and is not affiliated with its developers.

This repository does not contain APK-derived code, decompiled output, app assets, or bundled libraries from Th3-Anime. The original APK did not include the source project, so this repo starts a new implementation from scratch.

## Current state

The starter has a small local catalog, browse screen, search, details, an in-memory watchlist, and a sample schedule. It uses placeholder data and images. No streaming, downloads, accounts, or remote service integration are implemented.

## Run it

Use Node.js 20.19 or newer, then:

```sh
npm install
npx expo start
```

Open it in Expo Go or a development build. To create a native Android project, run `npx expo prebuild --platform android`, then build it with the Android toolchain.

## Planned work

- Choose a licensed metadata provider and implement catalog/search requests.
- Persist the watchlist and playback progress locally.
- Add episode browsing and schedule data from permitted sources.
- Design a player integration only for media the project is authorized to distribute or stream.
- Add app icons, accessibility checks, error/loading states, and Android release automation.

The starter targets Expo SDK 54 to match the SDK family identified in the released APK. SDK 54 uses React Native 0.81 and React 19.1. See [Expo SDK 54](https://docs.expo.dev/versions/v54.0.0/) for supported tooling and package compatibility.

## License

The original clean-room files in this repository are licensed under the MIT License. This license does not cover the Th3-Anime app, its APK, or any third-party assets or code from that app.
