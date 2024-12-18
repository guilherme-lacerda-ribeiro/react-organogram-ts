import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { IColaborador } from '../shared/interfaces/IColaborador'

interface FormularioProps {
  aoColaboradorCadastrado: (colaborador: IColaborador) => void
  times: string[]
}

const Formulario = (props: FormularioProps) => {

  const urlImagem = 'https://static.vecteezy.com/ti/vetor-gratis/p1/48684852-desenho-animado-jacare-crocodilo-clipart-ilustracao-em-uma-branco-fundo-vetor.jpg'

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    // const [imagem, setImagem] = useState('')
    const [imagem, setImagem] = useState(urlImagem)
    const [time, setTime] = useState('')
    const [data, setData] = useState('')

    const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
            data
        })
        setNome('')
        setCargo('')
        setImagem(urlImagem)
        setTime('')
        setData('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <CampoTexto
                  label='Data de entrada no time'
                  placeholder=''
                  valor={data}
                  aoAlterado={valor => setData(valor)}
                  tipo='date'
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario