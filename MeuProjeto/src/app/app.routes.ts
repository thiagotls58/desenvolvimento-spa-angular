import { Routes } from "@angular/router";
import { DataBindingComponent } from "./demos/data-binding/data-binding.component";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { HomeComponent } from "./navegacao/home/home.component";
import { ListaProdutosComponent } from "./produtos/lista-produtos/lista-produtos.component";

// configuração de rotas da app
export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // configura a pagina inicial default da app
    { path: 'home', component: HomeComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'feature-data-binding', component: DataBindingComponent },
    { path: 'produtos', component: ListaProdutosComponent },
    { path: 'produto-detalhe/:id', component: ListaProdutosComponent }
];