<template>
  <div class="topic-page">
    <div class="topic-card">
      <div class="topic-header">
        <img loading="lazy" src="//cdn.v2ex.com/avatar/8bd3/e786/18123_normal.png?m=1467561048" class="avatar" border="0" align="default">
        <flexbox>
          <flexbox-item class="topic-author">crazyleega</flexbox-item>
          <flexbox-item class="text-right">
            <div >
              <span class="topic-tag">分享发现</span>
            </div>
          </flexbox-item>
        </flexbox>
        <div>2018/09/02&nbsp;•&nbsp;最后回复 crazyleega</div>
      </div>
      <div class="topic-title">[魔都]魔法集市 9102 年魔法师募集中 ~（前端开发）</div>
    </div>
    <p style="text-align:center;">
      <span style="vertical-align:middle;display:inline-block;font-size:14px;">加载中&nbsp;&nbsp;</span><inline-loading></inline-loading>
    </p>
  </div>
</template>

<script>
import { InlineLoading, Flexbox, FlexboxItem } from 'vux'
export default {
  name: 'list',
  components: {
    InlineLoading,
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      msg: 'asdasd'
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.initData()
    })
  },
  methods: {
    initData: function () {
      this.$http.get('http://www.v2ex.com/api/topics/hot.json').then(function (response) {
        console.log(response.body)
      }).then(function (err) {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.topic-page{
  background: #F0F2F3;
}
.text-right{
  text-align: right;
}
.topic-card{
  background: white;
  padding-bottom:10px;
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
  top: 6px;
  left: 16px;
  width:34px;
  height: 34px;
  border-radius: 6px;
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

</style>
