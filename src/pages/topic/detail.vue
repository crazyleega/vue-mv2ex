<template>
  <div style="height:100%">
    <view-box ref="viewBox">
      <x-header slot="header">mv2ex</x-header>
      <div class="topicDetail-page">
          <div class="topic-detail" v-if="isRequestedDetail">
            <div class="topic-header">
              <img :src="topicDetail.member.avatar_normal">
              <flexbox>
                <flexbox-item class="topic-author">{{topicDetail.member.username}}</flexbox-item>
                <flexbox-item class="text-right">
                  <div >
                    <span class="topic-tag">{{topicDetail.node.title}}</span>
                  </div>
                </flexbox-item>
              </flexbox>
              <div>{{topicDetail.created | date}}</div>
            </div>
            <p class="topic-title">{{topicDetail.title}}</p>
            <p class="topic-content" v-html="topicDetail.content_rendered"> </p>
          </div>
          <div class="comment-detail" v-if="isRequestedComment">
            <div class="comment-header">{{topicDetail.replies}}条回复</div>
            <div class="comment-list">
              <div class="comment-item" v-for="comment in commentList" :key="comment.id">
                <div class="topic-header">
                  <img :src="comment.member.avatar_normal">
                  <div class="topic-author">{{comment.member.username}}</div>
                  <div>{{comment.created | date}}</div>
                </div>
                <div class="comment-content" v-html="comment.content_rendered"></div>
              </div>
            </div>
          </div>
      </div>
    </view-box>
  </div>
</template>

<script>
import api from '@/api'
import { Flexbox, FlexboxItem, XHeader, ViewBox } from 'vux'
export default {
  name: 'topicDetail',
  components: {
    Flexbox,
    FlexboxItem,
    XHeader,
    ViewBox
  },
  data () {
    return {
      topicDetail: {},
      commentList: [],
      isRequestedDetail: false,
      isRequestedComment: false,
      currentPage: 1,
      pageSize: 10
    }
  },
  mounted () {
    this.getTopicDetail(this.$route.params.topicId)
    this.getCommentList(this.$route.params.topicId)
  },
  methods: {
    getTopicDetail (topicId) {
      this.$vux.loading.show({
        text: 'Loading'
      })
      api.getTopicDetail(topicId).then((response) => {
        this.topicDetail = Object.assign({}, response.data[0])
        this.$vux.loading.hide()
        this.isRequestedDetail = true
        console.log(this.topicDetail)
      }, (error) => {
        this.isRequestedDetail = true
        this.$vux.loading.hide()
        console.log(error)
      })
    },
    getCommentList (topicId) {
      api.getCommentListByTopicId({
        topic_id: topicId,
        page: this.currentPage,
        page_size: this.pageSize
      }).then((response) => {
        console.log(response.data)
        this.isRequestedComment = true
        this.commentList = response.data
      }, (error) => {
        this.isRequestedComment = true
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

.topic-detail{
  padding: 10px;
  border-bottom:10px solid #EFEFEF;
}
.topic-title{
  font-size: 16px;
  font-weight: bold;
  margin:10px 0;
}
.topic-content{
  word-wrap: break-word;
  font-size: 14px;
}

.topic-content >>> img{
  width: 100%;
  height: auto;
}

h1, h2, h3, h4, h5, h6 {
  white-space: normal;
}
.comment-item{
  padding: 10px;
  border-bottom: 2px solid #EFEFEF;
}
.comment-header{
  font-size: 14px;
  line-height: 36px;
  height: 36px;
  padding-left: 10px;
  border-bottom:1px solid #EFEFEF;
}

.comment-content{
  word-wrap: break-word;
  font-size: 14px;
}

</style>
