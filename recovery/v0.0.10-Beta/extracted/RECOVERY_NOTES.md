# Source recovery findings

## Recovered from the release APK

- `decompiled.js`: Hermes bytecode decompiled into approximate JavaScript pseudocode. Function names, string literals, API URLs, and some app-level logic survived. The output is large and includes React Native/Expo and other bundled library code alongside the app code.
- `assets/index.android.bundle`: the original compiled Hermes bundle.
- `assets/app.config` and `assets/app.manifest`: packaged Expo configuration and asset manifest. The config identifies the app as Th3-Anime 0.0.10, package `com.th3c0der.anime`, using Expo SDK 54 and Hermes.
- APK resources, images, fonts, ad viewer JavaScript, and native shared libraries for the included Android CPU architectures.

The decompiled bundle contains recognizable app logic and strings, including AniList data functions and references to `api.th3anime.me`, `th3-anime-api.onrender.com`, Jikan, Allanime, and streaming hosts. Decompiled names and control flow can be incomplete or inaccurate.

## Searches and results

- The official GitHub repository has only `README.md` in its current tree and throughout its commit history. Its v0.0.10 source archive contains only that README.
- All seven public forks also contain only `README.md`.
- The organization’s `assets` repository contains a README and announcement artwork; `maintenance` contains a README and maintenance page.
- The APK contains no main app `.js`, `.jsx`, `.ts`, `.tsx`, or source map files. It contains compiled `assets/index.android.bundle` plus unrelated vendored ad viewer JavaScript.
- The public [`dhrubonai/Anime-open`](https://github.com/dhrubonai/Anime-open) repository is an APK rebranding/repackaging pipeline. Its README says it works from the compiled Th3-Anime APK and that there is no Gradle source project; it does not provide the original React Native source.

## Not recoverable from these artifacts

The original React Native/TypeScript project tree, exact source files and paths, comments, TypeScript types, original build configuration, and source maps were not found. The decompiler cannot recreate these exactly from the compiled bundle. Recovering the original project would require the developer to publish or share it, or locating an undiscovered backup/source map.
