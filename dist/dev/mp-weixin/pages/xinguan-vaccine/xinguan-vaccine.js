"use strict";
const common_vendor = require("../../common/vendor.js");
const public_request = require("../../public/request.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "xinguan-vaccine",
  setup(__props) {
    let timeData = common_vendor.reactive({
      data: {
        Hospital: "",
        address: "",
        company: [],
        lasting: [],
        week: []
      }
    });
    let SubmitData = common_vendor.reactive({
      penging_data: {
        name: "",
        id_card: "",
        phone: "",
        address: "",
        de_address: "",
        crowd_sort: "",
        date: "",
        period: "",
        reserve_time: "",
        when: 0
      }
    });
    let { penging_data } = common_vendor.toRefs(SubmitData);
    let selector_data = common_vendor.ref([
      "医疗卫生人员",
      "卫生系统内工作的其他人员",
      "因公出国人员",
      "对外劳务派遣人员",
      "留学生",
      "因私出国人员",
      "海关边检人员",
      "公安系统,消防人员",
      "党政机关,事业单位人员",
      "社区工作者",
      "教育工作者",
      "小学和中学学生",
      "其他人员"
    ]);
    common_vendor.onMounted(async () => {
      const res = await public_request.RequestApi.NewappTime();
      console.log(res);
      timeData.data = res.data.data[0];
    });
    function changeRegion(event) {
      let address = "";
      event.detail.value.forEach((item) => address += item + " ");
      SubmitData.penging_data.address = address;
    }
    function changeSelector(event) {
      SubmitData.penging_data.crowd_sort = selector_data.value[event.detail.value];
    }
    function ChooseWeek(date) {
      SubmitData.penging_data.date = date;
    }
    let timeIndex = common_vendor.ref("1");
    function ChooseTime(index, period, start_time, end_time, when) {
      timeIndex.value = index;
      SubmitData.penging_data.period = period;
      SubmitData.penging_data.reserve_time = start_time + "-" + end_time;
      SubmitData.penging_data.when = when;
    }
    function Cancel() {
      common_vendor.index.navigateBack({ delta: 1 });
    }
    async function Submit() {
      common_vendor.index.showLoading({ title: "提交中", mask: true });
      const res = await public_request.RequestApi.RescoVid(SubmitData.penging_data);
      if (res.statusCode == 200) {
        common_vendor.index.hideLoading();
        common_vendor.index.navigateTo({ url: "/pages/my-service/xinguan/index" });
      }
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(penging_data).name,
        b: common_vendor.o(($event) => common_vendor.unref(penging_data).name = $event.detail.value),
        c: common_vendor.unref(penging_data).id_card,
        d: common_vendor.o(($event) => common_vendor.unref(penging_data).id_card = $event.detail.value),
        e: common_vendor.unref(penging_data).phone,
        f: common_vendor.o(($event) => common_vendor.unref(penging_data).phone = $event.detail.value),
        g: common_vendor.t(common_vendor.unref(penging_data).address == "" ? "请选择现居地址" : common_vendor.unref(penging_data).address),
        h: common_vendor.o(changeRegion),
        i: common_vendor.unref(penging_data).de_address,
        j: common_vendor.o(($event) => common_vendor.unref(penging_data).de_address = $event.detail.value),
        k: common_vendor.t(common_vendor.unref(penging_data).crowd_sort == "" ? "请选择疫苗人群分类" : common_vendor.unref(penging_data).crowd_sort),
        l: common_vendor.unref(selector_data),
        m: common_vendor.o(changeSelector),
        n: common_vendor.t(common_vendor.unref(timeData).data.Hospital),
        o: common_vendor.t(common_vendor.unref(timeData).data.address),
        p: common_vendor.f(common_vendor.unref(timeData).data.company, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index
          };
        }),
        q: common_vendor.f(common_vendor.unref(timeData).data.week, (item, index, i0) => {
          return {
            a: common_vendor.t(item.day),
            b: common_vendor.t(item.date),
            c: common_vendor.t(item.Have),
            d: common_vendor.o(($event) => ChooseWeek(item.date), index),
            e: index
          };
        }),
        r: common_vendor.n(common_vendor.unref(penging_data).date == "" ? "" : "checkstyle"),
        s: common_vendor.f(common_vendor.unref(timeData).data.lasting, (item, index, i0) => {
          return {
            a: common_vendor.t(item.period),
            b: common_vendor.f(item.time, (item_a, index_a, i1) => {
              return {
                a: common_vendor.t(item_a.start_time),
                b: common_vendor.t(item_a.end_time),
                c: common_vendor.t(item_a.over),
                d: common_vendor.n(index + "-" + index_a == common_vendor.unref(timeIndex) ? "checkstyle" : ""),
                e: common_vendor.o(($event) => ChooseTime(index + "-" + index_a, item.period, item_a.start_time, item_a.end_time, item_a.when), index_a),
                f: index_a
              };
            }),
            c: index
          };
        }),
        t: common_vendor.o(Cancel),
        v: common_vendor.o(Submit)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/guahao-ts/src/pages/xinguan-vaccine/xinguan-vaccine.vue"]]);
wx.createPage(MiniProgramPage);
