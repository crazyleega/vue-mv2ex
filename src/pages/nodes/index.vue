<template>
  <div>
      <div class="tag-list">
        <span class="tag" v-for="node in nodeList" :key="node.id" @click="goDetail(node.name)">{{node.title}}</span>
      </div>
  </div>
</template>

<script>
import api from '@/api'
import { AlertModule } from 'vux'

export default {
  name: 'nodeList',
  data () {
    return {
      nodeList: []
    }
  },
  mounted () {
    this.getNodeList()
  },
  methods: {
    getNodeList () {
      this.$vux.loading.show({
        text: 'Loading'
      })
      api.getNodeList().then((res) => {
        this.$vux.loading.hide()
        if (res.message) {
          AlertModule.show({
            title: res.data.message,
            content: '错误'
          })
        } else {
          this.nodeList = res.data
        }
      }, (error) => {
        this.$vux.loading.hide()
        console.log(error)
      })
    },
    goDetail (nodeName) {
      this.$router.push({
        path: `/nodeDetail/${nodeName}`
      })
    }
  }
}
</script>

<style scoped>
  .tag-list{
    margin: 0 10px 10px 0;
  }
  .tag{
    background-color: #e2e2e2;
    font-size: 12px;
    line-height: 12px;
    display: inline-block;
    padding: 6px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    text-decoration: none;
    color: #999;
    margin-top: 10px;
    margin-left: 10px;
  }
</style>
