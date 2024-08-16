document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login-btn');
    const likeButtons = document.querySelectorAll('.like-btn');
    const addDefinitionButton = document.getElementById('add-definition-btn');
    const definitionsSection = document.querySelector('.definitions-section');

    loginButton.addEventListener('click', function() {
        if (loginButton.textContent === 'Iniciar sesión') {
            loginButton.textContent = 'Cerrar sesión';
        } else {
            loginButton.textContent = 'Iniciar sesión';
        }
    });

    likeButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const likeCountElement = btn.querySelector('.like-count');
            let likeCount = parseInt(likeCountElement.textContent, 10);
            likeCount += 1;
            likeCountElement.textContent = likeCount;

            alert(`¡Te gustó la definición de ${btn.dataset.title}!`);
        });
    });

    if (addDefinitionButton && definitionsSection) {
        addDefinitionButton.addEventListener('click', function() {
            definitionsSection.style.display = 'none';
        });
    }
});

