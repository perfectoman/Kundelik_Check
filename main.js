function Main() { 
    let sor1 = Number(document.getElementById("sor1").value);
    let sor2 = Number(document.getElementById("sor2").value);
    let sor3 = Number(document.getElementById("sor3").value);
    let sor4 = Number(document.getElementById("sor4").value);
    let sor5 = Number(document.getElementById("sor5").value);
    let sor6 = Number(document.getElementById("sor6").value);
    let sor7 = Number(document.getElementById("sor7").value);
    let sor8 = Number(document.getElementById("sor8").value);
    let soch1 = Number(document.getElementById("soch1").value);
    let soch2 = Number(document.getElementById("soch2").value);
    let sor_out = document.getElementById("sor-out");
    let soch_out = document.getElementById("soch-out");
    let output_text = document.getElementById("output-text");
    let summa_out = document.getElementById("summa-out");
    
    let prem1 = [sor1, sor3, sor5, sor7,];
    let prem2 = [sor2, sor4, sor6, sor8,]; 
    let prem1_checked = Number(prem1.reduce((a, b,) => a + b));
    let prem2_checked = Number(prem2.reduce((a, b,) => a + b));
    let result_sors = (prem1_checked / prem2_checked) * 50;
    sor_out.innerHTML = result_sors.toFixed(1) + "%";
    
    if (isNaN(result_sors) == true || isFinite(result_sors) == false){
        sor_out.innerHTML = "0.0%";
        result_sors = 0;
    } else {
        sor_out.innerHTML = result_sors.toFixed(1) + "%";
    }

    if (soch1 == "" && soch2 == "") {
        var result_soch = 0;
    } else {
        var result_soch = soch1 / soch2 * 50;
    }

    if (result_sors < 0 || result_soch < 0) {
        output_text.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else if (result_sors > 50 || result_soch > 50) {
        output_text.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else {
        var result_sors_fix = Number(result_sors.toFixed(1));
        var result_soch_fix = Number(result_soch.toFixed(1));
        var result = Number((result_sors_fix + result_soch_fix).toFixed(1));
        var result_fix = result.toFixed();
        if (result_fix < 0) { 
            output_text.innerHTML = "Где-то ошибка ...";
            document.getElementById("output-text").style.backgroundColor = "#ff6666";
            var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#ff6666");
        } else if (result_fix >= 0 && result_fix < 40) {
            output_text.innerHTML = "Оценка за четверть: 2";
            document.getElementById("output-text").style.backgroundColor = "#ff6666";
            var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#ff6666");
        } else if (result_fix >= 40 && result_fix < 65) {
            output_text.innerHTML = "Оценка за четверть: 3";
            document.getElementById("output-text").style.backgroundColor = "#f9a23b";
            var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#f9a23b");
        } else if (result_fix >= 65 && result_fix < 85){
            output_text.innerHTML = "Оценка за четверть: 4";
            document.getElementById("output-text").style.backgroundColor = "#c2d23a";
            var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#c2d23a");
        } else if (result_fix >= 85 && result_fix <= 100) {
            output_text.innerHTML = "Оценка за четверть: 5";
            document.getElementById("output-text").style.backgroundColor = "#c2d23a";
            var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#c2d23a");
        } else {
            if (result_fix < 0) { 
                output_text.innerHTML = "Где-то ошибка ...";
                document.getElementById("output-text").style.backgroundColor = "#ff6666";
                var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#ff6666");
            } else if (result_fix >= 0 && result_fix < 40) {
                output_text.innerHTML = "Оценка за четверть: 2";
                document.getElementById("output-text").style.backgroundColor = "#ff6666";
                var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#ff6666");
            } else if (result_fix >= 40 && result_fix < 65) {
                output_text.innerHTML = "Оценка за четверть: 3";
                document.getElementById("output-text").style.backgroundColor = "#f9a23b";
                var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#f9a23b");
            } else if (result_fix >= 65 && result_fix < 85){
                output_text.innerHTML = "Оценка за четверть: 4";
                document.getElementById("output-text").style.backgroundColor = "#c2d23a";
                var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#c2d23a");
            } else if (result_fix >= 85 && result_fix <= 100) {
                output_text.innerHTML = "Оценка за четверть: 5";
                document.getElementById("output-text").style.backgroundColor = "#c2d23a";
                var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#c2d23a");
            } else {
                output_text.innerHTML = "Что-то пошло не так ...";
                document.getElementById("output-text").style.backgroundColor = "#ff6666";
                var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#ff6666");
            }
        }
    }

    if (isNaN(result_soch) == true || isFinite(result_soch) == false){
        soch_out.innerHTML = "0.0%";
    } else {
        soch_out.innerHTML = result_soch.toFixed(1) + "%";
    }
    
    if (isNaN(result_fix) == true || isFinite(result_fix) == false){
        summa_out.innerHTML = "0.0%";
    } else {
        summa_out.innerHTML = result_fix + "%";
    }

    var sor1_result = sor1 / sor2 * 100;
    if (sor1_result < 0) {
        output_text.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else if (sor1_result >= 0 && sor1_result < 40) {
        document.getElementById("sor_1").style.backgroundColor = "#ff6666";
    } else if (sor1_result >= 40 && sor1_result < 65) {
        document.getElementById("sor_1").style.backgroundColor = "#f9a23b";
    } else if (sor1_result >= 65 && sor1_result < 85){
        document.getElementById("sor_1").style.backgroundColor = "#c2d23a";
    } else if (sor1_result >= 85 && sor1_result <= 100) {
        document.getElementById("sor_1").style.backgroundColor = "#c2d23a";
    } else {
        
    }
    var sor2_result = sor3 / sor4 * 100;
    if (sor2_result < 0) {
        output_text.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else if (sor2_result >= 0 && sor2_result < 40) {
        document.getElementById("sor_2").style.backgroundColor = "#ff6666";
    } else if (sor2_result >= 40 && sor2_result < 65) {
        document.getElementById("sor_2").style.backgroundColor = "#f9a23b";
    } else if (sor2_result >= 65 && sor2_result < 85){
        document.getElementById("sor_2").style.backgroundColor = "#c2d23a";
    } else if (sor2_result >= 85 && sor2_result <= 100) {
        document.getElementById("sor_2").style.backgroundColor = "#c2d23a";
    } else {
        
    }
    var sor3_result = sor5 / sor6 * 100;
    if (sor3_result < 0) {
        output_text.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else if (sor3_result >= 0 && sor3_result < 40) {
        document.getElementById("sor_3").style.backgroundColor = "#ff6666";
    } else if (sor3_result >= 40 && sor3_result < 65) {
        document.getElementById("sor_3").style.backgroundColor = "#f9a23b";
    } else if (sor3_result >= 65 && sor3_result < 85){
        document.getElementById("sor_3").style.backgroundColor = "#c2d23a";
    } else if (sor3_result >= 85 && sor3_result <= 100) {
        document.getElementById("sor_3").style.backgroundColor = "#c2d23a";
    } else {
        
    }
    var sor4_result = sor7 / sor8 * 100;
    if (sor4_result < 0) {
        output_text.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else if (sor4_result >= 0 && sor4_result < 40) {
        document.getElementById("sor_4").style.backgroundColor = "#ff6666";
    } else if (sor4_result >= 40 && sor4_result < 65) {
        document.getElementById("sor_4").style.backgroundColor = "#f9a23b";
    } else if (sor4_result >= 65 && sor4_result < 85){
        document.getElementById("sor_4").style.backgroundColor = "#c2d23a";
    } else if (sor4_result >= 85 && sor4_result <= 100) {
        document.getElementById("sor_4").style.backgroundColor = "#c2d23a";
    } else {
        
    }
    var soch_result = soch1 / soch2 * 100;
    if (soch_result < 0) {
        output_text.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else if (soch_result >= 0 && soch_result < 40) {
        document.getElementById("soch_1").style.backgroundColor = "#ff6666";
    } else if (soch_result >= 40 && soch_result < 65) {
        document.getElementById("soch_1").style.backgroundColor = "#f9a23b";
    } else if (soch_result >= 65 && soch_result < 85){
        document.getElementById("soch_1").style.backgroundColor = "#c2d23a";
    } else if (soch_result >= 85 && soch_result <= 100) {
        document.getElementById("soch_1").style.backgroundColor = "#c2d23a";
    } else {
        
    }
}
function FirstGrade() {
    let sor1 = Number(document.getElementById("sor1").value);
    let sor2 = Number(document.getElementById("sor2").value);
    let sor3 = Number(document.getElementById("sor3").value);
    let sor4 = Number(document.getElementById("sor4").value);
    let sor5 = Number(document.getElementById("sor5").value);
    let sor6 = Number(document.getElementById("sor6").value);
    let sor7 = Number(document.getElementById("sor7").value);
    let sor8 = Number(document.getElementById("sor8").value);
    let soch1 = Number(document.getElementById("soch1").value);
    let soch2 = Number(document.getElementById("soch2").value);
    let sor_out = document.getElementById("sor-out");
    let soch_out = document.getElementById("soch-out");
    let output_text = document.getElementById("output-text");
    let summa_out = document.getElementById("summa-out");
    
    let prem1 = [sor1, sor3, sor5, sor7,];
    let prem2 = [sor2, sor4, sor6, sor8,]; 
    let prem1_checked = Number(prem1.reduce((a, b,) => a + b));
    let prem2_checked = Number(prem2.reduce((a, b,) => a + b));
    let result_sors = (prem1_checked / prem2_checked) * 50;
    sor_out.innerHTML = result_sors.toFixed(1) + "%";
    
    if (isNaN(result_sors) == true || isFinite(result_sors) == false){
        sor_out.innerHTML = "0.0%";
        result_sors = 0;
    } else {
        sor_out.innerHTML = result_sors.toFixed(1) + "%";
    }

    if (soch1 == "" && soch2 == "") {
        var result_soch = 0;
    } else {
        var result_soch = soch1 / soch2 * 50;
    }

    if (result_sors < 0 || result_soch < 0) {
        output_text.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else if (result_sors > 50 || result_soch > 50) {
        output_text.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else {
        var result_sors_fix = Number(result_sors.toFixed(1));
        var result_soch_fix = Number(result_soch.toFixed(1));
        var result = Number((result_sors_fix + result_soch_fix).toFixed(1));
        var result_fix = result.toFixed();
        if (result_fix < 0) { 
            output_text.innerHTML = "Где-то ошибка ...";
            document.getElementById("output-text").style.backgroundColor = "#ff6666";
            var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#ff6666");
        } else if (result_fix >= 0 && result_fix < 21) {
            output_text.innerHTML = "Оценка за четверть: 2";
            document.getElementById("output-text").style.backgroundColor = "#ff6666";
            var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#ff6666");
        } else if (result_fix >=21  && result_fix < 51) {
            output_text.innerHTML = "Оценка за четверть: 3";
            document.getElementById("output-text").style.backgroundColor = "#f9a23b";
            var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#f9a23b");
        } else if (result_fix >= 51 && result_fix < 81){
            output_text.innerHTML = "Оценка за четверть: 4";
            document.getElementById("output-text").style.backgroundColor = "#c2d23a";
            var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#c2d23a");
        } else if (result_fix >= 81 && result_fix <= 100) {
            output_text.innerHTML = "Оценка за четверть: 5";
            document.getElementById("output-text").style.backgroundColor = "#c2d23a";
            var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#c2d23a");
        } else {
            if (result_fix < 0) { 
                output_text.innerHTML = "Где-то ошибка ...";
                document.getElementById("output-text").style.backgroundColor = "#ff6666";
                var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#ff6666");
            } else if (result_fix >= 0 && result_fix < 21) {
                output_text.innerHTML = "Оценка за четверть: 2";
                document.getElementById("output-text").style.backgroundColor = "#ff6666";
                var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#ff6666");
            } else if (result_fix >= 21 && result_fix < 51) {
                output_text.innerHTML = "Оценка за четверть: 3";
                document.getElementById("output-text").style.backgroundColor = "#f9a23b";
                var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#f9a23b");
            } else if (result_fix >= 51 && result_fix < 81){
                output_text.innerHTML = "Оценка за четверть: 4";
                document.getElementById("output-text").style.backgroundColor = "#c2d23a";
                var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#c2d23a");
            } else if (result_fix >= 81 && result_fix <= 100) {
                output_text.innerHTML = "Оценка за четверть: 5";
                document.getElementById("output-text").style.backgroundColor = "#c2d23a";
                var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#c2d23a");
            } else {
                output_text.innerHTML = "Что-то пошло не так ...";
                document.getElementById("output-text").style.backgroundColor = "#ff6666";
                var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#ff6666");
            }
        }
    }

    if (isNaN(result_soch) == true || isFinite(result_soch) == false){
        soch_out.innerHTML = "0.0%";
    } else {
        soch_out.innerHTML = result_soch.toFixed(1) + "%";
    }
    
    if (isNaN(result_fix) == true || isFinite(result_fix) == false){
        summa_out.innerHTML = "0.0%";
    } else {
        summa_out.innerHTML = result_fix + "%";
    }

    var sor1_result = sor1 / sor2 * 100;
    if (sor1_result < 0) {
        output_text.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else if (sor1_result >= 0 && sor1_result < 21) {
        document.getElementById("sor_1").style.backgroundColor = "#ff6666";
    } else if (sor1_result >= 21 && sor1_result < 51) {
        document.getElementById("sor_1").style.backgroundColor = "#f9a23b";
    } else if (sor1_result >= 51 && sor1_result < 81){
        document.getElementById("sor_1").style.backgroundColor = "#c2d23a";
    } else if (sor1_result >= 81 && sor1_result <= 100) {
        document.getElementById("sor_1").style.backgroundColor = "#c2d23a";
    } else {
        
    }
    var sor2_result = sor3 / sor4 * 100;
    if (sor2_result < 0) {
        output_text.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else if (sor2_result >= 0 && sor2_result < 21) {
        document.getElementById("sor_2").style.backgroundColor = "#ff6666";
    } else if (sor2_result >= 21 && sor2_result < 51) {
        document.getElementById("sor_2").style.backgroundColor = "#f9a23b";
    } else if (sor2_result >= 51 && sor2_result < 81){
        document.getElementById("sor_2").style.backgroundColor = "#c2d23a";
    } else if (sor2_result >= 81 && sor2_result <= 100) {
        document.getElementById("sor_2").style.backgroundColor = "#c2d23a";
    } else {
        
    }
    var sor3_result = sor5 / sor6 * 100;
    if (sor3_result < 0) {
        output_text.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else if (sor3_result >= 0 && sor3_result < 21) {
        document.getElementById("sor_3").style.backgroundColor = "#ff6666";
    } else if (sor3_result >= 21 && sor3_result < 51) {
        document.getElementById("sor_3").style.backgroundColor = "#f9a23b";
    } else if (sor3_result >= 51 && sor3_result < 81){
        document.getElementById("sor_3").style.backgroundColor = "#c2d23a";
    } else if (sor3_result >= 81 && sor3_result <= 100) {
        document.getElementById("sor_3").style.backgroundColor = "#c2d23a";
    } else {
        
    }
    var sor4_result = sor7 / sor8 * 100;
    if (sor4_result < 0) {
        output_text.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else if (sor4_result >= 0 && sor4_result < 21) {
        document.getElementById("sor_4").style.backgroundColor = "#ff6666";
    } else if (sor4_result >= 21 && sor4_result < 51) {
        document.getElementById("sor_4").style.backgroundColor = "#f9a23b";
    } else if (sor4_result >= 51 && sor4_result < 81){
        document.getElementById("sor_4").style.backgroundColor = "#c2d23a";
    } else if (sor4_result >= 81 && sor4_result <= 100) {
        document.getElementById("sor_4").style.backgroundColor = "#c2d23a";
    } else {
        
    }
    var soch_result = soch1 / soch2 * 100;
    if (soch_result < 0) {
        output_text.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else if (soch_result >= 0 && soch_result < 21) {
        document.getElementById("soch_1").style.backgroundColor = "#ff6666";
    } else if (soch_result >= 21 && soch_result < 51) {
        document.getElementById("soch_1").style.backgroundColor = "#f9a23b";
    } else if (soch_result >= 51 && soch_result < 81){
        document.getElementById("soch_1").style.backgroundColor = "#c2d23a";
    } else if (soch_result >= 81 && soch_result <= 100) {
        document.getElementById("soch_1").style.backgroundColor = "#c2d23a";
    } else {
        
    }
}
function CheckIsEmpty() {
    let sor1 = document.getElementById("sor1").value
    let sor2 = document.getElementById("sor2").value
    let sor3 = document.getElementById("sor3").value
    let sor4 = document.getElementById("sor4").value
    let sor5 = document.getElementById("sor5").value
    let sor6 = document.getElementById("sor6").value
    let sor7 = document.getElementById("sor7").value
    let sor8 = document.getElementById("sor8").value
    let soch1 = document.getElementById("soch1").value
    let soch2 = document.getElementById("soch2").value
    if (sor1 == "" && sor2 == "" && sor3 == "" && sor4 == "" && sor5 == "" && sor6 == "" && sor7 == "" && sor8 == "" && soch1 == "" && soch2 == "" ) {
        let output_text = document.getElementById("output-text");
        output_text.innerHTML = "";
        output_text.removeAttribute('style');
    }
}
function CallFirstGrade() {
    var cont1 = document.querySelector('div.all.box input[type=checkbox]');    
    if (cont1.checked) {
        document.getElementById("sor1").setAttribute("onchange", "FirstGrade()");
        document.getElementById("sor2").setAttribute("onchange", "FirstGrade()");
        document.getElementById("sor3").setAttribute("onchange", "FirstGrade()");
        document.getElementById("sor4").setAttribute("onchange", "FirstGrade()");
        document.getElementById("sor5").setAttribute("onchange", "FirstGrade()");
        document.getElementById("sor6").setAttribute("onchange", "FirstGrade()");
        document.getElementById("sor7").setAttribute("onchange", "FirstGrade()");
        document.getElementById("sor8").setAttribute("onchange", "FirstGrade()");
        document.getElementById("soch1").setAttribute("onchange", "FirstGrade()");
        document.getElementById("soch2").setAttribute("onchange", "FirstGrade()");
        FirstGrade()
        CheckIsEmpty()
    } else {
        document.getElementById("sor1").setAttribute("onchange", "Main()");
        document.getElementById("sor2").setAttribute("onchange", "Main()");
        document.getElementById("sor3").setAttribute("onchange", "Main()");
        document.getElementById("sor4").setAttribute("onchange", "Main()");
        document.getElementById("sor5").setAttribute("onchange", "Main()");
        document.getElementById("sor6").setAttribute("onchange", "Main()");
        document.getElementById("sor7").setAttribute("onchange", "Main()");
        document.getElementById("sor8").setAttribute("onchange", "Main()");
        document.getElementById("soch1").setAttribute("onchange", "Main()");
        document.getElementById("soch2").setAttribute("onchange", "Main()");
        Main()
        CheckIsEmpty()
    }
    var cont3 = document.querySelector('div.so.box input[type=checkbox]');
    if (cont3.checked) {
        OneSO()
    } else {
        document.getElementById("output-so").setAttribute("hidden", "hidden");
    }
}
function CallOneSO() {
    var cont2 = document.querySelector('div.so.box input[type=checkbox]');    
    if (cont2.checked) {
        document.getElementById("main-so").removeAttribute("hidden", "hidden");
        document.getElementById("output-so").removeAttribute("hidden", "hidden");
        document.getElementById("main-content").setAttribute("hidden", "hidden");
        document.getElementById("soch-so").setAttribute("hidden", "hidden");
        document.getElementById("so-sch").setAttribute("hidden", "hidden");
        document.getElementById("so-schs").setAttribute("hidden", "hidden");
        document.getElementById("so-otv").setAttribute("hidden", "hidden");
    } else {
        document.getElementById("main-so").setAttribute("hidden", "hidden");
        document.getElementById("output-so").setAttribute("hidden", "hidden");
        document.getElementById("main-content").removeAttribute("hidden", "hidden");
        document.getElementById("soch-so").removeAttribute("hidden", "hidden");
        document.getElementById("so-sch").removeAttribute("hidden", "hidden");
        document.getElementById("so-schs").removeAttribute("hidden", "hidden");
        document.getElementById("so-otv").removeAttribute("hidden", "hidden");
    }
    var cont4 = document.querySelector('div.so.box input[type=checkbox]');
    if (cont4.checked) {
        OneSO()
    } else {
        document.getElementById("output-so").setAttribute("hidden", "hidden");
    }
}
function OneSO() {
    var cont3 = document.querySelector('div.all.box input[type=checkbox]');    
    if (cont3.checked) {
        let so1 = Number(document.getElementById("so1").value);
        let so2 = Number(document.getElementById("so2").value);
        let output_pre = document.getElementById("output-pre");
        let output_pre_otv = document.getElementById("output-pre-otv"); 
        document.getElementById("output-so").removeAttribute("hidden", "hidden");
        var result_so = so1 / so2 * 100;
        if (isNaN(result_so) == true || isFinite(result_so) == false){
            output_pre.innerHTML = "0%";
        } else {
            output_pre.innerHTML = result_so.toFixed(1) + "%";
            if (result_so < 0) {
                output_pre.innerHTML = "ERROR";
                output_pre_otv.innerHTML = "ERROR";
                output_pre.style.backgroundColor = "#ff6666";
                output_pre_otv.style.backgroundColor = "#ff6666";
                let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#ff6666");
            } else if (result_so >= 0 && result_so < 21) {
                output_pre.style.backgroundColor = "#ff6666";
                output_pre_otv.style.backgroundColor = "#ff6666";
                output_pre_otv.innerHTML = "ПЛХ(2)";
                let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#ff6666");
            } else if (result_so >= 21 && result_so < 51) {
                output_pre.style.backgroundColor = "#f9a23b";
                output_pre_otv.style.backgroundColor = "#f9a23b";
                output_pre_otv.innerHTML = "УДВ(3)";
                let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#f9a23b");
            } else if (result_so >= 51 && result_so < 81){
                output_pre.style.backgroundColor = "#c2d23a";
                output_pre_otv.style.backgroundColor = "#c2d23a";
                output_pre_otv.innerHTML = "ХОР(4)";
                let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#c2d23a");
            } else if (result_so >= 81 && result_so <= 100) {
                output_pre.style.backgroundColor = "#c2d23a";
                output_pre_otv.style.backgroundColor = "#c2d23a";
                output_pre_otv.innerHTML = "ОТЛ(5)";
                let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#c2d23a");
            } else if (result_so > 100){
                output_pre.innerHTML = "ERROR";
                output_pre_otv.innerHTML = "ERROR";
                output_pre.style.backgroundColor = "#ff6666";
                output_pre_otv.style.backgroundColor = "#ff6666";
                let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#ff6666");
            } else {
    
            }
        }
    } else {
        let so1 = Number(document.getElementById("so1").value);
        let so2 = Number(document.getElementById("so2").value);
        let output_pre = document.getElementById("output-pre");
        let output_pre_otv = document.getElementById("output-pre-otv"); 
        document.getElementById("output-so").removeAttribute("hidden", "hidden");
        var result_so = so1 / so2 * 100;
        if (isNaN(result_so) == true || isFinite(result_so) == false){
            output_pre.innerHTML = "0%";
        } else {
            output_pre.innerHTML = result_so.toFixed(1) + "%";
            if (result_so < 0) {
                output_pre.innerHTML = "ERROR";
                output_pre_otv.innerHTML = "ERROR";
                output_pre.style.backgroundColor = "#ff6666";
                output_pre_otv.style.backgroundColor = "#ff6666";
                let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#ff6666");
            } else if (result_so >= 0 && result_so < 40) {
                output_pre.style.backgroundColor = "#ff6666";
                output_pre_otv.style.backgroundColor = "#ff6666";
                output_pre_otv.innerHTML = "ПЛХ(2)";
                let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#ff6666");
            } else if (result_so >= 40 && result_so < 65) {
                output_pre.style.backgroundColor = "#f9a23b";
                output_pre_otv.style.backgroundColor = "#f9a23b";
                output_pre_otv.innerHTML = "УДВ(3)";
                let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#f9a23b");
            } else if (result_so >= 65 && result_so < 85){
                output_pre.style.backgroundColor = "#c2d23a";
                output_pre_otv.style.backgroundColor = "#c2d23a";
                output_pre_otv.innerHTML = "ХОР(4)";
                let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#c2d23a");
            } else if (result_so >= 85 && result_so <= 100) {
                output_pre.style.backgroundColor = "#c2d23a";
                output_pre_otv.style.backgroundColor = "#c2d23a";
                output_pre_otv.innerHTML = "ОТЛ(5)";
                let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#c2d23a");
            } else if (result_so > 100){
                output_pre.innerHTML = "ERROR";
                output_pre_otv.innerHTML = "ERROR";
                output_pre.style.backgroundColor = "#ff6666";
                output_pre_otv.style.backgroundColor = "#ff6666";
                let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#ff6666");
            } else {
    
            }
        }
    }
}