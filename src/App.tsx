import { useState } from "react"

import { GlobalStyle } from "assets/styles/global"
import { Dashboard } from "components/Dashboard"
import { Header } from "components/Header"
import { NewTransactionModal } from "components/NewTransactionModal"
import { TransactionProvider } from "hooks/useTransactions"

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModal] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModal(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModal(false)
  }
  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionProvider>
  )
}
