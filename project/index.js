/*button*/
const body = document.querySelector('body');
const logo = document.querySelector('.logo');
const toggle = document.querySelector('.toggle');
toggle.addEventListener("click",()=>{
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    logo.classList.toggle('active');
}); 
/*content background color changing part*/         
const p1=document.querySelector('.p1');
const a1=document.querySelector('.a1');
const p12=document.querySelector('.p12');
a1.addEventListener("mouseout",()=>{
    p1.classList.toggle('active');
    p12.classList.toggle('active');
}); 
a1.addEventListener("mouseover",()=>{
    p1.classList.toggle('active');
    p12.classList.toggle('active');
}); 
const p2=document.querySelector('.p2');
const a2=document.querySelector('.a2');
const p22=document.querySelector('.p22');
a2.addEventListener("mouseout",()=>{
    p2.classList.toggle('active');
    p22.classList.toggle('active');
}); 
a2.addEventListener("mouseover",()=>{
    p2.classList.toggle('active');
    p22.classList.toggle('active');
}); 
const p3=document.querySelector('.p3');
const a3=document.querySelector('.a3');
const p32=document.querySelector('.p32');
a3.addEventListener("mouseout",()=>{
    p3.classList.toggle('active');
    p32.classList.toggle('active');
}); 
a3.addEventListener("mouseover",()=>{
    p3.classList.toggle('active');
    p32.classList.toggle('active');
});
const p4=document.querySelector('.p4');
const a4=document.querySelector('.a4');
const p42=document.querySelector('.p42');
a4.addEventListener("mouseout",()=>{
    p4.classList.toggle('active');
    p42.classList.toggle('active');
}); 
a4.addEventListener("mouseover",()=>{
    p4.classList.toggle('active');
    p42.classList.toggle('active');
}); 
const p5=document.querySelector('.p5');
const a5=document.querySelector('.a5');
const p52=document.querySelector('.p52');
a5.addEventListener("mouseout",()=>{
    p5.classList.toggle('active');
    p52.classList.toggle('active');
}); 
a5.addEventListener("mouseover",()=>{
    p5.classList.toggle('active');
    p52.classList.toggle('active');
});
const p6=document.querySelector('.p6');
const a6=document.querySelector('.a6');
const p62=document.querySelector('.p62');
a6.addEventListener("mouseout",()=>{
    p6.classList.toggle('active');
    p62.classList.toggle('active');
}); 
a6.addEventListener("mouseover",()=>{
    p6.classList.toggle('active');
    p62.classList.toggle('active');
});
const p7=document.querySelector('.p7');
const a7=document.querySelector('.a7');
const p72=document.querySelector('.p72');
a7.addEventListener("mouseout",()=>{
    p7.classList.toggle('active');
    p72.classList.toggle('active');
}); 
a7.addEventListener("mouseover",()=>{
    p7.classList.toggle('active');
    p72.classList.toggle('active');
});
const p8=document.querySelector('.p8');
const a8=document.querySelector('.a8');
const p82=document.querySelector('.p82');
a8.addEventListener("mouseout",()=>{
    p8.classList.toggle('active');
    p82.classList.toggle('active');
}); 
a8.addEventListener("mouseover",()=>{
    p8.classList.toggle('active');
    p82.classList.toggle('active');
});
/*content changing part*/ 
let i=1;
function new1(){

    if(i==1){
        i=2;
        let i1=document.querySelector('.i1');
        let p1=document.querySelector('.p1 h1');
        let bu1=document.querySelector('.bu1 a');
        let i2=document.querySelector('.i2');
        let p2=document.querySelector('.p2 h1');
        let bu2=document.querySelector('.bu2 a');
        let i3=document.querySelector('.i3');
        let p3=document.querySelector('.p3 h1');
        let bu3=document.querySelector('.bu3 a');
        let i4=document.querySelector('.i4');
        let p4=document.querySelector('.p4 h1');
        let bu4=document.querySelector('.bu4 a');
        let i5=document.querySelector('.i5');
        let p5=document.querySelector('.p5 h1');
        let bu5=document.querySelector('.bu5 a');
        let i6=document.querySelector('.i6');
        let p6=document.querySelector('.p6 h1');
        let bu6=document.querySelector('.bu5 a');
        let i7=document.querySelector('.i7');
        let p7=document.querySelector('.p7 h1');
        let bu7=document.querySelector('.bu7 a');
        let i8=document.querySelector('.i8');
        let p8=document.querySelector('.p8 h1');
        let bu8=document.querySelector('.bu8 a');
        i1.src='ph9.png';
        p1.innerHTML='babana';
        bu1.href='ph9.html';
        i2.src='ph10.png';
        p2.innerHTML='Apple';
        bu2.href='ph10.html';
        i3.src='ph11.png';
        p3.innerHTML='Lenovo Legion';
        bu3.href='ph11.html';
        i4.src='ph12.png';
        p4.innerHTML='Dell_XPS';
        bu4.href='ph12.html';
        i5.src='ph13.png';
        p5.innerHTML='HP';
        bu5.href='ph13.html';
        i6.src='ph14.png';
        p6.innerHTML='Lenovo';
        bu6.href='ph14.html';
        i7.src='ph15.png';
        p7.innerHTML='babana';
        bu7.href='ph15.html';
        i8.src='ph16.png';
        p8.innerHTML='Dell_XPS';
        bu8.href='ph16.html';
    }
    else if(i==2){
        i=3;
        let i1=document.querySelector('.i1');
        let p1=document.querySelector('.p1 h1');
        let bu1=document.querySelector('.bu1 a');
        let i2=document.querySelector('.i2');
        let p2=document.querySelector('.p2 h1');
        let bu2=document.querySelector('.bu2 a');
        let i3=document.querySelector('.i3');
        let p3=document.querySelector('.p3 h1');
        let bu3=document.querySelector('.bu3 a');
        let i4=document.querySelector('.i4');
        let p4=document.querySelector('.p4 h1');
        let bu4=document.querySelector('.bu4 a');
        let i5=document.querySelector('.i5');
        let p5=document.querySelector('.p5 h1');
        let bu5=document.querySelector('.bu5 a');
        let i6=document.querySelector('.i6');
        let p6=document.querySelector('.p6 h1');
        let bu6=document.querySelector('.bu5 a');
        let i7=document.querySelector('.i7');
        let p7=document.querySelector('.p7 h1');
        let bu7=document.querySelector('.bu7 a');
        let i8=document.querySelector('.i8');
        let p8=document.querySelector('.p8 h1');
        let bu8=document.querySelector('.bu8 a');
        i1.src='ph8.png';
        p1.innerHTML='Orange';
        bu1.href='ph8.html';
        i2.src='ph7.png';
        p2.innerHTML='Dell';
        bu2.href='ph7.html';
        i3.src='ph6.png';
        p3.innerHTML='Banana';
        bu3.href='ph6.html';
        i4.src='ph5.png';
        p4.innerHTML='HP-pavilion';
        bu4.href='ph5.html';
        i5.src='ph4.png';
        p5.innerHTML='Dell_Legion';
        bu5.href='ph4.html';
        i6.src='ph3.png';
        p6.innerHTML='Apple Legion';
        bu6.href='ph3.html';
        i7.src='ph2.png';
        p7.innerHTML='Banana_XPA';
        bu7.href='ph2.html';
        i8.src='ph1.png';
        p8.innerHTML='Apple_SPN';
        bu8.href='ph1.html';
    }
    else if(i==3){
        i=4;
        let i1=document.querySelector('.i1');
        let p1=document.querySelector('.p1 h1');
        let bu1=document.querySelector('.bu1 a');
        let i2=document.querySelector('.i2');
        let p2=document.querySelector('.p2 h1');
        let bu2=document.querySelector('.bu2 a');
        let i3=document.querySelector('.i3');
        let p3=document.querySelector('.p3 h1');
        let bu3=document.querySelector('.bu3 a');
        let i4=document.querySelector('.i4');
        let p4=document.querySelector('.p4 h1');
        let bu4=document.querySelector('.bu4 a');
        let i5=document.querySelector('.i5');
        let p5=document.querySelector('.p5 h1');
        let bu5=document.querySelector('.bu5 a');
        let i6=document.querySelector('.i6');
        let p6=document.querySelector('.p6 h1');
        let bu6=document.querySelector('.bu5 a');
        let i7=document.querySelector('.i7');
        let p7=document.querySelector('.p7 h1');
        let bu7=document.querySelector('.bu7 a');
        let i8=document.querySelector('.i8');
        let p8=document.querySelector('.p8 h1');
        let bu8=document.querySelector('.bu8 a');
        i1.src='ph16.png';
        p1.innerHTML='Hp';
        bu1.href='ph16.html';
        i2.src='ph15.png';
        p2.innerHTML='Lenovo';
        bu2.href='ph15.html';
        i3.src='ph14.png';
        p3.innerHTML='Dell';
        bu3.href='ph14.html';
        i4.src='ph13.png';
        p4.innerHTML='Max';
        bu4.href='ph13.html';
        i5.src='ph12.png';
        p5.innerHTML='Dell_Legion';
        bu5.href='ph12.html';
        i6.src='ph11.png';
        p6.innerHTML='Lenovo XPS';
        bu6.href='ph11.html';
        i7.src='ph10.png';
        p7.innerHTML='Apple';
        bu7.href='ph10.html';
        i8.src='ph9.png';
        p8.innerHTML='orange';
        bu8.href='ph9.html';
    }
    else if(i==4){
        i=1;
        let i1=document.querySelector('.i1');
        let p1=document.querySelector('.p1 h1');
        let bu1=document.querySelector('.bu1 a');
        let i2=document.querySelector('.i2');
        let p2=document.querySelector('.p2 h1');
        let bu2=document.querySelector('.bu2 a');
        let i3=document.querySelector('.i3');
        let p3=document.querySelector('.p3 h1');
        let bu3=document.querySelector('.bu3 a');
        let i4=document.querySelector('.i4');
        let p4=document.querySelector('.p4 h1');
        let bu4=document.querySelector('.bu4 a');
        let i5=document.querySelector('.i5');
        let p5=document.querySelector('.p5 h1');
        let bu5=document.querySelector('.bu5 a');
        let i6=document.querySelector('.i6');
        let p6=document.querySelector('.p6 h1');
        let bu6=document.querySelector('.bu5 a');
        let i7=document.querySelector('.i7');
        let p7=document.querySelector('.p7 h1');
        let bu7=document.querySelector('.bu7 a');
        let i8=document.querySelector('.i8');
        let p8=document.querySelector('.p8 h1');
        let bu8=document.querySelector('.bu8 a');
        i1.src='ph1.png';
        p1.innerHTML='Apple';
        bu1.href='ph1.html';
        i2.src='ph2.png';
        p2.innerHTML='HP-pavilion';
        bu2.href='ph2.html';
        i3.src='ph3.png';
        p3.innerHTML='Dell_XPS';
        bu3.href='ph3.html';
        i4.src='ph4.png';
        p4.innerHTML='Lenovo';
        bu4.href='ph4.html';
        i5.src='ph5.png';
        p5.innerHTML='Dell_XPS';
        bu5.href='ph5.html';
        i6.src='ph6.png';
        p6.innerHTML='Lenovo Legion';
        bu6.href='ph6.html';
        i7.src='ph7.png';
        p7.innerHTML='HP';
        bu7.href='ph7.html';
        i8.src='ph8.png';
        p8.innerHTML='Apple';
        bu8.href='ph8.html';
    }


    
}
