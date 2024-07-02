import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select 
                onChange={evento => props.aoAlterado(evento.target.value)} 
                required={props.required} 
                value={props.valor}
            >
                <option value=''>Selecione...</option>
                    //Para cada item da lista, cria um option
                    //O atributo key é obrigatório para listas para o react identificar cada item, e
                    quando deve renderizar novamente
                    {props.itens.map(item => <option key={item}> {item} </option>)}
            </select>
        </div>
    );
}

export default ListaSuspensa;