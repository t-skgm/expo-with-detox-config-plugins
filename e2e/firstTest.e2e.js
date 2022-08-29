import { by, device, element, expect } from "detox";

describe("Example", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have welcome screen", async () => {
    await expect(element(by.id("main"))).toBeVisible();
  });

  it("should show hello text after tap", async () => {
    await element(by.id("hello_button")).tap();
    await expect(element(by.text("Hello!!!"))).toBeVisible();
  });
});
