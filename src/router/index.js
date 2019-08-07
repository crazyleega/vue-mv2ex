import Vue from 'vue'
import Router from 'vue-router'
import tab from '@/pages/tabs/index'
import topicList from '@/pages/topic/list'
import topicDetail from '@/pages/topic/detail'
import memberDetail from '@/pages/user/detail'
import nodeList from '@/pages/nodes/index'
import nodeDetail from '@/pages/nodes/detail'

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
        },
        {
          path: 'nodeList',
          name: 'nodeList',
          component: nodeList
        }
      ]
    },
    {
      path: '/topicDetail/:topicId',
      name: 'topicDetail',
      component: topicDetail
    },
    {
      path: '/nodeDetail/:nodeName',
      name: 'nodeDetail',
      component: nodeDetail
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
