import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, NavbarComponent, FooterComponent],
  styles: [],
  template: `
    <div class="bg-background">
      <app-navbar></app-navbar>

      <!-- Hero Section -->
      <section class="pt-28 pb-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span class="bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-6 inline-block">
              Filtros Profissionais · Grau Técnico
            </span>
            <h1 class="font-display-lg text-display-lg text-primary mb-6 leading-tight italic">
              O filtro certo para cada máquina.
            </h1>
            <p class="text-on-surface-variant text-body-lg mb-10 max-w-lg">
              Fornecedor oficial de filtros e acessórios para cafeteiras profissionais. Compatibilidade garantida com mais de 200 modelos de máquinas.
            </p>
            <div class="flex flex-wrap gap-4 mb-10">
              <a [routerLink]="['/catalogo']" class="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform inline-flex items-center gap-2">
                Ver Catálogo
                <span class="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
              <a href="#compatibilidade" class="border border-outline text-primary px-8 py-4 rounded-lg font-bold hover:bg-surface-container-low transition-colors">
                Verificar Compatibilidade
              </a>
            </div>
            <!-- Trust badges — linha única no desktop -->
            <div class="flex flex-wrap gap-x-6 gap-y-3 divide-x divide-outline-variant/40">
              <div class="flex items-center gap-2 text-on-surface-variant text-sm pr-6">
                <span class="material-symbols-outlined text-base text-tertiary-fixed-dim">verified</span>
                <span>+200 modelos compatíveis</span>
              </div>
              <div class="flex items-center gap-2 text-on-surface-variant text-sm pl-6 pr-6">
                <span class="material-symbols-outlined text-base text-tertiary-fixed-dim">local_shipping</span>
                <span>Entrega expressa</span>
              </div>
              <div class="flex items-center gap-2 text-on-surface-variant text-sm pl-6">
                <span class="material-symbols-outlined text-base text-tertiary-fixed-dim">workspace_premium</span>
                <span>Grau profissional</span>
              </div>
            </div>
          </div>
          <!-- Hero visual — grade de produtos reais -->
          <div class="relative">
            <div class="grid grid-cols-2 gap-3">
              <div *ngFor="let p of heroProducts; let i = index"
                   class="bg-surface-container-low rounded-xl overflow-hidden flex items-center justify-center p-4"
                   [class.row-span-2]="i === 0"
                   [style.aspect-ratio]="i === 0 ? '1/2' : '1/1'">
                <img [src]="p.img" [alt]="p.name" class="object-contain w-full h-full mix-blend-multiply">
              </div>
            </div>
            <!-- Floating rating badge -->
            <div class="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-outline-variant/20">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-tertiary-fixed rounded-lg flex items-center justify-center">
                  <span class="material-symbols-outlined text-on-tertiary-fixed text-lg" style="font-variation-settings:'FILL' 1">star</span>
                </div>
                <div>
                  <p class="font-bold text-primary text-sm">4.9/5</p>
                  <p class="text-on-surface-variant text-xs">+2.400 avaliações</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Compatibility Finder Section -->
      <section id="compatibilidade" class="py-20 bg-surface-container-low">
        <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div class="text-center mb-12">
            <h2 class="font-headline-lg text-headline-lg text-primary mb-4 italic">Encontre o filtro para sua máquina</h2>
            <p class="text-on-surface-variant text-body-lg max-w-xl mx-auto">Digite o modelo da sua cafeteira e veja instantaneamente quais filtros são compatíveis.</p>
          </div>
          <div class="max-w-2xl mx-auto">
            <div class="bg-white rounded-2xl p-6 shadow-md border border-outline-variant/20 flex gap-4">
              <div class="flex-1 flex items-center bg-surface-container-low rounded-lg px-4 py-3 gap-3 border border-outline-variant/30 focus-within:border-tertiary-fixed-dim transition-colors">
                <span class="material-symbols-outlined text-outline">search</span>
                <input type="text" [(ngModel)]="searchQuery" placeholder="Ex: Oster BVSTDC4401, Nespresso Inissia..." class="bg-transparent border-none focus:ring-0 flex-1 text-on-surface placeholder:text-outline-variant font-body-md">
              </div>
              <button class="bg-primary text-on-primary px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity whitespace-nowrap">
                Buscar
              </button>
            </div>
            <!-- Quick model suggestions -->
            <div class="flex flex-wrap gap-2 mt-4 justify-center">
              <button *ngFor="let model of suggestedModels" class="bg-surface-container text-on-surface-variant text-xs px-3 py-1.5 rounded-full hover:bg-surface-container-high transition-colors border border-outline-variant/20">
                {{ model }}
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Products -->
      <section class="py-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div class="flex justify-between items-end mb-10">
          <div>
            <h2 class="font-headline-lg text-headline-lg text-primary italic">Mais Vendidos</h2>
            <p class="text-on-surface-variant mt-2">Os filtros favoritos dos baristas profissionais</p>
          </div>
          <a [routerLink]="['/catalogo']" class="text-primary font-bold flex items-center gap-2 group hover:gap-3 transition-all">
            Ver todos
            <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <div *ngFor="let product of featuredProducts" class="card-hover bg-white rounded-xl overflow-hidden border border-outline-variant/20 cursor-pointer">
            <div class="bg-surface-container-low h-48 flex items-center justify-center overflow-hidden">
              <img [src]="product.img" [alt]="product.name" class="h-full w-full object-contain p-4 mix-blend-multiply">
            </div>
            <div class="p-5">
              <span class="text-xs font-bold text-tertiary-fixed-dim uppercase tracking-wider">{{product.category}}</span>
              <h3 class="font-headline-md text-headline-md text-primary mt-1 mb-2 text-lg">{{product.name}}</h3>
              <p class="text-on-surface-variant text-sm mb-4 line-clamp-2">{{product.description}}</p>
              <div class="flex items-center justify-between">
                <span class="font-bold text-primary text-lg font-serif">{{product.price}}</span>
                <button class="bg-primary text-on-primary px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity">
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Us -->
      <section class="py-20 bg-primary text-on-primary">
        <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div class="text-center mb-16">
            <h2 class="font-headline-lg text-headline-lg italic mb-4">Por que Smart Coffee Brasil?</h2>
            <p class="text-on-primary-container text-body-lg max-w-xl mx-auto">Mais de 15 anos fornecendo excelência para cafeterias, restaurantes e entusiastas.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div *ngFor="let feature of features" class="text-center">
              <div class="w-16 h-16 rounded-full bg-tertiary-fixed flex items-center justify-center mx-auto mb-6">
                <span class="material-symbols-outlined text-on-tertiary-fixed text-2xl" style="font-variation-settings:'FILL' 1">{{feature.icon}}</span>
              </div>
              <h3 class="font-headline-md text-headline-md mb-3">{{feature.title}}</h3>
              <p class="text-on-primary-container">{{feature.description}}</p>
            </div>
          </div>
        </div>
      </section>

      <app-footer></app-footer>
    </div>
  `
})
export class HomeComponent {
  searchQuery = '';
  heroProducts = [
    { name: 'OSTER 400 Filtros', img: 'https://cdn.awsli.com.br/300x300/2715/2715686/produto/291101524/prancheta-1-j1qxrv4ogc.png' },
    { name: 'MARCHESONI 2L', img: 'https://cdn.awsli.com.br/300x300/2715/2715686/produto/291124407/prancheta-5-jdldtv4y91.png' },
    { name: 'HAMILTON BEACH 600', img: 'https://cdn.awsli.com.br/300x300/2715/2715686/produto/291096489/prancheta-3-tmc46e61xe.png' },
  ];
  suggestedModels = ['Oster BVSTDC4401', 'Nespresso Inissia', 'Delonghi Dedica', 'Philips 3200'];
  featuredProducts = [
    { name: 'OSTER — 400 Filtros Papel', category: 'Papel', description: 'Filtro de papel de alta pureza compatível com cafeteiras Oster. Extração limpa e sem resíduos.', price: 'R$ 129,00', img: 'https://cdn.awsli.com.br/300x300/2715/2715686/produto/291101524/prancheta-1-j1qxrv4ogc.png' },
    { name: 'OSTER — 600 Filtros Papel', category: 'Papel', description: 'Kit econômico de filtros Oster para uso intensivo. Ideal para coffee shops e escritórios.', price: 'R$ 159,00', img: 'https://cdn.awsli.com.br/300x300/2715/2715686/produto/291101858/prancheta-1-41odz7uv3h.png' },
    { name: 'MARCHESONI 2L — 200 Filtros', category: 'Papel', description: 'Filtro específico para cafeteiras Marchesoni 2 litros. Compatibilidade verificada Smart Coffee.', price: 'R$ 109,00', img: 'https://cdn.awsli.com.br/300x300/2715/2715686/produto/291124407/prancheta-5-jdldtv4y91.png' },
    { name: 'HAMILTON BEACH — 600 Filtros', category: 'Papel', description: 'Filtros de alta capacidade para máquinas Hamilton Beach. Grau profissional certificado.', price: 'R$ 139,00', img: 'https://cdn.awsli.com.br/300x300/2715/2715686/produto/291096489/prancheta-3-tmc46e61xe.png' },
  ];
  features = [
    { icon: 'verified', title: 'Compatibilidade Garantida', description: 'Cada filtro é validado tecnicamente para mais de 200 modelos de máquinas profissionais.' },
    { icon: 'local_shipping', title: 'Entrega Expressa', description: 'Pedidos confirmados até as 14h saem no mesmo dia. Cobertura em todo o Brasil.' },
    { icon: 'support_agent', title: 'Concierge Especializado', description: 'Atendimento técnico por baristas certificados via WhatsApp. Fale agora.' },
  ];
}
