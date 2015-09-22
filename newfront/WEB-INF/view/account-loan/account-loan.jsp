<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head lang="UTF-8">
	<!-- <script type="text/javascript" src="../../../js/commonczjy/firebug-lite/build/firebug-lite-debug.js"></script>-->
	<meta charset="UTF-8">
	<title>账户中心-优金客</title>

	<%@include file="../common/commonInclude.jsp" %>

	<script type="text/javascript" src="../../../js/account-loan/account-loan.js" ></script>
	<script type="text/javascript" src="../../../js/account-loan/loan_table.js" ></script>

	<link type="text/css" rel="stylesheet" href="../../../css/account-loan/account-loan.css" />
</head>

	<body>
			<!--我的账户  我的借款-->
		<input id="J_cur_nav" type="hidden" value="3" />
		<div class="scroll_to_top"></div>
		<div id="J_header" >
			<%@include file="../common/header.jsp" %>
		</div>
		<div id="J_container">
			<div id="J_my_loan_right">
				<input type="hidden" class="account" value="2">
				<div id="J_account_left">
					<%@include file="../account-common/account_left.jsp" %>
				</div>
				<div id="J_my_loan">
					<div id="J_mp_top_dredge">
						<%@include file="../account-common/mp_top_dredge.jsp" %>
					</div>
					<!--我的借款顶部-->
					<div id="J_my_loan_top">
						<%@include file="my_loan_right/my_loan/my_loan_top/my_loan_top.jsp" %>
					</div>
					<!--我的借款下面列表表部分-->
					<div id="J_my_loan_footlist">
						<%@include file="my_loan_right/my_loan/my_loan_footlist/my_loan_footlist.jsp" %>
					</div>
				</div>
			</div>
			<div style="clear:both"></div>
		</div>
		<div id="J_footer" >
			<%@include file="../common/footer.jsp" %>
		</div>
		
	</body>
</html>

