<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html>
<html>
<head lang="UTF-8">
    <!--<script type="text/javascript" src="../../../js/common/firebug-lite/build/firebug-lite-debug.js"></script>-->
    <meta charset="UTF-8">
    <title></title>

    <%@include file="../common/commonInclude.jsp" %>

    <script type="text/javascript" src="../../../js/new-edition/new-edition.js" ></script>

    <link type="text/css" rel="stylesheet" href="../../../css/new-edition/new-edition.css" />
</head>
<body>
    <!-- banner  落地页      新版上线  -->
    <input id="J_cur_nav" type="hidden" value="0" />
    <div class="scroll_to_top"></div>
    <div id="J_header" >
    	<%@include file="../common/header.jsp" %>
    </div>
    <div id="J_container">
        <!--  banner  落地页-->
        <div id="J_edition">
        	<%@include file="./edition/edition.jsp" %>
        </div>
    </div>
    <div id="J_footer" >
    	<%@include file="../common/footer.jsp" %>
    </div>
</body>
</html>