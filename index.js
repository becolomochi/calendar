var weekDayList = [ "日", "月", "火", "水", "木", "金", "土" ] ;

var startYear = 1985;
var stopYear = 2018;
var year = startYear;

for(year; year < 2018; year++) {
	console.log(year+'年');
	//var domYear = document.getElementById('year');
	//domYear.textContent = year + '年';

	for(month = 1; month < 13; month++) {
		var id = 'calendar' + year + month;
		var elementCal = document.createElement('div');
		elementCal.id = id;

		var objCal = document.getElementsByTagName('body').item(0);
		objCal.appendChild(elementCal);

		//console.log(year+'年'+month+'月');
		//var domMonth = document.getElementById('month');
		//domMonth.textContent = year + '年' + month + '月';

		var title = document.createElement('h3');
		var titleText = document.createTextNode(year + '年' + month + '月');
		document.getElementById(id).appendChild(title).appendChild(titleText);

		var ul = document.createElement('ul');
		ul.id = 'ul' + year + month;
		document.getElementById(id).appendChild(ul);

		var lastDate = new Date(year, month, 0).getDate();

		for(i = 0;i < lastDate;i++) {
			var date = i + 1;
			/* 月だけゼロから開始　*/
			var weekDay = weekDayList[new Date(year, month - 1, date).getDay()];
			//console.log(date + '（' + weekDay + '）');
			var li = document.createElement('li');
			var text = document.createTextNode(date + '（' + weekDay + '）');
			document.getElementById(ul.id).appendChild(li).appendChild(text);
		}
	}
}
