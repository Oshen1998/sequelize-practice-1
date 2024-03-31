import * as express from "express";
import * as bodyParser from "body-parser";
import connection from "./../instance/index";
import WildRoutes from "./../routes/wild.routes";
import UserRoutes from "./../routes/users.routes";


class App {
    public app: express.Application;

    private wildRoutes: WildRoutes = new WildRoutes();
    private userRoutes: UserRoutes = new UserRoutes();
    constructor() {
        this.app = express();
        this.config();
        this.databaseConfig();
        this.userRoutes.route(this.app);
        this.wildRoutes.route(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private databaseConfig(): void {
        connection.sync().then(()=>{
            console.log('Successfully established database!');
        }).catch((error)=>{
            console.error('Something happened when connecting to the database!')
            console.error(error);
        })
    }
}
export default new App().app