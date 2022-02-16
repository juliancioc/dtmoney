import incomeImg from "assets/income.svg"
import outcomeImg from "assets/outcome.svg"
import totalImg from "assets/total.svg"
import { TransactionInput, useTransactions } from "hooks/useTransactions"

import * as S from "./styles"
import { formatMoney } from "utils/formatMoney"

export function Summary() {
  const { transactions } = useTransactions()

  const summary = transactions.reduce(
    (acc: any, transaction: TransactionInput) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount
        acc.total += transaction.amount
      } else {
        acc.withdraws += transaction.amount
        acc.total -= transaction.amount
      }

      return acc
    },
    { deposits: 0, withdraws: 0, total: 0 }
  )

  return (
    <S.Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Icone de entrada" />
        </header>
        <strong>{formatMoney(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Icone de saída" />
        </header>
        <strong>- {formatMoney(summary.withdraws)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Icone do valor total" />
        </header>
        <strong>{formatMoney(summary.total)}</strong>
      </div>
    </S.Container>
  )
}
