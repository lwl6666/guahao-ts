"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/my-service/xinguan/index.js";
  "./pages/xinguan-vaccine/xinguan-vaccine.js";
  "./pages/index/index.js";
  "./pages/registered/registered.js";
  "./pages/video/video.js";
  "./pages/mine/mine.js";
  "./pages/login-page/index.js";
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "App",
  setup(__props) {
    common_vendor.onLaunch(() => {
      let get_menu = common_vendor.index.getStorageSync("MenuButton");
      if (!get_menu) {
        let menuButtonInfo = common_vendor.index.getMenuButtonBoundingClientRect();
        common_vendor.index.setStorageSync("MenuButton", menuButtonInfo);
      }
    });
    common_vendor.onShow(() => {
      console.log("App Show");
    });
    common_vendor.onHide(() => {
      console.log("App Hide");
    });
    return () => {
    };
  }
});
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/guahao-ts/src/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
