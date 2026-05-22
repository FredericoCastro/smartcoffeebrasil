import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  styles: [],
  template: `
    <footer class="bg-primary text-on-primary mt-24">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-gutter w-full px-margin-mobile md:px-margin-desktop py-12 max-w-container-max mx-auto">
        <div class="md:col-span-1">
          <span class="font-headline-md text-headline-md font-bold text-on-primary mb-4 block">Smart Coffee Brasil</span>
          <p class="text-outline-variant font-body-md mb-6 leading-relaxed">Referência em acessórios de filtragem profissional para máquinas de café de alta performance.</p>
        </div>
        <div class="space-y-4">
          <h6 class="font-label-md text-label-md uppercase tracking-widest text-on-primary-container">Produtos</h6>
          <ul class="space-y-2">
            <li><a [routerLink]="['/catalogo']" class="text-outline-variant hover:text-on-primary transition-colors text-sm">Filtros Profissionais</a></li>
            <li><a [routerLink]="['/catalogo']" class="text-outline-variant hover:text-on-primary transition-colors text-sm">Acessórios de Barista</a></li>
            <li><a [routerLink]="['/catalogo']" class="text-outline-variant hover:text-on-primary transition-colors text-sm">Kits de Manutenção</a></li>
          </ul>
        </div>
        <div class="space-y-4">
          <h6 class="font-label-md text-label-md uppercase tracking-widest text-on-primary-container">Atendimento</h6>
          <ul class="space-y-2">
            <li><a [routerLink]="['/minha-conta']" class="text-outline-variant hover:text-on-primary transition-colors text-sm">Meus Pedidos</a></li>
            <li><a href="#" class="text-outline-variant hover:text-on-primary transition-colors text-sm">Trocas e Devoluções</a></li>
            <li><a href="#" class="text-outline-variant hover:text-on-primary transition-colors text-sm">WhatsApp Concierge</a></li>
          </ul>
        </div>
        <div class="space-y-4">
          <h6 class="font-label-md text-label-md uppercase tracking-widest text-on-primary-container">Smart Coffee Corp</h6>
          <ul class="space-y-2">
            <li><a href="#" class="text-outline-variant hover:text-on-primary transition-colors text-sm">Venda para Empresas (B2B)</a></li>
            <li><a [routerLink]="['/quem-somos']" class="text-outline-variant hover:text-on-primary transition-colors text-sm">Sobre Nossa Qualidade</a></li>
            <li><a href="#" class="text-outline-variant hover:text-on-primary transition-colors text-sm">Privacidade</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-white/10 py-6 text-center">
        <p class="text-[10px] text-outline-variant font-label-sm">© 2025 Smart Coffee Brasil. Professional Grade Filtration. Todos os direitos reservados.</p>
      </div>
    </footer>
  `
})
export class FooterComponent {}
