document.getElementById('themes').addEventListener('click', () => {
    var drop_down = document.getElementById('dropdown-tabs');

    if (drop_down.style.display === 'none' || drop_down.style.display === '') {
        drop_down.style.display = 'flex';
    }
    else
        drop_down.style.display = 'none';
});


document.getElementById('green').addEventListener('click', () => {
    document.body.classList.toggle('green-theme');
})

document.getElementById('blue').addEventListener('click', () => {
    document.body.classList.toggle('blue-theme');
})

document.getElementById('light').addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
})

document.getElementById('dark').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
})

document.getElementById('dont').addEventListener('click', () => {
    document.body.classList.toggle('dont-theme');
})