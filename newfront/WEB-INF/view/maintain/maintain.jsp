<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head lang="UTF-8">
    <!--<script type="text/javascript" src="../../../js/common/firebug-lite/build/firebug-lite-debug.js"></script>-->
    <meta charset="UTF-8">
    <title>网站维护中-优金客</title>
	<%@include file="../common/commonInclude.jsp" %>

    <script type="text/javascript" src="../../../js/maintain/maintain.js"></script>

    <link type="text/css" rel="stylesheet" href="../../../css/maintain/maintain.css" />
</head>
<body>
<!--网站维护中   -->
<input id="J_cur_nav" type="hidden" value="0" />
<div class="scroll_to_top"></div>
<div id="J_header" >
	<%@include file="../common/header.jsp" %>
</div>
<div id="J_container">
    <!--网站维护中-->
    <div id="J_maintaining">
    	<%@include file="./maintaining/maintaining.jsp" %>
    </div>
</div>
<div id="J_footer" >
	<%@include file="../common/footer.jsp" %>
</div>
</body>
</html>