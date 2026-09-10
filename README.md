# LêLê — Leitura infantil

Aplicativo de leitura em português, pronto para hospedar no GitHub Pages. Esta cópia inclui as melhorias de 10/09/2026: botão amarelo de pular ao lado do microfone, fala suave com preferência por vozes femininas disponíveis no aparelho, 60 palavras, três níveis, partidas de cinco palavras, três vidas, duas chances por palavra, pulos configuráveis, sistema “Quero uma ajuda” com limite ajustável, pista visual por palavra, áudio liberado dentro da ajuda, treino livre e revisão por um adulto.

## Publicar pelo navegador do computador

1. Entre no GitHub e crie um repositório público chamado `lele`. Em contas gratuitas, use um repositório público para o GitHub Pages.
2. Extraia o ZIP deste pacote no computador.
3. No repositório, use **Add file → Upload files**. Se ele estiver vazio, use o link **uploading an existing file**.
4. Envie todos os arquivos extraídos diretamente para a raiz do repositório e confirme em **Commit changes**. O `index.html` precisa aparecer na primeira tela do repositório, ao lado do `sw.js` e dos ícones. Envie o conteúdo extraído, não o ZIP nem uma pasta que o contenha.
5. Abra **Settings → Pages**.
6. Em **Build and deployment**, escolha **Source: Deploy from a branch**.
7. Em **Branch**, escolha `main`; na pasta, escolha `/(root)`; clique em **Save**. Se você usa outro nome de branch, selecione o branch que contém os arquivos.
8. Aguarde a publicação. O endereço aparecerá na própria tela do Pages, no botão **Visit site**. Se houver erro, consulte a aba **Actions**.
9. Mantenha **Enforce HTTPS** ativado. Abra o endereço fornecido pelo Pages.

Com o repositório chamado `lele`, o endereço normalmente será `https://SEU-USUARIO.github.io/lele/`. Substitua o exemplo pelo endereço real mostrado no GitHub. Este pacote também aceita outros nomes de repositório, publicação na raiz e domínio próprio.

## Arquivos do pacote

- `index.html`: aplicativo completo, estilos, regras e palavras.
- `sw.js`: acesso offline após o primeiro carregamento completo.
- `manifest.webmanifest`: nome, ícones e configuração para a Tela de Início.
- `icon-180.png`, `icon-192.png`, `icon-512.png`: ícones do aplicativo.
- `.nojekyll`: mantém os arquivos como conteúdo estático.
- `README.md`: estas instruções.

Não é necessário instalar dependências, executar comandos ou configurar chave de API.

## Usar no iPhone

Abra o endereço publicado diretamente no Safari. Toque em **Compartilhar → Adicionar à Tela de Início → Adicionar**. Permita o microfone ao iniciar a leitura. Se o reconhecimento não funcionar pelo ícone, abra o mesmo endereço no Safari. O reconhecimento de voz pode exigir internet e depende do navegador e das permissões do aparelho.

Na área do adulto, responda **13** à conta de entrada. Ali é possível ajustar o limite de ajudas e de pulos, escolher e ouvir a voz, acompanhar os resultados e corrigir uma avaliação por voz que tenha consumido uma vida indevidamente.

As palavras, as pistas visuais e a conferência por adulto podem funcionar offline depois de o aplicativo preparar a cópia local. A fala depende das vozes do aparelho. O Safari pode remover dados locais para liberar espaço.

## Como funciona a ajuda

- A partida começa com **2 ajudas** por padrão; o adulto pode escolher de 1 a 5 para as próximas partidas.
- Ao tocar em **Quero uma ajuda**, uma pista visual aparece e o botão **Ouvir palavra** é liberado para aquela palavra.
- A ajuda é consumida uma única vez por palavra. Repetir o áudio da palavra não gasta outra ajuda.
- Um acerto depois de pedir ajuda vale **5 pontos** e fica registrado como **Com ajuda**.
- No **Treino livre**, as ajudas e os pulos não têm limite e não há pontuação nem perda de vidas.
- As pistas usam pictogramas simples para manter o aplicativo leve e disponível offline. Palavras abstratas usam símbolos visuais de associação.

## Histórico e atualizações

O histórico fica no navegador, sem envio para um banco de dados. A versão no GitHub terá seu próprio histórico: os resultados do endereço anterior não são transferidos automaticamente. A confirmação por voz é uma estimativa e pode interpretar incorretamente a fala infantil; um adulto pode revisar os registros.

Para atualizar o aplicativo, substitua os arquivos no mesmo repositório e confirme em **Commit changes**. O GitHub Pages publicará as mudanças. Abra com internet e atualize a página para receber a nova versão. Quando alterar a versão do cache offline, mantenha o sufixo da chave de cache sincronizado entre `index.html` e `sw.js`.

Esta é uma cópia independente: alterações feitas no endereço anterior não serão enviadas automaticamente ao seu GitHub.

## Referências

- [Criar um site no GitHub Pages](https://docs.github.com/pt/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Configurar a publicação pelo branch](https://docs.github.com/pt/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Usar HTTPS no GitHub Pages](https://docs.github.com/pt/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)
