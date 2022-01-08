const sinesp = require('sinesp-api')
const prompt = require('prompt-sync')({sigint: true});


const placa = prompt("Digite a placa do veiculo: ")

    sinesp.search(`${placa}`).then(async (dados) => {
        console.log(`\nPlaca: ${dados.placa}\n\nSituação: ${dados.situacao}\nModelo: ${dados.modelo}\nMarca: ${dados.marca}\nCor: ${dados.cor}\nAno: ${dados.ano}\nAno do modelo: ${dados.anoModelo}\nEstado: ${dados.uf}\nMunicipio: ${dados.municipio}\nChassi: ${dados.chassi}.\n`)
    }).catch(async (error) => {
        console.log('Nenhuma placa encontrada, verifique a placa!')
    })

    // Formato/placa de exemplo: BHS1192