<template>
  <view class="Login-page">
    <image mode="aspectFill"
           src="https://diancan-1252107261.cos.accelerate.myqcloud.com/yiliao/denglu-yemian.jpg"></image>
    <button @click="Login">授权登陆</button>
  </view>
</template>
<script lang="ts" setup>
import {RequestApi} from '@/public/request';
import {onMounted} from 'vue';

// 登录
function Login() {
  uni.getUserProfile({
    desc: '授权登陆',
    success: (res) => {
      console.log('成功', res);
      let {nickName, avatarUrl} = res.userInfo
      //   获取code
      uni.login({
        success: (res) => {
          uni.showLoading({title: "登录中...", mask: true})
          ApiLogin(nickName, avatarUrl, res.code)
        },
        fail: (err) => {
          uni.showToast({
            title: '登陆失败',
            icon: 'none',
            duration: 1000,
          });
        }
      })
    },
    fail: (err) => {
      uni.showToast({
        title: '拒绝登录!',
        icon: 'none',
        duration: 1000,
      });
    }
  })
}

// 登录接口调用
async function ApiLogin(nickName: string, avatarUrl: string, code: string) {
  try {
    let obj = {appid: 'wx216836c1f859fa35', secret: '1acb0db1c5a4ecf4ca02e1ca725ef3fb', avatarUrl, nickName, code}
    let res: any = await RequestApi.WxLogin(obj)
    // 存储用户信息到本地缓存,并且返回上一页
    uni.setStorageSync('wxuser', res.data.data)
    setTimeout(() => {
      uni.navigateBack({delta: 1})
      uni.hideLoading()
    }, 600)
    console.log('登录', res)
  } catch (err) {
    uni.showToast({
      title: '登录失败!',
      icon: 'none',
      duration: 1000,
    });
  }
}

</script>
<style>
.Login-page {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.Login-page image {
  width: 100%;
  height: 100%;
}

.Login-page button {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: 30%;
  background-color: #2c76ef;
  color: #ffffff;
  padding: 0 100rpx;
  font-size: 35rpx;
}
</style>
