import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"

import { api } from "services/api"

type TransactionProps = {
  id: number
  title: string
  amount: number
  category: string
  createdAt: string
  type: string
}

type TransactionsProviderProps = {
  children: ReactNode
}

export type TransactionInput = Omit<TransactionProps, "id" | "createdAt">

type TransactionsContextData = {
  transactions: TransactionProps[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
)

export function TransactionProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  useEffect(() => {
    setTransactions([
      {
        id: 1,
        title: "Mensalidade academia",
        type: "withdraw",
        category: "Saúde",
        amount: 119,
        createdAt: "2022-02-13 22:56",
      },
      {
        id: 2,
        title: "Salário",
        type: "deposit",
        category: "Trabalho",
        amount: 32000,
        createdAt: "2022-02-12 22:56",
      },
    ])
    api
      .get("transitions")
      .then((response) => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/transitions", {
      ...transactionInput,
      createdAt: new Date(),
    })

    const { transaction } = response.data
    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}
