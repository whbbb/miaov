<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head lang="UTF-8">
	<!--<script type="text/javascript" src="../../../js/common/firebug-lite/build/firebug-lite-debug.js"></script>-->
	<meta charset="UTF-8">
	<title>实名认证-优金客</title>

	<%@include file="../common/commonInclude.jsp" %>

	<script type="text/javascript" src="../../../js/f-account/f-account.js" ></script>

	<link type="text/css" rel="stylesheet" href="../../../css/f-account/f-account.css" />
</head>
	<body>
			<!--资金托管账户-->
		<input id="J_cur_nav" type="hidden" value="3" />
		<div class="scroll_to_top"></div>
		<div id="J_header" >
			<%@include file="../common/header.jsp" %>
		</div>
		<div id="J_container">
			<div id="J_f_account_result_tips">
			</div>
			<!--资金托管账户-->
			<div id="J_fund_account">
				<%@include file="fund_account/fund_account.jsp" %>
			</div>
		</div>
		<div id="J_footer" >
			<%@include file="../common/footer.jsp" %>
		</div>
	</body>
</html>
