<template>
  <view-box ref="viewBox">
    <x-header slot="header">mv2ex</x-header>
    <div class="personal-page">
      <div class="personal-info text-center">
        <img class="userInfo-avatar" :src="userInfo.avatar_normal">
        <div class="userInfo-username">
          {{userInfo.username}}
          <span class="main-color" v-if="userInfo.location">&nbsp;|&nbsp;&nbsp;{{userInfo.location}}</span>
        </div>
        <div v-if="userInfo.website">个人主页: {{userInfo.website}}</div>
        <p class="userInfo-bio">{{userInfo.bio}}</p>
      </div>
      <div>
        <div class="topic-card" v-for="topic in topicList" v-bind:key="topic.id" @click="goDetail(topic.id)">
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
      </div>
      <div v-if="isRequested && topicList.length == 0" class="no-data">
        该用户没有发布任何信息
      </div>
    </div>
  </view-box>
</template>

<script>
import api from '@/api'
import { InlineLoading, Flexbox, FlexboxItem, XHeader, ViewBox } from 'vux'
export default {
  name: 'userDetail',
  components: {
    InlineLoading,
    Flexbox,
    FlexboxItem,
    XHeader,
    ViewBox
  },
  data () {
    return {
      userInfo: {},
      topicList: [],
      isRequested: false
    }
  },
  mounted () {
    this.getUserInfo(this.$route.params.username)
    this.getTopicListByUsername(this.$route.params.username)
  },
  methods: {
    getUserInfo (username) {
      this.$vux.loading.show({ text: 'Loading' })
      api.getUserInfo(username).then((res) => {
        this.$vux.loading.hide()
        this.isRequested = true
        this.userInfo = res.data
      }, (error) => {
        console.log(error)
        this.isRequested = true
        this.$vux.loading.hide()
      })
    },
    getTopicListByUsername (username) {
      api.getTopicListByUsername({
        username: username,
        page: 1,
        page_size: 10
      }).then((res) => {
        this.topicList = res.data
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
  .personal-page{
    background-color: #EFEFEF;
  }
  .personal-info{
    background-color: white;
    padding: 10px 0;
    margin-bottom: 10px;
  }
  .userInfo-avatar{
    width: 50px;
    height: 50px;
    border-radius :50%;
    border:1px solid #EFEFEF;
  }
  .userInfo-username{
    font-size: 16px;
    color: #333;
    font-weight: bold;
  }
  .userInfo-bio{
    font-size: 12px;
    line-height: 1.5;
    padding:0 10px;
  }
  .no-data{
    background: white;
    text-align: center;
    font-size:14px;
    padding: 10px;
  }
</style>
