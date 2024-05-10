"use strict";
const common_vendor = require("../../common/vendor.js");
const public_request = require("../../public/request.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    common_vendor.useCssVars((_ctx) => ({
      "558633d9": common_vendor.unref(menu_top),
      "7742e023": common_vendor.unref(menu_height)
    }));
    let menu_top = common_vendor.ref("");
    let menu_height = common_vendor.ref("");
    let vaccine = common_vendor.ref([]);
    let pyhdata = common_vendor.ref([]);
    let registered = common_vendor.ref([]);
    let selftest = common_vendor.ref([]);
    common_vendor.onMounted(() => {
      let MenuButton = common_vendor.index.getStorageSync("MenuButton");
      menu_top.value = MenuButton.top + "px";
      menu_height.value = MenuButton.height + "px";
      pageData();
    });
    function pageData() {
      public_request.RequestApi.FrontPage().then((res) => {
        vaccine.value = res.data.data[0].vaccine;
        pyhdata.value = res.data.data[1].reserve;
        registered.value = res.data.data[2].popular;
        selftest.value = res.data.data[3].self_test;
      });
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.s(_ctx.__cssVars()),
        b: common_vendor.o(($event) => _ctx.jumpAssess("抑郁测评专业版", 0, "001")),
        c: common_vendor.s(_ctx.__cssVars()),
        d: common_vendor.f(common_vendor.unref(vaccine), (item, index, i0) => {
          return {
            a: item.image,
            b: common_vendor.t(item.title),
            c: index
          };
        }),
        e: common_vendor.s(_ctx.__cssVars()),
        f: common_vendor.f(common_vendor.unref(pyhdata), (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.describe),
            c: item.image,
            d: index,
            e: common_vendor.o(($event) => _ctx.regMedex(index), index)
          };
        }),
        g: common_vendor.s(_ctx.__cssVars()),
        h: common_vendor.o(($event) => _ctx.regMedex(0)),
        i: common_vendor.s(_ctx.__cssVars()),
        j: common_vendor.f(common_vendor.unref(registered), (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: item.image,
            c: index,
            d: common_vendor.s("background-color:" + item.background),
            e: common_vendor.o(($event) => _ctx.regRoute(item.dep_id), index)
          };
        }),
        k: common_vendor.s(_ctx.__cssVars()),
        l: common_vendor.s(_ctx.__cssVars()),
        m: common_vendor.unref(selftest).length > 0
      }, common_vendor.unref(selftest).length > 0 ? {
        n: common_vendor.f([common_vendor.unref(selftest)[0]], (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.describe),
            c: common_vendor.t(item.number_of_people),
            d: common_vendor.t(item.question),
            e: common_vendor.t(item.minute),
            f: item.image,
            g: index,
            h: common_vendor.o(($event) => _ctx.jumpAssess(item.name, index, "001"), index)
          };
        }),
        o: common_vendor.f(common_vendor.unref(selftest).slice(1), (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.question),
            c: common_vendor.t(item.minute),
            d: common_vendor.t(item.number_of_people),
            e: item.image,
            f: index,
            g: common_vendor.o(($event) => _ctx.jumpAssess(item.name, index, "002"), index)
          };
        }),
        p: common_vendor.s(_ctx.__cssVars())
      } : {});
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-83a5a03c"], ["__file", "D:/guahao-ts/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
