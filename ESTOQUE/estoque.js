document.getElementById('addProductForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    // Captura os valores do formulário
    const productName = document.getElementById('productName').value;
    const productQuantity = document.getElementById('productQuantity').value;
  
    // Adiciona uma nova linha à tabela de estoque
    const table = document.getElementById('stockTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
  
    const nameCell = newRow.insertCell(0);
    const quantityCell = newRow.insertCell(1);
  
    nameCell.textContent = productName;
    quantityCell.textContent = productQuantity;
  
    // Limpa os campos do formulário
    document.getElementById('addProductForm').reset();
  });
  
