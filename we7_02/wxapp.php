<?php
/**
 * we7_02模块小程序接口定义
 *
 * @author 郑辉
 * @url 
 */
defined('IN_IA') or exit('Access Denied');

class We7_02ModuleWxapp extends WeModuleWxapp {
	
	//身份验证
	private function signerAuth($sessionid){
		
		if(empty($sessionid)){
			$errno = 1;
			$message = '身份为空，请重试';		
			$data = array('redirect' => '../index/index');		
			return $this->result($errno, $message, $data);
			exit();
		}
		
		$hasLogin = pdo_fetch("SELECT * FROM ".tablename("wqxcx_login")." WHERE `sessionid`=:sessionid LIMIT 1",array(":sessionid"=>$sessionid));
		
		if(!$hasLogin){
			$errno = 1;
			$message = '身份验证错误，请重试';		
			$data = array('redirect' => '../index/index');		
			return $this->result($errno, $message, $data);
			exit();
		}

		
	}
	
	//用户登录
	public function doPageLogin(){
		global $_GPC, $_W;
		
		$_result = ihttp_get("https://api.weixin.qq.com/sns/jscode2session?appid={$_W['account']['key']}&secret={$_W['account']['secret']}&js_code={$_GPC['code']}&grant_type=authorization_code");	
		$_result = json_decode($_result['content']);
		if(isset($_result->errcode)){
			
			$errno = 1;
			$message = "登录失败，code值错误!";
			$data = array('redirect' => '../index/index');	
			
		}else{	
		
			$hasUser = pdo_fetch("SELECT * FROM ".tablename("wqxcx_login")." WHERE `openid`=:openid LIMIT 1",array(":openid"=>$_result->openid));		
			$user_data = array(
				'openid' => $_result->openid,
				'session_key' => $_result->session_key,
				'sessionid' => md5($_result->session_key)
			);	
			
			if(!$hasUser){			
				pdo_insert("wqxcx_login",$user_data);			
			}else{			
				pdo_update('wqxcx_login', $user_data, array('id' => $hasUser['id']));		
			}		
			
			$errno = 0;
			$message = '登录成功';		
			$data = array('sessionid' => $user_data['sessionid']);		
		}
		
		return $this->result($errno, $message, $data);
	}

	
	//测试接口
    public function doPageIndex() {
		global $_GPC, $_W;
		$this->signerAuth($_GPC['sessionid']);
		
		$errno = 0;
		$message = '登录成功';		
		$data = $_GPC;		
        return $this->result($errno, $message, $data);

    }
	
	
	//排行接口
    public function doPageRank() {
		global $_GPC, $_W;
		$this->signerAuth($_GPC['sessionid']);
		$array = array();
		
		for($i=0;$i<20;$i++){
			$res['avatarUrl'] = 'http://we7.demo.cs1024.cn/addons/we7_02/images/avatarUrl.jpg';
			$res['name'] = '郑辉'.$i;
			$res['score'] = 100 - $i.'分';
			$array[] = $res;		
		}

		$obj = array();
		$obj['avatar'] = 'http://we7.demo.cs1024.cn/addons/we7_02/images/avatarUrl.jpg';
		$obj['paiming'] = '第1名';
		$obj['lists'] = $array;
		
		$errno = 0;
		$message = '排行信息';		
		$data = $obj;		
        return $this->result($errno, $message, $data);
    }
	
	//分页排行
    public function doPagePaging() {
		global $_GPC, $_W;

		$array = array();
		if($_GPC['num']<2){
			for($i=0;$i<20;$i++){
				$res['avatarUrl'] = 'http://we7.demo.cs1024.cn/addons/we7_02/images/avatarUrl.jpg';
				$res['name'] = '吴孝文'.$i;
				$res['score'] = 80 - $i.'分';
				$array[] = $res;		
			}		
		}else{
			for($i=0;$i<5;$i++){
				$res['avatarUrl'] = 'http://we7.demo.cs1024.cn/addons/we7_02/images/avatarUrl.jpg';
				$res['name'] = '林烽'.$i;
				$res['score'] = 60 - $i.'分';
				$array[] = $res;		
			}			
		}
				
		$errno = 0;
		$message = '分页排行';		
		$data = $array;		
        return $this->result($errno, $message, $data);
    }	
	
	//答题接口
    public function doPageAnswer() {
		global $_GPC, $_W;
		$this->signerAuth($_GPC['sessionid']);
		
		$obj = array();

		
		$items = array();
		$res['name'] = 'A、正确';
		$res['value'] = '1';
		$items[] = $res;
		$res['name'] = 'B、错误';
		$res['value'] = '2';
		$items[] = $res;
		$array = array();
		$array['title'] = '扫黑除恶专项斗争三个阶段的主要任务是：2018年：治标。严态势，营造人人喊打的氛围。2019年：治根。攻案件，提升群众满意度。2020年：治本。建机制，取得压倒性胜利。（ ）';	
		$str = '1';
		$array['correct'] = explode(",",$str);
		$array['radioItems']= $items;
		$obj[] = $array;

		$items = array();
		$res['name'] = 'A、对方明知是通过违法犯罪活动或者其他不正当手段聚敛的财产及其孳息、收益的';
		$res['value'] = '1';
		$items[] = $res;
		$res['name'] = 'B、对方无偿或者以明显低于市场价格取得的';
		$res['value'] = '2';
		$items[] = $res;
		$res['name'] = 'C、对方是非法债务或者违法犯罪活动而取得的';
		$res['value'] = '3';
		$items[] = $res;
		$res['name'] = 'D、通过其他方式恶意取得的';
		$res['value'] = '4';
		$items[] = $res;
		$array = array();	
		$array['title'] = '违法所得已用于清偿债务或者转让给他人，具有下列情形之一，应当依法追缴（ ）';	
		$str = '1,2,3,4';
		$array['correct'] = explode(",",$str);
		$array['radioItems']= $items;
		$obj[] = $array;
		
		$items = array();
		$res['name'] = 'A、安全感';
		$res['value'] = '1';
		$items[] = $res;
		$res['name'] = 'B、满意率';
		$res['value'] = '2';
		$items[] = $res;
		$res['name'] = 'C、成就感';
		$res['value'] = '3';
		$items[] = $res;
		$res['name'] = 'D、自豪感';
		$res['value'] = '4';
		$items[] = $res;
		$array = array();	
		$array['title'] = '扫黑除恶专项斗争的总体目标是不断增强人民群众获得感、幸福感、（  ），维护社会和谐稳定，巩固党的执政基础，为决胜全面建成小康社会、夺取新时代中国特色社会主义伟大胜利、实现中华民族伟大复兴的中国梦创造安全稳定的社会环境。';	
		$str = '1';
		$array['correct'] = explode(",",$str);
		$array['radioItems']= $items;
		$obj[] = $array;		
		
		
		
		$answer_num = 3;
	    $timeStart = '2018-11-09 08:00:00';
		if(count($obj) < $answer_num){
			$errno = 0;
			$message = '答题未开始，题目准备中';		
			$data = [];			
		}else if(strtotime($timeStart) > $_W['timestamp']){
			$errno = 0;
			$message = '答题未开始，开始时间：'.$timeStart;		
			$data = [];	
		}else{
			$errno = 0;
			$message = '题目信息';		
			$data = $obj;			
		}
		
		return $this->result($errno, $message, $data);			

    }	
	
	
	
	
	
	
	
	
	
	
}