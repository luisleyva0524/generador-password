const $sizePassword = document.getElementById('field-password')
const $length = document.querySelector('#length')
const $generatePassword = document.getElementById('new-password')
const $outputPassword = document.getElementById('output-password')
const $colorSize = document.getElementById('bar-progress')
const $copyText = document.querySelector('#icon-copy')


$sizePassword.addEventListener('change', (event) => {
    if ($sizePassword.value == 8) {
        $colorSize.style.backgroundColor = "red"
        $colorSize.value = 33.333333
    }

    if ($sizePassword.value > 8 && $sizePassword.value <= 16) {
        $colorSize.style.backgroundColor = "yellow"
        $colorSize.value = 66.666666667
    }

    if ($sizePassword.value > 16) {
        $colorSize.style.backgroundColor = "green"
        $colorSize.innerHTML = 100
    }
})

$length.innerHTML = 8
$sizePassword.addEventListener('change', () => {
    $length.innerHTML = $sizePassword.value
})


$generatePassword.addEventListener('click', () => {
    $outputPassword.value = generarContrasena(Number($sizePassword.value))
})

$copyText.addEventListener('click', (e) => {
    e.preventDefault()
    $outputPassword.select()
    navigator.clipboard.writeText($outputPassword.value)
    alert("texto copiado")
})


const generarContrasena = (numCaracteres) => {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return [...Array(numCaracteres)].map(i => caracteres[Math.random() * caracteres.length | 0]).join('');
}

