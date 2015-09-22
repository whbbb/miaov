<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<script type="text/javascript" src="../../../js/common/jquery.flexslider-min.js" ></script>
<script type="text/javascript" src="../../../js/index/banner/banner.js"></script>
<div class="flexslider">
    <ul class="slides">
        <!--新版上线-->
        <li style="background: url('../../../images/index/banner/banner-3.png') center center" request-url="../../../other/new-edition.do" target="_blank"></li>
        <!--东方园林-->
        <li style="background: url('../../../images/index/banner/banner-4.png') center center" request-url="../../../other/garden.do" target="_blank"></li>
        <!--薪金宝-->
        <li style="background: url('../../../images/index/banner/banner-5.png') center center" request-url="../../../other/salary.do" target="_blank"></li>
        <!--丰付  安全支付-->
        <li style="background: url('../../../images/index/banner/banner-6.png') center center" request-url="../../../other/security.do" target="_blank"></li>
    </ul>
    <div class="welcome-box">
        <div class="welcome not-login">
            <div class="login-top">
                <p class="login-p-1">欢迎回来<span>安全方便，本息不愁</span></p>
                <p class="login-p-2">8%~16%</p>
                <p class="login-p-3">优金客年化收益率</p>
            </div>
            <div class="login-bottom">
                <input id="J_banner_login" type="button" animate-button="true" value="登 录"  />
                <input class="button-hover" animate-button="true" type="button" request-url="../../../account/regist.do" value="注 册" />
            </div>
            <div class="login-message">
                <span class="message-title">累计交易额： </span><span class="message-money"><s:property value="platformInfo.totalTurnover"/></span><span class="message-unit"> 元</span>
                <br />
                <span class="message-title">预计总收益： </span><span class="message-money"><s:property value="platformInfo.expectedTotalRevenue"/></span><span class="message-unit"> 元</span>
            </div>
        </div>

        <div class="welcome login">
            <div class="login-top">
                <p class="login-p-1">尊敬的用户：<span><s:property value="#user.userName"/></span></p>
                <p class="login-p-2">欢迎回来</p>
                <p class="login-p-3">可用余额：<span><s:property value="#user.userMoney"/></span></p>
            </div>
            <div class="login-bottom">
                <input type="button" value="充 值" request-url="../../../account/recharge.do"/>
                <input class="button-hover" type="button" value="我的账户" request-url="../../../account/my_account.do"/>
            </div>
        </div>
    </div>
</div>
