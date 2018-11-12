var util = require('we7/resource/js/util.js');
App({
  onLaunch: function(res) {
    util.getLogin(function (sessionid) {
      //这回userInfo为用户信息
      console.log(sessionid)
    })
  },
  onShow: function(res) {},
  onHide: function() {},
  onError: function(msg) {
    console.log(msg)
  },
  //加载微擎工具类
  util: util,
  //导航菜单，微擎将会自己实现一个导航菜单，结构与小程序导航菜单相同
  //用户信息，sessionid是用户是否登录的凭证
  "tabBar": {
    "color": "#888",
    "selectedColor": "#1ba9ba",
    "borderStyle": "#cececf",
    "backgroundColor": "#f7f7f8",
    "list": [{
        "pagePath": "/we7_02/pages/index/index",
        "iconPath": "/we7/resource/icon/home.png",
        "selectedIconPath": "/we7/resource/icon/homeselect.png",
        "text": "首页"
      },
      {
        "pagePath": "/we7_02/pages/rank/rank",
        "iconPath": "/we7/resource/icon/rank.png",
        "selectedIconPath": "/we7/resource/icon/rankselect.png",
        "text": "排行"
      }
    ]
  },
  siteInfo: require('siteinfo.js')
});