window.onload = function calculateAge() 
{

    const date = new Date();
    const year = date.getFullYear();
    document.getElementById("age").innerHTML = year - 2000;
    return year - 2000;
    
} 