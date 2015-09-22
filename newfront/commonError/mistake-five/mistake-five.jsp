<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head lang="UTF-8">
    <!--<script type="text/javascript" src="../../../js/common/firebug-lite/build/firebug-lite-debug.js"></script>-->
    <meta charset="UTF-8">
    <title>页面无法访问-优金客</title>
    <script type="text/javascript" src="../../../js/common/jquery-1.7.2.min.js" ></script>
    <script type="text/javascript" src="../../../js/common/common.js" ></script>
    <script type="text/javascript" src="../../../js/mistake-five/mistake-five.js" ></script>

    <link type="text/css" rel="stylesheet" href="../../../css/mistake-five/mistake-five.css" />
</head>
<body>
<!--错误页面   500  -->
<input id="J_cur_nav" type="hidden" value="0" />
<div class="scroll_to_top"></div>
<div id="J_header" >
</div>
<div id="J_container">
    <!--错误页面   500-->
    <div id="J_mfive">
    	<%@include file="../mistake-five/mfive/mfive.jsp" %>
    </div>
</div>
<div id="J_footer" ></div>
</body>
</html>