<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<%@include file="../../common/commonInclude.jsp" %>
		<script type="text/javascript" src="../../../../js/f-account/fund_account/fund_account.js"></script>
	<title></title>
	</head>
	<script type="text/javascript">
		window.onload = function(){ 
			document.forms[0].submit();
		}
	</script>
	<body>
		<div class="content"> 
			<div>
				<form id="register" method="get" action="../../../escrow/toRegister.do">
					<input name="realName" type="hidden" value="<s:property value="realName"/>"/>
					<input name="idCardNo" type="hidden" value="<s:property value="idCardNo"/>"/>
					<input name="userEmail" type="hidden" value="<s:property value="userEmail"/>"/>
				</form>
			</div>
		</div>
	</body>
</html>