function getResult()
{
    var Vv = document.getElementById('Vv').value; 
    var TypeV= document.getElementById('TypeV').value;
    var TypeA = document.getElementById('TypeA').value;
    var resultPTilte = document.getElementById('TitleResult');
    var Time = document.getElementById('Time').value;
    var Q = document.getElementById('Q').value;
    var Temp = document.getElementById('Temp').value;
    var H = document.getElementById('H').value;
    var NP = document.getElementById('NP').value;
    var kf;
    var kq11 = 0.01, kq13 = 0.04, kq15, kq17 = 1;
    var kq21 = 0.01, kq22 = 0.025, kq23 = 0.04, kq24, kq25, kq26, kq27, d = 0.681;
    if(H == 0)
        H = 0.05;
    else
        H -= 0.2;
    if(TypeA == "инверсия"){
        kf = 0.081;
        kq15 = 1;
    }
    if(TypeA == "изотермия"){
        kf = 0.133;
        kq15 = 0.23;
    }
    if(TypeA == "конвекция"){
        kf = 0.235;
        kq15 = 0.08;
    }
    if(Vv == 1){
        kq24 = 1;

    }
    if(Vv == 2){
        kq24 = 1.33;
    }
    if(Vv == 3){
        kq24 = 1.67;
    }
        
    if(Vv == 4){
        kq24 = 2;
    }
        
    if(Vv == 5){
        kq24 = 2.34;
    }
        
    if(Vv == 6)
    {
        kq24 = 2.67;
    }
        
    if(Vv == 7){
        kq24 = 3;
    }
        
    if(Vv == 8){
        kq24 = 3.34;
    }
        
    if(Vv == 9){
        kq24 = 3.67;
    }
        
    if(Vv >= 10 && Vv < 15)
        kq24 = 4;
    if(Vv >= 15){
        kq24 = 5.68;
    }
    var T = (H * d) / (kq22 * kq24* kq17);
    if(Time < T)
        kq26 = Math.pow(Time, 0.8);
    else
        kq26 = Math.pow(T, 0.8);

    if(Q == 0)
        Q = 500;

    var valueQ1 = kq11 * kq13 * kq15 * kq17 * Q;
    var valueQ2 = (1 - kq21) * kq22 * kq23 * kq24 * kq15 * kq26 * kq17 * (Q / (H * d));
    var g1;
    var g2;
    if(Vv == 1)
    {
        g1 = 0.0000001 * Math.pow(valueQ1, 3) - 0.0004* Math.pow(valueQ1, 2) + 0.6352 * valueQ1 + 9.4459;
        g2 = 0.0000001 * Math.pow(valueQ2, 3) - 0.0004* Math.pow(valueQ2, 2) + 0.6352 * valueQ2 + 9.4459;
    }
    //Math.pow(Math.E, -0.7)
    if(Vv == 2)
    {
        g1 = 0.00000006 * Math.pow(valueQ1, 3) - 0.0002 * Math.pow(valueQ1, 2) + 0.335 * valueQ1 + 5.4926;
        g2 = 0.00000006 * Math.pow(valueQ2, 3) - 0.0002 * Math.pow(valueQ2, 2) + 0.335 * valueQ2 + 5.4926;
    }
    if(Vv == 3)
    {
        g1 = 0.00000005 * Math.pow(valueQ1, 3) - 0.0002 * Math.pow(valueQ1, 2) + 0.2363 * valueQ1 + 4.0754;
        g2 = 0.00000005 * Math.pow(valueQ2, 3) - 0.0002 * Math.pow(valueQ2, 2) + 0.2363 * valueQ2 + 4.0754;
    }
    if(Vv == 4){
        g1 = 0.00000004 * Math.pow(valueQ1, 3) - 0.0001 * Math.pow(valueQ1, 2) + 0.1855 * valueQ1 + 3.354;
        g2 = 0.00000004 * Math.pow(valueQ2, 3) - 0.0001 * Math.pow(valueQ2, 2) + 0.1855 * valueQ2 + 3.354;
    }
    if(Vv == 5){
        g1 = 0.00000003 * Math.pow(valueQ1, 3) - 0.0001 * Math.pow(valueQ1, 2) + 0.154 * valueQ1 + 2.9163;
        g2 = 0.00000003 * Math.pow(valueQ2, 3) - 0.0001 * Math.pow(valueQ2, 2) + 0.154 * valueQ2 + 2.9163;
    }
    if(Vv == 6){
        g1 = 0.00000003 * Math.pow(valueQ1, 3) - 0.00009 * Math.pow(valueQ1, 2) + 0.1322 * valueQ1 + 2.6361;
        g2 = 0.00000003 * Math.pow(valueQ2, 3) - 0.00009 * Math.pow(valueQ2, 2) + 0.1322 * valueQ2 + 2.6361;
    }
    if(Vv == 7){
        g1 = 0.00000002 * Math.pow(valueQ1, 3) - 0.00008 * Math.pow(valueQ1, 2) + 0.1179 * valueQ1 + 2.3904;
        g2 = 0.00000002 * Math.pow(valueQ2, 3) - 0.00008 * Math.pow(valueQ2, 2) + 0.1179 * valueQ2 + 2.3904;
    }
    if(Vv == 8){
        g1 = 0.00000002 * Math.pow(valueQ1, 3) - 0.00007 * Math.pow(valueQ1, 2) + 0.1064 * valueQ1 + 2.218;
        g2 = 0.00000002 * Math.pow(valueQ2, 3) - 0.00007 * Math.pow(valueQ2, 2) + 0.1064 * valueQ2 + 2.218;
    }
    if(Vv == 9){
        g1 = 0.00000002 * Math.pow(valueQ1, 3) - 0.00007 * Math.pow(valueQ1, 2) + 0.0974 * valueQ1 + 2.0843;
        g2 = 0.00000002 * Math.pow(valueQ2, 3) - 0.00007 * Math.pow(valueQ2, 2) + 0.0974 * valueQ2 + 2.0843;
    }
    if(Vv == 10){
        g1 = 0.00000002 * Math.pow(valueQ1, 3) - 0.00006 * Math.pow(valueQ1, 2) + 0.09 * valueQ1 + 1.9816;
        g2 = 0.00000002 * Math.pow(valueQ1, 3) - 0.00006 * Math.pow(valueQ1, 2) + 0.09 * valueQ1 + 1.9816;
    }
    if(Vv == 11){
        g1 = 0.00000002 * Math.pow(valueQ1, 3) - 0.00006 * Math.pow(valueQ1, 2) + 0.084 * valueQ1 + 1.8922;
        g2 = 0.00000002 * Math.pow(valueQ2, 3) - 0.00006 * Math.pow(valueQ2, 2) + 0.084 * valueQ2 + 1.8922;
    }
    if(Vv == 12){
        g1 = 0.00000002 * Math.pow(valueQ1, 3) - 0.00006 * Math.pow(valueQ1, 2) + 0.0807 * valueQ1 + 1.7744;
        g2 = 0.00000002 * Math.pow(valueQ2, 3) - 0.00006 * Math.pow(valueQ2, 2) + 0.0807 * valueQ2 + 1.7744;
    }
    if(Vv == 13){
        g1 = 0.00000002 * Math.pow(valueQ1, 3) - 0.00005 * Math.pow(valueQ1, 2) + 0.0745 * valueQ1 + 1.7653;
        g2 = 0.00000002 * Math.pow(valueQ2, 3) - 0.00005 * Math.pow(valueQ2, 2) + 0.0745 * valueQ2 + 1.7653;
    }
    if(Vv == 14){
        g1 = 0.00000001 * Math.pow(valueQ1, 3) - 0.00005 * Math.pow(valueQ1, 2) + 0.0709 * valueQ1 + 1.7113;
        g2 = 0.00000001 * Math.pow(valueQ2, 3) - 0.00005 * Math.pow(valueQ2, 2) + 0.0709 * valueQ2 + 1.7113;;
    }
    if(Vv >= 15){
        g1 = 0.00000001 * Math.pow(valueQ1, 3) - 0.00005 * Math.pow(valueQ1, 2) + 0.0677 * valueQ1 + 1.6692;
        g2 = 0.00000001 * Math.pow(valueQ2, 3) - 0.00005 * Math.pow(valueQ2, 2) + 0.0677 * valueQ2 + 1.6692;
    }

    var valueGl = g1 + 0.5 * g2;
    var valueS = kf * Math.pow(valueGl, 2) * Math.pow(Time, 0.2);
    
    resultPTilte.innerHTML="ВЫХОДНЫЕ ПАРАМЕТРЫ";
    
    var resultS = document.getElementById('HimS');
    var resultGl = document.getElementById('resultGL');
    var resultQ1 = document.getElementById('resultQ1');
    var resultQ2 = document.getElementById('resultQ2');
    var resultk6 = document.getElementById('resultk6');
    var resultT = document.getElementById('resultT');
    var resultg1 = document.getElementById('resultg1');
    var resultg2 = document.getElementById('resultg2');
    var resultNP = document.getElementById('resultNP');
    var resultN;
    resultg1.innerHTML = "g1: " + "<b>" + g1 + "</b>" + "<br/> ";
    resultg2.innerHTML = "g2: " + "<b>" + g2 + "</b>" + "<br/> ";
    resultT.innerHTML = "T: " + "<b>" + T + "</b>" + "<br/> ";
    resultk6.innerHTML = "k6: " + "<b>" + kq26 + "</b>" + "<br/> ";
    resultQ1.innerHTML = "Эквивалентное количество АХОВ в первичном облаке, т: " + "<b>" + valueQ1.toFixed(4) + "</b>" + "<br/> ";
    resultQ2.innerHTML = "Эквивалентное количество АХОВ во вторичном облаке, т: " + "<b>" + valueQ2.toFixed(4) + "</b>" + "<br/> ";

    resultGl.innerHTML = "Полная глубина зоны поражения, км: " + "<b>" + valueGl.toFixed(4) + "</b>" + "<br/> ";
    resultS.innerHTML = "Площадь зоны фактического заражения, км²: " + "<b>" + valueS.toFixed(4) + "</b>" + "<br/> ";
    if (resultGl >= NP){
        resultN = "Авария затронет ближайший населенный пункт";
    }
    else{
        resultN = "Авария не затронет ближайший населенный пункт";
    }
    resultNP.innerHTML = resultN;
    //resultGl1.innerHTML = "Глубина зоны заражения для первичного облака, км: " + "<b>" + "</b>" + "<br/> ";
    //resultGl2.innerHTML = "Глубина зоны заражения для вторичного облака, км: " + "<b>" + "</b>" + "<br/> ";
    
    //resultGl2.innerHTML = "Время испарения АХОВ, ч: " + "<b>" + "</b>" + "<br/> ";
    //resultGl2.innerHTML = "Время подхода облака АХОВ к населенному пункту, ч: " + "<b>" + "</b>" + "<br/> ";
}
{/* <table class="center" id = "copytext1">
<tr>
    <td class="tdvyh">
        ВХОДНЫЕ ПАРАМЕТРЫ
    </td>
</tr>
<tr>
    <td class="tdvyh">
        Химическое вещество:
    </td>
    <td>
        String(TypeV);
    </td>

</tr>
<tr>
    <td class="tdvyh">
        Количество вещества, выброшенного в атмосферу, т:
    </td>
    <td>
        String(Q);
    </td>
</tr>
    
    <tr>
    <td class="tdvyh">
        Степень вертикальной устойчивости атмосферы:
    </td>
    <td>
        String(TypeA);
    </td>
</tr>
<tr>
    <td class="tdvyh">
        Время, прошедшее после начала аварии, ч:
    </td>
    <td>
        Sting(Time);
    </td>
</tr>
    <tr>
    <td class="tdvyh">
        Температура воздуха, °C:
    </td>
    <td>
        String(Temp);
    </td>
</tr>
    
<tr>
    <td class="tdvyh">
        Скорость ветра, м/с:
    </td>

    <td>
        String(Vv);
    </td>
</tr>
<tr>
    <td class="tdvyh">
        Высота обваловки местности, м:
    </td>
    <td>
        H;
    </td>
</tr>
<tr>
    <td class="tdvyh">
        Расстояние до ближайшего населенного пункта, км:
    </td>
    <td>String(NP) </td>;
</tr>
</table> */}


    // let download1 = document.querySelector('#download');
    // download1.addEventListener('click', downloadText1);
    // function downloadText1() {
    // 	let copytext1 = document.querySelector('#copytext1').textContent;
    // 	console.log(copytext1)
    // 	let el = document.createElement('a');
    // 	el.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(copytext1)}`);
    // 	el.setAttribute('download1', 'text.txt');
    // 	el.style.display = 'none';
    // 	document.body.appendChild(el);
    // 	el.click();
    // 	document.body.removeChild(el);
    // }

    let download = document.querySelector('#download');
    download.addEventListener('click', downloadText);
    function downloadText() {
        let copytext = document.querySelector('#copytext').textContent;
        console.log(copytext)
        let el = document.createElement('a');
        el.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(copytext)}`);
        el.setAttribute('download', 'text.txt');
        el.style.display = 'none';
        document.body.appendChild(el);
        el.click();
        document.body.removeChild(el);
    }