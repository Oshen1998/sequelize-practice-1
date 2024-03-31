import { EnvironmentEnum } from "constants/enums/env.enum";

class Environment {
    private environment: string;

    constructor(env: string) {
        this.environment = env;
    }

    getPort(): number {
        switch (this.environment) {
            case EnvironmentEnum.LOCAL:
                return 3000;
            case EnvironmentEnum.DEV:
                return 3001;
            case EnvironmentEnum.QA:
                return 3002;
            case EnvironmentEnum.PROD:
                return 8001;

            default:
                return 3000;
        }
    }
}

export default new Environment(EnvironmentEnum.LOCAL)