"use strict";
const common_vendor = require("../../common/vendor.js");
const public_request = require("../../public/request.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    function Login() {
      common_vendor.index.getUserProfile({
        desc: "授权登陆",
        success: (res) => {
          console.log("成功", res);
          let { nickName, avatarUrl } = res.userInfo;
          common_vendor.index.login({
            success: (res2) => {
              common_vendor.index.showLoading({ title: "登录中...", mask: true });
              ApiLogin(nickName, avatarUrl, res2.code);
            },
            fail: (err) => {
              common_vendor.index.showToast({
                title: "登陆失败",
                icon: "none",
                duration: 1e3
              });
            }
          });
        },
        fail: (err) => {
          common_vendor.index.showToast({
            title: "拒绝登录!",
            icon: "none",
            duration: 1e3
          });
        }
      });
    }
    async function ApiLogin(nickName, avatarUrl, code) {
      try {
        let obj = { appid: "wx216836c1f859fa35", secret: "1acb0db1c5a4ecf4ca02e1ca725ef3fb", avatarUrl, nickName, code };
        let res = await public_request.RequestApi.WxLogin(obj);
        common_vendor.index.setStorageSync("wxuser", res.data.data);
        setTimeout(() => {
          common_vendor.index.navigateBack({ delta: 1 });
          common_vendor.index.hideLoading();
        }, 600);
        console.log("登录", res);
      } catch (err) {
        common_vendor.index.showToast({
          title: "登录失败!",
          icon: "none",
          duration: 1e3
        });
      }
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(Login)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/guahao-ts/src/pages/login-page/index.vue"]]);
wx.createPage(MiniProgramPage);
