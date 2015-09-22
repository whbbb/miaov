<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<script type="text/javascript" src="../../../js/resetting-p1/resetp1/resetp1.js"></script>

<div class="resetp1">
	<h3 class="resetp1-tit">重置密码</h3>
	<form id="J_resetp1_form" action="../../../account/resetting-p2.do" method="post" data-type="need-verify">
		<input name="macCodeHash" id="J_macCodeHash" type="hidden"/>
		<div class="resetp1-bott">
			<p class="resetp1-pla">请输入您绑定优金客账号的手机号码</p>
			<div class="resetp1-input resetp1-mobile-phone">
				<input name="userPhone" type="text" placeholder="请输入注册时的手机号" class="p1-mobilenum" data-name="mobile" />
			</div>
			<div class="resetp1-input code-container">
				<div class="restdiv">
					<input name="macCode" type="text" placeholder="请输入验证码" class="p1-mobilenum p1-code" data-name="code" />
				</div>
				<div class="mapic restdiv">
					<img id="J_reset_code_img" src="../../../images/common/ico/loading.png" width="86px" height="38px">
					<span id="J_reset_code_refresh" class="p1code-pic"></span>
				</div>
			</div>
			<div class="next-but">
				<input type="button" value="下一步" class="nextprset" id="J_resetp1_next" />
			</div>
		</div>
	</form>
</div>