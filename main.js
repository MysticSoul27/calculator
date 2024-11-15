//function for dispaly
function displayContent(content){
    result.value += content
}

function calClear(){
    result.value = ""
}

function calOutput(){
    result.value = eval(result.value)
}

function calDel(){
    result.value = result.value.slice(0,-1)
}