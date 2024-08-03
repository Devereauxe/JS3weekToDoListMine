 const form1 = document.querySelector('.form1');
const btn1 = document.querySelector('.btn1');
const list1 = document.querySelector('.list1');

btn1.addEventListener('click', () => {
const item1 = document.createElement('li');
item1.innerText = form1.value;
item1.classList.add('inform1');
 list1.appendChild(item1);
 form1.value = ' ';

 item1.addEventListener('click', () => {
         item1.classList.add('complete1');
     })

 item1.addEventListener('dblclick', () => {
         list1.removeChild(item1);
     })
})

const form2 = document.querySelector('.form2');
const btn2 = document.querySelector('.btn2');
const list2 = document.querySelector('.list2');

btn2.addEventListener('click', () => {
    const item2 = document.createElement('li');
    item2.innerText = form2.value;
    item2.classList.add('inform2');
    list2.appendChild(item2);
    form2.value = ' ';

    item2.addEventListener('click', () => {
            item2.classList.add('complete2');
        })

    item2.addEventListener('dblclick', () => {
            list2.removeChild(item2);
        })
})