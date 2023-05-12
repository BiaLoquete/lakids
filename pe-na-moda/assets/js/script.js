const sapatos = {
    listaSapatos: [
        {
            nome: "La Kids",
            desc: "Tênis Infantil Casual La Kids Cinza / Marinho / Vermelho Ilhós",
            categoria: "Casual",
            preco: 95.90,
            img: "assets/img/papatinho-removebg-preview.png",
        },
        {
            nome: "La Kids",
            desc: "Tênis Infantil Casual Unicórnio Menina La Kids Branco / Rosa / Lilás",
            categoria: "Casual",
            preco: 95.90,
            img: "assets/img/papato2-removebg-preview.png",
        },
        {
            nome: "La Kids",
            desc: "COTURNO INFANTIL PRETO MATELASSÊ BOTA MENINA LA KIDS BORDADO",
            categoria: "Coturno",
            preco: 199.90,
            img: "assets/img/la-kids-coturno-infantil-preto-matelass8a-bota-menina-la-kids-bordado-8917-55817311-1-product-removebg-preview.png",
        },
        {
            nome: "La Kids",
            desc: "Tênis Cano Alto Menina Jeans Gliter Rosa La Kids",
            categoria: "Tênis cano alto",
            preco: 199.90,
            img: "assets/img/la-kids-taanis-cano-alto-menina-jeans-gliter-rosa-la-kids-9516-01570231-2-product-removebg-preview.png",
        },
    ],
    remover(sapato) {
        for (let i = 0; i < sapatos.listaSapatos.length; i++) {
            if (sapatos.listaSapatos[i].nome == sapato) {
                sapatos.listaSapatos.splice(i, 1);
            }
        }
        init()
    },
    adicionar(nome, desc, categoria, preco, img) {
        sapatos.listaSapatos.push({
            nome: nome,
            desc: desc,
            categoria: categoria,
            preco: preco,
            img: img
        })
        init()
    },
    alterar(sapato, nome, desc, categoria, preco, img) {
        for (let i = 0; i < sapatos.listaSapatos.length; i++) {
            if (sapatos.listaSapatos[i].nome == sapato) {
                sapatos.listaSapatos[i].nome = nome;
                sapatos.listaSapatos[i].desc = desc;
                sapatos.listaSapatos[i].categoria = categoria;
                sapatos.listaSapatos[i].preco = preco
                sapatos.listaSapatos[i].img = img
            }
        }
        init()
    },
    info(sapato){
        let tudo = []
        for (let i = 0; i < sapatos.listaSapatos.length; i++) {
            if (sapatos.listaSapatos[i].nome == sapato) {
                let nome = sapatos.listaSapatos[i].nome;
                let desc = sapatos.listaSapatos[i].desc
                let categoria = sapatos.listaSapatos[i].categoria
                let preco = sapatos.listaSapatos[i].preco
                let img = sapatos.listaSapatos[i].img
                tudo = [nome,desc,categoria,preco,img]
            }
        }
        return tudo
    }
}

criar = document.getElementById('criar')
criar.addEventListener("submit", function (event) {
    event.preventDefault();
    let form = new FormData(this)
    let nome = form.get('nome')
    let desc = form.get('desc')
    let categoria = form.get('categoria')
    let preco = form.get('preco')
    let imagem = form.get('imagem')
    sapatos.adicionar(nome, desc, categoria, preco, imagem)
    console.log(sapatos.listaSapatos)
})

alterar = document.getElementById('alterar')
alterar.addEventListener("submit", function (event) {
    event.preventDefault();
    let form = new FormData(this)
    let nome = form.get('nome')
    let novo = form.get('new')
    let desc = form.get('desc')
    let categoria = form.get('categoria')
    let preco = form.get('preco')
    let imagem = form.get('imagem')
    sapatos.alterar(nome, novo, desc, categoria, preco, imagem)
    console.log(sapatos.listaSapatos)
})

init = () => {
    var container = document.getElementById('product')
    container.innerHTML = ""
    sapatos.listaSapatos.map((val) => {
        container.innerHTML += `
        <div class="mostrarP product"> 
            <img src="`+ val.img + `"/>
            <p>`+ val.nome + `</p>
            <p class="mostrarPreco">R$`+ val.preco + `</p>
            <details>`+ val.desc     + `</details>
            <button class="excluir" onclick="deletar(this)">Excluir</button>
            <a href="#alterar"><button class="editar" onclick="editar(this)">Editar</button></a>    
        </div>     
        `
    })
}

init()

function deletar(item) {
    sapato = item.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML
    sapatos.remover(sapato)
    console.log(sapato)
}

function editar(item) {
    sapato = item.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML
    info = sapatos.info(sapato)
    console.log(info[0])
    alterar[0].value = info[0]
    for (i = 1; i < alterar.length; i++) {
        alterar[i].value = info[i-1]
    }
}


