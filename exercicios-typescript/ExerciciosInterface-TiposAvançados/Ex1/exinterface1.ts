interface Produto {
    nome: string;
    preco: number;
    categoria: string;
  }
  
  type FormaPagamento = 'dinheiro' | 'cartão' | 'pix';
  
  function informarCompra(produto: Produto, pagamento: FormaPagamento): string {
    return `O produto ${produto.nome}, classificado como ${produto.categoria}, tem um custo de R$${produto.preco.toFixed(2)}. O pagamento será feito via ${pagamento}.`;
  }
  
  const meuProduto: Produto = {
    nome: 'Mouse',
    preco: 199.90,
    categoria: 'Periféricos'
  };
  
  const formaPagamento: FormaPagamento = 'cartão';
  
  console.log(informarCompra(meuProduto, formaPagamento));
  