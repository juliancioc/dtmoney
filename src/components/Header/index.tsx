import logoImg from "assets/logo.svg"
import * as S from "./styles"

type Props = {
  onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }: Props) {
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="logo dt money" />
        <button onClick={onOpenNewTransactionModal} type="button">
          Nova transação
        </button>
      </S.Content>
    </S.Container>
  )
}
