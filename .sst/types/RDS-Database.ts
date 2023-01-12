import "sst/node/rds";
declare module "sst/node/rds" {
  export interface RDSResources {
    "Database": {
      clusterArn: string;
      secretArn: string;
      defaultDatabaseName: string;
    }
  }
}