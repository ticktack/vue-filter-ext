
/**
 * 毫秒日期时间格式化函数
 * @param timeMillis
 * @param format
 * @returns
 */
function format(timeMillis, format) {
	 var t = new Date(timeMillis);
	 var tf = function(i){return (i < 10 ? '0' : '') + i};
	 return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a){
	        switch(a) {
	            case 'yyyy':
	                return tf(t.getFullYear());
	                break;
	            case 'MM':
	                return tf(t.getMonth() + 1);
	                break;
	            case 'mm':
	                return tf(t.getMinutes());
	                break;
	            case 'dd':
	                return tf(t.getDate());
	                break;
	            case 'HH':
	                return tf(t.getHours());
	                break;
	            case 'ss':
	                return tf(t.getSeconds());
	                break;
	        }
	    })
 }
	 
