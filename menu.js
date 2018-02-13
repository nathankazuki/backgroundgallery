var width = 100;
var height = 70;

document.getElementById('Open').addEventListener('click',function(){
    document.getElementById('menu').style.left = '0px';
});
document.getElementById('Close').addEventListener('click',function(){
    document.getElementById('menu').style.left = '-110px';
});
document.getElementById('MakeBG').addEventListener('click',function(){
    document.getElementById('bg').style.backgroundImage = document.getElementById("zoom").style.backgroundImage;
});

document.getElementById('Reset').addEventListener('click',function(){
    document.getElementById('bg').style.backgroundImage = 'none';
});

document.getElementById('ShowApp').addEventListener('click',function(){
    document.getElementById('app1').style.display = 'block';
});

document.getElementById('HideApp').addEventListener('click',function(){
    document.getElementById('app1').style.display = 'none';
});

document.getElementById('zoom').addEventListener('click',function(){
    document.getElementById('zoomcontrols').style.display = 'block';
});

document.getElementById('plus').addEventListener('click',function(){
    width = width + 10;
    height = height + 7;
    document.getElementById('zoom').style.width = width+'%';
    document.getElementById('zoom').style.height = height+'%';
});

document.getElementById('minus').addEventListener('click',function(){
    width = width - 10;
    height = height - 7;
    document.getElementById('zoom').style.width = width+'%';
    document.getElementById('zoom').style.height = height+'%';
});
