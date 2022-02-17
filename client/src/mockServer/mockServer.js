import { createServer, Model } from "miragejs";
import data from "./data.json";
import { v4 as uuidv4 } from 'uuid';
const makeServer = () => {
    const server = createServer({
        models: {
           users: Model 
        },
        routes() {
            this.namespace = "/api/";
            this.post("/login/authentication", (schema, request) => {
                const attrs = JSON.parse(request.requestBody);
                const user = schema.users.where({userName: attrs.userName, hashedPassword: attrs.password});
                if (user.models.length) {
                    user.models[0].attrs.jwt = uuidv4();
                }
              
                console.log("######################### attrs", attrs, "user ", user);
                return user;
            });
            this.post("/logout",(schema,request) => {
                return "logout Sucesss"
            });
            this.post("/changePassword",(schema,request) => {
                const attrs = JSON.parse(request.requestBody);
                const user = schema.users.where({userName: attrs.userName});
                user.update({...user.models[0].attrs, hashedPassword: attrs.newPassword});
                return " change password Sucesss"
            });
            this.post("/myProfile", (schema, request) => {
                const attrs = JSON.parse(request.requestBody);
                const user = schema.users.where({userId: attrs.uId});              
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