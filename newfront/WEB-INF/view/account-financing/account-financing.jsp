<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<!DOCTYPE html>
<html>
<head lang="UTF-8">
    <!-- <script type="text/javascript" src="../../../js/common/firebug-lite/build/firebug-lite-debug.js"></script>-->
    <meta charset="UTF-8">
    <title>账户中心-优金客</title>
    <!--<link rel="icon" href="img/logo.ico" type="image/x-icon" />-->
    <%@include file="../common/commonInclude.jsp" %>

    <script type="text/javascript" src="../../../js/account-financing/account-financing.js" ></script>
    <script type="text/javascript" src="../../../js/account-financing/search_my_financing.js" ></script>

    <link type="text/css" rel="stylesheet" href="../../../css/account-financing/account-financing.css" />
</head>
<body>
<input id="J_cur_nav" type="hidden" value="3" />
<div class="scroll_to_top"></div>
<div id="J_header" ><%@include file="../common/header.jsp" %></div>
<div id="J_container">
    <div id="J_my_financing_right">
        <input type="hidden" class="account" value="1">
        <div id="J_account_left"><%@include file="../account-common/account_left.jsp" %></div>
        <div id="J_my_financing">                    <!--我的理财-->
            <div id="J_mp_top_dredge"></div>
            <div id="J_my_fin_top"><%@include file="./my_financing_right/my_financing/my_fin_top/my_fin_top.jsp" %></div>       <!--我的理财顶部-->
            <div id="J_my_fin_footlist">        <!--我的理财下面列表部分-->
                <div id="J_invest"><%@include file="./my_financing_right/my_financing/my_fin_footlist/invest/invest.jsp" %></div>
                <div id="J_content">
                    <!--优房宝-->
                    <div id="J_house">
                        <div id="J_navigation"><%@include file="./my_financing_right/my_financing/my_fin_footlist/content/house/navigation/navigation.jsp" %></div>
                        <div id="J_house_body">
                            <!--还款中-->
                            <div id="J_yeting" class="house"><%@include file="./my_financing_right/my_financing/my_fin_footlist/content/house/house_body/yeting/yeting.jsp" %></div>
                            <!--投标中-->
                            <div id="J_tender" class="house"><%@include file="./my_financing_right/my_financing/my_fin_footlist/content/house/house_body/tender/tender.jsp" %></div>
                            <!--预约中-->
                            <div id="J_bespoke" class="house"><%@include file="./my_financing_right/my_financing/my_fin_footlist/content/house/house_body/bespoke/bespoke.jsp" %></div>
                            <!--放款审核-->
                            <div id="J_audit" class="house"><%@include file="./my_financing_right/my_financing/my_fin_footlist/content/house/house_body/audit/audit.jsp" %></div>
                            <!--已还完-->
                            <div id="J_intact" class="house"><%@include file="./my_financing_right/my_financing/my_fin_footlist/content/house/house_body/intact/intact.jsp" %></div>
                            <!--流标-->
                            <div id="J_sichuan" class="house"><%@include file="./my_financing_right/my_financing/my_fin_footlist/content/house/house_body/sichuan/sichuan.jsp" %></div>
                            <!--坏账还款中-->
                            <div id="J_awfully" class="house"><%@include file="./my_financing_right/my_financing/my_fin_footlist/content/house/house_body/awfully/awfully.jsp" %></div>
                        </div>
                    </div>
                    <!--优车宝-->
                    <div></div>
                    <!--优选计划-->
                    <div></div>
                    <!--薪金宝-->
                    <div></div>
                </div>
            </div>
        </div>
    </div>
    <div style="clear:both"></div>
</div>
<div id="J_footer" ><%@include file="../common/footer.jsp" %></div>
</body>
</html>