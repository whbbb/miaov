<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<script type="text/javascript" src="../../../js/account-financing/my_financing_right/my_financing/my_fin_top/my_fin_top.js" ></script>

<div class="my_fin">
    <div class="floatleft no-yet finbigbox">
        <ul class="fin-yet">
            <!--  class = finShow -->

            <li class=" yet yet1 yet-default">
                <div class="yet-bg ybg1"></div>
                <div class="yet-money">已赚金额</div>
                <p><span class="orangefont"><s:property value="sumout.userFeeMoney" default="0.00"/></span>元</p>
            </li>
            <li class=" yet yet2 bluebg <s:if test='sumout.userFeeMoney != 0'>finShow</s:if>">
                <div class="yet2-money">已赚金额</div>
                <p class="yetmon"><span class="orangefont fin-money"><s:property value="sumout.userFeeMoney" default="0.00"/></span>元</p>
                <div class="yet-detail">
                    <p><span class="symbol"></span><span class="sum">正常累计已收利息</span><span><s:property value="sumout.sumPai" default="0.00"/></span>元</p>
                    <p><span class="symbol">+</span><span class="sum">逾期累计已收利息</span><span><s:property value="sumout.overdueSumFine" default="0.00"/></span>元</p>
                </div>
            </li>
            <li class="yet yet3 bluebg <s:if test='sumout.userFeeMoney == 0'>finShow</s:if>">
                <div class="loan-cue">
                    <h3 class="dear">亲，您还没有任何收益哟</h3>
                    <p>不要哭泣，不要忧伤</p>
                    <p>想赚钱？快去投标理财吧</p>
                </div>
                <div class="borrow-mone">
                    <input type="button" class="lend-money" value="投标" request-url="../../../financing/financing-skip.do">
                </div>
            </li>
        </ul>
    </div>
    <div class="should-yet finbigbox">
        <ul class="fin-yet">

            <!--  class = finShow -->

            <li class=" yet yet1">
                <div class="yet-bg ybg2"></div>
                <div class="yet-money">待收本息</div>
                <p><span class="orangefont"><s:property value="sumout.collectionMoney" default="0.00"/></span>元</p>
            </li>
            <li class=" yet  yet2 greenbg <s:if test='sumout.collectionMoney != 0'>finShow</s:if>" >
                <div class="yet2-money">待收本息</div>
                <p class="yetmon"><span class="orangefont fin-money"><s:property value="sumout.collectionMoney" default="0.00"/></span>元</p>
                <div class="yet-detail ">
                    <p><span class="symbol"></span><span class="sum">待收本金</span><s:property value="sumout.principalMoney" default="0.00"/>元</p>
                    <p><span class="symbol">+</span><span class="sum">待收利息</span><s:property value="sumout.collectedPai" default="0.00"/>元</p>
                    <p><span class="symbol">+</span><span class="sum">逾期利息</span><s:property value="sumout.overdueFine" default="0.00"/>元</p>
                </div>
            </li>
            <li class="yet yet3 greenbg  <s:if test='sumout.collectionMoney == 0'>finShow</s:if> ">
                <div class="loan-cue">
                    <h3 class="dear">亲，您还没有任何待收收益哟</h3>
                    <p>不要哭泣，不要忧伤</p>
                    <p>想赚钱？快去投标理财吧</p>
                </div>
                <div class="borrow-mone">
                    <input type="button" class="lend-money" value="投标" request-url="../../../financing/financing-skip.do">
                </div>
            </li>
        </ul>
    </div>
</div>