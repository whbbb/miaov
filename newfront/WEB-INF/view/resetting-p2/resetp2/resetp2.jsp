<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<script type="text/javascript" src="../../../js/resetting-p2/resetp2/resetp2.js"></script>

<div class="resetp2">
	<h3 class="resetp2-tit">重置密码</h3>
	<form id="J_resetp2-form" action="../../../account/resetting-p3.do" method="post" data-type="need-verify">
		<s:if test="errorInfor != null">
			<input id="J_code_validate_result" type="hidden" value='<s:property value="errorInfor"/>' />
		</s:if>
		<s:else>
			<input id="J_code_validate_result" type="hidden" value='' />
		</s:else>
		<input name="macCodeHash" type="hidden" value="<s:property value = 'macCodeHash'/>"/>
		<input id="J_mobile_hidden" name="userPhone" type="hidden" value="<s:property value = 'userPhone'/>"/>
		<div class="resetp2-bott">
			<div class="resetp2-pla">
				<p>系统已经发送一条短信到<span class="mobilenumber"></span></p>
				<p>请输入短信的验证码</p>
			</div>
			<div class="resetp2-input">
				<input name="macCode" type="text" placeholder="请输入手机短信的验证码" class="p2-mobilenum p2-code" data-name="code" />
				<div id="J_resend" class="p2code-pic"> 重新发送</div>
			</div>
			<div class="next-but">
				<input type="button" value="下一步" class="nextprset" id="resetp2-next" />
			</div>
		</div>
	</form>
</div>