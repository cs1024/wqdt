<?php
/**
 * we7_02模块APP接口定义
 *
 * @author 郑辉
 * @url 
 */
defined('IN_IA') or exit('Access Denied');

class We7_02ModulePhoneapp extends WeModulePhoneapp {
	public function doPageTest(){
		global $_GPC, $_W;
		$errno = 0;
		$message = '返回消息';
		$data = array();
		return $this->result($errno, $message, $data);
	}
	
	
}