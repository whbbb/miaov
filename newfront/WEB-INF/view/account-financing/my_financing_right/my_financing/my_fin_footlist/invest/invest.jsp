<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<script type="text/javascript" src="../../../js/account-financing/my_financing_right/my_financing/my_fin_footlist/invest/invest.js" ></script>

<script type="text/javascript">
<!--
	$().ready(function(){
		var orderType = 0, orderState = 0;
		orderState = $(this).index();
		orderType = $("#invest_hidden").val();
		
		$(".invest-nav li").each(function(){
			$(this).click(function(){
				$(".inv-list-nav li").first().click();
			});
		});
		
		$(".inv-list-nav li").each(function(){
			$(this).click(function(){
				orderState = $(this).index();
				orderType = $("#invest_hidden").val();
				var param ={orderType:orderType,orderState:orderState};
				search_fin.search(param);
			});
		});
		
		$(".inv-list-nav li").first().click();
		
		$(".invest-nav li").first().addClass("invest-current");
		
	});

//-->
</script>

<div class="invest">
    <h3 class="investtit">理财统计</h3>
    <input id="invest_hidden" value='<s:property value="orderType" default="0"/>' type="hidden"/>
    <ul class="invest-nav">
        <li class="invest-current" value="0">优房宝
            <div class="current-triangle" ></div>
        </li>
        <li value="1">优车宝</li>
        <li value="2">优选计划</li>
        <!--<li value="3">薪金宝</li>-->
    </ul>
</div>