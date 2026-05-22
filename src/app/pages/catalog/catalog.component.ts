import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent, FooterComponent],
  styles: [],
  template: `
    <div class="bg-background text-on-background font-body-md">
      <app-navbar></app-navbar>

      <!-- Hero Section -->
      <section class="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden bg-primary">
        <div class="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-on-primary">
          <div class="max-w-2xl">
            <h1 class="font-headline-lg text-headline-lg md:text-display-lg mb-6 leading-tight">Filtros de café compatíveis com sua cafeteira</h1>
            <p class="font-body-lg text-body-lg mb-10 text-on-primary/90">Encontre rapidamente o modelo ideal e compre em poucos cliques. Filtros de alta precisão para extração perfeita.</p>
            <div class="flex flex-wrap gap-4">
              <button class="bg-tertiary-fixed-dim text-primary font-bold px-8 py-4 font-label-md uppercase tracking-wider hover:opacity-90 transition-opacity rounded-lg">Ver produtos</button>
              <a [routerLink]="['/minha-conta']" class="border-2 border-on-primary text-on-primary font-bold px-8 py-4 font-label-md uppercase tracking-wider hover:bg-on-primary hover:text-primary transition-all rounded-lg">Acessar conta</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Compatibility Finder -->
      <section class="relative -mt-4 z-20 px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto py-8">
        <div class="bg-surface shadow-2xl p-6 md:p-10 border border-outline-variant/30 rounded-xl flex flex-col md:flex-row gap-8 items-center">
          <div class="flex-1 w-full">
            <h2 class="font-headline-md text-headline-md mb-2">Concierge de Compatibilidade</h2>
            <p class="font-body-md text-body-md text-on-surface-variant mb-6">Digite o modelo da sua cafeteira para encontrar o filtro perfeito.</p>
            <div class="relative bg-surface-container rounded-lg p-1 flex items-center border border-outline-variant/40 focus-within:border-tertiary-fixed-dim transition-colors">
              <span class="material-symbols-outlined ml-3 text-outline">search</span>
              <input type="text" placeholder="ex: Oster BVSTDC4401RD, Bravilor B10..." class="w-full bg-transparent border-none focus:ring-0 py-3 px-4 font-body-md text-primary placeholder:text-outline-variant">
            </div>
            <div class="flex flex-wrap gap-2 mt-4">
              <span *ngFor="let suggestion of compatSuggestions" class="px-3 py-1 bg-surface-container-high rounded-full text-xs font-bold text-on-primary-container cursor-pointer hover:bg-tertiary-fixed-dim transition-colors">{{suggestion}}</span>
            </div>
          </div>
          <div class="hidden md:block w-px h-32 bg-outline-variant/30"></div>
          <div class="w-full md:w-64 text-center">
            <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-tertiary-fixed-dim text-primary mb-4">
              <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">verified</span>
            </div>
            <h3 class="font-label-md text-label-md text-primary uppercase mb-2">Verified Fit</h3>
            <p class="text-xs text-on-surface-variant font-body-md">Selo de garantia Smart Coffee para 100% de compatibilidade técnica.</p>
          </div>
        </div>
      </section>

      <!-- Product Catalog & Filters -->
      <main class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20">
        <div class="flex flex-col lg:flex-row gap-12">

          <!-- Sidebar Filters -->
          <aside class="w-full lg:w-64 flex-shrink-0">
            <div class="sticky top-24 space-y-10">
              <div>
                <h3 class="font-headline-md text-headline-md mb-6">Categorias</h3>
                <ul class="space-y-4">
                  <li *ngFor="let cat of categories">
                    <a href="#" class="flex items-center justify-between hover:text-tertiary-fixed-dim transition-colors font-label-md"
                       [class.text-primary]="cat.active"
                       [class.font-bold]="cat.active"
                       [class.text-on-surface-variant]="!cat.active">
                      {{cat.name}}
                      <span class="material-symbols-outlined text-sm">chevron_right</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="pt-6 border-t border-outline-variant/30">
                <h3 class="font-label-md text-label-md uppercase tracking-widest text-outline mb-6">Material</h3>
                <div class="space-y-3">
                  <label *ngFor="let mat of materials" class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" [checked]="mat.checked" class="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary">
                    <span class="font-body-md text-on-surface-variant group-hover:text-primary transition-colors">{{mat.name}}</span>
                  </label>
                </div>
              </div>
            </div>
          </aside>

          <!-- Product Grid -->
          <div class="flex-1">
            <div class="flex justify-between items-baseline mb-12 border-b border-outline-variant/20 pb-4">
              <h2 class="font-headline-lg text-headline-lg">Todos os Filtros</h2>
              <span class="text-on-surface-variant font-label-sm">Mostrando {{products.length}} de 48 produtos</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-16 gap-x-8">
              <div *ngFor="let product of products" class="group">
                <div class="aspect-square bg-surface-container-low mb-6 overflow-hidden relative rounded-lg flex items-center justify-center">
                  <img [src]="product.img" [alt]="product.name" class="w-full h-full object-contain p-6 mix-blend-multiply">
                  <div class="absolute top-4 left-4" *ngIf="product.badge">
                    <span class="text-[10px] font-bold px-3 py-1 uppercase tracking-tighter rounded"
                          [class.bg-tertiary-fixed-dim]="product.badgeType === 'verified'"
                          [class.text-primary]="product.badgeType === 'verified'"
                          [class.bg-surface-variant]="product.badgeType === 'industrial'"
                          [class.text-on-surface-variant]="product.badgeType === 'industrial'">
                      {{product.badge}}
                    </span>
                  </div>
                </div>
                <div class="space-y-2">
                  <p class="text-xs text-outline uppercase tracking-widest font-label-sm">{{product.brand}}</p>
                  <h3 class="font-headline-md text-headline-md text-primary">{{product.name}}</h3>
                  <p class="font-body-md text-on-surface-variant line-clamp-1">Compatível: {{product.compatibility}}</p>
                  <div class="flex items-center justify-between pt-4">
                    <span class="font-headline-md text-primary">{{product.price}}</span>
                    <button class="bg-primary text-white p-3 rounded hover:bg-primary/90 transition-colors flex items-center gap-2">
                      <span class="material-symbols-outlined text-xl">add_shopping_cart</span>
                      <span class="font-label-md uppercase text-xs tracking-wider">Adicionar</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Load More -->
            <div class="mt-24 text-center">
              <button class="font-label-md text-primary border-b-2 border-primary pb-1 uppercase tracking-widest hover:text-tertiary-fixed-dim hover:border-tertiary-fixed-dim transition-all">Ver mais produtos</button>
            </div>
          </div>
        </div>
      </main>

      <!-- Trust Features -->
      <section class="bg-surface-container-low py-16">
        <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter text-center">
          <div *ngFor="let trust of trustFeatures" class="space-y-4">
            <span class="material-symbols-outlined text-4xl text-primary">{{trust.icon}}</span>
            <h4 class="font-label-md text-label-md uppercase">{{trust.title}}</h4>
            <p class="text-xs text-on-surface-variant font-body-md">{{trust.description}}</p>
          </div>
        </div>
      </section>

      <!-- Call to Action -->
      <section class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24">
        <div class="bg-primary text-on-primary flex flex-col md:flex-row items-center overflow-hidden rounded-xl">
          <div class="p-10 md:p-16 flex-1 space-y-6">
            <h2 class="font-headline-lg text-headline-lg">Já é cliente corporativo?</h2>
            <p class="font-body-lg text-body-lg text-on-primary/80">Acompanhe seus pedidos, repita compras em escala e gerencie suas entregas recorrentes de forma simplificada.</p>
            <a [routerLink]="['/minha-conta']" class="inline-block bg-tertiary-fixed-dim text-primary font-bold px-10 py-4 font-label-md uppercase tracking-wider hover:opacity-90 transition-opacity rounded-lg">Entrar na conta</a>
          </div>
        </div>
      </section>

      <app-footer></app-footer>
    </div>
  `
})
export class CatalogComponent {
  compatSuggestions = ['Oster BVSTDC4401RD', 'Bravilor B10', 'Hario V60-02'];

  categories = [
    { name: 'Filtros de Papel (Cônicos)', active: true },
    { name: 'Filtros Fundo Chato', active: false },
    { name: 'V60 Precision Filters', active: false },
    { name: 'Filtros para Chá', active: false },
  ];

  materials = [
    { name: 'Papel Virgem', checked: true },
    { name: 'Bambu Sustentável', checked: false },
    { name: 'Micro-mesh Inox', checked: false },
  ];

  products = [
    { name: 'OSTER — 400 Filtros Papel', brand: 'Oster', compatibility: 'BVSTDC4401RD e similares', price: 'R$ 129,00', img: 'https://cdn.awsli.com.br/300x300/2715/2715686/produto/291101524/prancheta-1-j1qxrv4ogc.png', badge: 'Verified Compatibility', badgeType: 'verified' },
    { name: 'OSTER — 600 Filtros Papel', brand: 'Oster', compatibility: 'BVSTDC4401RD e similares', price: 'R$ 159,00', img: 'https://cdn.awsli.com.br/300x300/2715/2715686/produto/291101858/prancheta-1-41odz7uv3h.png', badge: 'Verified Compatibility', badgeType: 'verified' },
    { name: 'BRAVILOR B10 — 250 Filtros', brand: 'Bravilor', compatibility: 'B10, B20 Industrial', price: 'R$ 329,00', img: 'https://cdn.awsli.com.br/300x300/2715/2715686/produto/291106934/prancheta-2-13i02pflbw.png', badge: 'Industrial Grade', badgeType: 'industrial' },
    { name: 'HAMILTON BEACH — 600 Filtros', brand: 'Hamilton Beach', compatibility: 'Modelos 46-Series', price: 'R$ 139,00', img: 'https://cdn.awsli.com.br/300x300/2715/2715686/produto/291096489/prancheta-3-tmc46e61xe.png', badge: null, badgeType: null },
    { name: 'MARCHESONI 2L — 200 Filtros', brand: 'Marchesoni', compatibility: 'Cafeteira 2 litros', price: 'R$ 109,00', img: 'https://cdn.awsli.com.br/300x300/2715/2715686/produto/291124407/prancheta-5-jdldtv4y91.png', badge: null, badgeType: null },
    { name: 'MARCHESONI 6L — 200 Filtros', brand: 'Marchesoni', compatibility: 'Cafeteira 6 litros', price: 'R$ 109,00', img: 'https://cdn.awsli.com.br/300x300/2715/2715686/produto/291129608/prancheta-5-ewi6aojdhz.png', badge: null, badgeType: null },
    { name: 'KALITA — 400 Filtros', brand: 'Kalita', compatibility: 'Kalita Wave 155/185', price: 'R$ 129,00', img: 'https://cdn.awsli.com.br/300x300/2715/2715686/produto/291137460/prancheta-4-geclmi1zpi.png', badge: null, badgeType: null },
    { name: 'BUNN VP17 — 1000 Filtros', brand: 'Bunn', compatibility: 'VP17, VPS, VP17-3', price: 'R$ 529,00', img: 'https://cdn.awsli.com.br/300x300/2715/2715686/produto/291120804/bunn-z0e44qz0k9.png', badge: 'Industrial Grade', badgeType: 'industrial' },
  ];

  trustFeatures = [
    { icon: 'local_shipping', title: 'Entrega Rápida', description: 'Envio para todo Brasil em até 24h úteis para produtos em estoque.' },
    { icon: 'inventory_2', title: 'Compra em Volume', description: 'Condições especiais para coffee shops e faturamentos corporativos.' },
    { icon: 'history', title: 'Reposição Fácil', description: 'Repita seu último pedido com apenas um clique em sua conta.' },
    { icon: 'support_agent', title: 'Consultoria Técnica', description: 'Dúvidas sobre compatibilidade? Fale com nossos especialistas.' },
  ];
}
