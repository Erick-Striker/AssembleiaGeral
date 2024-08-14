// Lista de números de identificação válidos com horários de credenciamento e validação
const dadosIdentificacao = {
        "012": { credenciamento: "13:51", validacao: "13:32", data: "13/08/2024" },
        "016": { credenciamento: "13:51", validacao: "13:31", data: "13/08/2024" },
        "023": { credenciamento: "13:51", validacao: "13:31", data: "13/08/2024" },
        "01A": { credenciamento: "13:52", validacao: "13:31", data: "13/08/2024" },
        "04F": { credenciamento: "13:52", validacao: "13:32", data: "13/08/2024" },
        "022": { credenciamento: "13:53", validacao: "13:32", data: "13/08/2024" },
        "026": { credenciamento: "13:54", validacao: "13:32", data: "13/08/2024" },
        "027": { credenciamento: "13:54", validacao: "13:32", data: "13/08/2024" },
        "01E": { credenciamento: "13:54", validacao: "13:30", data: "13/08/2024" },
        "004": { credenciamento: "13:55", validacao: "13:31", data: "13/08/2024" },
        "01F": { credenciamento: "13:55", validacao: "13:30", data: "13/08/2024" },
        "04E": { credenciamento: "13:55", validacao: "13:32", data: "13/08/2024" },
        "000": { credenciamento: "13:56", validacao: "13:30", data: "13/08/2024" },
        "008": { credenciamento: "13:56", validacao: "13:33", data: "13/08/2024" },
        "00C": { credenciamento: "13:56", validacao: "13:31", data: "13/08/2024" },
        "001": { credenciamento: "13:57", validacao: "13:31", data: "13/08/2024" },
        "009": { credenciamento: "13:57", validacao: "13:33", data: "13/08/2024" },
        "006": { credenciamento: "13:58", validacao: "13:34", data: "13/08/2024" },
        "005": { credenciamento: "13:59", validacao: "13:33", data: "13/08/2024" },
        "00A": { credenciamento: "13:59", validacao: "13:32", data: "13/08/2024" },
        "00D": { credenciamento: "14:00", validacao: "13:31", data: "13/08/2024" },
        "00E": { credenciamento: "14:00", validacao: "13:32", data: "13/08/2024" },
        "002": { credenciamento: "14:01", validacao: "13:32", data: "13/08/2024" },
        "003": { credenciamento: "14:01", validacao: "13:31", data: "13/08/2024" },
        "054": { credenciamento: "14:02", validacao: "13:33", data: "13/08/2024" },
        "01B": { credenciamento: "14:02", validacao: "13:30", data: "13/08/2024" },
        "017": { credenciamento: "14:03", validacao: "13:31", data: "13/08/2024" },
        "058": { credenciamento: "14:03", validacao: "13:32", data: "13/08/2024" },
        "013": { credenciamento: "14:04", validacao: "13:32", data: "13/08/2024" },
        "060": { credenciamento: "14:04", validacao: "13:33", data: "13/08/2024" },
        "05C": { credenciamento: "14:04", validacao: "13:33", data: "13/08/2024" },
        "055": { credenciamento: "14:05", validacao: "13:32", data: "13/08/2024" },
        "064": { credenciamento: "14:05", validacao: "13:32", data: "13/08/2024" },
        "04D": { credenciamento: "14:05", validacao: "13:31", data: "13/08/2024" },
        "021": { credenciamento: "14:06", validacao: "13:32", data: "13/08/2024" },
        "00B": { credenciamento: "14:06", validacao: "13:32", data: "13/08/2024" },
        "032": { credenciamento: "14:07", validacao: "13:33", data: "13/08/2024" },
        "01D": { credenciamento: "14:07", validacao: "13:32", data: "13/08/2024" },
        "03A": { credenciamento: "14:07", validacao: "13:33", data: "13/08/2024" },
        "03E": { credenciamento: "14:07", validacao: "13:32", data: "13/08/2024" },
        "007": { credenciamento: "14:08", validacao: "13:31", data: "13/08/2024" },
        "05B": { credenciamento: "14:08", validacao: "13:31", data: "13/08/2024" },
        "019": { credenciamento: "14:09", validacao: "13:31", data: "13/08/2024" },
        "036": { credenciamento: "14:09", validacao: "13:31", data: "13/08/2024" },
        "057": { credenciamento: "14:09", validacao: "13:33", data: "13/08/2024" },
        "05E": { credenciamento: "14:09", validacao: "13:34", data: "13/08/2024" },
        "015": { credenciamento: "14:10", validacao: "13:33", data: "13/08/2024" },
        "062": { credenciamento: "14:10", validacao: "13:31", data: "13/08/2024" },
        "02E": { credenciamento: "14:10", validacao: "13:31", data: "13/08/2024" },
        "011": { credenciamento: "14:11", validacao: "13:33", data: "13/08/2024" },
        "056": { credenciamento: "14:11", validacao: "13:33", data: "13/08/2024" },
        "067": { credenciamento: "14:11", validacao: "13:33", data: "13/08/2024" },
        "075": { credenciamento: "14:11", validacao: "13:32", data: "13/08/2024" },
        "05A": { credenciamento: "14:11", validacao: "13:34", data: "13/08/2024" },
        "063": { credenciamento: "14:12", validacao: "13:32", data: "13/08/2024" },
        "071": { credenciamento: "14:12", validacao: "13:33", data: "13/08/2024" },
        "05F": { credenciamento: "14:12", validacao: "13:31", data: "13/08/2024" },
        "06A": { credenciamento: "14:12", validacao: "13:33", data: "13/08/2024" },
        "024": { credenciamento: "14:14", validacao: "13:33", data: "13/08/2024" },
        "025": { credenciamento: "14:14", validacao: "13:33", data: "13/08/2024" },
        "059": { credenciamento: "14:14", validacao: "13:31", data: "13/08/2024" },
        "00F": { credenciamento: "14:14", validacao: "13:32", data: "13/08/2024" },
        "04C": { credenciamento: "14:14", validacao: "13:33", data: "13/08/2024" },
        "06D": { credenciamento: "14:14", validacao: "13:33", data: "13/08/2024" },
        "01C": { credenciamento: "14:16", validacao: "13:32", data: "13/08/2024" },
        "05D": { credenciamento: "14:16", validacao: "13:33", data: "13/08/2024" },
        "020": { credenciamento: "14:18", validacao: "13:33", data: "13/08/2024" }      
};

function validarIdentificacao() {
    const input = document.getElementById("identificacao").value;
    const mensagem = document.getElementById("mensagem");

    if (dadosIdentificacao[input]) {
        const { credenciamento, validacao, data } = dadosIdentificacao[input];
        mensagem.textContent = `O seu voto foi credenciado às ${credenciamento} do dia 12/08/2024 e validado às ${validacao} do dia ${data}.`;
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "Número de identificação inválido. Por favor, tente novamente.";
        mensagem.style.color = "red";
    }
}

function redirecionar() {
    window.location.href = "https://drive.google.com/drive/folders/1nG0DU9_p0A41ynL7SaI6MTvbzsAP7nsG?usp=sharing"; // Substitua pelo link da página do resultado
}
