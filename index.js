$(function(){
    
        $("#loaddata").click(function(){
            
            $.get("data.json", function(data){
    
                console.log(data);
                $.each(data, function(index, item){
                var row = "<h3>" + item.ofocode + ":" + item.passcode + "</h3>";
                $("#datapanel").append(row);
                 });
            
            });
    
        });
        $("#loadwebapi").click(function(){
            $("#wpanel").empty();
            var city = $("#city").val();
            var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=e89a1e9614a2f0d6ebacd2f9d73cd287"
        
            $.get(url, function(data){
                console.log(data);
                var row = "<h3>" + data.weather[0].description + "</h3>";
                row += "<h3>" + data.main.temp/10 + "C</h3>";
                if(data.weather[0].main == "Clouds"){
                    
                                    row += "<h4><img class = 'font' src="+"\"mag.png\""+" alt='' style="+"\"width:80px;height:80px;\""+"><h4>";
                    
                                }
                    
                                if(data.weather[0].main == "Clear"){
                    
                                    row += "<h4><img class = 'font' src="+"\"sun.png\""+" alt='' style="+"\"width:80px;height:80px;\""+"><h4>";
                    
                                }
                    
                                if(data.weather[0].main == "Rain"){
                    
                                    row += "<h4><img class = 'font' src="+"\"fon.png\""+" alt='' style="+"\"width:80px;height:80px;\""+"><h4>";
                    
                                }
                    
                                if(data.weather[0].main == "ThunderStorm"){
                    
                                    row += "<h4><img class = 'font' src="+"\"saifa.png\""+" alt='' style="+"\"width:80px;height:80px;\""+"><h4>";
                    
                                }
                    
                                if(data.weather[0].main == "Mist"){
                    
                                    row += "<h4><img class = 'font' src="+"\"mong.png\""+" alt='' style="+"\"width:80px;height:80px;\""+"><h4>";
                    
                                }
                $("#wpanel").append(row);
            });
        
        });
    
    });

    
     
    
        