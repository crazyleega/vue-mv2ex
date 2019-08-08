<template>
  <view-box ref="viewBox" body-padding-bottom="0">
      <x-header slot="header">mv2ex</x-header>
      <div v-if="isRequested" class="node-header">
        <div class="text-center"><img :src="nodeDetail.avatar_normal"></div>
        <div class="text-center">{{nodeDetail.title}}</div>
        <div class="text-center">{{nodeDetail.header}}</div>
      </div>
      <div v-if="isRequested">
        <topic-list :topicList="topicList"></topic-list>
      </div>
  </view-box>
</template>

<script>
import api from '@/api'
import topicList from 'components/topicList'
import { XHeader, ViewBox } from 'vux'

export default {
  name: 'detail',
  components: {
    XHeader,
    ViewBox,
    topicList
  },
  data () {
    return {
      nodeDetail: {},
      topicList: [],
      isRequested: false
    }
  },
  mounted () {
    this.getNodeDetail(this.$route.params.nodeName)
    this.getTopicByNodeName(this.$route.params.nodeName)
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
          this.$vux.alert.show({
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
    },
    getTopicByNodeName (nodeName) {
      api.getTopicListByNodeName(nodeName).then((res) => {
        if (res.message) {
          this.$vux.alert.show({
            title: res.data.message,
            content: '错误'
          })
        } else {
          this.topicList = res.data
        }
      }, (error) => {
        console.log(error)
      })
    },
    goDetail (id) {
      this.$router.push({
        path: `/topicDetail/${id}`
      })
    }
  }
}
</script>

<style scoped>
  .weui-tab{
    background: #e6e6e6;
  }
  .node-header{
    margin-bottom: 10px;
    background: white;
    padding:10px 0;
  }
</style>
