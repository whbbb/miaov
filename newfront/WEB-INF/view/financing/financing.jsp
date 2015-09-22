<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<!DOCTYPE html>
<html>
<head lang="UTF-8">
    <meta charset="UTF-8">
    <title>投资项目-我要理财</title>

    <%@include file="../common/commonInclude.jsp" %>

    <script type="text/javascript" src="../../../js/financing/financing.js" ></script>
    <!-- 暂时提出来，后面整合到financing.js -->
    <script type="text/javascript" src="../../../js/financing/search_fin.js" ></script>

    <link type="text/css" rel="stylesheet" href="../../../css/financing/financing.css" />
</head>
<body>
        <!--我要理财-->
<input id="J_cur_nav" type="hidden" value="1" />
<div class="scroll_to_top"></div>
<div id="J_header" >
	<%@include file="../common/header.jsp" %>
</div>
<div id="J_container">
    <div id="J_fin_cen">
        <div id="J_fin_top">
        	<%@include file="fin_top/fin_top.jsp" %>
        </div>
        <div id="J_antrum">
        	<%@include file="antrum/antrum.jsp" %>
        </div>
        <div id="J_machine">
        	<%@include file="machine/machine.jsp" %>
        </div>
        <div id="J_arranged">
        	<%@include file="arranged/arranged.jsp" %>
        </div>
       <div id="J_metals"> 
        	<%@include file="metals/metals.jsp" %>
        </div>
        <div id="J_financing_choose">
        	<%@include file="financing_choose/financing_choose.jsp" %>
        </div>
        <div class="clear-both"></div>
    </div>
</div>
<div id="J_footer" >
	<%@include file="../common/footer.jsp" %>
</div>
</body>
</html>