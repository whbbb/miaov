<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<%@include file="../common/commonInclude.jsp" %>
	<script type="text/javascript" src="../../../js/escrow/escrow_manage.js"></script>
	</head>
	<body>
		<form id="register" accept-charset="gbk" onsubmit="document.charset='gbk'" method="post">
			<input name="requestId" type="hidden" value="<s:property value="requestId"/>"/>
			<input name="merchantCode" type="hidden" value="<s:property value="merchantCode"/>"/>
			<input name="userIdIdentity" type="hidden" value="<s:property value="userIdIdentity"/>"/>
			<input name="signature" type="hidden" value="<s:property value="signature"/>"/>
		</form>
	</body>
</html>