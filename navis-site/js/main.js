const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.site-nav');

toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close menu':'Open menu')});

document.querySelectorAll('.site-nav a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}));

const form=document.getElementById('contact-form');
const modal=document.getElementById('thank-you-modal');
const openThankYou=()=>{if(!modal)return;modal.hidden=false;document.body.classList.add('modal-open');modal.querySelector('.modal-close')?.focus()};
const closeThankYou=()=>{if(!modal)return;modal.hidden=true;document.body.classList.remove('modal-open')};

form?.addEventListener('submit',e=>{e.preventDefault();if(!form.checkValidity()){form.reportValidity();return}form.reset();openThankYou()});
modal?.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',closeThankYou));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal&&!modal.hidden)closeThankYou()});
