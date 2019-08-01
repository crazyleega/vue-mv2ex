import axios from 'axios'

export default{
  getLatestTopic: () => axios.get('/api/latestTopics')
}
