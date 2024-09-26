
// Noakhali-Float
document.getElementById('noakhali-donation-btn').addEventListener('click',function(event){
    event.preventDefault();
    
    const noakhaliInputNumber = getInputValueById('noakhali-input');
    console.log(noakhaliInputNumber)
    
    if(typeof noakhaliInputNumber === 'number' && noakhaliInputNumber > 0){
        const myBalance = getTextValueById('my-balance')
        const substraction = myBalance - noakhaliInputNumber ;
        document.getElementById('my-balance').innerText = substraction;
        if(substraction < '0'){
            
            return alert('Insufficient Balance');
        }
        const noakhaliDonationBalance = getTextValueById('noakhali-amount');
        const newDonationOfNoakhali = noakhaliDonationBalance + noakhaliInputNumber;
    
        document.getElementById('noakhali-amount').innerText = newDonationOfNoakhali;
        console.log(newDonationOfNoakhali)
        // adding transections
        // text
        const donationText = document.getElementById('noakhali-donation-text').innerText;
        // Adding Transection
        const div = document.createElement('div')
        div.classList.add('border')
        div.classList.add('h-24')
        div.classList.add('w-11/12')
        div.classList.add('p-4') 
        div.classList.add('mx-auto')
        div.classList.add('my-6')
        div.classList.add('rounded-lg')
        const h3 = document.createElement('h3')
        h3.classList.add('text-base')
        h3.classList.add('font-medium')
        h3.innerText = `You have Donated ${noakhaliInputNumber} tk on ${donationText}`
        div.append(h3);

        
        document.getElementById('transection').appendChild(div)


    }
    else{
        alert('Please Try again !')
    }
})

// Feni-Float
document.getElementById('feni-donation-btn').addEventListener('click',function(event){
    event.preventDefault();
    
    const feniInputNumber = getInputValueById('feni-input');
    console.log(feniInputNumber)
    
    if(typeof feniInputNumber === 'number' && feniInputNumber > 0){
        const myBalance = getTextValueById('my-balance')
        const substraction = myBalance - feniInputNumber ;
        document.getElementById('my-balance').innerText = substraction;
        if(substraction < 0){
            return alert('Insufficient Balance');
        };
        const feniDonationBalance = getTextValueById('feni-amount');
        const newDonationOfFeni = feniDonationBalance + feniInputNumber;
    
        document.getElementById('feni-amount').innerText = newDonationOfFeni;
        console.log(newDonationOfFeni)

       // adding transections
        // text
        const donationText = document.getElementById('feni-donation-text').innerText;
        // Adding Transection
        const div = document.createElement('div')
        div.classList.add('border')
        div.classList.add('h-24')
        div.classList.add('w-11/12')
        div.classList.add('p-4') 
        div.classList.add('mx-auto')
        div.classList.add('my-6')
        div.classList.add('rounded-lg')
        const h3 = document.createElement('h3')
        h3.classList.add('text-base')
        h3.classList.add('font-medium')
        h3.innerText = `You have Donated ${feniInputNumber} tk on ${donationText}`
        div.append(h3);

        document.getElementById('transection').appendChild(div)

    }
    else{
        alert('Please Try again !')
    }
})
// Student-Aldolon
document.getElementById('quota-movement-btn').addEventListener('click',function(event){
    event.preventDefault();
    
    const quotaInputNumber = getInputValueById('quota-input');
    console.log(quotaInputNumber)
    
    if(typeof quotaInputNumber === 'number' && quotaInputNumber > 0){
        const myBalance = getTextValueById('my-balance')
        const substraction = myBalance - quotaInputNumber ;
        document.getElementById('my-balance').innerText = substraction;
        if(substraction < 0){
            return alert('Insufficient Balance');

        }
        const quotaDonationBalance = getTextValueById('quota-donation-amount');
        const newDonationOfQuotaMovement = quotaDonationBalance + quotaInputNumber;
    
        document.getElementById('quota-donation-amount').innerText = newDonationOfQuotaMovement;
        console.log(newDonationOfQuotaMovement)

         // adding transections
        // text
        const donationText = document.getElementById('movement-donation-text').innerText;
        // Adding Transection
        const div = document.createElement('div');
        div.classList.add('border');
        div.classList.add('h-24');
        div.classList.add('w-11/12');
        div.classList.add('p-4') ;
        div.classList.add('mx-auto');
        div.classList.add('my-6');
        div.classList.add('rounded-lg');
        const h3 = document.createElement('h3');
        h3.classList.add('text-base');
        h3.classList.add('font-medium');
        h3.innerText = `You have Donated ${quotaInputNumber} tk on ${donationText}`;
        div.append(h3);

        document.getElementById('transection').appendChild(div);

    }
    else{
        alert('Please Try again !');
    }
})


document.getElementById('donation').addEventListener('click',function(){
    getContainerById('main-container');
    
})

document.getElementById('history').addEventListener('click',function(){
    getContainerById('transection');
    
})

document.getElementById('donation').addEventListener('click',function(){
    getColorById('donation');
})

document.getElementById('history').addEventListener('click',function(){
    getColorById('history');
})



// swich to blag page

document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href="https://md-siyam94.github.io/Assingment-05/blog.html"
})