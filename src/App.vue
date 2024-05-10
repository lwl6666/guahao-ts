<script setup lang="ts">
import {onLaunch, onShow, onHide} from "@dcloudio/uni-app";
import {onMounted} from "vue";

onLaunch(() => {
  // 获取胶囊按钮坐标信息
  let get_menu = uni.getStorageSync('MenuButton')
  if (!get_menu) {
    let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
    uni.setStorageSync('MenuButton', menuButtonInfo)
  }
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style></style>
