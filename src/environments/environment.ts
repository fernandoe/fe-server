// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    hmr: false,
    contaServerUrl: 'http://localhost:9000',
    pessoaServerUrl: 'http://localhost:9001',
    enderecoServerUrl: 'http://localhost:9002',
    pagamentoServerUrl: 'http://localhost:9003',
    smsServerUrl: 'http://localhost:9004',
    coachingServerUrl: 'http://localhost:9005',
    taskServerUrl: 'http://localhost:9006',
};
