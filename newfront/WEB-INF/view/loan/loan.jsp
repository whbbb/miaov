<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head lang="UTF-8">
    <meta charset="UTF-8">
    <title>我要借款-优金客</title>

    <%@include file="../common/commonInclude.jsp" %>

    <script type="text/javascript" src="../../../js/loan/loan.js" ></script>

    <link type="text/css" rel="stylesheet" href="../../../css/loan/loan.css" />
    
</head>
<body>
    <input id="J_cur_nav" type="hidden" value="2" />
    <div id="J_header" >
    	<%@include file="../common/header.jsp" %>
    </div>
    <div id="J_container" >
        <div id="J_banner">
        	<%@include file="banner/banner.jsp" %>
        </div>
        <div id="J_apply">
        	<%@include file="apply/apply.jsp" %>
        </div>
        <div id="J_step">
        	<%@include file="step/step.jsp" %>
        </div>
        <div id="J_type">
        	<%@include file="type/type.jsp" %>
        </div>
        <div id="J_info">
        	<%@include file="info/info.jsp" %>
        </div>
    </div>
    <div id="J_footer" >
    	<%@include file="../common/footer.jsp" %>
    </div>
</body>
</html>