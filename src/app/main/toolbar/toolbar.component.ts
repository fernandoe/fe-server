import {Component, OnInit} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';

import {FuseConfigService} from '@fuse/services/config.service';
import {FuseSidebarService} from '@fuse/components/sidebar/sidebar.service';
import {ContaService} from '../../services/conta/conta.service';

@Component({
    selector: 'fuse-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class FuseToolbarComponent implements OnInit {
    userStatusOptions: any[];
    languages: any;
    selectedLanguage: any;
    showLoadingBar: boolean;
    horizontalNav: boolean;
    noNav: boolean;
    username: string;

    constructor(private router: Router,
                private fuseConfig: FuseConfigService,
                private sidebarService: FuseSidebarService,
                private contaService: ContaService) {
        this.userStatusOptions = [
            {
                'title': 'Online',
                'icon': 'icon-checkbox-marked-circle',
                'color': '#4CAF50'
            },
            {
                'title': 'Away',
                'icon': 'icon-clock',
                'color': '#FFC107'
            },
            {
                'title': 'Do not Disturb',
                'icon': 'icon-minus-circle',
                'color': '#F44336'
            },
            {
                'title': 'Invisible',
                'icon': 'icon-checkbox-blank-circle-outline',
                'color': '#BDBDBD'
            },
            {
                'title': 'Offline',
                'icon': 'icon-checkbox-blank-circle-outline',
                'color': '#616161'
            }
        ];

        this.languages = [
            {
                'id': 'en',
                'title': 'English',
                'flag': 'us'
            },
            {
                'id': 'tr',
                'title': 'Turkish',
                'flag': 'tr'
            }
        ];

        this.selectedLanguage = this.languages[0];

        router.events.subscribe(
            (event) => {
                if (event instanceof NavigationStart) {
                    this.showLoadingBar = true;
                }
                if (event instanceof NavigationEnd) {
                    this.showLoadingBar = false;
                }
            });

        this.fuseConfig.onConfigChanged.subscribe((settings) => {
            this.horizontalNav = settings.layout.navigation === 'top';
            this.noNav = settings.layout.navigation === 'none';
        });

    }

    ngOnInit(): void {
        this.contaService.me()
            .subscribe(conta => {
                this.username = conta.email;
            });
    }

    toggleSidebarOpened(key) {
        this.sidebarService.getSidebar(key).toggleOpen();
    }

    search(value) {
        // Do your search here...
        console.log(value);
    }

    logout() {
        this.contaService.logout();
        this.router.navigate(['login']);
    }
}
