<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head lang="UTF-8">
	<!-- <script type="text/javascript" src="../../../js/commonczjy/firebug-lite/build/firebug-lite-debug.js"></script>-->
	<meta charset="UTF-8">
	<title>重置密码-优金客</title>

	<%@include file="../common/commonInclude.jsp" %>


	<script type="text/javascript" src="../../../js/resetting-p2/resetting-p2.js" ></script>

	<link type="text/css" rel="stylesheet" href="../../../css/resetting-p2/resetting-p2.css" />
</head>
	<body>
		<!--  重置密码第二步  -->
		<input id="J_cur_nav" type="hidden" value="3" />
		<div class="scroll_to_top"></div>
		<div id="J_header" >
			<%@include file="../common/header.jsp" %>
		</div>
		<div id="J_container">
			<div id="J_resetp2">
				<%@include file="resetp2/resetp2.jsp" %>
			</div>
		</div>
		<div id="J_footer" >
			<%@include file="../common/footer.jsp" %>
		</div>
	</body>
</html>