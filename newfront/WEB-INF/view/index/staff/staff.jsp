<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<script type="text/javascript" src="../../../js/index/staff/staff.js"></script>

<div class="staff">
	<div class="title">薪金宝</div>
    <div class="subhead">真正安全，省心，高收益的投资方式</div>
<!--   	<s:if test="tankIndeOut.financionList.size >= 1">
	    <span class="staff-background left">
	        <span class="shadow"></span>
	        <span class="staff-3dbox_1.1">
	            <input type="hidden" class="remainMoney" value='<s:property value="tankIndeOut.financionList[0].remainMoney"/>'/>
	            <input type="hidden" class="raiseMoney" value='<s:property value="tankIndeOut.financionList[0].raiseMoney"/>'/>
	            <p class="3dbox_1.1-title"><a class="3dbox_1.1-a" href="javascript:void(0);" target="_self"><s:property value="tankIndeOut.financionList[0].assetName"/></a></p>
	            <p class="3dbox_1.1-subhead"><img src="../../../img/product/staff/icon.png" />  限量供应 员工专享 高回报率 5万起投</p>
	            <div class="progress-3dbox_1.1">
	                <div class="progress-val">
	                    <div class="val">0%</div>
	                    <div class="triangle"></div>
	                </div>
	                <div class="bar-background">
	                    <div class="progress-bar"></div>
	                </div>
	            </div>
	            <div class="condition">
	                <img src="../../../img/product/staff/staff-1.jpg">
	                <span class="con-span-1">浮动收益</span>
	                <img src="../../../img/product/staff/staff-2.jpg">
	                <span class="con-span-2">12<span>个月</span></span>
	                <img src="../../../img/product/staff/staff-3.jpg">
	                <span class="con-span-3"><span class="raise-money"></span><span>万</span></span>
	            </div>
	            <input type="button" value="立即加入" />
	        </span>
		</span>
		<s:if test="tankIndeOut.financionList.size >= 2">
			<span class="staff-background right">
		        <span class="shadow"></span>
		        <span class="staff-3dbox_1.1">
		            <input type="hidden" class="remainMoney" value='<s:property value="tankIndeOut.financionList[1].remainMoney"/>'/>
		            <input type="hidden" class="raiseMoney" value='<s:property value="tankIndeOut.financionList[1].raiseMoney"/>'/>
		            <p class="3dbox_1.1-title"><a class="3dbox_1.1-a" href="javascript:void(0);" target="_self"><s:property value="tankIndeOut.financionList[1].assetName"/></a></p>
		            <p class="3dbox_1.1-subhead"><img src="../../../img/product/staff/icon.png" />  限量供应 员工专享 高回报率 5万起投</p>
		            <div class="progress-3dbox_1.1">
		                <div class="progress-val">
		                    <div class="val">0%</div>
		                    <div class="triangle"></div>
		                </div>
		                <div class="bar-background">
		                    <div class="progress-bar"></div>
		                </div>
		            </div>
		            <div class="condition">
		                <img src="../../../img/product/staff/staff-1.jpg">
		                <span class="con-span-1">浮动收益</span>
		                <img src="../../../img/product/staff/staff-2.jpg">
		                <span class="con-span-2">12<span>个月</span></span>
		                <img src="../../../img/product/staff/staff-3.jpg">
		                <span class="con-span-3"><span class="raise-money"></span><span>万</span></span>
		            </div>
		            <input type="button" value="立即加入" />
		        </span>
		    </span>
		</s:if>
		<s:else>
			<span class="staff-background right">
		        <span class="shadow"></span>
		        <span class="staff-3dbox_1.1">
		            <input type="hidden" class="remainMoney" value="50000"/>
		            <input type="hidden" class="raiseMoney" value="12000000"/>
		            <p class="3dbox_1.1-title"><a class="3dbox_1.1-a" href="javascript:void(0);" target="_self">员工宝特供理财计划006</a></p>
		            <p class="3dbox_1.1-subhead"><img src="../../../img/product/staff/icon.png" />  限量供应 员工专享 高回报率 5万起投</p>
		            <div class="progress-3dbox_1.1">
		                <div class="progress-val">
		                    <div class="val">0%</div>
		                    <div class="triangle"></div>
		                </div>
		                <div class="bar-background">
		                    <div class="progress-bar"></div>
		                </div>
		            </div>
		            <div class="condition">
		                <img src="../../../img/product/staff/staff-1.jpg">
		                <span class="con-span-1">浮动收益</span>
		                <img src="../../../img/product/staff/staff-2.jpg">
		                <span class="con-span-2">12<span>个月</span></span>
		                <img src="../../../img/product/staff/staff-3.jpg">
		                <span class="con-span-3"><span class="raise-money"></span><span>万</span></span>
		            </div>
		            <input type="button" value="立即加入" />
		        </span>
		    </span>
		</s:else>
	</s:if>
 	<s:else>-->
		<span class="staff-background left">
	    	<span class="shadow"></span>
	        <span class="staff-box">
	            <input type="hidden" class="remainMoney" value="0"/>
	            <input type="hidden" class="raiseMoney" value="5000000"/>
	            <p class="box-title"><a class="box-a" href="../../../financing/financial-details.do?userOrderCode=182&orderType=04" target="_self">薪金宝权益1号01期</a></p>
	            <p class="box-subhead"><img src="../../../images/index/staff/icon.png"/>  限量供应 员工专享 高回报率 5万起投</p>
	            <div class="progress-box">
	                <div class="progress-val">
	                    <div class="val">0%</div>
	                    <div class="triangle"></div>
	                </div>
	                <div class="bar-background">
	                    <div class="progress-bar"></div>
	                </div>
	            </div>
	            <div class="condition">
	                <img src="../../../images/index/staff/staff-1.jpg">
	                <span class="con-span-1">浮动收益</span>
	                <img src="../../../images/index/staff/staff-2.jpg">
	                <span class="con-span-2">12<span>个月</span></span>
	                <img src="../../../images/index/staff/staff-3.jpg">
	                <span class="con-span-3"><span class="raise-money"></span><span>万</span></span>
	            </div>
	            <input type="button" value="还款中" class="current-default"/>
	        </span>
	    </span>

	    <span class="staff-background right">
	        <span class="shadow"></span>
	        <span class="staff-box">
	            <input type="hidden" class="remainMoney" value="12000000"/>
	            <input type="hidden" class="raiseMoney" value="12000000"/>
	            <p class="box-title"><a class="box-a">薪金宝权益1号02期</a></p>
	            <p class="box-subhead"><img src="../../../images/index/staff/icon.png" />  限量供应 员工专享 高回报率 5万起投</p>
	            <div class="progress-box">
	                <div class="progress-val">
	                    <div class="val">0%</div>
	                    <div class="triangle"></div>
	                </div>
	                <div class="bar-background">
	                    <div class="progress-bar"></div>
	                </div>
	            </div>
	            <div class="condition">
	                <img src="../../../images/index/staff/staff-1.jpg">
	                <span class="con-span-1">浮动收益</span>
	                <img src="../../../images/index/staff/staff-2.jpg">
	                <span class="con-span-2">12<span>个月</span></span>
	                <img src="../../../images/index/staff/staff-3.jpg">
	                <span class="con-span-3"><span class="raise-money"></span><span>万</span></span>
	            </div>
	            <input type="button" value="待发售" class="current-default"/>
	        </span>
	    </span>
	<!--</s:else>-->
</div>