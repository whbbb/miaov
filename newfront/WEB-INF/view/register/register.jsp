<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head lang="UTF-8">
    <!--<script type="text/javascript" src="../../../js/commonczjy/firebug-lite/build/firebug-lite-debug.js"></script>-->
    <meta charset="UTF-8">
    <title>注册</title>
	
	<%@include file="../common/commonInclude.jsp" %>

    <script type="text/javascript" src="../../../js/register/register.js" ></script>

    <link type="text/css" rel="stylesheet" href="../../../css/register/register.css" />
</head>
<body>
<input id="J_cur_nav" type="hidden" value="0" />
<div id="J_header" >
	<%@include file="../common/header.jsp" %>
</div>
<div id="J_container">
    <div id="J_main">
    	<%@include file="main/main.jsp" %>
    </div>
</div>
<div id="J_footer" >
	<%@include file="../common/footer.jsp" %>
</div>
</body>
</html>