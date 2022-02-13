import { createServer, Model } from "miragejs";
import data from "./data.json";
const makeServer = () => {
    const server = createServer({
        models: {
           users: Model 
        },
        routes() {
            this.namespace = "api";
            this.post("/login/authentication", (schema, request) => {
                const attrs = JSON.parse(request.requestBody);
                console.log("######################### attrs", attrs);
                return schema.users.find(user => user.userName === attrs.email);
            });
            this.passthrough();

        }
    });
    server.db.loadData(data);
    return server;
};

export default makeServer;