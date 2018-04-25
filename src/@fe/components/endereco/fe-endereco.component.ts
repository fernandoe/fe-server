import {Component, Input} from '@angular/core';
import {Endereco} from '../../../app/services/endereco/endereco.model';

@Component({
    selector: 'fe-endereco',
    templateUrl: './fe-endereco.component.html',
    styleUrls: ['./fe-endereco.component.scss']
})
export class FeEnderecoComponent {

    @Input()
    data: Endereco;

    constructor() {
    }
}
