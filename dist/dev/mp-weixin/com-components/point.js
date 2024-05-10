"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "point",
  props: {
    show: { type: Boolean, default: false },
    title: { default: "你还没有订单数据" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: _ctx.show
      }, _ctx.show ? {
        b: common_vendor.t(_ctx.title)
      } : {});
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1433db3c"], ["__file", "D:/guahao-ts/src/com-components/point.vue"]]);
wx.createComponent(Component);
