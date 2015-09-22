<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ taglib prefix="s" uri="/struts-tags" %>
	<head>
	<%@include file="../common/commonInclude.jsp" %>
	<script type="text/javascript" src="../../../js/escrow/repayment.js"></script>
	<title></title>
	</head>
	
	<body>
		<form id="repayment" method="post" accept-charset="gbk" onsubmit="document.charset='gbk'">
			<input type="hidden" name="requestId" value='<s:property value='requestId'/>'/>
			<input type="hidden" name="merchantCode" value='<s:property value='merchantCode'/>'/>
			<input type="hidden" name="userIdIdentity" value='<s:property value='userIdIdentity'/>'/>
			<input type="hidden" name="rechargeUrl" value='<s:property value='rechargeUrl'/>'/>
			<input type="hidden" name="sum" value='<s:property value='sum'/>'/>
			<input type="hidden" name="successReturnUrl" value='<s:property value='successReturnUrl'/>'/>
			<input type="hidden" name="failReturnUrl" value='<s:property value='failReturnUrl'/>'/>
			<input type="hidden" name="noticeUrl" value='<s:property value='noticeUrl'/>'/>
			<input type="hidden" name="signature" value='<s:property value='signature'/>'/>
			<input type="hidden" name="projectCode" value='<s:property value='projectCode'/>'/>
		</form>
	</body>
</html>