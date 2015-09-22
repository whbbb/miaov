<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head lang="UTF-8">
	<!--<script type="text/javascript" src="../../../js/common/firebug-lite/build/firebug-lite-debug.js"></script>-->
	<meta charset="UTF-8">
	<title>薪金宝介绍-优金客</title>
	
	<%@include file="../common/commonInclude.jsp" %>
	
	<script type="text/javascript" src="../../../js/common/jquery.mousewheel.min.js"></script>
	<script type="text/javascript" src="../../../js/plugins/animations/javascript/animations.js" ></script>
	<script type="text/javascript" src="../../../js/salary/salary.js" ></script>


	<link type="text/css" rel="stylesheet" href="../../../css/salary/salary.css" />
</head>
<body>
	<!--  薪金宝落地页  -->
	<div id="J_container">
		<div id="J_scroll_panel" >
			<div id="J_page1">
				<%@include file="page1/page1.jsp" %>
			</div>
			<div id="J_page2">
				<%@include file="page2/page2.jsp" %>
			</div>
			<div id="J_page3">
				<%@include file="page3/page3.jsp" %>
			</div>
			<div id="J_page4">
				<%@include file="page4/page4.jsp" %>
			</div>
			<div id="J_page5">
				<%@include file="page5/page5.jsp" %>
			</div>
			<div id="J_page6">
				<%@include file="page6/page6.jsp" %>
			</div>
		</div>
	</div>
</body>
</html>