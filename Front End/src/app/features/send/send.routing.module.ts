import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendComponent } from './send.component';


const routes: Routes = [
    {
        path: '',
        component: SendComponent,
        children: [
            {
                path: '',
                component: SendComponent,
            },
            // {
            //     path: 'signup',
            //     component: SignUpComponent,
            // },
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class SendRoutingModule { }

