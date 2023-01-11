(()=>{
    const width = document.querySelector('#input_width');
    const height = document.querySelector('#input_height');
    const borderRadius = document.querySelector('#input_radius');
    const backgroundColor = document.querySelector('#input_color');
    const margin = document.querySelector('#input_margin');
    const count = document.querySelector('#input_count');
    const playground = document.querySelector('#playground');

    document.getElementById('btn_show').addEventListener('click', () => {
        playground.replaceChildren();
        for (let i = 0; i < Number(count.value); i++) {
            const newDiv = document.createElement('div');
            newDiv.style.width = width.value + 'vw';
            newDiv.style.height = height.value + 'vh';
            newDiv.style.borderRadius = borderRadius.value + 'px';
            newDiv.style.backgroundColor = backgroundColor.value;
            newDiv.style.margin = margin.value + 'px';
            playground.appendChild(newDiv);
        }
    });

    playground.addEventListener('click',(event)=> {
        playground.removeChild(event.target);
    });
})()