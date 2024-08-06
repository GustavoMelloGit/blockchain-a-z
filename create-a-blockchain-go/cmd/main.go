package main

import "create-a-blockchain-go/internal/server"

func main() {
	httpServer := server.NewHttpServer()

	httpServer.Start("3333")
}
