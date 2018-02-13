
document.getElementById('BG1').addEventListener('click',function(){
    document.getElementById('ch1').style.backgroundImage = 'url(i1.jpg)';
    document.getElementById('ch2').style.backgroundImage ='url(i2.jpg)';
    document.getElementById('ch3').style.backgroundImage ='url(i3.jpg)';
});

document.getElementById('BG2').addEventListener('click',function(){
    document.getElementById('ch1').style.backgroundImage = 'url(i4.jpg)';
    document.getElementById('ch2').style.backgroundImage = 'url(i5.jpg)';
    document.getElementById('ch3').style.backgroundImage  ='url(i6.jpg)';
});

document.getElementById('BG3').addEventListener('click',function(){
    document.getElementById('ch1').style.backgroundImage = 'url(i7.jpg)';
    document.getElementById('ch2').style.backgroundImage = 'url(i8.jpg)';
    document.getElementById('ch3').style.backgroundImage = 'url(i9.jpg)';
});

document.getElementById('BG4').addEventListener('click',function(){
    document.getElementById('ch1').style.backgroundImage = 'url(i10.jpg)';
    document.getElementById('ch2').style.backgroundImage = 'url(i11.jpg)';
    document.getElementById('ch3').style.backgroundImage = 'url(i12.jpg)';
});

document.getElementById('ch1').addEventListener('mouseenter',function(){
    document.getElementById('zoom').style.backgroundImage = document.getElementById("ch1").style.backgroundImage;
});

document.getElementById('ch2').addEventListener('mouseenter',function(){
    document.getElementById('zoom').style.backgroundImage = document.getElementById("ch2").style.backgroundImage;
});

document.getElementById('ch3').addEventListener('mouseenter',function(){
    document.getElementById('zoom').style.backgroundImage = document.getElementById("ch3").style.backgroundImage;
});

document.getElementById('ch4').addEventListener('mouseenter',function(){
    document.getElementById('zoom').style.backgroundImage = document.getElementById("ch4").style.backgroundImage;
});

document.getElementById('Next').addEventListener('click',function(){
    circle1 = document.getElementById('ch1').style.backgroundImage;
    if (circle1 == 'url(i1.jpg)'){
        document.getElementById('ch1').style.backgroundImage = 'url(i4.jpg)';
        document.getElementById('ch2').style.backgroundImage = 'url(i5.jpg)';
        document.getElementById('ch3').style.backgroundImage = 'url(i6.jpg)';
        
    }
    else if (circle1 == 'url(i4.jpg)'){
        document.getElementById('ch1').style.backgroundImage = 'url(i7.jpg)';
        document.getElementById('ch2').style.backgroundImage = 'url(i8.jpg)';
        document.getElementById('ch3').style.backgroundImage = 'url(i9.jpg)';
        
    }
    else if (circle1 == 'url(i7.jpg)'){
        document.getElementById('ch1').style.backgroundImage = 'url(i10.jpg)';
        document.getElementById('ch2').style.backgroundImage = 'url(i11.jpg)';
        document.getElementById('ch3').style.backgroundImage = 'url(i12.jpg)';
        
    }
    else if (circle1 == 'url(i10.jpg)'){
        document.getElementById('ch1').style.backgroundImage = 'url(i1.jpg)';
        document.getElementById('ch2').style.backgroundImage = 'url(i2.jpg)';
        document.getElementById('ch3').style.backgroundImage = 'url(i3.jpg)';
        
    }
});

document.getElementById('previous').addEventListener('click',function(){
    circle1 = document.getElementById('ch1').style.backgroundImage;
    if (circle1 == 'url(i1.jpg)'){
        document.getElementById('ch1').style.backgroundImage = 'url(i10.jpg)';
        document.getElementById('ch2').style.backgroundImage = 'url(i11.jpg)';
        document.getElementById('ch3').style.backgroundImage = 'url(i12.jpg)';
        
    }
    else if (circle1 == 'url(i4.jpg)'){
        document.getElementById('ch1').style.backgroundImage = 'url(i1.jpg)';
        document.getElementById('ch2').style.backgroundImage = 'url(i2.jpg)';
        document.getElementById('ch3').style.backgroundImage = 'url(i3.jpg)';
        
    }
    else if (circle1 == 'url(i7.jpg)'){
        document.getElementById('ch1').style.backgroundImage = 'url(i4.jpg)';
        document.getElementById('ch2').style.backgroundImage = 'url(i5.jpg)';
        document.getElementById('ch3').style.backgroundImage = 'url(i6.jpg)';
        
    }
    else if (circle1 == 'url(i10.jpg)'){
        document.getElementById('ch1').style.backgroundImage = 'url(i7.jpg)';
        document.getElementById('ch2').style.backgroundImage = 'url(i8.jpg)';
        document.getElementById('ch3').style.backgroundImage = 'url(i9.jpg)';
        
    }
});