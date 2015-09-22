<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head lang="UTF-8">
	<meta charset="UTF-8">
	<title>提现-账户中心-优金客</title>

	<%@include file="../common/commonInclude.jsp" %>

	<script type="text/javascript" src="../../../js/withdraw-cash/withdraw-cash.js" ></script>

	<link type="text/css" rel="stylesheet" href="../../../css/withdraw-cash/withdraw-cash.css" />
</head>
	<body>
		<input id="J_cur_nav" type="hidden" value="3" />
		<div class="scroll_to_top">
		</div>
		<div id="J_header" >
			<%@include file="../common/header.jsp" %>
		</div>
		<div id="J_container">
			<div id="J_wdcash_result_tips">
			</div>
			<div id="J_wdcash">
				<%@include file="./wdcash/wdcash.jsp" %>
			</div>
		</div>
		<div id="J_footer" >
			<%@include file="../common/footer.jsp" %>
		</div>
	</body>
</html>