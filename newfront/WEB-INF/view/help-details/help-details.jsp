<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html>
<html>
<head lang="UTF-8">
	<!-- <script type="text/javascript" src="../../../js/common/firebug-lite/build/firebug-lite-debug.js"></script>-->
	<meta charset="UTF-8">
	<title>帮助中心-优金客</title>

	<%@include file="../common/commonInclude.jsp" %>

	<script type="text/javascript" src="../../../js/help-details/help-details.js" ></script>

	<link type="text/css" rel="stylesheet" href="../../../css/help-details/help-details.css" />
</head>
<body>
	<!--  帮助详情  -->
	<input id="J_cur_nav" type="hidden" value="4" />
	<input id="nav" type="hidden" value='<s:property value="nav"/>' />
	<div class="scroll_to_top"></div>
	<div id="J_header" >
		<%@include file="../common/header.jsp" %>
	</div>
	<div id="J_container">
		<div id="J_aid">
			<div id="J_particulars">
				<%@include file="./aid/particulars/particulars.jsp" %>
			</div>
			<div id="J_aidbody">
				<!--平台介绍-->
				<div id="J_terrace">
					<%@include file="./aid/aidbody/terrace/terrace.jsp" %>
				</div>
				<!--平台费用-->
				<div id="J_outlay">
					<%@include file="aid/aidbody/outlay/outlay.jsp" %>
				</div>
				<!--理财-->
				<div id="J_supervise">
					<%@include file="./aid/aidbody/supervise/supervise.jsp" %>
				</div>
				<!--借款-->
				<div id="J_wantloan">
					<%@include file="./aid/aidbody/wantloan/wantloan.jsp" %>
				</div>
				<!--关于优金客-->
				<div id="J_yjkaccount">
					<%@include file="./aid/aidbody/yjkaccount/yjkaccount.jsp" %>
				</div>
				<!--名词解释-->
				<div id="J_interpret">
					<%@include file="./aid/aidbody/interpret/interpret.jsp" %>
				</div>
			</div>
		</div>
	</div>
	<div id="J_footer" >
		<%@include file="../common/footer.jsp" %>
	</div>
</body>
</html>