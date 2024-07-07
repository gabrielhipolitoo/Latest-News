import express from "express";
import path from "path";
class Server {
  constructor() {
    const { app, port } = this.configServer();
    this.startServer(app, port);
  }

  configServer() {
    const app = express();
    const port = 3000;
    const __dirname = path.dirname;
    app.use(express.json());
    app.use(express.static("public"));
    console.log("ola");
    return {
      app,
      port,
    };
  }

  startServer(app, port) {
    app.listen(port, () => {
      console.log("servidor rodando");
    });
    return {
      //null
    };
  }
}

const startar = new Server();
