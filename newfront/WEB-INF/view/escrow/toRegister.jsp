<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<%@include file="../common/commonInclude.jsp" %>
		<script type="text/javascript" src="../../../../js/escrow/toRegister.js" ></script>
	<title></title>
	</head>
	
	<body>
		<form id="register" accept-charset="gbk" onsubmit="document.charset='gbk'" method="post">
			<input name="telephone" type="hidden" value="<s:property value='#user.userPhone'/>"/>
			<input name="name" type="hidden" value="<s:property value="realName"/>"/>
			<input name="idNumber" type="hidden" value="<s:property value="idCardNo"/>"/>
			<input name="email" type="hidden" value="<s:property value="userEmail"/>"/>
			<input name="requestId" type="hidden" value="<s:property value="requestId"/>"/>
			<input name="merchantCode" type="hidden" value="<s:property value="merchantCode"/>"/>
			<input name="userIdIdentity" type="hidden" value="<s:property value="userIdIdentity"/>"/>
			<input name="payType" type="hidden" value="<s:property value="payType"/>"/>
			<input name="signature" type="hidden" value="<s:property value="signature"/>"/>
			<input name="successReturnUrl" type="hidden" value="<s:property value="successReturnUrl"/>"/>
			<input name="failReturnUrl" type="hidden" value="<s:property value="failReturnUrl"/>"/>
			<input name="noticeUrl" type="hidden" value="<s:property value="noticeUrl"/>"/>
		</form>
	</body>
</html>