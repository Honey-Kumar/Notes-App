let butt = document.querySelector('.btn');

let main = document.querySelector('.main');

butt.addEventListener('click', () => {
    let box = document.createElement('div');
    box.classList.add('box');
    /* let banner = document.createElement('div');
     banner.classList.add('banner');
     box.append(banner);
 
     let firsti = document.createElement('i');
     firsti.classList.add('fa-solid fa-floppy-disk');
     let seci = document.createElement('i');
     seci.classList.add('fa-solid fa-trash');
 
     banner.append(firsti);
     banner.append(seci);
 
     let textarear = document.createElement('textarea');
     textarear.id.add('notesd');
     box.append(textarear);*/

    box.innerHTML = `<div class="banner">
    <i class="save fa-solid fa-floppy-disk"></i>
    <i class="trash fa-solid fa-trash"></i>
   </div> 
   <textarea id="notesd"></textarea>`;

    main.appendChild(box);
    saveed;

    let trash = box.querySelector('.trash');
    trash.addEventListener('click', () => {
        confirm("Do you really wants to remove box");
        box.remove();
        saveed;
    });

    let save = box.querySelector('.save');
    save.addEventListener('click', saveed);

    let fs = box.querySelector("textarea");
    fs.addEventListener("focusout", saveed);
});


function saveed() {
    const data = document.querySelectorAll('.box textarea');
    console.log(data);
    // localStorage.setItem(data);
    let val = [];
    data.forEach(
        (box) => {
            val.push(box.value);
        }
    )

    if (val.length === 0) {
        localStorage.removeItem("data");
    } else {
        localStorage.setItem("data", JSON.stringify(val));
    }
}


(
    function () {
        const lsnotes = JSON.parse(localStorage.getItem("data"));
        if (lsnotes === null) {
            saveed();
        } else {
            lsnotes.forEach(
                (lsnote) => {
                    saveed(lsnote);
                }
            )
        }
    }
)();
