export default (date) => {
  const time = new Date(parseInt(date + '000'))
  const between = Date.now() - Number(time)
  if (between < 60 * 60 * 1000) {
    return ~~(between / (60 * 1000)) + '分钟前'
  } else if (between < 60 * 60 * 1000 * 24) {
    return ~~(between / (3600 * 1000)) + '小时前'
  } else {
    return ~~(between / 86400) + '天前'
  }
}
