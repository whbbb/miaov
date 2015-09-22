<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head lang="UTF-8">
	<!--<script type="text/javascript" src="../../../js/common/firebug-lite/build/firebug-lite-debug.js"></script>-->
	<meta charset="UTF-8">
	<title>安全保障介绍-优金客</title>

	<%@include file="../common/commonInclude.jsp" %>

	<script type="text/javascript" src="../../../js/insurance/insurance.js" ></script>

	<link type="text/css" rel="stylesheet" href="../../../css/insurance/insurance.css" />
</head>
	<body>
		<!--四个圈落地页 ···安全保障-->
		<input id="J_cur_nav" type="hidden" value="0" />
		<div class="scroll_to_top"></div>
		<div id="J_header" >
			<%@include file="../common/header.jsp" %>
		</div>
		<div id="J_container">
			<div id="J_ins_substance">
				<%@include file="ins_substance/ins_substance.jsp" %>
			</div>
		</div>
		<div id="J_footer" >
			<%@include file="../common/footer.jsp" %>
		</div>
	</body>
</html>