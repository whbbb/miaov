<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>


<!DOCTYPE html>
<html>
<head lang="UTF-8">
<!--<script type="text/javascript" src="../../../js/common/firebug-lite/build/firebug-lite-debug.js"></script>-->
<meta charset="UTF-8">
<title>项目详情-优金客</title>

<%@include file="../common/commonInclude.jsp"%>

<script type="text/javascript"
	src="../../../js/financial-details/financial-details.js"></script>

<link type="text/css" rel="stylesheet"
	href="../../../css/financial-details/financial-details.css" />
</head>
<body>
	<!--  我要理财    （借款描述）-->
	<input id="J_cur_nav" type="hidden" value="1" />
	<div class="scroll_to_top"></div>
	<div id="J_header"><%@include file="../common/header.jsp"%></div>
	<div id="J_container">
		<div id="J_item">
			<div id="J_detailtop"><%@include file="detailtop/detailtop.jsp"%></div>
			<div id="J_detailbottom">
				<div id="J_treetop"><%@include file="treetop/treetop.jsp"%></div>
				<div id="J_about"><%@include file="about/about.jsp"%></div>
				<div id="J_tender"><%@include file="tender/tender.jsp"%></div>
				<div id="J_discuss"><%@include file="discuss/discuss.jsp"%></div>
				<div id="J_unlogin" <s:if test="#user == null ">style="display:block;" </s:if>><%@include file="unlogin/unlogin.jsp"%></div>
			</div>
		</div>
	</div>
	<div id="J_footer"><%@include file="../common/footer.jsp"%></div>
</body>
</html>