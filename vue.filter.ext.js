Vue.filter('dateFormat', function (timeMillis, formatString) {	 
	//计算给定时间与当期系统时间的时间差
	//计算相差毫秒数
	var now = new Date()
	var date = now.getTime() - timeMillis //时间差的毫秒数

	if (formatString == undefined) {
		formatString = 'yyyy-MM-dd HH:mm:ss'
	}
	var dtime =  format(timeMillis, formatString)
	 
	//计算出相差天数
	var days = Math.floor(date/(24*3600*1000))
	 
	//计算出小时数
	var leave1=date%(24*3600*1000)    //计算天数后剩余的毫秒数
	var hours =Math.floor(leave1/(3600*1000))
	
	//计算相差分钟数
	var leave2 = leave1%(3600*1000)        //计算小时数后剩余的毫秒数
	var mins =Math.floor(leave2/(60*1000))
	 
	//计算相差秒数
	var leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
	var seconds = Math.round(leave3/1000)
	var formatDtime = dtime
	
	if (days == 0 && hours == 0) {
		if (mins < 1) {
			formatDtime = seconds + "秒前"
		} else {
			formatDtime = mins + "分钟前"
		}
	} 
	else {
		if (days == 0 && hours != 0) {
			formatDtime = hours + "小时前"
		} else {
			if (days < 7) {
				formatDtime = days + "天前"
			}
			// 当前年份
			else {
				if (now.getFullYear().toString() == dtime.substring(0, 4)) {
					formatDtime = dtime.substring(5)
				}
				else if (now.getFullYear().toString()-1 == dtime.substring(0, 4)) {
					formatDtime = "去年" + dtime.substring(5)
				}
				else {
					formatDtime = dtime
				}
			}
		}
	}
	
	return  formatDtime
 }) 
 
// format : 'yyyy-MM-dd HH:mm:ss'
Vue.filter('dateFormat2', function (timeMillis, formatString) {
	return format(timeMillis, formatString)
})
