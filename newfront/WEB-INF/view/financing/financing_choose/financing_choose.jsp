<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<script type="text/javascript">

	$().ready(function(){
		 /*点击重新筛选按钮   恢复筛选条件的默认状态  */
	    $(".again").click(function(){
	        $(".all").addClass("o-d-all").siblings().removeClass("o-d-all");
	        px_financing.getSearchParm(4,$(".fc-a").index());
	        var param ={orderType:orderType};
	        px_financing.search(param);
	    });

		
		$(".o-detail li").click(function(){
			
			$.each($(".o-d-all"),function(){
				px_financing.getSearchParm($($(this).parent().parent()).index(),$(this).index());
			});
			
			px_financing.getSearchParm(4,$(".fc-a").index());
			
			var param = {
					orderCycle:orderCycle,
					orderRefund:orderRefund,
					orderApr:orderApr,
					orderIssuerFrade:orderIssuerFrade,
					orderType:orderType
	        };
			px_financing.search(param);
		});
		
	});
	
</script>

  <div class="pow-right">
      <form action="" method="post">
      <h3 class="screen">筛选条件</h3>
      <ul class="options">
          <li>借款期限
              <ul class="o-detail">
                  <li class="o-d-all all">全部</li>
                  <li>6个月以下</li>
                  <li>6~12个月</li>
                  <li>12个月以上</li>
              </ul>
          </li>
          <li style="height:135px;">还款方式
              <ul class="o-detail">
                  <li class="o-d-all all">全部</li>
                  <li  style="margin-left:22px;">按月付息，到期还本</li>
                  <li class="o-de-b">到期后本息一次性还款</li>
                  <li class="o-de-b">等额本息，每月还款</li>
              </ul>
          </li>
          <li>标的利率
              <ul class="o-detail">
                  <li class="o-d-all all">全部</li>
                  <li>11%以下</li>
                  <li>11%~14%以上</li>
                  <li>14%以上</li>
              </ul>
          </li>
          <li>信用等级
              <ul class="o-detail">
                  <li class="o-d-all o-rank all">全部</li>
                  <li class="o-rank">AAA</li>
                  <li class="o-rank">AA</li>
                  <li class="o-rank">A</li>
                  <li class="o-rank">B</li>
                  <li class="o-rank">C</li>
              </ul>
          </li>
      </ul>
      <div class="go">
          <input type="button"  value="重新筛选"class="again">
      </div>
      </form>
  </div>
