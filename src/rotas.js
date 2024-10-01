import historicoSaude from  './controller/historicoSaudeController.js'


export default function adicionarRotas (servidor){
    servidor.use (historicoSaude); 
}


