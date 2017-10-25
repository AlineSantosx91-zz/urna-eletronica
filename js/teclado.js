function setCpf(param) {
    var cpf = document.getElementById("cpf").value;
    document.getElementById("cpf").value = cpf + param;
}

function clearCPF() {
    document.getElementById("cpf").value = '';
}