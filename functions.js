function nodejs(){
    console.log('javascript');
}

nodejs();

var express = function(){
    console.log('express');
};

express();


function callFunction(banana){
   banana();
}

callFunction(express);