const iosName = "expodetoxconfigplugins";
const emulator = "Pixel_4_API_30";
const simulator = "iPhone 13 Pro";
const derivedDataPath = "ios/build";
const sdk = "iphonesimulator";

module.exports = {
  testRunner: "jest",
  runnerConfig: require.resolve("./e2e/jest.config.js"),
  specs: "e2e",
  behavior: {
    init: {
      exposeGlobals: false,
    },
  },
  apps: {
    "ios.debug": {
      type: "ios.app",
      binaryPath: `${derivedDataPath}/Build/Products/Debug-${sdk}/${iosName}.app`,
      build: `./scripts/start-metro.sh && ./scripts/build-detox-ios.sh ${iosName} Debug`,
    },
    "android.debug": {
      type: "android.apk",
      binaryPath: "android/app/build/outputs/apk/debug/app-debug.apk",
      build:
        "./scripts/start-metro.sh && pushd android; ./gradlew app:assembleDebug app:assembleAndroidTest -DtestBuildType=debug; popd",
    },
  },
  devices: {
    simulator: {
      type: "ios.simulator",
      device: {
        type: simulator,
      },
    },
    emulator: {
      type: "android.emulator",
      device: {
        avdName: emulator,
      },
    },
  },
  configurations: {
    "ios.sim.debug": {
      device: "simulator",
      app: "ios.debug",
    },
    "android.emu.debug": {
      device: "emulator",
      app: "android.debug",
    },
  },
};
