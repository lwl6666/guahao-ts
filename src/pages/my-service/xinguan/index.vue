<template>
  <view class="xinguan-view" v-for="(item, index) in order" :key="index">
    <text class="name">{{ item.name }}</text>
    <view class="xinguan-order">
      <text>接种地点:</text>
      <text>{{ item.address }}</text>
    </view>
    <view class="xinguan-order">
      <text>疫苗厂商:</text>
      <text>{{ item.company }}</text>
    </view>
    <view class="xinguan-order">
      <text>接种时间:</text>
      <text>{{ item.date }} {{ item.period }}</text>
    </view>
    <!-- 取消预约 -->
    <view class="reg-cancel">
      <text :class="item.cancel ? '' : 'prevent_style'" @click="Cancel(item._id, index)">
        {{ item.cancel ? '取消预约' : '已取消预约' }}
      </text>
    </view>
  </view>
  <!-- 数据为空,提示组件 -->
  <point :show="show"/>
  <view style="height:200rpx"></view>
</template>

<script setup lang="ts">
import point from '@/com-components/point.vue'
import {RequestApi} from '@/public/request'
import {onShow} from "@dcloudio/uni-app";
import {ref} from 'vue'

// 获取订单数据
let order = ref([])
onShow(async () => {
  const res: any = await RequestApi.CoviduserOrder()
  order.value = res.data.data
})
</script>
<style>
@import url('../../../common-style/vaccine.css');
</style>
