import Vue from 'vue'
import Router from 'vue-router'
import tab from '@/pages/tabs/index'
import topicList from '@/pages/topic/list'
import topicDetail from '@/pages/topic/detail'
import memberDetail from '@/pages/user/detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/tab',
      name: 'tab',
      component: tab,
      children: [
        {
          path: 'topicList',
          name: 'topicList',
          component: topicList
        }
      ]
    },
    {
      path: '/topicDetail/:topicId',
      name: 'topicDetail',
      component: topicDetail
    },
    {
      path: '/member/:username',
      name: 'member',
      component: memberDetail
    },
    {
      path: '*',
      redirect: '/tab/topicList'
    }
  ]
})
