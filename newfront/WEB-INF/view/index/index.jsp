<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<!DOCTYPE html>
<html>
<head lang="UTF-8">
    <meta charset="UTF-8">
    <title>优金客官网</title>
    <%@include file="../common/commonInclude.jsp" %>

    <script type="text/javascript" src="../../../js/index/index.js" ></script>
    <link type="text/css" rel="stylesheet" href="../../../css/index/index.css" />
    

    
</head>
<body>
    <input id="J_cur_nav" type="hidden" value="0" />
    <div class="scroll_to_top"></div>
    <div id="J_header" >
    	<%@include file="../common/header.jsp" %>
    </div>
    <div id="J_container" >
        <div id="J_banner" >
	    	<%@include file="banner/banner.jsp" %>
        </div>
        <div id="J_choice" >
	    	<%@include file="choice/choice.jsp" %>
        </div>
        <div id="J_staff" >
	    	<%@include file="staff/staff.jsp" %>
        </div>
        <div id="J_star">
	    	<%@include file="star/star.jsp" %>
        </div>
        <div id="J_news" >
	    	<%@include file="news/news.jsp" %>
        </div>
        <div id="J_history" >
	    	<%@include file="history/history.jsp" %>
        </div>
        <div id="J_ready" >
	    	<%@include file="ready/ready.jsp" %>
        </div>
    </div>
    <div id="J_footer" >
    	<%@include file="../common/footer.jsp" %>
    </div>
</body>
</html>