/*
Author: Gig
Problem Statement: Find a peak
Algo: Brute Force, Divide & Conquer
Use: node findPeak.js [--bruteForce/divideConquer] <integers seperated by space> | eg.: node findPeak.js --divideConquer 3 4 1 3 5 6 9 
*/
var arr_length= process.argv.length;
function Util(param,fun){
    if(param[0]==='--bruteForce') {
        return fun(mapNumber(param.slice(1,arr_length),function(item){
                return Number(item);
            }
        ));
    } else if(param[0]==='--divideConquer') {
        return fun(mapNumber(param.slice(1,arr_length),function(item){
                             return Number(item);
                                          }
                ), 'divideConquer');
    } else if(!isNaN(param[0])) {
        return fun(param);
    } else {
        return "Wrong parameter!\n How to Use:\n node findpeak.js [--bruteForce/divideConquer] <numbers seperated by space>";
    }
}
function mapNumber(arr, func){
    for(var i =0; i<arr.length; i++){
        arr[i]=func(arr[i]);
    }
    return arr;
}
function max(value1, value2) {
    if(value1>=value2)
        return value1;
    else
        return value2;
}

function findPeak(arr, algo) {
    var len = arr.length;
    if(len === 0) {
            return;
    } else if(len === 1 ) {
            return arr[0];
    } else if(len === 2) {
            return max(arr[0],arr[1]);
    }
    algo = algo || 'bruteForce';  //Default Method Brute Force
    if(algo === 'bruteForce') {
        for(var i=0; i<len; i++) {
            if(i===0){
                if(arr[i]>=arr[i+1]){
                    return arr[i];
                }
            } else if(i===len-1){
                if(arr[i]>=arr[i-1]){
                    return arr[i];
                }
            } else if(arr[i-1]<=arr[i] && arr[i]>=arr[i+1]){
                    return arr[i];
            }
        }
    } else if(algo === 'divideConquer'){
        if(len%2==0)
            var n = len/2;
        else
            var n = (len-1)/2;
        if(arr[n]>=arr[n-1] && arr[n]>=arr[n+1]){
            return arr[n];
        } else if(arr[n]<=arr[n-1]) {
            return findPeak(arr.slice(0,n), 'divideConquer');
        } else {
            return findPeak(arr.slice(n+1,len), 'divideConquer');
        }
    }
}

function greedyAscent(){

}
console.log(Util(process.argv.slice(2,arr_length),findPeak));
