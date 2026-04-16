<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars($_POST['nome']);
    $email = htmlspecialchars($_POST['email']);
    $telefone = htmlspecialchars($_POST['telefone']);
    $mensagem = htmlspecialchars($_POST['mensagem']);

    $conteudo = "Nome: $nome | Email: $email | Telefone: $telefone | Mensagem: $mensagem\n";

    // Salva no arquivo cadastros.txt
    file_put_contents("cadaastro.txt", $conteudo, FILE_APPEND);

    echo "Dados salvos com sucesso!";
}
?>


