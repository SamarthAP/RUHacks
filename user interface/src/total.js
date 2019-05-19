const jsonFile = require("./json.json");

let findMaxValue = function() {
    const regex = /^[0-9]+\.([0-9][0-9])?$/;
    var arr = [];

    for (var i in jsonFile){
        if(regex.test(jsonFile[i].description)){
            let match = regex.exec(jsonFile[i].description);
            arr.push(match);
        }
    }

    arr.sort((a, b) => {return a-b});
    
    return arr[arr.length - 1];
}

let getDate = function() {
    let regex = /[0-9]+\/[0-9][0-9]\/[0-9][0-9][0-9][0-9]?$/;

    for (var i in jsonFile){
        if(regex.test(jsonFile[i].description)){
            return regex.exec(jsonFile[i].description);
        }
    }

    regex = /[0-9]+\/[0-9][0-9]\/[0-9][0-9]?$/;
    for (var i in jsonFile){
        if(regex.test(jsonFile[i].description)){
            return regex.exec(jsonFile[i].description);
        }
    }
}

let getVendor = function() {
    return jsonFile[1].description;
}

let getType = function() {
    for (var i in jsonFile){
        if(/[dD][eE][bB][iI][tT]/.test(jsonFile[i].description)){
            return "Debit";
        }else if(/[cC][rR][eE][dD][iI][tT]/.test(jsonFile[i].description) || /[vV][iI][sS][aA]/.test(jsonFile[i].description) || /[cC][aA][rR][dD]/.test(jsonFile[i].description)){
            return "Credit";
        } 
    }
    return "Cash";
}

let getTotal = function() {

    //if json is empty, handle that in react

    if(getType() === "Credit" || getType() === "Debit"){
        return findMaxValue();
    }
}
