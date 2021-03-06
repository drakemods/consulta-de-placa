const sinesp = require('sinesp-api')
const prompt = require('prompt-sync')({sigint: true});


const placa = prompt("Digite a placa do veiculo: ")

    sinesp.search(`${placa}`).then(async (dados) => {
        console.log(`\nPlaca: ${dados.placa}\n\nSituação: ${dados.situacao}\nModelo: ${dados.modelo}\nMarca: ${dados.marca}\nCor: ${dados.cor}\nAno: ${dados.ano}\nAno do modelo: ${dados.anoModelo}\nEstado: ${dados.uf}\nMunicipio: ${dados.municipio}\nChassi: ${dados.chassi}.\n`)
    }).catch(async (error) => {
        console.log('Placa não encontrada, verifique a placa!')
    })

    // Exemplo de formato da placa: BHS1192
