const btn=document.getElementById('menuBtn'),nav=document.getElementById('nav');
btn.addEventListener('click',()=>{const open=nav.classList.toggle('hidden')===false;btn.setAttribute('aria-expanded',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{if(innerWidth<768){nav.classList.add('hidden');btn.setAttribute('aria-expanded',false)}}));
document.getElementById('year').textContent=new Date().getFullYear();
