//Global variable for flow input list 
let flowInputList=[];
//Generate a table of cashflows based on the  number of periods inmputted by the user
function generateCashFlows(){
    let numberOfTerms= parseInt(document.getElementById("termInput").value);
    let tableRow=""
    let term=1;
    for(let i=0; i<numberOfTerms;i++){
        let inputId=`input${term}`
        flowInputList.push(inputId);
        tableRow+=`<tr><td>Term ${term}</td><td><input type="number" id="${inputId}" class="form-control"></td>`;
        term+=1;
    }
    document.getElementById("flowTable").innerHTML=tableRow;
}
function calculateCouponBondValuation(){
   let couponSum=0;
   let couponValuation=0;
   let discountRateInput=parseFloat(document.getElementById("discountRateInput").value);
   let numberOfTerms= parseInt(document.getElementById("termInput").value);
   for(let i=0;i<flowInputList.length;i++){
       let inputElement=flowInputList[i]
       let coupon=parseFloat(document.getElementById(inputElement).value);
       couponSum+=coupon;
   }
   couponValuation=couponSum/((1+discountRateInput)**(numberOfTerms));
   document.getElementById("couponValidationResult").innerHTML=couponValuation;

}
function calculateFaceValuation(){
    let faceValue=parseFloat(document.getElementById("faceValueInput").value);
    let discountRateInput=parseFloat(document.getElementById("discountRateInput").value);
    let timeToMaturity=parseFloat(document.getElementById("maturityInput").value);
    let presentValue=faceValue/((1+discountRateInput)**timeToMaturity);
    document.getElementById("faceValueResult").innerHTML=presentValue;

}