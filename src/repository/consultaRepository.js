import con from './connection.js'; 

export async function inserirAtributos (informacoes) {
    const comando = `
    insert into Consultas (Data, Hora_Inicial, Hora_Final, Observacoes )
                        values (?, ?, ?, ?) 
    `; 

    let resposta = await con.query (comando, [informacoes.data, informacoes.horaInicial, informacoes.horaFinal, informacoes.observacoes])
    let info = resposta [0]; 

    return info.inserId; 
}

ID_Agenda 
ID_Funcionario 
Data 
Hora_Inicial 
Hora_Final 
Observacoes 

export async function consultarAtributos(){
    const comando = `
        select ID_Agenda                   ID, 
        ID_Funcionario                     ID,
        Data                               Data,
        Hora_Inicial                       Horario,
        Hora_Final                         Horario
        Obervacoes                         Text,
        from Agendas
    `;

    let resposta = await con.query (comando);
    let registros = resposta [0];

    return registros

}

export async function alterarConsultas(id, informacoes){
    const comando = `
    update Consultas 
    set Procedimento = ?,
    Medicamentos_uso = ?, 
    Custo = ?;
`
    let resposta = await con.query ((comando), [informacoes.data, informacoes.horaInicial, informacoes.horaFinal, informacoes.observacoes, id])
    let info = resposta [0];

    return info.affectedRows;
}


export async function removerConsultas (id){
    const comando = `
    delete from Agendas
    ID_Agenda = ? 
`

    let resposta = await con.query(comando, [id]); 
    let info = resposta[0]; 

    return info.affectedRows; 
}
