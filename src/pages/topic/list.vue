<template>
  <div class="topic-page">
    <div>
      <topic-list :topicList="topicList"></topic-list>
    </div>
    <!-- <p class="text-center">
      <span class="loading">加载中&nbsp;&nbsp;</span><inline-loading></inline-loading>
    </p> -->
  </div>
</template>

<script>
import { InlineLoading } from 'vux'
import topicList from 'components/topicList'
import api from '@/api'
export default {
  name: 'list',
  components: {
    InlineLoading,
    topicList
  },
  data () {
    return {
      topicList: []
    }
  },
  mounted: function () {
    this.$nextTick(() => {
      this.initData()
    })
  },
  methods: {
    initData () {
      this.$vux.loading.show({
        text: 'Loading'
      })
      api.getHotestTopic().then((response) => {
        this.$vux.loading.hide()
        this.topicList = response.data
      }, (error) => {
        this.$vux.loading.hide()
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
.topic-page{
  background: #e6e6e6;
}

.loading{
  vertical-align: middle;
  display: inline-block;
  font-size: 14px;
}

</style>
