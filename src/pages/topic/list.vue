<template>
  <div class="topic-page">
    <div class="topic-card" v-for="topic in topicList" v-bind:key="topic.id" @click="goDetail(topic.id)">
      <div class="topic-header">
        <img loading="lazy" :src="topic.member.avatar_normal">
        <flexbox>
          <flexbox-item class="topic-author">{{topic.member.username}}</flexbox-item>
          <flexbox-item class="text-right">
            <div >
              <span class="topic-tag">{{topic.node.title}}</span><font-awesome-icon class="comment-icon" :icon="['fas', 'comment-dots']"/><span class="ml5">{{topic.replies}}</span>
            </div>
          </flexbox-item>
        </flexbox>
        <div>{{topic.created | date}}<span v-if="topic.last_reply_by">&nbsp;•&nbsp;最后回复 {{topic.last_reply_by}}</span></div>
      </div>
      <div class="topic-title">{{topic.title}}</div>
    </div>
    <p class="text-center">
      <span class="loading">加载中&nbsp;&nbsp;</span><inline-loading></inline-loading>
    </p>
  </div>
</template>

<script>
import { InlineLoading, Flexbox, FlexboxItem } from 'vux'
import api from '@/api'
export default {
  name: 'list',
  components: {
    InlineLoading,
    Flexbox,
    FlexboxItem
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
      api.getLatestTopic().then((response) => {
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
