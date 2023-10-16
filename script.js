
function checkShortcut(event) {
    // Verifique se a tecla 'L' é pressionada
    if (event.key === 'L' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault(); // Impede o comportamento padrão (por exemplo, abrir uma nova guia)
        
        // Simule o preenchimento automático de nome de usuário e senha
        document.getElementById('username').value = 'seu_nome_de_usuario';
        document.getElementById('password').value = 'sua_senha';
    }
}

// Adicione um ouvinte de eventos para verificar atalhos de teclado
document.addEventListener('keydown', checkShortcut);