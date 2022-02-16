import { Summary } from "components/Summary"
import { TransactionsTable } from "components/TransactionsTable"

import * as S from "./styles"

export function Dashboard() {
  return (
    <S.Container>
      <Summary />
      <TransactionsTable />
    </S.Container>
  )
}
