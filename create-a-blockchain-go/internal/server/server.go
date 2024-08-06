package server

import (
	"fmt"
	"log"
	"net/http"
)

type HttpServer struct {
	mux *http.ServeMux
}

func NewHttpServer() *HttpServer {
	return &HttpServer{
		mux: http.NewServeMux(),
	}
}

func (s *HttpServer) Start(port string) {
	s.mux.HandleFunc("GET /", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(204)
	})

	fmt.Println("Starting server on port " + port)
	log.Fatal(http.ListenAndServe(":"+port, s.mux))
}
