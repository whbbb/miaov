<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<script type="text/javascript" src="../../../js/recharge/my_recharge/my_rech_onetouch/my_rech_onetouch.js" ></script>

<ul class="recharge">
    <li class="onekey curren-trecharge">一键充值</li>
    <li class="cyberbank ">网银充值</li>
</ul>
<form id="J_one_touch_form" action="../../../escrow/toRecharge.do" method="post" target="_blank" data-type="need-verify">
<div class="re-part onekey-part">
    <div class="repart-top">
        <div class="topmoney">
            <span class="czjy floatleft">充值金额：</span>
            <input type="text" class="re-money floatleft" id="czmoney" data-name="recharge_money" maxlength="5" name="money">
            <span class="yuan">元</span>
        </div>
        <div class="top-yu-e">
            <input type="hidden" class="yu-e">
            账户余额：<span class="yu-money"><s:property value="#user.userMoney"/></span>
        </div>
        <div class="top-yu-e">
            充值费用：<span class="yu-money">由优金客代为支付</span>
        </div>
    </div>
    <ul class="onetouch-bank">
        <li class="onetouch-bank1"></li>
        <li class="onetouch-bank2"></li>
        <li class="onetouch-bank3"></li>
        <li class="onetouch-bank4"></li>
        <li class="onetouch-bank5"></li>
        <li class="onetouch-bank6"></li>
        <li class="onetouch-bank7"></li>
    </ul>
    <div class="czbut">
        <input type="submit" value="充值" id="recha">
	</div>
	<input id="change" type="hidden" name="rechargetype" value="a_key">
    <div class="kindly-reminder">
        <h3>温馨提示：</h3>
            <p>1.一键充值单笔限额为2万元，日累计额度为5万元。</p>
            <p>2.您需在数码视讯支付技术有限公司页面进行选择银行后进行充值。</p>
            <p>3.数码视讯支付技术有限公司现支持下列银行的“一键充值”业务。</p>
            <p>4.由于各银行的支付限制有区别，在充值时，请<span class="green-line"><a href="../../../account/limit.do">查看各银行网银限制表</a></span>，如有疑问请咨询当前充值对应的银行。</p>
    </div>
</div>
</form>