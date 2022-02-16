import React from "react"
import ReactDOM from "react-dom"
import { createServer, Model } from "miragejs"
import { App } from "./App"

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Mensalidade academia",
          type: "withdraw",
          category: "Saúde",
          amount: 119,
          createdAt: new Date("2022-02-13 22:56"),
        },
        {
          id: 2,
          title: "Salário",
          type: "deposit",
          category: "Trabalho",
          amount: 32000,
          createdAt: new Date("2022-02-12 22:56"),
        },
      ],
    })
  },

  routes() {
    this.namespace = "api"

    this.get("/transitions", () => {
      return this.schema.all("transaction")
    })

    this.post("/transitions", (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create("transaction", data)
    })
  },
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
