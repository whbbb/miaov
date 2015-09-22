<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head lang="UTF-8">
    <meta charset="UTF-8">
    <title>操作成功</title>

    <%@include file="../common/commonInclude.jsp" %>

    <script type="text/javascript" src="../../../js/return-success/return-success.js" ></script>

    <link type="text/css" rel="stylesheet" href="../../../css/return-success/return-success.css" />
</head>
<body>
<!--  第三方实名认证  成功页面  -->
<input id="J_cur_nav" type="hidden" value="3" />
<div class="scroll_to_top"></div>
<div id="J_header" >
	<%@include file="../common/header.jsp" %>
</div>
<div id="J_container">
    <div id="J_success">
    	<%@include file="./success/success.jsp" %>
    </div>
</div>
<div id="J_footer" >
	<%@include file="../common/footer.jsp" %>
</div>
</body>
</html>