// Seleciona o input e adiciona o evento
document.querySelector("input#phone").addEventListener('input', (e) => {
    e.target.value = phoneMask(e.target.value);
}, false);

// Máscara para telefone
function phoneMask (value) {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
        .replace(/(-\d{4})\d+?$/, '$1')
}