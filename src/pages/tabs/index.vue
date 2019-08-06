<template>
  <div>
    <div>
      <x-header>mv2ex</x-header>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <tabbar v-model="index">
      <tabbar-item link='/tab/topicList'>
        <font-awesome-icon :icon="['fab', 'hotjar']" slot="icon" />
        <span slot="label">最新</span>
      </tabbar-item>
      <tabbar-item>
        <font-awesome-icon :icon="['fab', 'linode']" slot="icon" />
        <span slot="label">节点</span>
      </tabbar-item>
      <tabbar-item link='/topicList'>
        <font-awesome-icon :icon="['fas', 'user']" slot="icon" />
        <span slot="label">我</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, XHeader } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem,
    XHeader
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
.content{
  margin-bottom: 60px;
}
</style>
