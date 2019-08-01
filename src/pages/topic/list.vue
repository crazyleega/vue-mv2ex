<template>
  <div class="topic-page">
    <div class="topic-card" v-for="topic in topicList" v-bind:key="topic.id">
      <div class="topic-header">
        <img loading="lazy" :src="topic.member.avatar_normal">
        <flexbox>
          <flexbox-item class="topic-author">{{topic.member.username}}</flexbox-item>
          <flexbox-item class="text-right">
            <div >
              <span class="topic-tag">{{topic.node.title}}</span>{{topic.replies}}
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
    initData: function () {
      api.getLatestTopic().then((response) => {
        console.log(response.data)
        this.topicList = response.data
      }, (err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.topic-page{
  background: #e6e6e6;
}
.topic-card{
  background: white;
  margin-bottom: 10px;
  padding: 10px;
}
.topic-author{
  color:#333;
}
.topic-header{
  padding-left: 60px;
  margin-left:-18px;
  height:46px;
  position: relative;
  font-size: 12px;
  color: #778087;
}
.topic-header img{
  position: absolute;
  top: 2px;
  left: 18px;
  width:34px;
  height: 34px;
  border-radius: 6px;
  border: 1px solid #EFEFEF;
}
.topic-header .topic-tag{
    background-color: #f5f5f5;
    font-size: 12px;
    line-height: 12px;
    display: inline-block;
    padding: 4px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    text-decoration: none;
    color: #999;
}
.topic-title{
  font-size: 14px;
  color: #333;
  font-weight: bold;
}

.loadnig{
  vertical-align: middle;
  display: inline-block;
  font-size: 14px;
}

</style>
