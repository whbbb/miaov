<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page import="com.cn.pxzd.common.javabean.telegram.output.BiddingOrderDetailOutput" %>
<%@ page import="com.cn.pxzd.common.javabean.telegram.output.BiddingUserCreditOutput" %>
<%@ page import="java.lang.Integer" %>

<script type="text/javascript" src="../../../js/financial-details/detailtop/detailtop.js"></script>

<div class="datum">
    <div class="head-portrait"></div>
    <div class="substance">
        <div class="sub-fin">
          	<s:property value="out.userOrderName"/>
            <!-- 等级的class名以及对应显示的图片   class=sr1 图片 A  sr2  图片AA  sr3 图片AAA   sr4  图片 B     sr5   图片 C-->
            <s:if test="out.orderIssuerFrade != null">
	            <s:if test="out.orderIssuerFrade gte 81">
					<span class="sub-rank sr3"></span>
				</s:if>
				<s:elseif test="out.orderIssuerFrade gte 61 && out.orderIssuerFrade lte 80">
					<span class="sub-rank sr2"></span>
				</s:elseif>
				<s:elseif test="out.orderIssuerFrade gte 46 && out.orderIssuerFrade lte 60">
					<span class="sub-rank sr1"></span>
				</s:elseif>
				<s:elseif test="out.orderIssuerFrade gte 31 && out.orderIssuerFrade lte 45">
					<span class="sub-rank sr4"></span>
				</s:elseif>
				<s:elseif test="out.orderIssuerFrade gte 0 && out.orderIssuerFrade lte 30">
					<span class="sub-rank sr5"></span>
				</s:elseif>
			</s:if>
        </div>
        <ul class="sub-num">
            <li class="sum-first">
            	<s:if test="out.orderApr == 0">
            		<div class="numb">
            			<s:set name="apr" value='orderApr.split("\\\\.")'></s:set>
	                	<span class="sun-big"><s:if test='orderApr.contains(".")'><s:property value='#apr[0]' /></s:if><s:else><s:property value="orderApr" /></s:else></span>
						<span class="sub-sm"><s:if test='orderApr.contains(".")'>.<s:property value='#apr[1]' /></s:if></span>
	                </div>
                	<div class="annotate">最新净值</div>
                </s:if>
                <s:else>
                	<div class="numb">
	                	<s:set name="apr" value='out.orderApr.split("\\\\.")'></s:set>
	                	<span class="sun-big"><s:if test='out.orderApr.contains(".")'><s:property value='#apr[0]' /></s:if><s:else><s:property value="out.orderApr" /></s:else></span>
						<span class="sub-sm"><s:if test='out.orderApr.contains(".")'>.<s:property value='#apr[1]' /></s:if>%</span>
	                </div>
                	<div class="annotate">年化收益率</div>
                </s:else>
            </li>
            <li>
                <div class="numb midd"><s:property value="out.orderCycle" default="0"/>个月</div>
                <div class="annotate">借款期限</div>
            </li>
            <li>
                <div class="numb midd"><s:property value="out.orderMoney" default="0"/>元</div>
                <div class="annotate">借款金额</div>
            </li>
            <li>
                <div class="numb midd"><s:property value="out.investLowLimit" default="0"/>元</div>
                <div class="annotate">起投金额</div>
            </li>
        </ul>
        <ul class="sub-underscore">
            <li class="su-left">
            	<s:if test="out.orderRefund=='01'">
					等额本息，每月还款
				</s:if>
				<s:elseif test="out.orderRefund=='02'">
					等额本金，每月还款
				</s:elseif>
				<s:elseif test="out.orderRefund=='03'">
					本息一次性还款
				</s:elseif>
				<s:elseif test="out.orderRefund=='04'">
					按月付息，到期还本
				</s:elseif>
				<s:else>
					其他还款方式，每月还款
				</s:else>
            </li>
            <li class="su-right">
                <s:if test="out.orderProperty.substring(0,3) == '001'">
					<!-- 信用 -->
					<span class="sur-grd"></span>信用
				</s:if>
				<s:else>
					<s:if test="out.orderProperty.substring(0,2) == '10'">
						<span class="sur-db"></span>担保
					</s:if>
					<s:if test="out.orderProperty.substring(0,2) == '01'">
						<!-- 抵押标 -->
						<span class="sur-dy"></span>抵押
					</s:if>
					<s:if test="out.orderProperty.substring(0,2) == '11'">
						<span class="sur-db"></span>担保
						<span class="sur-dy"></span>抵押
					</s:if>
				</s:else>
            </li>
        </ul>
         <ul class="sub-date">
            <li class="sub-d2">
                起投时间：
                <span id="d2time"></span>
            </li>
            <li class="sub-d3">
                剩余时间：
                <input type="hidden" value="<s:if test="out.orderState =='06' || out.orderState == '07'"><s:property value='out.orderReleaseEndTime' default='0000000'/></s:if><s:else>0000000</s:else>" class="stimer">
                <span class="stime"></span>
            </li>
        </ul>
    </div>
    
    <!-- 如未开通资金托管 -->
    <s:if test="#user != null">
    	<s:if test="status == 0">
    		 <div class="not-remind" style="display: block" >
		        <div class="remind">
		            <p class="remind-p">资管账户未开通</p>
		            <p class="remind-p min-font">开通帐户，享受高收益！</p>
		        </div>
		        <div class="remind-but">
		            <input type="button" class="J_user_login_btn ashore" value="开通" request-url="../../../account/escrow-account.do"/>
		        </div>
		    </div>
    	</s:if>
    	<s:else>
    		<s:if test="out.orderState =='06' || out.orderState =='07'">
    			<s:if test="out.orderState =='07' && out.orderRemainMoney == 0">
    				<div class="not-remind" style="display: block" >
				        <div class="remind">
				            <p class="remind-p">预约已满标</p>
				            <p class="remind-p min-font"></p>
				        </div>
				        <div class="remind-but"></div>
				    </div>
    			</s:if>
    			<s:else>
    				<s:if test=" creditInfor.userHighLimit == 0">
    					<div class=" chapter">
				    		<!--您的投资已达上限-->
					        <div class=" chapter-pic  top-limit dis-none current-show"></div>
				        </div>
			    	</s:if>
			    	<s:else>
					    <form id="J_findetail_form" action="../../../financing/myaccountPay.do?userOrderCode=<s:property value='out.userOrderCode'/>" method="post" data-type="need-verify" target="_blank">
					        <div class="investment" style="display: block">
					            <ul class="inv-balance">
					                <li class="inv-bal">
					                    可用余额：
					                    <span style="color:#ff6600;">￥<s:property value="creditInfor.userMoney" default="0.00"/></span>
					                </li>
					                <li class="inv-money">
					                    可投金额：
					                    <span>￥<s:property value="out.orderRemainMoney" default="0.00"/></span>
					                </li>
					                <li class="inv-profit">
					                    预计可赚：
					                    <span id="inv-profit">￥0.00</span>
					                </li>
					            </ul>
					            <div  class="inv-input-box">
					            	<input type="hidden" value="<s:property value="creditInfor.investHighLimit" default="0"/>" class="max_money">
									<input type="hidden" value="<s:property value='out.investLowLimit' default='50' />" class="min_money">
									<input type="hidden" value="<s:property value='creditInfor.userMoney' default='0' />" class="account-balance"/>
					                <input type="text" id="bidMoney_btn" name="bidMoney" value="" placeholder="投资金额为<s:property value='out.investLowLimit' default='50'/>元的整数倍" data-name="financing_money">
					                <span class="inv-yuan">元</span>
					            </div>
					           <!-- <div class="inv-button">立即投资</div>-->
					            <div class="inv-button">
					            	<input type="button" class="inv-ten tender-dark" value="<s:if test="out.orderState=='06'">投标中</s:if><s:elseif test="out.orderState=='96'">放款审核</s:elseif><s:elseif test="out.orderState=='07'">预约中</s:elseif><s:elseif test="out.orderState=='94'">放款审核</s:elseif><s:elseif test="out.orderState=='10'">放款审核</s:elseif><s:elseif test="out.orderState=='20'">放款审核</s:elseif><s:elseif test="out.orderState=='30'">还款中</s:elseif><s:elseif test="out.orderState== '31'">已还完</s:elseif><s:elseif test="out.orderState=='33'">已还完</s:elseif><s:else>理财投标</s:else>" id="resetp3-next">
					            </div>
					            <!--<div class="ten"><input type="button" class="tender" value="理财投标"></div>-->
					        </div>
					    </form>
				    </s:else>
			    </s:else>
		    </s:if>
		    <s:else>
		    	<!-- 章-->
			    <div class=" chapter">
			    	<s:if test="out.orderState =='10' || out.orderState =='20' || out.orderState =='21' || out.orderState =='94' || out.orderState =='96'">
			        	<!--放款审核-->             <!--  添加 class = current-show 为显示对象-->
			        	<div class=" chapter-pic audit dis-none current-show"></div>
			        </s:if>
			        <s:if test="out.orderState =='33' || out.orderState =='31'">
			        	<!--已还完-->
			        	<div class=" chapter-pic intact dis-none current-show"></div>
			        </s:if>
			        <s:if test="out.orderState =='30'">
			        	<!--还款中-->
			        	<div class=" chapter-pic repayment dis-none current-show"></div>
			        </s:if>
			        <s:if test="out.orderState =='95' || out.orderState =='34'">
				        <!--已流标-->
				        <div class=" chapter-pic  liu-cease dis-none current-show"></div>
			        </s:if>
			    </div>
		    </s:else>
		    
		    <div class="prompt">
		        <span class="san"></span>
		        <div class="pormpt-credit">信用信息</div>
		        <ul class="yours">
		            <li>用户名：<span><s:property value="creditInfor.userName"/></span></li>
		            <li>申请笔数：<span><s:property value="creditInfor.applyCount" default="0"/>笔</span></li>
		            <li>成功笔数：<span><s:property value="creditInfor.successCount" default="0"/>笔</span></li>
		            <li>还清笔数：<span><s:property value="creditInfor.payoffCount" default="0"/>笔</span></li>
		            <li>信用积分：<span><s:property value="creditInfor.userCreditExp"/></span></li>
		            <li>授信额度：<span><s:property value="creditInfor.userCreditLine" default="0"/>元</span></li>
		            <li>借款总额：<span><s:property value="creditInfor.loanSumMoney" default="0"/>元</span></li>
		            <li>逾期笔数：<span><s:property value="creditInfor.overdueCount" default="0"/>笔</span></li>
		            <li>平均逾期天数：<span><s:property value="creditInfor.avgOverCount" default="0"/>天</span></li>
		        </ul>
		    </div>
    	</s:else>
    </s:if>
    <s:else>
        <!--  未登录是右侧显示-->
	    <div class="not-remind" <s:if test='#user == null'>style="display: block"</s:if> >
	        <div class="remind">
	            <p class="remind-p">亲，您还未登录~</p>
	            <p class="remind-p min-font">登录优金客，享受高收益！</p>
	        </div>
	        <div class="remind-but">
	            <input type="button" class="J_user_login_btn ashore" value="登录"/>
	        </div>
	    </div>
    </s:else>
    
</div>
<div class="loan-depict">
    <h3>借款描述</h3>
    <p><s:property value="out.userOrderText"  escape="false"/></p>
</div>

<script type="text/javascript">
<!--
	$().ready(function(){
		$(".J_user_login_btn").click(function(){
			$("#J_user_login_link").click();
		});
		
		uet();
		$("#bidMoney_btn").bind("keyup",function(){
			calculator.init();
		});
		var value="<s:property value='out.orderReleaseTime' default='00000000'/>";
		$("#d2time").html(value.slice(0,4) + "-" + value.slice(4,6)+"-"+ value.slice(6,8));
	});
	
	function uet(){
		var tmp,hour,min,sec;
		tmp = $(".stime").html().trim().split(":");
		hour = Number(tmp[0].trim());
		min = Number(tmp[1].trim());
		sec = Number(tmp[2].trim());
		
		--sec;
		if(Number(sec) < 0){
			sec = 0;
			
			if(min >0){
				sec = 59;
				min--;
			
			}else{
				if(hour > 0){
					hour--;
					min = 59;
					sec = 59;
				}
			
			}
		}
		
		if(sec.toString().length ==1 ){
			sec = "0"+ sec;
		}
		
		if(min.toString().length == 1){
			min = "0"+ min;
		}
		
		if(hour.toString().length == 1){
			hour = "00"+ hour;
		}
		if(hour.toString().length == 2){
			hour = "0"+ hour;
		}
				
		if(Number(sec) <=0 && Number(hour) <=0 && Number(min) <=0){
			$(".stime").html("000:00:00");
		}else{
			$(".stime").html(hour+":"+min+":"+sec);
		}	
		
		clearInterval(timer);
		timer = setInterval("uet()",1000);
	}
	
	var calculator = {
		formatDecimals: function( number, is_drop ){
             if( is_drop ){
                 return parseFloat( ( number + "" ).replace( /([0-9]+\.[0-9]{2})[0-9]*/, "$1" ) );
             }
             else{
                 return parseFloat( number.toFixed( 2 ) );
             }
         }
	};
	
	
	calculator.init = function(){
		
		if(!isNaN($("#bidMoney_btn").val())){
			//借款金额
	        var amount = parseInt( $("#bidMoney_btn").val() );
	        //借款期限
	        var dateLimit = parseInt(<s:property value="out.orderCycle"/> );
	        //年利率
	        var rate = parseFloat(<s:property value="out.orderApr" />);
	        //还款方式
	        var way = "<s:property value='out.orderRefund' />";

	        //总利息
	        var allInterest = 0;
	        
	        //本息合计
	        var allCapital = 0;

	        //每期总还款额
	        var allRefund = 0;
	        //每期本金
	        var capital = 0;
	        //每期利息
	        var interest = 0;
	        //已还利息
	        var paidInterest = 0;
	      	//已还本息
            var paidCapital = 0;

	        //月利率
	        var monthRate = rate / 12 * 0.01;
	        //等额本息 乘方部分
	        var tempRate = Math.pow( ( 1 + monthRate ), dateLimit );
	        var isLast = true;
	        switch( way ){
	        	//等额本息
		        case "01":
		
	                allCapital = this.formatDecimals( dateLimit * amount * monthRate * tempRate / ( tempRate - 1 ) );
	                allInterest = this.formatDecimals( allCapital - amount );

	                allRefund = allCapital - paidCapital;
	                interest = allInterest - paidInterest;
	                capital = allRefund - interest;
		
		            break;
		         //按月付息
		        case "04":
	                allCapital = amount * monthRate * dateLimit + amount;
	                allInterest = amount * monthRate * dateLimit;

	                capital = amount;
	                interest = allInterest - paidInterest;
	                allRefund = capital + interest;
		
		            break;
		        case "03":
		        //一次性
	                allCapital = amount * monthRate * dateLimit + amount;
	                allInterest = amount * monthRate * dateLimit;

	                allRefund = allCapital;
	                interest = allInterest;
	                capital = allCapital - allInterest;
		
		            break;
		    };
		    
		    if(!isNaN(allInterest)){
		    	 $("#inv-profit").html("￥"+allInterest.toFixed(2));
		    }else{
		    	$("#inv-profit").html("￥0.00");
		    }
		}else{
			 $("#inv-profit").html("￥0.00");
		}
	}
	
//-->
</script>