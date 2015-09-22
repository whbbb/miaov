<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head lang="UTF-8">
	<!--<script type="text/javascript" src="../../../js/common/firebug-lite/build/firebug-lite-debug.js"></script>-->
	<meta charset="UTF-8">
	<title>风控体系介绍--优金客</title>

	<%@include file="../common/commonInclude.jsp" %>

	<script type="text/javascript" src="../../../js/danger-govern/danger-govern.js" ></script>

	<link type="text/css" rel="stylesheet" href="../../../css/danger-govern/danger-govern.css" />
</head>
	<body>
		<input id="J_cur_nav" type="hidden" value="0" />
		<div class="scroll_to_top"></div>
		<div id="J_header" >
			<%@include file="../common/header.jsp" %>
		</div>
		<div id="J_container">
			<div id="J_govern_banner">
				<%@include file="govern_banner/govern_banner.jsp" %>
			</div>
			<div id="J_govern_preparation">
				<%@include file="govern_preparation/govern_preparation.jsp" %>
			</div>
			<div id="J_govern_procedure">
				<%@include file="govern_procedure/govern_procedure.jsp" %>
			</div>
			<div id="J_govern_warning">
				<%@include file="govern_warning/govern_warning.jsp" %>
			</div>
		</div>
		<div id="J_footer" >
			<%@include file="../common/footer.jsp" %>
		</div>
	</body>
</html>