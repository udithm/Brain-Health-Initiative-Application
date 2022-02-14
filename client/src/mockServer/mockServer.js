import { createServer, Model } from "miragejs";
import data from "./data.json";
const makeServer = () => {
    const server = createServer({
        models: {
           users: Model 
        },
        routes() {
            this.namespace = "/api/";
            this.post("/login/authentication", (schema, request) => {
                const attrs = JSON.parse(request.requestBody);
                const user = schema.users.where({userName: attrs.userName});
                console.log("######################### attrs", attrs, "user ", user);
                return user;
            });
            this.passthrough();

        }
    });
    server.db.loadData(data);
    return server;
};

export default makeServer;