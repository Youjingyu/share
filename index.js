// vue部分
Vue.prototype.__patch__ = function () {
  const vm = this
  const dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._props || {}),
    Object.keys(vm._computedWatchers || {})
  )
  const data =dataKeys.reduce((res, key) => {
    res[key] = vm[key]
    return res
  }, {})
  // 更新数据到小程序
  Page.setData(data)
}

// 小程序部分
Page({
  handleProxy (e) {
    const { 'data-eventid': eventid, 'data-comkey': comkey } = e.target.dataset
    const vnode = getVnode(eventid)
    const handler = getHandler(comkey)
    handler(e)
  }
})

// 页面中实际的数据格式
Page({
  data: {
    $root: {
      '0': '页面数据',
      '0,0': '组件数据',
      '0,0,0': '组件数据',
      '0,1': '组件数据'
    }
  }
})
// 实际更新数据时
Page.setData({
  '0,1': '组件数据'
})