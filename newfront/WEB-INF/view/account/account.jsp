<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>


<!DOCTYPE html>
<html>
<head lang="UTF-8">
   <!-- <script type="text/javascript" src="../../../js/commonczjy/firebug-lite/build/firebug-lite-debug.js"></script>-->
    <meta charset="UTF-8">
    <title>账户中心-优金客</title>

    <%@include file="../common/commonInclude.jsp" %>

    <script type="text/javascript" src="../../../js/account/account.js" ></script>

    <link type="text/css" rel="stylesheet" href="../../../css/account/account.css" />
    
</head>
<body>
<input id="J_cur_nav" type="hidden" value="3" />
<div class="scroll_to_top"></div>
<div id="J_header" ><%@include file="../common/header.jsp" %></div>
<div id="J_container">
    <div id="J_my_account_right">
        <input type="hidden" class="account" value="0">
        <div id="J_account_left"><%@include file="../account-common/account_left.jsp" %></div>
        <div id="J_my_pandect">
            <div id="J_mp_top_dredge"><%@include file="../account-common/mp_top_dredge.jsp" %></div>
            <div id="J_my_pan"><%@include file="my_account_right/my_pandect/my_pan/my_pan.jsp" %></div>           <!--账户总览主页面头部-->
            <div id="J_my_pan_list"><%@include file="my_account_right/my_pandect/my_pan_list/my_pan_list.jsp" %></div>     <!--账户总览主页面底部列表-->
        </div>       <!--账户总览-->

    </div>
    <div style="clear:both"></div>
</div>
<div id="J_footer" ><%@include file="../common/footer.jsp" %></div>
</body>
</html>