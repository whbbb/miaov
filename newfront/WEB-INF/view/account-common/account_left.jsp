<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<script type="text/javascript" src="../../../js/account-common/account_left.js" ></script>


<div class="maleft">
    <div class="mal-photo"></div>
    <div class="mal-username">
        <p>Hi~<s:property value="#user.userName"/></p>
        <!--<p class="malun-id">（ID：134547687）</p>-->
    </div>
    	<div id="noOpen" class="mal-dredge-w" title="第三方资金托管,未开通" request-url="../../../account/escrow-account.do">开通</div>
    	<!--第三方资金托管账户开通状态显示图标-->
    	<div id="open" class="mal-dredge-y" title="第三方资金托管,已开通" request-url="../../../account/escrow_manage.do" target="_blank"></div>
    
    	<s:if test="#user == null">
			<input id="login" type="hidden" value="0" />
		</s:if>
		<s:else>
			<input id="login" type="hidden" value="1" />
		</s:else>
		<input id="inviteLink" type="hidden" value="" />
	<div class="mal-request">
        <input id="copy-button" class="mal-invite" type="button" value="邀请好友" title="点击生成好友链接可以使用粘贴或Ctrl+V的方式，发送给好友">
    </div>
<!--     <div class="last-entry">上次登录时间：2014-08-31</div> -->
</div>
<ul class="mal-navigation">
    <li class=" acc-pandect" request-url="../../../account/my_account.do">账户总览</li>
    <li class="mm-matters" request-url="../../../account/account-financing.do">我的理财</li>
    <li class="lend-money" request-url="../../../account/account-loan.do" >我的借款</li>
    <li class="supervise" request-url="../../../account/acccount-manage.do">账户管理</li>
</ul>