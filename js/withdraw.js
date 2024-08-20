
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput=document.getElementById('withdraw-input');
    const withdrawInputStr=withdrawInput.value ;
    const withdrawInputNumber=parseFloat(withdrawInputStr);
    withdrawInput.value='';
    if(isNaN(withdrawInputNumber)){
        alert('please input withdraw amount');
        return;
    }
    const withdrAwmount=document.getElementById('withdraw-amount');
    const withdrAwmountText=withdrAwmount.innerText;
    const withdrAwmountNumber=parseFloat(withdrAwmountText);
    const BalancTotal=document.getElementById("Balanc-total");
    const balanceTotalText=BalancTotal.innerText;
    const balanceTotalNumber=parseFloat(balanceTotalText);
   
    const carentWithdraw=withdrAwmountNumber+withdrawInputNumber;
    if(withdrawInputNumber>balanceTotalNumber){
        alert('Insufficient funds');
        return;
    }
    withdrAwmount.innerText=carentWithdraw;
    let carentWithdraw1=
    BalancTotal.innerText=balanceTotalNumber-withdrawInputNumber;
   
    
})