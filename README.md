# BlogApp

## Overview

A blog app built with react native, I am learning as I develop the app. The end goal is to have a blogging app where the user can create and view other blogs that were created.

I feel this is a great idea for a learn as you go app and there is a lot of base functionailty to cover and it can be built up slowly. E.g. starting off with hardcoded json to represent a database and then after creating a back-end to store blogs and account data once most UI components have been created.

Please send an email to ryanthompson139@gmail.com for the following files to run the app:
- `.env` within root
- `GoogleService-Info.plist` within `./ios`
- `google-services.json` within `./android/app`
- `debug.keystore` within `android/app/`

## Environment Variables Structure

FIREBASE_DB_URL=

## Tooling

- macOS Monterey
- Homebrew
- Node, NPM, NVM
- Yarn
- Watchman
- Xcode 13
- CocoaPods
- Java Development Kit (JDK)
- Android Studio and SDK

## Install Dependencies

Once your React Native Development Environment is configured, you can begin configuring the project.

- Go to your project's root folder and run `yarn` to install the Javascript dependencies.
- Go to your project's iOS folder `cd ios` and run `pod install` to install the iOS dependencies.

Then run `yarn run ios` or `yarn run android` to build and run the app through command line. To view other scripts please refer to `package.json` in the root folder.
