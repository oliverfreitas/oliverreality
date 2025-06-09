# Oliver Reality - Site para Firebase

Este é um site completo para a Oliver Reality, uma empresa de fotografia de alimentos, desenvolvido para ser hospedado no Firebase.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
oliverreality_firebase_v2/
├── index.html                  # Página inicial
├── portfolio.html              # Página de portfólio
├── planoseprecos.html          # Página de planos e preços
├── contatos.html               # Página de contatos (inclui formulário)
├── blog.html                   # Página principal do blog
├── blog001.html                # Post individual do blog 1
├── blog002.html                # Post individual do blog 2
├── trabalho-mar-esperanca.html # Página de projeto específico
├── obrigado.html               # Página de agradecimento do formulário
├── css/                        # Estilos CSS separados por página
│   ├── base.css                # Estilos globais e variáveis
│   ├── index.css               # Estilos exclusivos da página inicial
│   ├── portfolio.css           # Estilos exclusivos do portfólio
│   ├── contatos.css            # Estilos exclusivos da página de contatos
│   ├── planoseprecos.css       # Estilos exclusivos da página de planos
│   ├── blog.css                # Estilos exclusivos do blog principal
│   ├── blogpost.css            # Estilos exclusivos dos posts do blog
│   └── obrigado.css            # Estilos exclusivos da página de agradecimento
├── script.js                   # JavaScript
├── firebase.json               # Configuração do Firebase
├── .firebaserc                 # Configuração do projeto Firebase
├── sitemap.xml                 # Sitemap do site
├── robots.txt                  # Arquivo de robôs para SEO
├── guia_imagens.md             # Guia para as imagens necessárias
├── images/                     # Pasta para imagens
│   ├── blog/                   # Imagens dos posts do blog
│   └── portfolio/              # Imagens do portfólio
└── # Code Citations.md         # Referências de código externo (se houver)
```

## Características do Site

- Design responsivo e moderno (mobile-first)
- SEO otimizado (meta tags, Open Graph, sitemap, robots.txt)
- Acessibilidade aprimorada (foco visível, contraste, aria-labels)
- Animações e microinterações suaves
- Formulário de contato funcional com feedback visual e redirecionamento
- Galeria de portfólio com grid responsivo e efeitos de hover
- Blog com posts individuais e links internos
- Menu de navegação responsivo e acessível
- Botão de voltar ao topo
- Efeito parallax na imagem de destaque da página inicial
- Integração com Google Analytics
- Tema escuro

## Requisitos de Imagens

Todas as imagens necessárias estão listadas no arquivo `guia_imagens.md`. As imagens devem ser colocadas na pasta `images/` para que o site funcione corretamente.

## Implantação no Firebase

Para implantar o site no Firebase, siga estas etapas:

1. Instale o Firebase CLI (se necessário):
   ```
   npm install -g firebase-tools
   ```
2. Faça login no Firebase:
   ```
   firebase login
   ```
3. Inicialize o projeto Firebase (já configurado neste projeto):
   ```
   firebase init
   ```
4. Implante o site:
   ```
   firebase deploy
   ```

## Personalização

- **Cores**: Edite as variáveis CSS no início do arquivo `css/base.css`
- **Conteúdo**: Modifique o texto nos arquivos HTML
- **Imagens**: Substitua as imagens na pasta `images/` seguindo o guia
- **Funcionalidades**: Edite o arquivo `script.js` para adicionar ou modificar interações

## Créditos

Desenvolvido para Oliver Reality | Fotografia de Alimentos.

## Licença

Todas as imagens são protegidas pela Lei de Direitos Autorais nº 9.610/98.
Proibida a reprodução de qualquer imagem sem autorização.

