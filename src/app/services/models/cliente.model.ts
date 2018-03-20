import {FuseUtils} from '@fuse/utils';

export class Cliente {

    uuid: string;
    email: string;

    constructor(cliente) {
        {
            this.uuid = cliente.uuid || FuseUtils.generateGUID();
            this.email = cliente.email || '';
        }
    }
}
