"use strict";define(["jquery"],function(h){h.fn.FontScroll=function(e){var n={time:3e3,s:"fontColor",num:1};h.extend(n,e);this.children("ul").addClass("line");var t=h(".line").eq(0),a=t.height(),i=t.children().eq(0).height(),r=i,l=n.time,s=n.s;t.clone().insertAfter(t);var o=n.num,d=this.find("li");d.length;d.eq(o).addClass(s);var c=setInterval(m,l);function m(){t.animate({marginTop:"-"+i}),d.removeClass(s),o+=1,d.eq(o).addClass(s),a==i?t.animate({marginTop:"-"+i},"normal",f):i+=r}function f(){t.attr("style","margin-top:0"),i=r,o=1,d.removeClass(s),d.eq(o).addClass(s)}this.hover(function(){clearInterval(c)},function(){c=setInterval(m,l)})}});