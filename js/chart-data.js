var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};
		var pieData = [
				{
					value: 55,
					color:"#30a5ff",
					highlight: "#62b9fb",
					label: "Lambayeque", 
					
				},
				{
					value: 18,
					color: "#ffb53e",
					highlight: "#fac878",
					label: "Ferreñafe"
				},
				
				{
					value: 1015,
					color: "#f9243f",
					highlight: "#f6495f",
					label: "Chiclayo"
				}

			];
			
	var doughnutData = [
					{
						value: 13,
						color:"#30a5ff",
						highlight: "#62b9fb",
						label: "Lambayeque"
					},
					{
						value: 3,
						color: "#ffb53e",
						highlight: "#fac878",
						label: "Ferreñafe"
					},
					{
						value: 50,
						color: "#f9243f",
						highlight: "#f6495f",
						label: "Chiclayo"
					}	
				];

window.onload = function(){

	
	var chart3 = document.getElementById("pie-chart").getContext("2d");
	window.myDoughnut = new Chart(chart3).Doughnut(doughnutData, {responsive : true
	});
	var chart4 = document.getElementById("doughnut-chart").getContext("2d");
	window.myPie = new Chart(chart4).Pie(pieData, {responsive : true
	});
	
};