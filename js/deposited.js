
document.getElementById('deposited-btn').addEventListener("click", function(){
    const input1=document.getElementById("input1");
    let input1Value=input1.value;
    const depositedAmount=document.getElementById('deposited-amuont');
    const depositedText=depositedAmount.innerText;
    const input1ValueNum=parseFloat(input1Value);
    input1.value='';
   if(isNaN(input1ValueNum)){
    alert('please input deposited amount');
    return;
   }
    let carentValue=parseFloat( depositedText)+parseFloat(input1Value);
   
  
    depositedAmount.innerText=carentValue;
    input1.value='';

    const balanceTotal=document.getElementById('Balanc-total');
    const balanceTotalText=balanceTotal.innerText;

    const balanceTotalNumber=parseFloat(balanceTotalText);
    const balanceTotalResult=parseFloat(input1Value)+balanceTotalNumber;
    balanceTotal.innerText=balanceTotalResult;

    
    
   
    }
    )