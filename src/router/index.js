import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import topicList from '@/pages/topic/list'
import topicDetail from '@/pages/topic/detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/topicList',
      name: 'topicList',
      component: topicList
    },
    {
      path: '/topicDetail/:topicId',
      name: 'topicDetail',
      component: topicDetail
    }
  ]
})
