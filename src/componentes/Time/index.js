import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) =>{

    return(
        //Verifica se o array de colaboradores é maior que 0 e se for renderiza o time
        props.colaboradores.length >0 &&
        <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador
                corDeFundo={props.corPrimaria}
                Key={colaborador.nome}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                />)}
            </div>
        </section>
    )
}

export default Time;