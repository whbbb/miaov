<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<%@include file="../common/commonInclude.jsp" %>
	<script type="text/javascript" src="../../../../js/escrow/toManualBid.js"></script>
	<title></title>
	</head>
	
	<body> 
		<form id="biddingSubmit" method="post" accept-charset="gbk" onsubmit="document.charset='gbk'">
			<input name="requestId" type="hidden" value="<s:property value="requestId"/>"/>
			<input name="merchantCode" type="hidden" value="<s:property value="merchantCode"/>"/>
			<input name="userIdIdentity" type="hidden" value="<s:property value="userIdIdentity"/>"/>
			<input name="projectCode" type="hidden" value="<s:property value="projectCode"/>"/>
			<input name="sum" type="hidden" value="<s:property value="sum"/>"/>
			<input name="projectDescription" type="hidden" value=""/>
			<input name="successReturnUrl" type="hidden" value="<s:property value="successReturnUrl"/>"/>
			<input name="failReturnUrl" type="hidden" value="<s:property value="failReturnUrl"/>"/>
			<input name="noticeUrl" type="hidden" value="<s:property value="noticeUrl"/>"/>
			<input name="signature" type="hidden" value="<s:property value="signature"/>"/>
		</form>
	</body>
</html>