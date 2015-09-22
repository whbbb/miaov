<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>


<script type="text/javascript" src="../../../js/f-account/fund_account/fund_account.js"></script>

<div class="fund-acc">
	<div class="banner"></div>
	<form id="J_fund_form" action="../../../account/escrow_accountNext.do" method="post" data-type="need-verify" target="_blank">
		<div class="k-fund">
			<h3 class="fun-tit">为保证资金安全，需在“数码视讯支付技术有限公司”开通资金托管帐户</h3>
			<div class="fund-name information">
				<span class="funred">真实姓名</span>
				<input name="realName" id="fname" type="text" data-name="real_name" placeholder="请输入您的真实姓名" />
			</div>
			<div class="id-number information">
				<span  class="funred">身份证号</span>
				<input name="idCardNo" id="fnumber" type="text" data-name="id_card" placeholder="请输入18位二代身份证号码" maxlength="18" /></div>
			<div class="mailbox information">
				<span  class="funred">电子邮箱</span>
				<input name="userEmail" id="fmail" type="text" data-name="e_mail" placeholder="请输入您的电子邮箱" /></div>
			<div class="tj-button">
				<input id="fbotton" type="button" value="提交" class="fund-botton" />
			</div>
		</div>
	</form>
</div>