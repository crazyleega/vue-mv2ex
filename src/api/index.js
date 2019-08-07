import axios from 'axios'

export default{
  getLatestTopic: () => axios.get('/api/latestTopics'),
  getHotestTopic: () => axios.get('/api/getHotestTopic'),
  getTopicDetail: (topicId) => axios.get(`/api/topicDetail?id=${topicId}`),
  getCommentListByTopicId: (params) => axios.get(`/api/commentList`, { params }),
  getUserInfo: (username) => axios.get(`/api/getUserInfo?username=${username}`),
  getTopicListByUsername: (params) => axios.get(`/api/topicDetail`, { params }),
  getNodeList: () => axios.get('/api/getNodeList'),
  getNodeDetail: (nodeName) => axios.get(`/api/getNodeDetail?name=${nodeName}`)
}
