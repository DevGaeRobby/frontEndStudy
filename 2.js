





const $btns = document.querySelectorAll('.btn');
$btns.forEach($btn => {
    $btn.addEventListener('click', function(event){
        result.push(event.target.innerHTML);
    })
})

$('#result').on('click', function(event){
    alert(result.join(' '));
})
