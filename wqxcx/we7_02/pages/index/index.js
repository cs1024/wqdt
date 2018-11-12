var app = getApp();
Page({
  data: {

  },
  onLoad: function(options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    app.util.footer(that);
  },
  onReady: function() {
    // 页面渲染完成
  },
  onShow: function() {
    // 页面显示
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  },
  /**
 * 用户点击右上角分享
 */
  onShareAppMessage: function () {

  },
  onGotUserInfo: function(e) {
    if (e.detail.errMsg == 'getUserInfo:ok') {
      wx.setStorageSync('user', e.detail.userInfo);
      wx.navigateTo({
        url: '../answer/answer?title=' + '青年大学习'
      })
    } else {
      wx.showModal({
        title: '系统信息',
        content: '请允许微信授权',
        showCancel: false,
        complete: function() {

        }
      });
    }
  },
  index: function() {
    var that = this;
    var sessionid = wx.getStorageSync('sessionid');
    app.util.request({
      'url': 'entry/wxapp/index',
      'cachetime': '0',
      'data': {
        fd: '56287',
        sessionid: sessionid
      },
      success: function(res) {
        if (res.data.errno == 0) {
          console.log(res.data);
        }
      }
    })
  }


})