<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<script type="text/javascript" src="../../../js/account-financing/my_financing_right/my_financing/my_fin_footlist/content/house/navigation/navigation.js" ></script>

<div class="navigation">
    <div class="invest-list">
        <input type="hidden"  value='<s:property value="orderState" default="0"/>' id="details-nav"/>
        <ul class="inv-list-nav">
            <li value="0">还款中（<s:property value="allCountOutput.refundCount" default="0"/>）
                <div class="listnav-current"></div>
            </li>
            <li value="1">投标中（<s:property value="allCountOutput.bidCount"  default="0"/>）</li>
            <li value="2">预约中（<s:property value="allCountOutput.appointmentCount" default="0"/>）</li>
            <li value="3">放款审核（<s:property value="allCountOutput.auditCount" default="0"/>）</li>
            <li value="4">已还完（<s:property value="allCountOutput.endCount" default="0"/>）</li>
            <li value="5">流标（<s:property value="allCountOutput.flowCount" default="0"/>）</li>
            <li value="6">坏账还款中（<s:property value="allCountOutput.debtCount" default="0"/>）</li>
        </ul>
    </div>
</div>