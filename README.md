# th3

An independent, clean-room anime discovery app starter built with Expo and React Native. It is not the original Th3-Anime app and is not affiliated with its developers.

The original APK did not include the source project. This repo contains both a new, clean-room starter and a separate recovery archive for the public v0.0.10-Beta APK. The recovered files are analysis artifacts and do not restore the original project structure.

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

## APK recovery archive

- [Universal v0.0.10-Beta APK](recovery/v0.0.10-Beta/th3-anime-universal-release-10.apk)
- [Full extracted APK tree](recovery/v0.0.10-Beta/extracted/)
- [Decompiled Hermes bundle](recovery/v0.0.10-Beta/extracted/decompiled.js)
- [Recovery notes](recovery/v0.0.10-Beta/extracted/RECOVERY_NOTES.md)
- [Provenance and SHA-256](recovery/v0.0.10-Beta/PROVENANCE.md)

The decompiled output is approximate pseudocode and cannot by itself rebuild the original app. The APK has no source maps, original source tree, dependency lockfile, or Gradle project. Rebuilding the original app needs those materials from its developers, or continued clean-room implementation.

The starter targets Expo SDK 54 to match the SDK family identified in the released APK. SDK 54 uses React Native 0.81 and React 19.1. See [Expo SDK 54](https://docs.expo.dev/versions/v54.0.0/) for supported tooling and package compatibility.

## License

The root [MIT License](LICENSE) covers only the independently authored clean-room starter. It does not cover the APK, decompiled output, recovered assets, or bundled libraries. Permission to publish the recovery archive was confirmed by the repository maintainer; this repository does not grant any additional license to those materials. Their original owners' licenses and terms still apply.
