<template>
  <view-box ref="viewBox">
    <x-header slot="header">mv2ex</x-header>
    <div class="content">
      <router-view></router-view>
    </div>
    <tabbar v-model="index">
      <tabbar-item link='/tab/topicList'>
        <font-awesome-icon :icon="['fas', 'file']" slot="icon" />
        <span slot="label">文章</span>
      </tabbar-item>
      <tabbar-item link='/tab/nodeList'>
        <font-awesome-icon :icon="['fab', 'linode']" slot="icon" />
        <span slot="label">节点</span>
      </tabbar-item>
      <!-- <tabbar-item link='/topicList'>
        <font-awesome-icon :icon="['fas', 'user']" slot="icon" />
        <span slot="label">我</span>
      </tabbar-item> -->
    </tabbar>
  </view-box>
</template>

<script>
import { Tabbar, TabbarItem, XHeader, ViewBox } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem,
    XHeader,
    ViewBox
  },
  data () {
    return {
      index: 0
    }
  }
}
</script>
<style scoped>
.weui-tabbar{
  position: fixed;
}
/* .content{
  margin-bottom: 60px;
} */
</style>
