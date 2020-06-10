function Sor() { 
    var sor1 = Number(document.getElementById("sor1").value);
    var sor2 = Number(document.getElementById("sor2").value);
    var sor3 = Number(document.getElementById("sor3").value);
    var sor4 = Number(document.getElementById("sor4").value);
    var sor5 = Number(document.getElementById("sor5").value);
    var sor6 = Number(document.getElementById("sor6").value);
    var sor7 = Number(document.getElementById("sor7").value);
    var sor8 = Number(document.getElementById("sor8").value);
    
    var soch1 = Number(document.getElementById("soch1").value);
    var soch2 = Number(document.getElementById("soch2").value);
    
    var sor_out = document.getElementById("sor-out");
    var soch_out = document.getElementById("soch-out");
    
    var output_text = document.getElementById("output-text");

    var summa_out = document.getElementById("summa-out");
    
    if ( sor1 == "" && sor2 == "") {
        var result_sors = 0
    } else {
        if ( sor3 == "" && sor4 == "") {
            var result_sors = sor1 / sor2 * 50;
            document.getElementById("sor3").removeAttribute("disabled");
            document.getElementById("sor4").removeAttribute("disabled");
        } else {
           if (sor5 == "" && sor6 == "") {
               var result_sors = (sor1 + sor3) / (sor2 + sor4) * 50;
               document.getElementById("sor3").removeAttribute("disabled");
               document.getElementById("sor4").removeAttribute("disabled");
               document.getElementById("sor5").removeAttribute("disabled");
               document.getElementById("sor6").removeAttribute("disabled");
           } else {
               if (sor7 == "" && sor8 == "") {
                   var result_sors = (sor1 + sor3 + sor5) / (sor2 + sor4 + sor6) * 50;
                   document.getElementById("sor3").removeAttribute("disabled");
                   document.getElementById("sor4").removeAttribute("disabled");
                   document.getElementById("sor5").removeAttribute("disabled");
                   document.getElementById("sor6").removeAttribute("disabled");
                   document.getElementById("sor7").removeAttribute("disabled");
                   document.getElementById("sor8").removeAttribute("disabled");
               } else {
                   var result_sors = (sor1 + sor3 + sor5 + sor7) / (sor2 + sor4 + sor6 + sor8) * 50;
               }
           }
        }
    }

    if (soch1 == "" && soch2 == "") {
        var result_soch = 0
    } else {
        var result_soch = soch1 / soch2 * 50
    }
    
    if (result_sors < 0 || result_soch < 0) {
        output_text.innerHTML = "Где-то ошибка ..."
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else if (result_sors > 50 || result_soch > 50) {
        output_text.innerHTML = "Где-то ошибка ..."
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else {
        var result = Number((result_sors + result_soch).toFixed());
        if (isNaN(result) == true || isFinite(result) == false) {
            output_text.innerHTML = "Ответ будет здесь : )"
            document.getElementById("output-text").style.backgroundColor = "#c2d23a";
        } else {
            if (result < 0) {
                output_text.innerHTML = "Где-то ошибка ...";
                document.getElementById("output-text").style.backgroundColor = "#ff6666";
            } else if (result >= 0 && result < 40) {
                output_text.innerHTML = "Оценка за четверть: 2";
                document.getElementById("output-text").style.backgroundColor = "#ff6666";
            } else if (result >= 40 && result < 65) {
                output_text.innerHTML = "Оценка за четверть: 3";
                document.getElementById("output-text").style.backgroundColor = "#f9a23b";
            } else if (result >= 65 && result < 85){
                output_text.innerHTML = "Оценка за четверть: 4";
                document.getElementById("output-text").style.backgroundColor = "#c2d23a";
            } else if (result >= 85 && result <= 100) {
                output_text.innerHTML = "Оценка за четверть: 5";
                document.getElementById("output-text").style.backgroundColor = "#c2d23a";
            } else {
                output_text.innerHTML = "Что-то пошло не так ...";
                document.getElementById("output-text").style.backgroundColor = "#ff6666";
            }
        }
    }

    var summa_result = result_sors + result_soch
    
    if (isNaN(result_sors) == true || isFinite(result_sors) == false){
        sor_out.innerHTML = "0.0%"
    } else {
        sor_out.innerHTML = result_sors.toFixed(1) + "%";
    }

    if (isNaN(result_soch) == true || isFinite(result_soch) == false){
        soch_out.innerHTML = "0.0%"
    } else {
        soch_out.innerHTML = result_soch.toFixed(1) + "%";
    }
    
    if (isNaN(summa_result) == true || isFinite(summa_result) == false){
        soch_out.innerHTML = "0.0%"
    } else {
        summa_out.innerHTML = summa_result.toFixed() + "%";
    }

    var sor1_result = sor1 / sor2 * 50;
    if (sor1_result < 0) {
        output_text.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else if (sor1_result >= 0 && sor1_result < 20) {
        document.getElementById("sor_1").style.backgroundColor = "#ff6666";
    } else if (sor1_result >= 20 && sor1_result < 32.5) {
        document.getElementById("sor_1").style.backgroundColor = "#f9a23b";
    } else if (sor1_result >= 32.5 && sor1_result < 42.5){
        document.getElementById("sor_1").style.backgroundColor = "#c2d23a";
    } else if (sor1_result >= 42.5 && sor1_result <= 50) {
        document.getElementById("sor_1").style.backgroundColor = "#c2d23a";
    } else {
        
    }
    var sor2_result = sor3 / sor4 * 50;
    if (sor2_result < 0) {
        output_text.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else if (sor2_result >= 0 && sor2_result < 20) {
        document.getElementById("sor_2").style.backgroundColor = "#ff6666";
    } else if (sor2_result >= 20 && sor2_result < 32.5) {
        document.getElementById("sor_2").style.backgroundColor = "#f9a23b";
    } else if (sor2_result >= 32.5 && sor2_result < 42.5){
        document.getElementById("sor_2").style.backgroundColor = "#c2d23a";
    } else if (sor2_result >= 42.5 && sor2_result <= 50) {
        document.getElementById("sor_2").style.backgroundColor = "#c2d23a";
    } else {
        
    }
    var sor3_result = sor5 / sor6 * 50;
    if (sor3_result < 0) {
        output_text.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else if (sor3_result >= 0 && sor3_result < 20) {
        document.getElementById("sor_3").style.backgroundColor = "#ff6666";
    } else if (sor3_result >= 20 && sor3_result < 32.5) {
        document.getElementById("sor_3").style.backgroundColor = "#f9a23b";
    } else if (sor3_result >= 32.5 && sor3_result < 42.5){
        document.getElementById("sor_3").style.backgroundColor = "#c2d23a";
    } else if (sor3_result >= 42.5 && sor3_result <= 50) {
        document.getElementById("sor_3").style.backgroundColor = "#c2d23a";
    } else {
        
    }
    var sor4_result = sor7 / sor8 * 50;
    if (sor4_result < 0) {
        output_text.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else if (sor4_result >= 0 && sor4_result < 20) {
        document.getElementById("sor_4").style.backgroundColor = "#ff6666";
    } else if (sor4_result >= 20 && sor4_result < 32.5) {
        document.getElementById("sor_4").style.backgroundColor = "#f9a23b";
    } else if (sor4_result >= 32.5 && sor4_result < 42.5){
        document.getElementById("sor_4").style.backgroundColor = "#c2d23a";
    } else if (sor4_result >= 42.5 && sor4_result <= 50) {
        document.getElementById("sor_4").style.backgroundColor = "#c2d23a";
    } else {
        
    }
    var soch_result = soch1 / soch2 * 50;
    if (soch_result < 0) {
        output_text.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else if (soch_result >= 0 && soch_result < 20) {
        document.getElementById("soch_1").style.backgroundColor = "#ff6666";
    } else if (soch_result >= 20 && soch_result < 32.5) {
        document.getElementById("soch_1").style.backgroundColor = "#f9a23b";
    } else if (soch_result >= 32.5 && soch_result < 42.5){
        document.getElementById("soch_1").style.backgroundColor = "#c2d23a";
    } else if (soch_result >= 42.5 && soch_result <= 50) {
        document.getElementById("soch_1").style.backgroundColor = "#c2d23a";
    } else {
        
    }
}
