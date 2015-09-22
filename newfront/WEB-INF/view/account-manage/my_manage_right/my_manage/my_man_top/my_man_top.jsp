<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<script type="text/javascript" src="../../../js/account-manage/my_manage_right/my_manage/my_man_top/my_man_top.js" ></script>

<div class="news-supervise">
	<div class="supervise-tit">
		<h3 class="floatleft currentgreen news-super">账户信息管理</h3>
		<h3 class="floatleft money-super">账户资金管理</h3>
		<div class="triangle"></div>
	</div>
</div>
<ul class="revise">
	<li class=" reviseli entry-pass">
		<form id="J_modify_password_form" action="www.password.com" method="post">
			<div class="defaultshow">
				<div class="floatleft reviseone passwordbg">登录密码：</div>
				<div class="floatleft revisetwo">已设置</div>
				<div class="floatleft revisethree">修改</div>
			</div>
			<!--控制显示 样式	 reviselishow-->
			<!--更改密码-->
			<div id="J_password_panel" class="defaulhide disnone reviselishow">
				<div class="raw-pass marbottom">
					<div class="oldpassword"><span class="star"></span>原密码</div>
					<div class="oldpass-input"><input data-name="origin_password" type="password" placeholder="请输入原密码"></div>
				</div>
				<div class="raw-pass marbottom">
					<div class="oldpassword"><span class="star"></span>输入新密码</div>
					<div class="oldpass-input"><input data-name="password" type="password" placeholder="至少为英文和数字的组合，6~18个字符"></div>
					<div id="J_password_strong">
						<label>密码强度</label>
						<span></span>
						<span></span>
						<span></span>
						<b>强</b>
					</div>
				</div>
				<div class="raw-pass marbottom">
					<div class="oldpassword"><span class="star"></span>确认新密码</div>
					<div class="oldpass-input"><input data-name="re_password" type="password" placeholder="请保持一致"></div>
				</div>
				<div class="reviseyes">
					<input type="submit" value="确认" class="re-yes">
				</div>
			</div>
			<!--成功-->
			<div id="J_password_result_success" class="defaulok disnone">
				<p class="reviseok">操作已成功！</p>
				<div class="revisieoff">
					<input type="button" class="re-off" data-value="success" value="关闭">
				</div>
			</div>
			<!--失败-->
			<div id="J_password_result_fail" class=" defaulok defaulfail disnone">
				<p class="reviseok revisefail">操作失败！</p>
				<div class="revisieoff">
					<input type="button" class="re-off" data-value="fail" value="关闭">
				</div>
			</div>
		</form>
	</li>
	<li class=" reviseli mobilenum">
		<form id="J_modify_mobile_form" action="www.mobile.com" method="post">
			<div class="defaultshow ">
				<div class="floatleft reviseone mobilebg">手机号码：</div>
				<input id="J_user_current_mobile_hidden" type="hidden" value="<s:property value="myInfo.userPhone"/>" />
				<div id="J_user_current_mobile" class="floatleft revisetwo"></div>
				<div class="floatleft revisethree">修改</div>
			</div>
			<!--修改手机号-->
			<div id="J_mobile_panel" class="defaulhide disnone reviselishow">
				<div class="raw-pass marbottom">
					<div class="oldpassword"><span class="star"></span>手机号码</div>
					<div class="oldpass-input"><input data-name="mobile" type="text" placeholder="输入您的手机号码" class="input-password"></div>
				</div>
				<div class="raw-pass marbottom">
					<div class="oldpassword"><span class="star"></span>手机验证码</div>
					<div class="oldpass-input">
						<input data-name="code" type="text" placeholder="请输入验证码" class="input-password mobile-proving">
						<span id="J_get_code" class="gain-proving">获取验证码<!--60秒后重新获取--><!--重新获取--></span>
					</div>
				</div>
				<div class="reviseyes">
					<input type="submit" value="确认" class="re-yes">
				</div>
			</div>
			<!--修改手机号成功-->
			<div id="J_mobile_result_success" class="defaulok disnone">
				<p class="reviseok">操作已成功！</p>
				<div class="revisieoff">
					<input type="button" class="re-off" data-value="success" value="关闭">
				</div>
			</div>
			<!--修改手机号失败-->
			<div id="J_mobile_result_fail" class=" defaulok defaulfail disnone">
				<p class="reviseok revisefail">操作失败！</p>
				<div class="revisieoff">
					<input type="button" class="re-off" data-value="fail" value="关闭">
				</div>
			</div>
		</form>
	</li>
	<li class=" reviseli e-mail">
		<form id="J_modify_email_form" action="www.email.com" method="post">
			<div class="defaultshow">
				<div class="floatleft reviseone emaildbg">电子邮箱：</div>
				<div id="J_user_current_email" class="floatleft revisetwo"><s:property value="myInfo.userEmail"/></div>
				<div id="J_code_change" class="floatleft revisethree">修改</div>
			</div>
			<!--修改电子邮箱-->
			<div id="J_email_panel" class="defaulhide disnone reviselishow">
				<div class="raw-pass marbottom">
					<div class="oldpassword"><span class="star"></span>新邮箱地址</div>
					<div class="oldpass-input"><input data-name="e_mail" type="text" placeholder="请输入新邮箱地址" class="input-password"></div>
				</div>
				<div class="raw-pass marbottom">
					<div class="oldpassword"><span class="star"></span>验证码</div>
					<div class="oldpass-input code-container">
						<input data-name="code" type="text" value="" placeholder="请输入验证码" />
						<img src="../../../images/common/ico/loading.png"/>
						<span class="gain-proving">看不清</span>
					</div>
				</div>
				<div class="reviseyes">
					<input type="submit" value="确认" class="re-yes">
				</div>
			</div>
			<!--修改邮箱成功-->
			<div id="J_email_result_success" class="defaulok disnone">
				<p class="reviseok">操作已成功！</p>
				<div class="revisieoff">
					<input type="button" class="re-off" data-value="success" value="关闭">
				</div>
			</div>
			<!--修改邮箱失败-->
			<div id="J_email_result_fail" class=" defaulok defaulfail disnone">
				<p class="reviseok revisefail">操作失败！</p>
				<div class="revisieoff">
					<input type="button" class="re-off" data-value="fail" value="关闭">
				</div>
			</div>
		</form>
	</li>
</ul>