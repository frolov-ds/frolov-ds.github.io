function getResult()
{
    var Vv = document.getElementById('Vv').value; 
    var TypeForest= document.getElementById('TypeForest').value;
    var TypeForestFire= document.getElementById('TypeForestFire').value;
    var KlassPO=document.getElementById('KlassPO').value;
    var PerN=document.getElementById('PerN').value;
    var TimeR=document.getElementById('TimeR').value;
    var resultFront = document.getElementById('ForestFrontSpeed');
    var resultFlang = document.getElementById('ForestFlangSpeed');
    var resultTyl = document.getElementById('ForestTylSpeed');
    var resultP = document.getElementById('Result');
    var resultPTilte = document.getElementById('TitleResult');
    var resultPer = document.getElementById('ForestPer');
    var resultS = document.getElementById('ForestS');
    var resultSopora = document.getElementById('Sopora');
    var resultPeoplesOp = document.getElementById('PeoplesOp');
    var resultOtzhig = document.getElementById('Otzhig');
    var resultPeoplesOt = document.getElementById('PeoplesOt');
    var resultVoda = document.getElementById('Voda');
    
    //Проверяем 1 класс ПО или нет
    if (KlassPO != "I") 
    {
        //Низовой или верховой
        if (TypeForestFire == "низовой") {
            //Второй или третий ПО для низового
            if(KlassPO == "II")
            {
                if(TypeForest == "Хвойный") //формулы 1
                {
                    alert("Входные параметры: \n Пожар: низовой \n Класс ПО: II \n Лес: хвойный");
                    var valueFront = 0.0069*Math.pow(Vv,6)-0.1513*Math.pow(Vv,5)+1.0288*Math.pow(Vv,4)-2.2679*Math.pow(Vv,3)+3.9589*Math.pow(Vv,2)-2.6788*Vv+5;
                    var valueFlang = 0.0092*Math.pow(Vv,4)-0.2144*Math.pow(Vv,3)+1.5257*Math.pow(Vv,2)-1.0479*Vv+9;
                    var valueTyl = -0.0395*Math.pow(Vv,3)+0.5371*Math.pow(Vv,2)-0.7971*Vv+5;
                    

                }
                else
                {
                    alert("Входные параметры: \n Пожар: низовой \n Класс ПО: II \n Лес: лиственный");
                    var valueFront = -0.0371*Math.pow(Vv,3)+ 0.4783*Math.pow(Vv,2) + 0.2457*Vv+15.5;
                    var valueFlang = -0.0059*Math.pow(Vv,5)+ 0.1459*Math.pow(Vv,4)- 1.2789*Math.pow(Vv,3)+4.413*Math.pow(Vv,2)- 2.9368*Vv+9;
                    var valueTyl = 0.0007*Math.pow(Vv,6)-0.0221*Math.pow(Vv,5)+0.2615*Math.pow(Vv,4)- 1.5121*Math.pow(Vv,3)+4.1847*Math.pow(Vv,2)-2.8724*Vv+4.5;

                }

            }
            //если 3 класс ПО
            else if(KlassPO == "III")
            {
                if(TypeForest == "Хвойный") //формулы 3
                {
                    alert("Входные параметры: \n Пожар: низовой \n Класс ПО: III \n Лес: хвойный");
                    var valueFront = -0.0176*Math.pow(Vv,4)-0.3983*Math.pow(Vv,3)+7.9257*Math.pow(Vv,2)-4.6351*Vv+5;
                    var valueFlang = -0.0011*Math.pow(Vv,6)+0.0316*Math.pow(Vv,5)-0.3366*Math.pow(Vv,4)+1.5686*Math.pow(Vv,3)-2.6792*Math.pow(Vv,2)+1.5855*Vv+18;
                    var valueTyl = 0.0087*Math.pow(Vv,4)-0.2403*Math.pow(Vv,3)+1.9581*Math.pow(Vv,2)- 2.5641*Vv+5;
                }
                else
                {
                    alert("Входные параметры: \n Пожар: низовой \n Класс ПО: III \n Лес: лиственный" );
                    var valueFront = -0.0107*Math.pow(Vv,5)+ 0.2633*Math.pow(Vv,4) - 2.5233*Math.pow(Vv,3) + 11.007*Math.pow(Vv,2) - 6.7781*Vv + 21;
                    var valueFlang = 0.0007*Math.pow(Vv,6) - 0.0269*Math.pow(Vv,5) + 0.3929*Math.pow(Vv,4) - 2.6682*Math.pow(Vv,3) + 8.0831*Math.pow(Vv,2) - 5.4897*Vv + 18;
                    var valueTyl = 0.0009*Math.pow(Vv,6) - 0.029*Math.pow(Vv,5) + 0.3582*Math.pow(Vv,4) - 2.1317*Math.pow(Vv,3) + 5.9064*Math.pow(Vv,2) - 4.1495*Vv + 10;
                }

            }
            //формулы для 4 и 5 классов ПО
            else if(KlassPO == "IV")
            {
                if(TypeForest == "Хвойный") 
                {
                    var valueFront = 200;
                    var valueFlang = 30;
                    var valueTyl = 22;
                    alert("Входные параметры: \n Пожар: низовой \n Класс ПО: IV \n Лес: хвойный");

                }
                else
                {
                    alert("Входные параметры: \n Пожар: низовой \n Класс ПО: IV \n Лес: лиственный");
                    var valueFront = 110;
                    var valueFlang = 34;
                    var valueTyl = 19;
                }

            }
            else if(KlassPO == "V")
            {
                if(TypeForest == "Хвойный") 
                {
                    var valueFront = 200;
                    var valueFlang = 30;
                    var valueTyl = 22;
                    alert("Входные параметры: \n Пожар: низовой \n Класс ПО: V \n Лес: хвойный");

                }
                else
                {
                    alert("Входные параметры: \n Пожар: низовой \n Класс ПО: V \n Лес: лиственный");
                    var valueFront = 110;
                    var valueFlang = 34;
                    var valueTyl = 19;
                }

            }


    }

        //если верховой (формулы 5)
        else {
            
        var valueFront=120;
        if(KlassPO == "II")
        {
        var valueFlang = 0.0092*Math.pow(Vv,4) - 0.2144*Math.pow(Vv,3) + 1.5257*Math.pow(Vv,2)-1.0479*Vv+9;
        var valueTyl = -0.0395*Math.pow(Vv,3) + 0.5371*Math.pow(Vv,2)- 0.7971*Vv+5;
        alert("Входные параметры: \n Пожар: верховой \n Класс ПО: II");
        }
        else if(KlassPO == "III")
        {
            var valueFlang = -0.0011*Math.pow(Vv,6) + 0.0316*Math.pow(Vv,5) - 0.3366*Math.pow(Vv,4) + 1.5686*Math.pow(Vv,3) - 2.6792*Math.pow(Vv,2) + 1.5855*Vv + 18;
            var valueTyl = 0.0087*Math.pow(Vv,4) - 0.2403*Math.pow(Vv,3) + 1.9581*Math.pow(Vv,2) - 2.5641*Vv+5;
            alert("Входные параметры: \n Пожар: верховой \n Класс ПО: III");
        }

        }
        var Per = valueFront*3.3*parseInt(TimeR)+parseInt(PerN);
        var S = Math.pow(Per, 2)*4*Math.pow(10,-6);
        var Sop = (Per+12800)/400;
        var Otzh = (Per+12800)/1000;
        if(TypeForestFire == "низовой")
        {
            var RashodVodi = 60*S;

        }
        else {
            var RashodVodi = 600*S;

        }
        resultPTilte.innerHTML="ВЫХОДНЫЕ ПАРАМЕТРЫ";
        resultP.innerHTML="Скорости распространения лесного пожара"
        resultFront.innerHTML = "По фронту: " + "<b>" + valueFront.toFixed(1) + "</b>" + " м/ч" + "<br/> " ;
        resultFlang.innerHTML = "По флангу: " + "<b>" + valueFlang.toFixed(1) + "</b>" + " м/ч" + "<br/> " ;
        resultTyl.innerHTML = "По тылу: " + "<b>" + valueTyl.toFixed(1) + "</b>" + " м/ч" + "<br/> " ;
        resultPer.innerHTML = "Периметр: " + "<b>" + Per.toFixed(1) + "</b>" + " м" + "<br/> ";
        resultS.innerHTML = "Площадь: " + "<b>" + S.toFixed(1) + "</b>" + " га" + "<br/> ";
        resultSopora.innerHTML = "Количество бульдозеров для создания опорных полос: " + "<b>" + Math.ceil(Sop) + "</b>" + "<br/> ";
        resultOtzhig.innerHTML = "Количество средств для пуска отжига от созданных опорных полос: " + "<b>" + Math.ceil(Otzh) + "</b>" + "<br/> ";
        resultVoda.innerHTML = "Расход воды на тушение, тонн: " + "<b>" + RashodVodi.toFixed(1) + "</b>" + "<br/> ";
        }
        else{
            alert("1 класс ПО");
            resultPTilte.innerHTML="ВЫХОДНЫЕ ПАРАМЕТРЫ";
            resultP.innerHTML="При I классе пожароопасности расчет распространения лесного пожара не производится";
            resultFront.innerHTML = "" ;
            resultFlang.innerHTML = "" ;
            resultTyl.innerHTML = "" ;
        }
    }

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