<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<%@include file="../common/commonInclude.jsp" %>
	<script type="text/javascript" src="../../../../js/escrow/toRecharge.js" ></script>
	<title></title>
	</head>
	
	<body>
	<input id="change" type="hidden" value='<s:property value="rechargetype"/>'>
		<s:if test="rechargetype == 'a_bank'">
			<form id="rechargeSubmit" accept-charset="gbk" onsubmit="document.charset='gbk'" method="post">
					<input type="hidden" name="requestId" value='<s:property value='requestId'/>'>
					<input type="hidden" name="merchantCode" value='<s:property value='merchantCode'/>'>
					<input type="hidden" name="userIdIdentity" value='<s:property value='userIdIdentity'/>'>
					<input type="hidden" name="sum" value='<s:property value='money'/>'>
					<input type="hidden" name="bankCode" value='<s:property value='bank'/>'>
					<input type="hidden" name="bankcardTypeFlag" value='<s:property value='bankcardTypeFlag'/>'>
					<input type="hidden" name="payType" value='<s:property value='payType'/>'>
					<input type="hidden" name="subledgerList" value='<s:property value='subledgerList'/>'>
					<input type="hidden" name="successReturnUrl" value='<s:property value='successReturnUrl'/>'>
					<input type="hidden" name="failReturnUrl" value='<s:property value='failReturnUrl'/>'>
					<input type="hidden" name="noticeUrl" value='<s:property value='noticeUrl'/>'>
					<input type="hidden" name="signature" value='<s:property value='signature'/>'>
				</form>
		</s:if>
		<s:else>
			<form id="rechargeSubmit" accept-charset="gbk"  onsubmit="document.charset='gbk'" method="post">
					<input type="hidden" name="requestId" value='<s:property value='requestId'/>'>
					<input type="hidden" name="merchantCode" value='<s:property value='merchantCode'/>'>
					<input type="hidden" name="userIdIdentity" value='<s:property value='userIdIdentity'/>'>
					<input type="hidden" name="sum" value='<s:property value='money'/>'>
					<input type="hidden" name="payType" value='<s:property value='payType'/>'>
					<input type="hidden" name="subledgerList" value='<s:property value='subledgerList'/>'>
					<input type="hidden" name="successReturnUrl" value='<s:property value='successReturnUrl'/>'>
					<input type="hidden" name="failReturnUrl" value='<s:property value='failReturnUrl'/>'>
					<input type="hidden" name="noticeUrl" value='<s:property value='noticeUrl'/>'>
					<input type="hidden" name="signature" value='<s:property value='signature'/>'>
				</form>
		</s:else>
	</body>
</html>