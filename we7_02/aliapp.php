<?php
/**
 * we7_02支付宝小程序接口定义
 *
 * @author 郑辉
 * @url 
 */
defined('IN_IA') or exit('Access Denied');

class We7_02ModuleAliapp extends WeModuleAliapp {
	public function doPageTest(){
		global $_GPC, $_W;
		// 此处开发者自行处理
		include $this->template('test');
	}
}