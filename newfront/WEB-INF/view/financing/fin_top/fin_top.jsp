<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<script type="text/javascript" src="../../../js/financing/fin_top/fin_top.js"></script>

<script type="text/javascript">
<!--
	$().ready(function(){
		$(".<s:property value='financingType'/>").click();
		px_financing.getSearchParm(4,$(".fc-a").index());
        var param ={orderType:orderType};
        px_financing.search(param);
		
		
		$("ul[class='fc-title'] li").click(function(){
			$(".all").addClass("o-d-all").siblings().removeClass("o-d-all");
			px_financing.getSearchParm(4,$(".fc-a").index());
	        var param ={orderType:orderType};
	        px_financing.search(param);
		});
		
	});

//-->
</script>

<ul class="fc-title">
    <li class="antrum fc-a" id="antrum">优房宝</li>
    <li class="machine">优车宝</li>
    <li class="arranged">优选计划</li>
	<!-- <li class="metals">薪金宝</li> -->
</ul>
