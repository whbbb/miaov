<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head lang="UTF-8">
	<!--<script type="text/javascript" src="../../../js/common/firebug-lite/build/firebug-lite-debug.js"></script>-->
	<meta charset="UTF-8">
	<title>注册成功-优金客</title>

	<%@include file="../common/commonInclude.jsp" %>

	<script type="text/javascript" src="../../../js/enroll-success/enroll-success.js" ></script>

	<link type="text/css" rel="stylesheet" href="../../../css/enroll-success/enroll-success.css" />
</head>
	<body>
		<!--注册成功-->
		<input id="J_cur_nav" type="hidden" value="0" />
		<div class="scroll_to_top"></div>
		<div id="J_header" >
			<%@include file="../common/header.jsp" %>
		</div>
		<div id="J_container">
			<!--注册成功-->
			<div id="J_enroll">
				<%@include file="enroll/enroll.jsp" %>
			</div>
		</div>
		<div id="J_footer" >
			<%@include file="../common/footer.jsp" %>
		</div>
	</body>
</html>