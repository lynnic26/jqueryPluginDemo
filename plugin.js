;(function($){
    $.fn.yourPluginName = function(options) {
    	var options = $.extend(default, options);
        return this.each(function() {
        	
        });
   }
})(jQuery)


//添加静态方法

// jQuery.extend(object);
// 为扩展jQuery类本身，为类添加新的方法，可以理解文添加静态方法。
// $.extend({  　　addMethod : function(a, b){return a + b;} // $.addMethod(1, 2); //return 3});

// jQuery.fn.extend(object);


//添加成员方法

// jQuery.fn = jQuery.prototype
// 给jQuery对象添加方法，对jQuery.prototype进行扩展，为jQuery类添加成员方法：
// $.fn.extend({      getInputText:function(){          $(this).click(function(){              alert($(this).val());          });      }  });  $("#username").getInputText();

// $.extend(defaults, options);
// 就是通过合并defaults和options来扩展defaults，实现插件默认参数的功能
// http://api.jquery.com/jQuery.extend/