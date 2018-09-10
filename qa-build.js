const tpl = {
  'type': 'div',
  'attr': {},
  'classList': [
    'demo-page'
  ],
  'children': [
    {
      'type': 'text',
      'attr': {
        'value': function () { return '欢迎打开' + (this.key) }
      },
      'classList': [
        'title'
      ]
    }
  ]
}

const style = {
  '.demo-page': {
    'flexDirection': 'column',
    'justifyContent': 'center',
    'alignItems': 'center'
  }
}

const script = function (module, exports, $app_require$) {
  const router = $app_require$('@app-module/system.router')
  exports.default = {
    data () {
      return {
        title: '示例页面'
      }
    },
    routeDetail () {
      router.push({
        uri: '/DemoDetail'
      })
    }
  }
}

$app_define$('@app-component/index', [], function ($app_require$, $app_exports$, $app_module$) {
  script($app_module$, $app_exports$, $app_require$)
  $app_module$.exports.template = tpl
  $app_module$.exports.style = style
})
