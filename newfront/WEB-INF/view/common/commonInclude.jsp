<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="com.cn.pxzd.common.GlobalConfig"%>
    <%@ include file="baseTag.jsp" %>
    <script type="text/javascript" src="../../../js/common/jquery-1.7.2.min.js" ></script>
    <script type="text/javascript" src="../../../js/common/common.js" ></script>
<script>
	var registerAddress = '<%= GlobalConfig.getRegisterAddress()%>';
	var registerManageAddress = '<%= GlobalConfig.getRegisterManageAddress()%>';
	var toRecharge = '<%= GlobalConfig.getToRecharge()%>';
	var toWithholdingRecharge = '<%= GlobalConfig.getToWithholdingRecharge()%>';
	var toWithdraw = '<%= GlobalConfig.getToWithdraw()%>';
	var toManualBid = '<%= GlobalConfig.getToManualBid()%>';
	var toRepayDetail = '<%= GlobalConfig.getToRepayDetail()%>';
</script>
<%@ include file="jsPlugins.jsp" %>

<%
   response.setHeader("Pragma","no-cache");   
   response.setHeader("Cache-Control","no-cache,no-store,must-revalidate");   
   response.setDateHeader("Expires",0);
%>
<meta HTTP-EQUIV="Pragma" CONTENT="no-cache">
<meta HTTP-EQUIV="Cache-Control" CONTENT="no-cache,no-store,must-revalidate">
<meta HTTP-EQUIV="Expires" CONTENT="0">