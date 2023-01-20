const isDarkMode = document.querySelector('#switch')
const $sizePassword = document.getElementById('field-password')
const $length = document.querySelector('#length')
const $generatePassword = document.getElementById('new-password')
const $outputPassword = document.getElementById('output-password')
const $colorSize = document.getElementById('bar-progress')
// const $savePassword = document.getElementById('save-password')
// const $copy = document.getElementById('copy-password')


$sizePassword.addEventListener('change', (event) => {
    if ($sizePassword.value <= 8) {
        // $colorSize.innerHTML = 2
        $colorSize.style.backgroundColor = "red"
        // $colorSize.classList.add('bar-progress')
        $colorSize.value = 100
    }

    if ($sizePassword.value > 8 && $sizePassword.value <= 16) {
        $colorSize.style.backgroundColor = "yellow"
        // $colorSize.classList.add('bar-progress-yellow')

        $colorSize.value = 66.666666667

    }

    if ($sizePassword.value > 16) {
        // $colorSize.classList.add('bar-progress-green')
        // $colorSize.value = 100
        $colorSize.style.backgroundColor = "green"
        $colorSize.innerHTML = 100
    }
})



const displaySize = () => {
    $length.innerHTML = $sizePassword.value






    $sizePassword.addEventListener('change', (e) => {
        $length.innerHTML = e.target.value
    })
}


const updateActions = () => {
    $generatePassword.addEventListener('click', () => {
        $outputPassword.value = generarContrasena(Number($sizePassword.value))
    })
}

displaySize()
updateActions()






// const darkmode = () => {
//     const elementBody = document.body
//     elementBody.classList.toggle('.switch')
// }

// if (isDarkMode.checked) {
//     darkmode()
//     console.log('click');
//     // darkmode()
// }



const generarContrasena = (numCaracteres) => {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return [...Array(numCaracteres)].map(i => caracteres[Math.random() * caracteres.length | 0]).join('');
}

