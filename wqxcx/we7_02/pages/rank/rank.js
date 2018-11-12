var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: {},
    avatar: null,
    rank: [],
    no_data: false,
    no_more: false,
    num: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    app.util.footer(that);
    this.rank();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    var that = this;
    if (!(that.data.no_more || that.data.no_data)) {
      app.util.request({
        'url': 'entry/wxapp/paging',
        'cachetime': '0',
        'data': {
          num: that.data.num
        },
        success: function(res) {
          if (res.data.errno == 0) {
            that.setData({
              rank: that.data.rank.concat(res.data.data)
            })
            if (res.data.data.length < 20) {
              that.setData({
                no_more: true
              })
            } else {
              that.setData({
                no_more: false,
                num: that.data.num + 1
              })
            }
          }
        }
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  rank: function() {
    var that = this;
    var sessionid = wx.getStorageSync('sessionid');
    app.util.request({
      'url': 'entry/wxapp/rank',
      'cachetime': '0',
      'data': {
        sessionid: sessionid
      },
      success: function(res) {
        if (res.data.errno == 0) {
          that.setData({
            array: res.data.data,
            rank: res.data.data.lists
          })
          let user = wx.getStorageSync('user');
          if (res.data.data.avatar) {
            that.setData({
              avatar: res.data.data.avatar
            })
          } else if (user) {
            that.setData({
              avatar: user.avatarUrl
            })
          }

          if (res.data.data.lists.length == 0) {
            that.setData({
              no_data: true
            })
          } else if (res.data.data.lists.length < 20) {
            that.setData({
              no_more: true
            })
          } else {
            that.setData({
              no_more: false,
              num: that.data.num + 1
            })
          }
        }
      }
    })
  }
})