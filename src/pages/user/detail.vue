<template>
    <div>
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
    </div>
</template>

<script>
import api from '@/api'
import { InlineLoading, Flexbox, FlexboxItem } from 'vux'
export default {
  name: 'userDetail',
  components: {
    InlineLoading,
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      userInfo: {},
      topicList: []
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
        this.userInfo = res.data
      }, (error) => {
        console.log(error)
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
  .personal-info{
    border-bottom:10px solid #EFEFEF;
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
</style>
