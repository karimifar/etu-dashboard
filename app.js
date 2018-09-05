var data={
    Prevention:{
        'Education Brochures': [11,11,11,11,11,11,11,11,22,11,12,31,11,12,11],
        'Technology Based Program': [11,12,12,31,33,11,11,11,33,11,33,12,11,12,11],
        'Available for Employees': [11,11,11,11,11,11,11,11,33,11,12,12,11,12,11],
        "Available for Employees' Dependents": [12,12,11,11,11,12,12,11,33,12,12,12,11,12,11],
        'Available for Community': [11,11,11,11,11,11,12,12,12,21,12,12,32,33,11],
        'Hosting On-Campus Events': [33,33,31,12,11,31,11,11,12,11,11,12,11,33,33]
    },
    Policy:{
        '100% Smoke-Free': [11,11,11,11,11,11,11,11,22,11,12,31,11,12,11],
        '100% Tobacco-Free': [11,11,11,11,11,11,11,11,22,11,12,31,11,12,11],
        'Includes ENDS and Other Tobacco Products (hookah, etc.)': [11,11,11,11,11,11,11,11,22,11,12,31,11,12,11],
        'Policy Communication (signage)': [11,11,11,11,11,11,11,11,22,11,12,31,11,12,11],
        'Enforcement Procedures': [11,11,11,11,11,11,11,11,22,11,12,31,11,12,11],
        'Tobacco‑Free Hiring': [11,11,11,11,11,11,11,11,22,11,12,31,11,12,11]
    },
    Cessation:{
        'Tobacco Cessation Program Offered': [11,11,11,11,11,11,11,11,22,11,12,31,11,12,11],
        'Individual Counseling Offered': [11,11,11,11,11,11,11,11,22,11,12,31,11,12,11],
        'Group Counseling Offered': [11,11,11,11,11,11,11,11,22,11,12,31,11,12,11],
        'Offered to Employee': [11,11,11,11,11,11,11,11,22,11,12,31,11,12,11],
        "Offered to Employee's Dependents": [11,11,11,11,11,11,11,11,22,11,12,31,11,12,11],
        'Offered to Patients (If Applicatble)': [11,11,11,11,11,11,11,11,22,11,12,31,11,12,11],
        'Available to Community': [11,11,11,11,11,11,11,11,22,11,12,31,11,12,11],
        'Located On Campus': [11,11,11,11,11,11,11,11,22,11,12,31,11,12,11],
        'Located Off-Site (Other Hospitals) (If Applicable)': [11,11,11,11,11,11,11,11,22,11,12,31,11,12,11],
        'Telehealth': [11,11,11,11,11,11,11,11,22,11,12,31,11,12,11],
        'Communication, Marketing of the Program': [11,11,11,13,11,11,11,11,22,11,32,31,11,12,11]
    }
}

function printData() {
    var j = 1;
    for(var key in data){
        if (data.hasOwnProperty(key)) {
            for(var item in data[key]){
                if(data[key].hasOwnProperty(item)){
                    var row = "<tr id=row-"+j+"><th class='left-th' scope='row'><div>"+item+"</div></th></tr>";
                    var instArray= data[key][item];
                    switch(key){
                        case 'Prevention':
                            $("#prev-body").append(row);
                            printRowData(instArray,j)
                            break;

                        case 'Policy':
                            $("#policy-body").append(row);
                            printRowData(instArray,j);
                            break;

                        case 'Cessation':
                            $("#cessation-body").append(row);
                            printRowData(instArray,j);
                            break;
                    }
                    console.log(row);
                    j++;
                }
            }
        }
    }
}

function printRowData(array, rowNum){
    for(var i=0; i< array.length; i++){
        var td;
        switch(array[i].toString()[1]){
            case '1':
                td = "<td class='text-center'><img src='./img/check.png'></td>";
                break;
            case '2':
                td = "<td class='text-center'><img src='./img/flag.png'></td>";
                break;
            case '3':
                td = "<td class='text-center'><img src='./img/x.png'></td>";
                break;
        }
        $('#row-'+rowNum).append(td);

        switch(array[i].toString()[0]){
            case '1':
                $('#row-'+rowNum+ " td").last().addClass("data-16")
                break;
            case '2':
                $('#row-'+rowNum+ " td").last().addClass("data-17")
                break;
            case '3':
                $('#row-'+rowNum+ " td").last().addClass("data-18")
                break;
        }
        
    }

}

printData();

$(".year-btn").on("click", function(event){
    event.preventDefault();
    let target= $(this).attr("data");
    let color1, color2;
    switch(target){
        case "data-16":
            color1 = $("td."+target).css("background-color")
            color2 = "rgba(227, 83, 5, 0.1)"
            switchColor(color1,color2, target);
            break;
        case "data-17":
            color1 = $("td."+target).css("background-color")
            color2 = "rgba(227, 83, 5, 0.8)"
            switchColor(color1,color2, target);
            break;
        case "data-18":
            color1 = $("td."+target).css("background-color")
            color2 = "rgba(158, 210, 245, 0.8)"
            switchColor(color1,color2, target);
            break;

    }
    // let color = $("."+target).css("background-color");
    // alert(color)
})

function switchColor(a, b, cell){
    if( a === "rgb(255, 255, 255)"){
        $("td."+cell).css("background-color", b)
        $("button."+cell).css("background-color", b)
    }else{
        $("td."+cell).css("background-color", "rgb(255, 255, 255)")
        $("button."+cell).css("background-color", "rgb(255, 255, 255)")
    }
}
//The order in the array:
// 0- 'UT Health at Houston'
// 1- 'UT Health Northeast at Tyler'
// 2- 'UT Health Science Center at San Antonio'
// 3- 'UT MD Anderson Cancer Center'
// 4- 'UT Medical Branch at Galveston'
// 5- 'UT Southwestern Medical Center'
// 6- 'UT Arlington'
// 7- 'UT Austin'
// 8- 'UT Dallas'
// 9- 'UT El Paso'
// 10- 'UT Permian Basin'
// 11- 'UT Rio Grande Valley'
// 12- 'UT San Antonio'
// 13- 'UT Tyler'
// 14- 'UT System Administration'

//first digit= year (2016=1, 2017=2, 2018=3)
//second digit= status: 1=check, 2= flag, 3= X)
