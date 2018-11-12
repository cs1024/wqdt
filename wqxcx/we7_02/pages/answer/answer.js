var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    array: [],
    lists: {},
    radioItems: [],
    count: 0,
    reply: [],
    forbid: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    if (options.title) {
      wx.setNavigationBarTitle({
        title: options.title
      })
    }

    let answer = wx.getStorageSync('answer');
    if (answer) {
      that.setData({
        array: answer.array,
        count: answer.count,
        reply: answer.reply,
        lists: answer.array[answer.count],
        radioItems: answer.array[answer.count].radioItems
      });
    } else {
      that.answer();
    }


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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  //选择答案
  radioChange: function(e) {
    var that = this;
    if (e.detail.value == that.data.lists.correct) {
      that.data.reply[that.data.count] = 1;
      that.setData({
        reply: that.data.reply
      })
    } else {
      that.data.reply[that.data.count] = 0;
      that.setData({
        reply: that.data.reply
      })
    }

    var radioItems = that.data.radioItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    that.setData({
      radioItems: radioItems
    });
  },
  checkboxChange: function(e) {
    var that = this;
    if (e.detail.value.sort().toString() == that.data.lists.correct.sort().toString()) {
      that.data.reply[that.data.count] = 1;
      that.setData({
        reply: that.data.reply
      })
    } else {
      that.data.reply[that.data.count] = 0;
      that.setData({
        reply: that.data.reply
      })
    }

    var checkboxItems = that.data.radioItems,
      values = e.detail.value;
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }

    that.setData({
      radioItems: checkboxItems
    });
  },

  //下一题
  next: function() {
    var that = this;
    if (!that.data.forbid) {
      if (that.data.reply[that.data.count] == undefined) {
        wx.showToast({
          title: '请选择答案',
          icon: 'none',
          duration: 2000
        })
      } else {

        if (that.data.reply[that.data.count] == 1) {
          wx.showToast({
            title: '正确',
            icon: 'none',
            duration: 2000
          })
        } else {
          wx.showToast({
            title: '错误',
            icon: 'none',
            duration: 2000
          })
        }

        if (that.data.count + 1 < that.data.array.length) {
          that.setData({
            count: that.data.count + 1,
            lists: that.data.array[that.data.count + 1],
            radioItems: that.data.array[that.data.count + 1].radioItems
          })

          let answer = {};
          answer.array = that.data.array;
          answer.count = that.data.count;
          answer.reply = that.data.reply;
          wx.setStorageSync('answer', answer);

        } else {
          that.setData({
            forbid: true
          })
          wx.removeStorageSync('answer');
          let j = 0;
          for (let i = 0, lenI = that.data.reply.length; i < lenI; ++i) {
            if (that.data.reply[i] == 1) {
              j++
            }
          }

          // let score = j * that.data.array.fraction;
          setTimeout(() => {
            wx.reLaunch({
              url: '../rank/rank'
            })
          }, 1000)
          console.log(j)
        }
      }
    }
  },

  //上一题
  prev: function() {
    var that = this;
    if (!that.data.forbid) {
      if (that.data.count > 0) {
        wx.showModal({
          title: '提示',
          content: '确定返回上一题？',
          success(res) {
            if (res.confirm) {
              let reply = that.data.reply;
              reply[that.data.count - 1] = undefined;
              that.setData({
                count: that.data.count - 1,
                lists: that.data.array[that.data.count - 1],
                radioItems: that.data.array[that.data.count - 1].radioItems,
                reply: reply
              })
            }
          }
        })
      } else {
        wx.showToast({
          title: '没有上一题',
          icon: 'none',
          duration: 2000
        })
      }
    }
  },
  answer: function() {
    var that = this;
    var sessionid = wx.getStorageSync('sessionid');
    app.util.request({
      'url': 'entry/wxapp/answer',
      'cachetime': '0',
      'data': {
        sessionid: sessionid
      },
      success: function(res) {
        if (res.data.errno == 0) {
          console.log(res.data);
          if (res.data.data.length > 0) {
            that.setData({
              array: res.data.data,
              lists: res.data.data[that.data.count],
              radioItems: res.data.data[that.data.count].radioItems
            });
          } else {
            wx.showModal({
              title: '提示',
              content: res.data.message,
              showCancel: false,
              complete: function() {
                wx.reLaunch({
                  url: '../index/index'
                })
              }
            });
          }

        }
      }
    })
  }
})