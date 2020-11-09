# AngularHasuraFirebaseAuthStarter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Angular Hasura Firebase Auth Starter


# Set up

## If using hosted Hasura GraphQL Engine
Change the host uri in `src/app/graphql.module.ts` and in `codegen.yml`

## Starting Local Hasura
```bash
cd database
docker-compose up -d
```
Navigate to localhost:8080

Check if the containers are running
```bash
docker ps
```

## Generating GraphQL

Run
```bash
npm run generate-graphql
```

## Deploying Hasura
Check out this [guide](https://hasura.io/docs/1.0/graphql/core/deployment/deployment-guides/index.html) on methods of deploying your Hasura instance.

## Resources
[Hasura Docker](https://github.com/hasura/graphql-engine/tree/stable/install-manifests)

[GraphQL Code Gen](https://graphql-code-generator.com/)

