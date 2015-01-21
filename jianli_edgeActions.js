/***********************
* Adobe Edge Animate 组件动作
*
* 小心编辑这个文件，小心保存
* 函数签名和注释以“Edge”起始来维持
* 通过 Adobe Edge Animate 使动作可以交互
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // 常用的 Edge 类别名

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_2}", "click", function(sym, e) {
         
         sym.$("Group").hide();
         sym.$("Group3").hide();
         sym.$("Group4").hide();
         sym.$("Group2").show();
         
         
         
         sym.play(1750);
         

      });
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "stop", function(sym, e) {
         // 当时间轴停止时插入的代码将运行
         
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // 在此处插入代码
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_1}", "click", function(sym, e) {
         
         // 隐藏元素。
         sym.$("Group2").hide();
         sym.$("Group3").hide();
         sym.$("Group4").hide();
         sym.$("Group").show();
         
         
         sym.play(750);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_3}", "click", function(sym, e) {
         sym.$("Group2").hide();
         sym.$("Group").hide();
         sym.$("Group4").hide();
         sym.$("Group3").show();
         sym.play(2750);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_4}", "click", function(sym, e) {
         sym.$("Group2").hide();
         sym.$("Group3").hide();
         sym.$("Group").hide();
         sym.$("Group4").show();
         sym.play(3750);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // 在此处插入代码
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         // 在此处插入代码
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         // 在此处插入代码
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         // 在此处插入代码
         sym.stop();

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${Symbol_23}", "mouseover", function(sym, e) {
         sym.getSymbol("Symbol_23").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Symbol_33}", "mouseover", function(sym, e) {
         sym.getSymbol("Symbol_33").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Symbol_43}", "mouseover", function(sym, e) {
         sym.getSymbol("Symbol_43").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Symbol_23}", "mouseout", function(sym, e) {
         sym.getSymbol("Symbol_23").playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Symbol_33}", "mouseout", function(sym, e) {
         sym.getSymbol("Symbol_33").playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Symbol_43}", "mouseout", function(sym, e) {
         sym.getSymbol("Symbol_43").playReverse();

      });
      //Edge binding end

      

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Symbol_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // 在此处插入代码
         sym.stop();

      });
      //Edge binding end

   })("Symbol_2");
   //Edge symbol end:'Symbol_2'

   //=========================================================
   
   //Edge symbol: 'Symbol_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // 在此处插入代码
         sym.stop();

      });
      //Edge binding end

   })("Symbol_3");
   //Edge symbol end:'Symbol_3'

   //=========================================================
   
   //Edge symbol: 'Symbol_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // 在此处插入代码
         sym.stop();

      });
      //Edge binding end

   })("Symbol_4");
   //Edge symbol end:'Symbol_4'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // 在此处插入代码
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_0C768CA513E4754188BCF25175156DDF2}", "click", function(sym, e) {
         // 插入代码——当鼠标在此处单击
         sym.play();
         

      });
      //Edge binding end

   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-7016134");