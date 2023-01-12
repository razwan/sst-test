import { Api, NextjsSite, RDS } from "sst/constructs"

export default {
  config: () => ( {
    name: "my-app",
    region: "us-east-1",
  } ),
  stacks: async ( app ) => {
    app.stack( function Web( ctx ) {

        const cluster = new RDS( ctx.stack, "Database", {
            engine: "postgresql10.14",
            defaultDatabaseName: "my_database",
        } );

        const api = new Api( ctx.stack, "MyApi", {
            routes: {
                "GET /": "services/functions/lambda.handler",
            } 
        } );

        const frontend = new NextjsSite( ctx.stack, "MySite", {
            path: 'frontend'
        } );

        ctx.stack.addOutputs( {
            ApiEndpoint: api.url,
            SecretArn: cluster.secretArn,
            ClusterIdentifier: cluster.clusterIdentifier,
            Frontend: frontend.url,
        } );
    } );
  },
}
