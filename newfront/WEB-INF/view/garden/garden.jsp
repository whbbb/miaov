<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head lang="UTF-8">
    <!--<script type="text/javascript" src="../../../js/common/firebug-lite/build/firebug-lite-debug.js"></script>-->
    <meta charset="UTF-8">
    <title>品渊股权质押资管计划1期-优金客</title>

    <%@include file="../common/commonInclude.jsp" %>

    <script type="text/javascript" src="../../../js/garden/garden.js" ></script>

    <link type="text/css" rel="stylesheet" href="../../../css/garden/garden.css" />
</head>
<body>
<!-- banner  落地页      东方园林  -->
<input id="J_cur_nav" type="hidden" value="0" />
<div class="scroll_to_top"></div>
<div id="J_header" >
	<%@include file="../common/header.jsp" %>
</div>
<div id="J_container">
    <!--  banner  落地页-->
    <!--banner + 东方园林简介-->
    <div id="J_synopsis">
    	<%@include file="./synopsis/synopsis.jsp" %>
    </div>
    <!-- 产品概况-->
    <div id="J_survey">
    	<%@include file="./survey/survey.jsp" %>
    </div>
    <!--产品特色-->
    <div id="J_feature">
    	<%@include file="./feature/feature.jsp" %>
    </div>
</div>
<div id="J_footer" >
	<%@include file="../common/footer.jsp" %>
</div>
</body>
</html>