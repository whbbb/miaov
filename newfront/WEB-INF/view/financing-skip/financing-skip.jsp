<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head lang="UTF-8">
    <meta charset="UTF-8">
    <title>产品选择-优金客</title>

    <%@include file="../common/commonInclude.jsp" %>

    <script type="text/javascript" src="../../../js/financing-skip/financing-skip.js" ></script>

    <link type="text/css" rel="stylesheet" href="../../../css/financing-skip/financing-skip.css" />
</head>
<body>
<!--我要理财跳转页-->
<input id="J_cur_nav" type="hidden" value="1" />
<div id="J_header" >
	<%@include file="../common/header.jsp" %>
</div>
<div id="J_container">
    <div id="J_skip">
    	<%@include file="skip/skip.jsp" %>
    </div>
</div>
<div id="J_footer" >
	<%@include file="../common/footer.jsp" %>
</div>
</body>
</html>