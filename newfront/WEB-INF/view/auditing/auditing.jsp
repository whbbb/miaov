<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head lang="UTF-8">
    <!-- <script type="text/javascript" src="../../../js/common/firebug-lite/build/firebug-lite-debug.js"></script>-->
    <meta charset="UTF-8">
    <title>我要借款-优金客</title>

    <script type="text/javascript" src="../../../js/common/jquery-1.7.2.min.js" ></script>
    <script type="text/javascript" src="../../../js/common/common.js" ></script>

    <script type="text/javascript" src="../../../js/auditing/auditing.js" ></script>

    <link type="text/css" rel="stylesheet" href="../../../css/auditing/auditing.css" />
</head>
<body>
<!--  借款审核中  -->
<input id="J_cur_nav" type="hidden" value="3" />
<div class="scroll_to_top"></div>
<div id="J_header" >
	<%@include file="../common/header.jsp" %>
</div>
<div id="J_container">
    <div id="J_await">
    	<%@include file="await/await.jsp" %>
    </div>
</div>
<div id="J_footer" >
	<%@include file="../common/footer.jsp" %>
</div>
</body>
</html>