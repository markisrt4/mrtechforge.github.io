browser.browserAction.onClicked.addListener(() => {
  // Simple and visible log so you know it ran
  console.log("[Forge Clear] Clearing cache & cookies…");

  // Clear everything in one call
  browser.browsingData.remove(
    {},                      // no time range = all data
    { cache: true, cookies: true }
  ).then(() => {
    console.log("[Forge Clear] Done.");
    browser.notifications.create({
      type: "basic",
      iconUrl: "icon48.png",
      title: "Forge Clear",
      message: "Cache and cookies cleared."
    });
  });
});