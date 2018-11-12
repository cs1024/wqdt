//学习贯彻
var xxgcLinkInfoObj = {name:'workWin',url:'./window/window.html',pageParam:{title:'学习贯彻',iurl:'../listPage/xxgc.html',frameName:'xxgc_listPage',pagecs:{'do':'xxgc'}}};//学习贯彻
var xxgcLinkInfoObj_content = {name:'workWin_content',url:'../window/window.html',pageParam:{title:'学习贯彻内容页',iurl:'../contentPage/xxgc.html',frameName:'xxgc_contentPage'}};//学习贯彻(内容)

//信息动态
var xxdtLinkInfoObj = {name:'workWin',url:'./window/window.html',pageParam:{title:'信息动态',iurl:'../listPage/xxgc.html',frameName:'xxdt_listPage',pagecs:{'do':'xxdt'}}};//信息动态
var xxdtLinkInfoObj_content = {name:'workWin_content',url:'../window/window.html',pageParam:{title:'信息动态内容页',iurl:'../contentPage/xxgc.html',frameName:'xxdt_contentPage'}};//信息动态(内容)

//督促检查

var dcjcLinkInfoObj_search = {name:'workWin_searchdcjc',url:'../window/window.html',pageParam:{title:'搜索督促检查',iurl:'../listPage/dcjc.html',isSearch:true,frameName:'search_dcjc',pagecs:{bldxId:1,listType:2}}};//搜索督促检查 bldxId 我的和消息页面  listType  搜索和非搜索页面
var dcjcLinkInfoObj_search2 = {name:'workWin_searchdcjc2',url:'../window/window.html',pageParam:{title:'搜索督促检查',iurl:'../listPage/dcjc.html',isSearch:true,frameName:'search_dcjc2',pagecs:{bldxId:0,listType:2}}};

var dcjcLinkInfoObj_content_userInfo = {name:'workWin_content_userInfo',url:'../window/window.html',pageParam:{title:'督促检查',iurl:'../contentPage/dcjc_user.html',frameName:'dcjc_contentPage_userInfo',pagecs:{}}};//督促检查用户
var dcjcLinkInfoObj_content = {name:'workWin_content',url:'../window/window_2.html',pageParam:{title:'督促检查',iurl:[{name: '督促内容',url: '../contentPage/dcjc_nr.html',bgColor: '#fff'},{name: '参与人员',url: '../contentPage/dcjc_qd.html',bgColor: '#fff'}],frameName:'dcjc_contentPage',pagecs:{}}};//督促检查(内容)
var makedcjcLinkInfoObj = {name:'workWin_makedcjc',url:'../window/window.html',pageParam:{title:'创建督办',iurl:'../contentPage/make_duban.html',frameName:'make_dcjc',pagecs:{}}};//创建督促检查
var dcjcLinkInfoObj = {name:'workWin',url:'./window/window.html',pageParam:{title:'督促检查',iurl:'../listPage/dcjc.html',frameName:'dcjc_listPage',isAdd:true,addName:"添加督办",iurl2:makedcjcLinkInfoObj,iurl3:dcjcLinkInfoObj_search2,pagecs:{bldxId:0,listType:1}}};//督促检查(我的)
var dcjcLinkInfoObj_xx = {name:'workWin',url:'./window/window.html',pageParam:{title:'督促检查',iurl:'../listPage/dcjc.html',frameName:'dcjc_listPage',isAdd:true,addName:"添加督办",iurl2:makedcjcLinkInfoObj,iurl3:dcjcLinkInfoObj_search,pagecs:{bldxId:1,listType:1}}};//督促检查消息

//会议
var hyhdLinkInfoObj_search = {name:'workWin_searchhyhd',url:'../window/window.html',pageParam:{title:'搜索会议活动',iurl:'../listPage/hyhd.html',isSearch:true,frameName:'search_hyhd',pagecs:{chryId:1,listType:2}}};//搜索会议活动

var hyhdLinkInfoObj_content_userInfo = {name:'workWin_content_userInfo',url:'../window/window.html',pageParam:{title:'会议活动',iurl:'../contentPage/hyhd_user.html',frameName:'hyhd_contentPage_userInfo',pagecs:{}}};//督促检查用户
var HyhdQjLinkInfoObj = {name:'workWin_hyhdqj',url:'../window/window.html',pageParam:{title:'会议请假',iurl:'../contentPage/hyhd_qj.html',frameName:'hyhdqj_frame',pagecs:{}}};//会议活动(请假)
var HyhdSpLinkInfoObj = {name:'workWin_hyhdsp',url:'../window/window.html',pageParam:{title:'会议请假(审批)',iurl:'../contentPage/hyhd_sp.html',frameName:'hyhdsp_frame',pagecs:{}}};//会议活动请假(审批)
var hyhdLinkInfoObj_content = {name:'workWin_content',url:'../window/window_2.html',pageParam:{title:'会议活动',iurl:[{name: '会议内容',url: '../contentPage/hyhd_nr.html',bgColor: '#fff'},{name: '会议签到',url: '../contentPage/hyhd_qd.html',bgColor: '#fff'}],frameName:'hydh_contentPage',pagecs:{}}};//会议活动(内容)
var makeHyhdLinkInfoObj = {name:'workWin_makehyhd',url:'../window/window.html',pageParam:{title:'创建会议活动',iurl:'../contentPage/make_huiyi.html',frameName:'make_hyhd'}};//创建会议活动
var hyhdLinkInfoObj = {name:'workWin',url:'./window/window.html',pageParam:{title:'会议活动',iurl:'../listPage/hyhd.html',frameName:'hyhd_listPage',isAdd:true,addName:"添加会议",iurl2:makeHyhdLinkInfoObj,iurl3:hyhdLinkInfoObj_search,pagecs:{chryId:0,listType:1}}};//会议活动(我的)
var hyhdLinkInfoObj_xx = {name:'workWin',url:'./window/window.html',pageParam:{title:'会议活动',iurl:'../listPage/hyhd.html',frameName:'hyhd_listPage',isAdd:true,addName:"添加会议",iurl2:makeHyhdLinkInfoObj,iurl3:hyhdLinkInfoObj_search,pagecs:{chryId:1,listType:1}}};//会议活动消息

//请假申请
var qjspLinkInfoObj_search = {name:'workWin_searchqjsp',url:'../window/window.html',pageParam:{title:'搜索请假审批',iurl:'../listPage/qjsp.html',isSearch:true,frameName:'search_qsjp',pagecs:{type:1,listType:2}}};//搜索请假审批

var qjSpLinkjjObj = {name:'workWin_qjspjj',url:'../window/window.html',pageParam:{title:'请假审批(拒绝)',iurl:'../contentPage/qjsp_jj.html',frameName:'qjspjj_frame',pagecs:{}}};//请假审批(拒绝)
var qjspLinkInfoObj_content = {name:'workWin_content',url:'../window/window.html',pageParam:{title:'请假审批',iurl:'../contentPage/qjsp.html',frameName:'qjsp_contentPage',isBtn:true,pagecs:{}}};//请假审批(内容)
var makeqjspLinkInfoObj = {name:'workWin_makeqjsp',url:'../window/window.html',pageParam:{title:'请假申请',iurl:'../contentPage/make_qingjia.html',frameName:'make_qjsp'}};//申请请假审批
var qjspLinkInfoObj = {name:'workWin',url:'./window/window_3.html',pageParam:{title:'请假审批',iurl:[{name: '已审批',url:'../listPage/qjsp.html',bgColor: '#fff',pageParam:{type:4,listType:1},allowEdit:false},{name: '待审批',url: '../listPage/qjsp.html',bgColor: '#fff',pageParam:{type:3,listType:1},allowEdit:true}],frameName:'qjsp_listPage',isAdd:true,addName:"请假申请",iurl2:makeqjspLinkInfoObj,pagecs:{sprId:0}}};//请假审批
var qjspLinkInfoObj_xx = {name:'workWin',url:'./window/window_3.html',pageParam:{title:'请假审批',iurl:[{name: '全部请假',url:'../listPage/qjsp.html',bgColor: '#fff',pageParam:{type:1,listType:1},allowEdit:false},{name: '我的审批',url: '../listPage/qjsp.html',bgColor: '#fff',pageParam:{type:2,listType:1},allowEdit:true}],frameName:'qjsp_listPage',isAdd:true,addName:"请假申请",iurl2:makeqjspLinkInfoObj,iurl3:qjspLinkInfoObj_search}};//请假审批消息

//添加用户
var addUserLinkInfoObj = {name:'addUserWin',url:'../window/window.html',pageParam:{title:'取消',iurl:'../select/addUser.html',frameName:'addUser_Page',isCon:true,isCons:true,isSearchLink:true,searchEvent:1,addEvent:1,pagecs:{}}};//添加用户
var addUserLinkInfoObj2 = {name:'addUserWin',url:'../window/window.html',pageParam:{title:'返回',iurl:'../select/selectUser.html',frameName:'addUser_Page',isCons:true,isSearchLink:true,addEvent:1,pagecs:{}}};//添加用户(设置)

//搜索
var searchUserLinkInfoObj = {name:'searchUserWin',url:'../window/window.html',pageParam:{title:'取消',iurl:'../search/index.html',frameName:'searchUser_Page',isSearch:true,isCons:true,addEvent:2,pagecs:{}}};//添加用户
var searchUserLinkInfoObj_group = {name:'searchUsergroupWin',url:'../window/window.html',pageParam:{title:'取消',iurl:'../search/index.html',frameName:'searchUserGroup_Page',isSearch:true,isCons:true,addEvent:4,pagecs:{}}};//添加用户

//数据报表
var sjbbLinkInfoObj = {name:'workWin',url:'./window/window.html',pageParam:{title:'数据报表',iurl:'../listPage/xxgc.html',frameName:'sjbb_listPage'}};//数据报表

//个人信息
var presonLinkInfoObj = {name:'presonWin',url:'./window/window.html',pageParam:{title:'个人信息',iurl:'../fixedMe.html',frameName:'preson_Page'}};//个人信息

//设置
var settingxmLinkInfoObj = {name:'settingxmWin',url:'./window/window.html',pageParam:{title:'项目列表',iurl:'../setting/listxm.html',frameName:'settingxm_listPage'}};//setting
var settingUserLinkInfoObj_xx = {name:'settingUserWin',url:'../window/window.html',pageParam:{title:'消息通知设置',iurl:'../setting/userlist.html',frameName:'settinguser_listPage',isAdU:true,pagecs:{}}};//setting消息设置
var settingUserLinkInfoObj_sh = {name:'settingUserWin',url:'../window/window.html',pageParam:{title:'信息审核设置',iurl:'../setting/userlist.html',frameName:'settinguser_listPage',isAdU:true,pagecs:{}}};//setting审核

var settingOpLinkInfoObj = {name:'settingOpWin',url:'../window/window.html',pageParam:{title:'选项列表',iurl:'../setting/op.html',frameName:'settingOp_listPage',pagecs:{}}};//setting选项
var settingAtyLinkInfoObj = {name:'settingAtyWin',url:'../window/window.html',pageParam:{title:'权限设置',iurl:'../setting/atySelect.html',frameName:'settingaty_listPage',pagecs:{}}};//setting权限

//goup
var groupAddUserLinkInfoObj = {name:'groupAddUserWin',url:'../window/window.html',pageParam:{title:'取消',iurl:'../select/addUser_group.html',frameName:'groupAddUser_Page',isCon:true,isCons:true,isSearchLink:true,searchEvent:2,addEvent:3,pagecs:{}}};//添加组用户
var groupLinkInfoObj = {name:'groupWin',url:'../window/window.html',pageParam:{title:'群组列表',iurl:'../group/list.html',frameName:'group_Page',isCons:true,addEvent:2,pagecs:{}}};//群组列表
var addGroupLinkInfoObj = {name:'addGroupWin',url:'../window/window.html',pageParam:{title:'新增群组',iurl:'../group/addGroup.html',frameName:'addGroup_Page',pagecs:{}}};//添加群组

var hasSelectUserIdsArr = [];
var hasSelectUserIdsArr_cs = [];
var searchpeddingArr = [];
var groupUserIdsArr = [];
var globalImgArr = [];
var qiniuObj = null;

var currentPageIndex = 1;
var globalFlag = 0;
var globalLoadMsgFlag = true;
var globalLastLoadMsgFlag = true;
var globalSearchKeyWord = '';


var webSiteUrl = "http://yxfw02.demo.fjlmcm.cn/m/server/index.php";
var qiniuUrl = "http://pi182sjy9.bkt.clouddn.com";
var weekDaysArr = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];

//打开win
var openWinFn = function(){

  var systemType = api.systemType;

  if(arguments[0]==undefined || !arguments[0] instanceof Object){
    alertFn2("参数错误");
    return false;
  }

  if(arguments[1]!=undefined){
    arguments[0].pageParam.pagecs.param = arguments[1];
  }

  arguments[0].delay = 300;

  arguments[0].animation = {
      type:"push",                //动画类型（详见动画类型常量）
      subType:"from_right",       //动画子类型（详见动画子类型常量）
      duration:300                //动画过渡时间，默认300毫秒
  };
  if(systemType=='android'){
    api.openWin(arguments[0]);
  }else{
    api.openWin(arguments[0]);
  }
}

var serverConnect = function(dataObj,excFn){

  dataObj.userid = $api.getStorage("userid");

  api.ajax({
    url: webSiteUrl,
    method: 'post',
    dataType:'JSON',
    headers: {
    },
    data: {
      values:dataObj
    }
  }, function(ret, err) {

    if(dataObj.isRefush!=undefined && dataObj.isRefush!=''){
      globalLoadMsgFlag = true;
      api.hideProgress();
      api.refreshHeaderLoadDone();
    }

    if(err=='' && ret){
      if(ret.errorno==0){

          excFn(ret);
      }
    }else{
      alertFn2(err.msg);
    }

  });

}

var listInitFn = function(){

  if(api.pageParam.listType==1){

    api.showProgress({
  		title: '努力加载中...',
  		text: '一线服务',
  		modal: false
  	});

  	listFn();
  	globalLoadMsgFlag = false;

  }else if(api.pageParam.listType==2){

    api.addEventListener({
        name: 'searchkeyWord'
    }, function(ret, err) {

  		globalSearchKeyWord = ret.value.kw;
      globalLastLoadMsgFlag = true;
      currentPageIndex = 1;
      $api.html($api.dom(".list_ls"),'');
      $api.css($api.dom(".bottomBox"),"display:none;");
      listFn();
      globalLoadMsgFlag = false;

    });

  }

  api.addEventListener({
      name: 'updateListEvent'
  }, function(ret, err) {

    globalLastLoadMsgFlag = true;
    currentPageIndex = 1;
    $api.html($api.dom(".list_ls"),'');
    $api.css($api.dom(".bottomBox"),"display:none;");
    listFn();
    globalLoadMsgFlag = false;

  });

  api.setRefreshHeaderInfo({
      loadingImg: 'widget://image/refresh.png',
      bgColor: '#ccc',
      textColor: '#fff',
      textDown: '下拉刷新...',
      textUp: '松开刷新...'
  }, function(ret, err) {

        if(api.pageParam.listType==2 && globalSearchKeyWord==''){
          api.refreshHeaderLoadDone();
          return false;
        }

        globalLastLoadMsgFlag = true;
        currentPageIndex = 1;
        $api.html($api.dom(".list_ls"),'');
        $api.css($api.dom(".bottomBox"),"display:none;");
        listFn();
        globalLoadMsgFlag = false;

  });

  api.addEventListener({
    name:'scrolltobottom',
    extra:{
        threshold:-1
    }
  }, function(ret, err){

    if(api.pageParam.listType==2 && globalSearchKeyWord==''){
      return false;
    }

    if(globalLastLoadMsgFlag){
      $api.css($api.dom(".bottomBox"),"display:block;");
      $api.html($api.dom(".bottomBox"),"加载中....");
      listFn();
      globalLoadMsgFlag = false;
    }
  });

}

var backFn = function(){

  var pageParam = api.pageParam;
  api.closeFrame({
      name: pageParam.frameName
  });

  api.closeWin();
}

var timeSelect = function(obj,isTime){

	var curTime = new Date();

  var dTime = curTime.getFullYear()+"-"+(curTime.getMonth()+1)+"-"+curTime.getDate()+' '+curTime.getHours()+":"+curTime.getMinutes();

	api.openPicker({
	    type: 'date',
	    date: dTime,
	    title: '选择日期'
	}, function(ret, err) {

    var tempDt = ret.year+'-'+ret.month+'-'+ret.day;

    if(isTime){
      api.openPicker({
          type: 'time',
          date: dTime,
          title: '选择时间'
      }, function(ret, err) {
        tempDt += " "+ret.hour+":"+ret.minute;
        $api.val(obj,tempDt+" ("+weekDaysArr[new Date(tempDt).getDay()]+")");
        $api.val($api.next(obj),tempDt);

        api.sendEvent({
      	    name: 'computerDayEvent'
      	});

      });
    }else{
      $api.val(obj,tempDt+" ("+weekDaysArr[new Date(tempDt).getDay()]+")");
      $api.val($api.next(obj),tempDt);

      api.sendEvent({
          name: 'computerDayEvent'
      });
    }
	});

}

//********************相册 start*****************************
var optSelectFn = function(){

	api.actionSheet({
		    cancelTitle: '取消',
		    buttons: ['拍照', '相册']
		}, function(ret, err) {
		    var index = ret.buttonIndex;
		    if(index==1){
					pzFn();
		    }else if(index==2){
					xcFn();
		    }
		});
}

var pzFn = function(){

	api.getPicture({
			sourceType: 'camera',
			encodingType: 'jpg',
			mediaValue: 'pic',
			destinationType: 'url',
			allowEdit: true,
			quality: 100,
			targetWidth: 1280,
			targetHeight: 960,
			saveToPhotoAlbum: false
	}, function(ret, err) {
			if (ret && ret.data !='') {
						uploadFun([ret.data],0);
			}else{
				alertFn2("图片上传失败");
			}
	});
}

var xcFn = function(){

	var UIMediaScanner = api.require('UIMediaScanner');
	UIMediaScanner.open({
		type: 'picture',
		column: 4,
		classify: true,
		max: 4,
		sort: {
				key: 'time',
				order: 'desc'
		},
		texts: {
				stateText: '已选择*项',
				cancelText: '取消',
				finishText: '完成'
		},
		styles: {
				bg: '#fff',
				mark: {
						icon: '',
						position: 'bottom_left',
						size: 20
				},
				nav: {
						bg: '#963b3d',
						stateColor: '#fff',
						stateSize: 18,
						cancelBg: 'rgba(0,0,0,0)',
						cancelColor: '#fff',
						cancelSize: 18,
						finishBg: 'rgba(0,0,0,0)',
						finishColor: '#fff',
								finishSize: 18
						}
				},
				scrollToBottom: {
						intervalTime: 3,
						anim: true
				},
				exchange: true,
				rotation: true
		}, function(ret) {

				if (ret && ret.eventType=='confirm' && ret.list.length>0) {

					var imgArr = [];
					for(var i=0;i<ret.list.length;i++){

						imgArr.push(ret.list[i].path);

					}
					uploadFun(imgArr,0);

				}else{

					alertFn2("图片上传失败");

				}
		});

}

var uploadFun = function(paths,index){

	if(paths[index]==undefined || paths[index]==''){
		return false;
	}

	$api.css($api.dom('.loadding'),'display:block');

		qiniuObj.upfile({
		    file: paths[index],
		    name: Date.now()+''+parseInt(Math.random()*10000000000)+''+parseInt(Math.random()*100000)
		}, function(ret, err) {
		    if (ret.status) {
		        if (ret.oper == "complete") {
		            //上传成功后组装访问路径，或直接访问文档
								globalImgArr.push(qiniuUrl+'/'+ret.info.key);
								$api.before($api.dom('.loadding'),'<li onclick="listImgFn(this);" _src="'+(qiniuUrl+'/'+ret.info.key)+'"><img src="'+(qiniuUrl+'/'+ret.info.key)+'"/></li>');
								$api.css($api.dom('.loadding'),'display:none');

								index++;
								uploadFun(paths,index);

		        } else if (ret.oper == "progress") {
		            //上传过程中获取进度数据
								$api.text($api.dom('.loadding'), parseInt(ret.percent)+"%");
		        }
		    }
		});
}

var listImgFn = function(obj){

	api.actionSheet({
	    cancelTitle: '取消',
	    buttons: ['删除', '预览']
	}, function(ret, err) {
	    var index = ret.buttonIndex;
	    if(index==1){
				$api.remove(obj);
				 for(var x in globalImgArr){
					 if(globalImgArr[x]==$api.attr(obj,"_src")){
							globalImgArr.splice(x,1);
					 }
				 }
	    }else if(index==2){
				imageBrowserFn();
	    }
	});
}

var imageBrowserFn = function(){

	var imageBrowser = api.require('imageBrowser');
	imageBrowser.openImages({
			imageUrls: globalImgArr
	});

}
//********************相册 end*****************************

var alertFn = function(msg){

	api.alert({
		title: '信息提示',
		msg: msg,
	}, function(ret, err) {

	});

}

var alertFn2 = function(msg){
  msg = "一线服务:"+msg;
  api.toast({
      msg: msg,
      duration: 2500,
      location: 'bottom'
  });
}

var alertFn3 = function(msg){
  msg = "一线服务:"+msg;
  api.toast({
      msg: msg,
      duration: 1500,
      location: 'middle'
  });
}

var alertFn4 = function(msg){
  msg = "一线服务:"+msg;
  api.toast({
      msg: msg,
      duration: 1000,
      location: 'middle'
  });
  setTimeout(function(){
    api.closeWin();
  },1000);
}
