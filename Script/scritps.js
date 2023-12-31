const imagens = ["/img/flag22.png", "/img/flag3.png", "/img/flag1.png"];
imagens.forEach(imagem => {
    const img = new Image();
    img.src = imagem;
});
