import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  styles: [],
  template: `
    <header class="fixed top-0 z-50 w-full bg-surface/95 backdrop-blur-md border-b border-outline-variant/20 shadow-sm">
      <div class="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <a [routerLink]="['/']" class="font-headline-md text-headline-md font-bold tracking-tight text-primary">Smart Coffee Brasil</a>
        <nav class="hidden md:flex gap-8 items-center">
          <a [routerLink]="['/']" routerLinkActive="text-tertiary-fixed-dim" [routerLinkActiveOptions]="{exact:true}" class="text-on-surface-variant font-medium hover:text-tertiary-fixed-dim transition-all duration-300 font-label-md text-label-md">Início</a>
          <a [routerLink]="['/catalogo']" routerLinkActive="text-tertiary-fixed-dim" class="text-on-surface-variant font-medium hover:text-tertiary-fixed-dim transition-all duration-300 font-label-md text-label-md">Catálogo</a>
          <a [routerLink]="['/quem-somos']" routerLinkActive="text-tertiary-fixed-dim" class="text-on-surface-variant font-medium hover:text-tertiary-fixed-dim transition-all duration-300 font-label-md text-label-md">Quem Somos</a>
        </nav>
        <div class="flex items-center gap-6">
          <div class="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/30">
            <span class="material-symbols-outlined text-outline text-[20px] mr-2">search</span>
            <input class="bg-transparent border-none focus:ring-0 text-sm w-48 font-body-md" placeholder="Buscar por modelo..." type="text"/>
          </div>
          <div class="flex gap-4 items-center">
            <a [routerLink]="['/minha-conta']" class="text-on-surface-variant hover:text-tertiary-fixed-dim flex items-center gap-2">
              <span class="material-symbols-outlined text-[28px]">person</span>
              <span class="hidden lg:inline font-label-md text-label-md">Minha Conta</span>
            </a>
            <button class="text-on-surface-variant hover:text-tertiary-fixed-dim relative">
              <span class="material-symbols-outlined text-[28px]">shopping_cart</span>
              <span class="absolute -top-1 -right-1 bg-tertiary-fixed-dim text-on-tertiary-fixed text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">2</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  `
})
export class NavbarComponent {}
