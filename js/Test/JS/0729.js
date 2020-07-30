

    var now = new Date();//현재날짜
    var firstDate = new Date('#userday');//내가 설정 
    console.log(firstDate)
    var start = firstDate.getTime(); //기념일의 밀리세컨드를 구함. 1000분의 1초
    var end = now.getTime() //오늘의 밀리세컨드를 구함
    var pass = end - start;
    var passDay = Math.floor(pass / 1000 / 60 / 60 / 24);
    document.querySelector('#passDay').innerHTML = passDay

    calcDay(100);
    calcDay(200);
    calcDay(365);
    calcDay(500);
    calcDay(730);
    calcDay(1000);
   

    function calcDay(days) {
        //전달 받은 날짜를 밀리세컨드로 바꾸기. days(일)을 anni(밀리세컨드)로변경

        var days2 = days * 1000 * 60 * 60 * 24; //밀리 세컨드로 변경
        var passDay2 = start+days2;//기념일에서 경과일을 더한(예로 100일... 2년)을 뺀 밀리세컨드

        var someDate = new Date(passDay2)
       // console.log(someDate);
       // console.log(someDate.toLocaleString())

       //년 월 일 구하기 
       var year =someDate.getFullYear();
       var month= someDate.getMonth()+1;
       var day= someDate.getDate();

       //console.log(year+"/ "+month+"/"+ day)
       var month2="";
       if(month<10){ month2= "0"+month}else{month2=month}

       var day2="";
       if(day<10){day2="0"+day}else{day2=day}

       document.querySelector("#date"+days).innerHTML= year+"년 "+month2+"월 "+day2+"일";

    }

