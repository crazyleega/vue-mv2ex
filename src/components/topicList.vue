<template>
  <div>
    <div class="topic-card" v-for="topic in topicList" v-bind:key="topic.id">
      <div class="topic-header">
        <img loading="lazy" :src="topic.member.avatar_normal">
        <flexbox>
          <flexbox-item class="topic-author">
            <router-link :to="{name:'member', params: {username: topic.member.username}}">{{topic.member.username}}</router-link>
            </flexbox-item>
          <flexbox-item class="text-right">
            <div >
              <span class="topic-tag">{{topic.node.title}}</span>{{topic.replies}}
            </div>
          </flexbox-item>
        </flexbox>
        <div>{{topic.created | date}}<span v-if="topic.last_reply_by">&nbsp;•&nbsp;最后回复 {{topic.last_reply_by}}</span></div>
      </div>
      <div class="topic-title" @click="goDetail(topic.id)">{{topic.title}}</div>
    </div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'
export default {
  props: {
    topicList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  components: {
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
    }
  },
  methods: {
    goDetail (id) {
      this.$router.push({
        path: `/topicDetail/${id}`
      })
    }
  }
}
</script>

<style>

</style>
