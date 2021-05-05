import React from "react";

function TaxaMetabolicaBasal() {

    const [nome, setNome] = React.useState("");
    const [peso, setPeso] = React.useState(0);
    const [altura, setAltura] = React.useState(0);
    const [idade, setIdade] = React.useState(0);
    const [sexo, setSexo] = React.useState('M');

    const tmb = () => {
        const p = peso ? peso : 0;
        const a = altura ? altura : 0;
        const i = idade ? idade : 0;

        let resultado = '';
        if (sexo) {
            if (sexo === 'M') {
                console.log('Masculino');
                resultado += 66 + (13.7 * p) + (5 * a) - (6.8 * i);
            } else {
                console.log('Feminino');
                resultado += 665 + (9.6 * p) + (1.7 * a) - (4.7 * i);
            }
        }

        return resultado;
    };

    let configureValue = function (event: any, consume: (value: any) => void) {
        let toValue = event?.target?.value;
        consume(toValue);
    };

    const handleChangeNome = (event: any) => {
        configureValue(event, setNome);
    };

    const handleChangePeso = (event: any) => {
        configureValue(event, setPeso)
    };

    const handleChangeAltura = (event: any) => {
        configureValue(event, setAltura)
    };

    const handleChangeIdade = (event: any) => {
        configureValue(event, setIdade)
    };

    const handleChangeSexo = (event: any) => {
        configureValue(event, setSexo)
    };

    return (
        <div>
            <div className="container mt-3">
                <div className="card mb-3">
                    <div className="card-header">
                        Cálculo da Taxa Metabólica Basal
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="row">
                                <div className="col-4">
                                    <label htmlFor="name">Nome</label>
                                    <input type="text" value={nome} onChange={handleChangeNome} id="nome"
                                           className="form-control"></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <label htmlFor="peso">Peso</label>
                                    <input type="number" value={peso} onChange={handleChangePeso} id="peso"
                                           className="form-control"></input>
                                </div>
                                <div className="col-2">
                                    <label htmlFor="altura">Altura</label>
                                    <input type="number" value={altura} onChange={handleChangeAltura} id="altura"
                                           className="form-control"></input>
                                </div>
                                <div className="col-2">
                                    <label htmlFor="idade">Idade</label>
                                    <input type="number" value={idade} onChange={handleChangeIdade} id="idade"
                                           className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="sexo">Sexo</label>
                                    <select className="form-control"  style={{ paddingLeft: '10px' }} onChange={handleChangeSexo} id="sexo">
                                        <option value="M" selected>Masculino</option>
                                        <option value="F">Feminino</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className=" container">
                <div className="card">
                    <div className="card-header">
                        Olá {nome}. A seguir sua taxa metabólica basal.
                    </div>
                    <div className="card-body">
                        <p>Taxa de metabolismo basal (TMB): {tmb()}</p>
                    </div>
                    <div className="card-footer min-h-50">
                        <span id="spanText">Taxa Metabolica Basa é o total de calorias gastas para manter as funções vitais, como os batimentos cardíacos, a pressão arterial e a temperatura corporal.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaxaMetabolicaBasal;