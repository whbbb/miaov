<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<script type="text/javascript">
	$(document).ready(function(){
		// 金额格式化
		$("#money").html(forMoney($("#money").html().trim(),2));
	})
</script>

<ul class="deposit">
	<li class="depositli open-deposit">
		<div class="floatleft depositone depositbg">资金托管账户：</div>
		<s:if test="myInfo.userState.charAt(2) == '0'">
			<div class="floatleft deposittwo">未开通</div>
			<div class="floatleft depositthree">
				<input type="button" value="开通" class="open-depsit" request-url="../../../account/escrow-account.do">
			</div>
		</s:if>
		<s:else>
			<div class="floatleft deposittwo">已开通</div>
			<div class="floatleft depositthree">
				<input type="button" value="管理" class="open-depsit" request-url="../../../account/escrow_manage.do" target="_blank">
			</div>
		</s:else>
	</li>
	<li class="depositli">
		<div class="floatleft depositone balancebg">账户余额：</div>
		<div class="floatleft deposittwo" id="money"><s:property value="myInfo.userMoney"/></div>
		<div class="floatleft depositthree">
			<s:if test="myInfo.userState.charAt(2) == '0'">
				<input type="button" value="充值" class="open-depsit no-margin" request-url="../../../account/escrow-account.do">
				<input type="button" value="提现" class="open-depsit cash-depsit" request-url="../../../account/escrow-account.do">
			</s:if>
			<s:else>
				<input type="button" value="充值" class="open-depsit no-margin" request-url="../../../account/recharge.do">
				<input type="button" value="提现" class="open-depsit cash-depsit" request-url="../../../account/withdraw_cash.do">
			</s:else>
		</div>
	</li>
</ul>