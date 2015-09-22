<%@ page pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<html>
	<head>
		<%@include file="../common/commonInclude.jsp" %>
		<title>还款中转</title>
	</head>
 	<script type="text/javascript"> 
		$().ready(function(){
		document.forms[0].submit();
		});
	</script>
	
	<body>
		<div class="content">
			<div class="main escrow_two">
				<form id="repayment" method="get" action="../../../escrow/toRepayDetail.do">
					<input type="hidden" name="refundCount" value='<s:property value='refundCount'/>'>
					<input type="hidden" name="sum" value='<s:property value='sum'/>'>
					<input type="hidden" name="userOrderCode" value='<s:property value='userOrderCode'/>'>
				</form>
			</div>
		</div>
	</body>
</html>