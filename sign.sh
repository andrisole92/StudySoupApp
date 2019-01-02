#!/usr/bin/env bash
zipalign -v -p 4 platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk platforms/android/app/build/outputs/apk/release/app-release.apk
apk-signer -f platforms/android/app/build/outputs/apk/release/app-release.apk -k android-release-key.keystore -a alias_name -s pashword
