"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "registered",
  setup(__props) {
    common_vendor.ref("Hello");
    return (_ctx, _cache) => {
      return {};
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/guahao-ts/src/pages/registered/registered.vue"]]);
wx.createPage(MiniProgramPage);
