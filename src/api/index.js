import axios from 'axios'

export default{
  getLatestTopic: () => axios.get('/api/latestTopics'),
  getTopicDetail: (topicId) => axios.get(`/api/topicDetail?id=${topicId}`),
  getCommentListByTopicId: (params) => axios.get(`/api/commentList`, { params }),
  getUserInfo: (username) => axios.get(`/api/getUserInfo?username=${username}`),
  getTopicListByUsername: (params) => axios.get(`/api/topicDetail`, { params })
}
