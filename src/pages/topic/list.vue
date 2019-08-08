<template>
  <div class="topic-page">
    <sticky>
      <flexbox>
        <flexbox-item><div @click="changeTab('newest')" v-bind:class="{ active: currentTab == 'newest' }">最新</div></flexbox-item>
        <flexbox-item><div @click="changeTab('hotest')" v-bind:class="{ active: currentTab == 'hotest' }">热门</div></flexbox-item>
        <flexbox-item><div @click="changeTab('tech')"  v-bind:class="{ active: currentTab == 'tech' }">科技</div></flexbox-item>
        <flexbox-item><div @click="changeTab('all4all')" v-bind:class="{ active: currentTab == 'all4all' }">交易</div></flexbox-item>
        <flexbox-item><div @click="changeTab('qna')"  v-bind:class="{ active: currentTab == 'qna' }">问与答</div></flexbox-item>
      </flexbox>
    </sticky>
    <div>
      <topic-list :topicList="topicList"></topic-list>
    </div>
    <!-- <p class="text-center">
      <span class="loading">加载中&nbsp;&nbsp;</span><inline-loading></inline-loading>
    </p> -->
  </div>
</template>

<script>
import { Sticky, Flexbox, FlexboxItem } from 'vux'
import topicList from 'components/topicList'
import api from '@/api'
export default {
  name: 'list',
  components: {
    Sticky,
    topicList,
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      topicList: [],
      currentTab: 'newest'
    }
  },
  mounted: function () {
    this.initData(this.currentTab)
  },
  methods: {
    initData (nodeName) {
      this.changeTab(nodeName)
    },
    changeTab (nodeName) {
      this.topicList = []
      this.currentTab = nodeName
      this.$vux.loading.show({
        text: 'Loading'
      })
      let promise
      if (nodeName === 'newest') {
        promise = api.getLatestTopic()
      } else if (nodeName === 'hotest') {
        promise = api.getHotestTopic()
      } else {
        promise = api.getTopicListByNodeName(nodeName)
      }
      promise.then((response) => {
        this.$vux.loading.hide()
        this.topicList = response.data
      }, (error) => {
        this.$vux.loading.hide()
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
.topic-page{
  background: #e6e6e6;
}

.vux-sticky-box{
  top: 0px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  background: #EFEFEF;
}
.vux-flexbox-item{
  text-align: center;
  margin: 0 !important;
}
.loading{
  vertical-align: middle;
  display: inline-block;
  font-size: 14px;
}
.active{
  color: #09BB07;
  font-weight: bold;
}
</style>
