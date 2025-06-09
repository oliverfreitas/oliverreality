// Script para o site Oliver Reality | Fotografia

document.addEventListener('DOMContentLoaded', function() {
    // Adicionar classes de animação aos elementos quando a página carrega
    const animateElements = document.querySelectorAll('.service-item, .testimonial-item, .blog-post');
    animateElements.forEach(element => {
        element.classList.add('animate-fadeIn');
    });

    // Implementar o menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }

    // Implementar o botão de voltar ao topo
    const scrollTopBtn = document.createElement('div');
    scrollTopBtn.classList.add('scroll-top');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Adicionar efeito de parallax ao hero
    const hero = document.getElementById('hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        });
    }

    // Adicionar efeito de hover aos itens de navegação
    const navItems = document.querySelectorAll('nav ul li a');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.classList.add('animate-zoom-in');
        });
        
        item.addEventListener('animationend', function() {
            this.classList.remove('animate-zoom-in');
        });
    });

    // Adicionar efeito de hover aos botões
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.classList.add('hover-lift', 'hover-shadow');
    });

    // Adicionar efeito de hover às imagens do portfólio
    const portfolioImages = document.querySelectorAll('.portfolio-gallery img');
    portfolioImages.forEach(image => {
        image.classList.add('hover-zoom', 'hover-shadow');
    });

    // Formulário de contato
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de envio de formulário
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // Adicionar menu mobile
    const nav = document.querySelector('nav');
    if (nav && !document.querySelector('.menu-toggle')) {
        const menuToggleBtn = document.createElement('div');
        menuToggleBtn.classList.add('menu-toggle');
        menuToggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
        
        nav.insertBefore(menuToggleBtn, nav.querySelector('ul'));
        
        menuToggleBtn.addEventListener('click', function() {
            const navMenu = nav.querySelector('ul');
            navMenu.classList.toggle('show');
            
            if (navMenu.classList.contains('show')) {
                this.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                this.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }
});



// Adicionar funcionalidade para a galeria de projetos
document.addEventListener('DOMContentLoaded', function() {
    const projectGallery = document.querySelector('.project-gallery .portfolio-gallery');
    
    if (projectGallery) {
        const images = projectGallery.querySelectorAll('img');
        
        images.forEach(image => {
            image.addEventListener('click', function() {
                // Criar modal para visualização da imagem em tamanho maior
                const modal = document.createElement('div');
                modal.classList.add('image-modal');
                
                const modalContent = document.createElement('div');
                modalContent.classList.add('modal-content');
                
                const closeBtn = document.createElement('span');
                closeBtn.classList.add('close-modal');
                closeBtn.innerHTML = '&times;';
                
                const modalImg = document.createElement('img');
                modalImg.src = this.src;
                
                modalContent.appendChild(closeBtn);
                modalContent.appendChild(modalImg);
                modal.appendChild(modalContent);
                document.body.appendChild(modal);
                
                // Adicionar classe para mostrar o modal com animação
                setTimeout(() => {
                    modal.classList.add('show');
                }, 10);
                
                // Fechar o modal ao clicar no botão de fechar ou fora da imagem
                closeBtn.addEventListener('click', function() {
                    modal.classList.remove('show');
                    setTimeout(() => {
                        document.body.removeChild(modal);
                    }, 300);
                });
                
                modal.addEventListener('click', function(e) {
                    if (e.target === modal) {
                        modal.classList.remove('show');
                        setTimeout(() => {
                            document.body.removeChild(modal);
                        }, 300);
                    }
                });
            });
        });
    }
    
    // Adicionar funcionalidade para o formulário de contato
    const contactForm = document.querySelector('#fale-conosco form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação básica do formulário
            const name = this.querySelector('#name');
            const email = this.querySelector('#email');
            const message = this.querySelector('#message');
            let isValid = true;
            
            if (!name.value.trim()) {
                highlightField(name, true);
                isValid = false;
            } else {
                highlightField(name, false);
            }
            
            if (!email.value.trim() || !isValidEmail(email.value)) {
                highlightField(email, true);
                isValid = false;
            } else {
                highlightField(email, false);
            }
            
            if (!message.value.trim()) {
                highlightField(message, true);
                isValid = false;
            } else {
                highlightField(message, false);
            }
            
            if (isValid) {
                // Simulação de envio de formulário
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                
                submitBtn.textContent = 'Enviando...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                    this.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 1500);
            }
        });
        
        // Função para validar email
        function isValidEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
        
        // Função para destacar campos com erro
        function highlightField(field, isError) {
            if (isError) {
                field.style.borderColor = 'var(--color-error)';
                field.style.backgroundColor = 'rgba(231, 76, 60, 0.05)';
            } else {
                field.style.borderColor = '';
                field.style.backgroundColor = '';
            }
        }
    }
});

