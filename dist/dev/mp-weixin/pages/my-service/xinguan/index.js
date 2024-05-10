"use strict";
const common_vendor = require("../../../common/vendor.js");
const public_request = require("../../../public/request.js");
if (!Math) {
  point();
}
const point = () => "../../../com-components/point.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    let order = common_vendor.ref([]);
    common_vendor.onShow(async () => {
      const res = await public_request.RequestApi.CoviduserOrder();
      order.value = res.data.data;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(order), (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.address),
            c: common_vendor.t(item.company),
            d: common_vendor.t(item.date),
            e: common_vendor.t(item.period),
            f: common_vendor.t(item.cancel ? "取消预约" : "已取消预约"),
            g: common_vendor.n(item.cancel ? "" : "prevent_style"),
            h: common_vendor.o(($event) => _ctx.Cancel(item._id, index), index),
            i: index
          };
        }),
        b: common_vendor.p({
          show: _ctx.show
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/guahao-ts/src/pages/my-service/xinguan/index.vue"]]);
wx.createPage(MiniProgramPage);
