<%@ page pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<html>
	<head>
		<%@include file="../common/commonInclude.jsp" %>
		<script type="text/javascript" src="../../../../js/escrow/toWithdraw.js" ></script>
		<title></title>
	</head>
	<body>
		<form id="withDrawSubmit" accept-charset="gbk" onsubmit="document.charset='gbk'" method="post">
			<input type="hidden" name="requestId" value='<s:property value='requestId'/>'>
			<input type="hidden" name="merchantCode" value='<s:property value='merchantCode'/>'>
			<input type="hidden" name="userIdIdentity" value='<s:property value='userIdIdentity'/>'>
			<input type="hidden" name="sum" value='<s:property value='sum'/>'>
			<input type="hidden" name="payType" value='<s:property value='payType'/>'>
			<input type="hidden" name="subledgerList" value='<s:property value='subledgerList'/>'>
			<input type="hidden" name="successReturnUrl" value='<s:property value='successReturnUrl'/>'>
			<input type="hidden" name="failReturnUrl" value='<s:property value='failReturnUrl'/>'>
			<input type="hidden" name="noticeUrl" value='<s:property value='noticeUrl'/>'>
			<input type="hidden" name="signature" value='<s:property value='signature'/>'>
		</form>
	</body>
</html>