import React from 'react';
import { VagaItem, Vagalink, VagaTitulo } from './styles';

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
    <VagaItem>
    <VagaTitulo>{props.titulo}</VagaTitulo>
      <ul>
        <li>Localizacao: {props.localizacao}</li>
        <li>Senioridade: {props.nivel}</li>
        <li>Tipo de contratacao: {props.modalidade}</li>
        <li>
        Salário: {props.salarioMin} - {props.salarioMax}
        </li>
        <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <Vagalink as ="a">
      Ver detalhes e candidatar-se
    </Vagalink>
  </VagaItem>
)

export default Vaga
