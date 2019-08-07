<template>
  <view-box ref="viewBox">
      <x-header slot="header">mv2ex</x-header>
      <div v-if="isRequested">
        <div class="text-center"><img :src="nodeDetail.avatar_normal"></div>
        <div class="text-center">{{nodeDetail.title}}</div>
        <div class="text-center">{{nodeDetail.header}}</div>
    </div>
  </view-box>
</template>

<script>
import api from '@/api'
import { AlertModule, XHeader, ViewBox } from 'vux'

export default {
  name: 'detail',
  components: {
    AlertModule,
    XHeader,
    ViewBox
  },
  data () {
    return {
      nodeDetail: {},
      isRequested: false
    }
  },
  mounted () {
    this.getNodeDetail(this.$route.params.nodeName)
  },
  methods: {
    getNodeDetail (nodeName) {
      this.$vux.loading.show({
        text: 'Loading'
      })
      api.getNodeDetail(nodeName).then((res) => {
        this.$vux.loading.hide()
        this.isRequested = true
        if (res.message) {
          AlertModule.show({
            title: res.data.message,
            content: '错误'
          })
        } else {
          this.nodeDetail = res.data
        }
      }, (error) => {
        this.$vux.loading.hide()
        console.log(error)
      })
    }
  }
}
</script>

<style>

</style>
