let carrinho = [];

// Função para mostrar o modal do carrinho
function mostrarModalCarrinho() {
    document.getElementById('modal').style.display = 'block';
    atualizarCarrinho();
}

// Função para fechar o modal do carrinho
function fecharModalCarrinho() {
    document.getElementById('modal').style.display = 'none';
}

// Função para adicionar produto ao carrinho
function adicionarProduto(index) {
    const quantidade = parseInt(document.getElementById(`quantidade-${index}`).value);
    if (quantidade > 0) {
        const produtoExistente = carrinho.find(item => item.index === index);
        if (produtoExistente) {
            produtoExistente.quantidade += quantidade;
        } else {
            carrinho.push({ index, quantidade });
3        }
        document.getElementById('cart-count').innerText = carrinho.reduce((acc, item) => acc + item.quantidade, 0); // Atualiza contador
        alert(`Adicionado ${quantidade} item(s) ao carrinho!`);
    } else {
        alert('Por favor, escolha uma quantidade válida.');
    }
}

// Função para atualizar o carrinho no modal
function atualizarCarrinho() {
    const modalCartItems = document.getElementById('modal-cart-items');
    const modalTotal = document.getElementById('modal-total');
    modalCartItems.innerHTML = ''; // Limpa itens existentes
    let total = 0;

    if (carrinho.length === 0) {
        modalCartItems.innerHTML = '<p>Carrinho vazio</p>';
    } else {
        const produtos = [
            { nome: 'Camisa', preco: 50 },
            { nome: 'Calça', preco: 100 },
            { nome: 'Sapato', preco: 150 },
            { nome: 'Boné', preco: 25 },
            { nome: 'Jaqueta', preco: 200 },
            { nome: 'Camiseta', preco: 35 },
            { nome: 'Short', preco: 45 },
            { nome: 'Meia', preco: 10 },
            { nome: 'Cinto', preco: 30 },
            { nome: 'Relógio', preco: 250 },
            { nome: 'Óculos', preco: 75 },
        ];

        carrinho.forEach((item, index) => {
            const produto = produtos[item.index];
            const subtotal = produto.preco * item.quantidade;
            total += subtotal;

            // Cria a linha do item com input para remover quantidade
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `
                <p>${produto.nome} x ${item.quantidade} - R$ ${subtotal.toFixed(2)} 
                <input type="number" id="quantidade-remover-${index}" value="${item.quantidade}" min="0" />
                <button onclick="removerQuantidade(${index})">Remover</button></p>
            `;
            modalCartItems.appendChild(itemElement);
        });
    }

    modalTotal.innerHTML = `Total: R$ ${total.toFixed(2)}`;
}

// Função para remover quantidade de produto do carrinho
function removerQuantidade(index) {
    const quantidadeRemover = parseInt(document.getElementById(`quantidade-remover-${index}`).value);

    if (quantidadeRemover > 0) {
        const item = carrinho[index];
        const novaQuantidade = item.quantidade - quantidadeRemover;

        if (novaQuantidade <= 0) {
            // Remove o item se a quantidade for menor ou igual a zero
            carrinho.splice(index, 1);
        } else {
            // Atualiza a quantidade
            item.quantidade = novaQuantidade;
        }
    }
    atualizarCarrinho(); // Atualiza a lista do carrinho
}

// Função para finalizar a compra
function finalizarCompra() {
    fecharModalCarrinho();
    document.getElementById('modal-pagamento').style.display = 'block';
}

// Função para fechar o modal de pagamento
function fecharModalPagamento() {
    document.getElementById('modal-pagamento').style.display = 'none';
}

// Função para processar o pagamento
function processarPagamento(metodo) {
    alert(`Pagamento realizado com sucesso via ${metodo}!`);
    carrinho = []; // Limpa o carrinho após o pagamento
    atualizarCarrinho(); // Atualiza o carrinho após o pagamento
    fecharModalPagamento(); // Fecha o modal de pagamento
}



function mostrarModalSobre() {
    document.getElementById('modal-sobre').style.display = 'block';
}

function fecharModalSobre() {
    document.getElementById('modal-sobre').style.display = 'none';
}

function mostrarModalContato() {
    document.getElementById('modal-contato').style.display = 'block';
}

function fecharModalContato() {
    document.getElementById('modal-contato').style.display = 'none';
}