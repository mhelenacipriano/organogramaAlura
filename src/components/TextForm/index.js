import './TextForm.css'
import InputField from '../InputField'

const TextForm = () => {
    return (
        <section className='text-form'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <InputField label="Nome" placeholder="Digite seu nome" />
                <InputField label="Cargo" placeholder="Digite seu cargo" />
                <InputField label="Imagem" placeholder="Digite o endereço da imagem" />

            </form>
        </section>
    )

}

export default TextForm