function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // Pegar a tag img
    const img = document.querySelector('#profile img')
    
    // Substituir a imagem
    if (html.classList.contains('light')) {
        // Se tiver light mode, adiicionar a imagem "gatito-cego"
        img.setAttribute('src', "./assets/gatito-cego.jpg")

    } else {
        // Se tiver sem light mode, manter a imagem "gatito-que-ve"
        img.setAttribute('src', "./assets/gatito-que-ve.jpg")
    }
}