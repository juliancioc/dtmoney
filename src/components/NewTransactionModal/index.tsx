import { FormEvent, useState } from "react"
import Modal from "react-modal"

import * as S from "./styles"
import closeImg from "assets/close.svg"
import incomeImg from "assets/income.svg"
import outcomeImg from "assets/outcome.svg"
import { useTransactions } from "hooks/useTransactions"

Modal.setAppElement("#root")

type Props = {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: Props) {
  const { createTransaction } = useTransactions()

  const [type, setType] = useState("deposit")
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState("")

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    await createTransaction({ title, amount, category, type })

    setTitle("")
    setType("deposit")
    setAmount(0)
    setCategory("")
    onRequestClose()
  }

  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      onRequestClose={onRequestClose}
      isOpen={isOpen}
    >
      <button
        onClick={onRequestClose}
        type="button"
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <S.Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          type="text"
          placeholder="Título"
        />
        <input
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
          type="number"
          placeholder="Valor"
        />

        <S.TransactionTypeContainer>
          <S.RadioBox
            isActive={type === "deposit"}
            activeColor="green"
            onClick={() => setType("deposit")}
            type="button"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </S.RadioBox>

          <S.RadioBox
            activeColor="red"
            isActive={type === "withdraw"}
            onClick={() => setType("withdraw")}
            type="button"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </S.RadioBox>
        </S.TransactionTypeContainer>

        <input
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          placeholder="Categoria"
        />
        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  )
}
