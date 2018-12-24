  document.getElementById('shirt').onclick = function(event){
    event.preventDefault();
    document.getElementById('shirt').style.border ='2px solid #A3A3A3';
    document.getElementById('t-shirt').style.border='none';
    document.getElementById('outwear').style.border ='none';
    document.getElementById('shirt-content-m').style.display ='block';
    document.getElementById('t-shirt-content-m').style.display ='none';
    document.getElementById('outwear-content-m').style.display = 'none';
  }  
document.getElementById('t-shirt').onclick = function(event){
    event.preventDefault();
    document.getElementById('t-shirt').style.border ='2px solid #A3A3A3';
    document.getElementById('shirt').style.border ='none';
    document.getElementById('outwear').style.border ='none';
    document.getElementById('shirt-content-m').style.display ='none';
    document.getElementById('t-shirt-content-m').style.display ='block';
    document.getElementById('outwear-content-m').style.display = 'none';
  }  
document.getElementById('outwear').onclick = function(event){
    event.preventDefault();
    document.getElementById('outwear').style.border ='2px solid #A3A3A3';
    document.getElementById('t-shirt').style.border='none';
    document.getElementById('shirt').style.border ='none';
    document.getElementById('shirt-content-m').style.display ='none';
    document.getElementById('t-shirt-content-m').style.display ='none';
    document.getElementById('outwear-content-m').style.display = 'block';
}



