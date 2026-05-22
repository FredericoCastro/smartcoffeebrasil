import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-order-tracking',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent, FooterComponent],
  styles: [],
  template: `
    <div class="bg-background text-on-surface">
      <app-navbar></app-navbar>

      <main class="pt-28 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <!-- Order Header -->
        <section class="mb-12">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <nav class="flex items-center gap-2 text-outline mb-4 font-label-sm text-label-sm uppercase tracking-widest">
                <a [routerLink]="['/minha-conta']" class="hover:text-primary transition-colors">Minha Conta</a>
                <span class="material-symbols-outlined text-[14px]">chevron_right</span>
                <span class="text-on-surface">Pedido #SC-88421</span>
              </nav>
              <h1 class="font-headline-lg text-headline-lg text-primary mb-2">Pedido #SC-88421</h1>
              <p class="font-body-md text-body-md text-on-surface-variant max-w-xl">Realizado em 14 de Outubro, 2023. Agradecemos pela sua confiança na Smart Coffee Brasil.</p>
            </div>
            <div class="bg-surface-container-low p-6 rounded-xl border border-tertiary-fixed-dim/30 flex flex-col items-center md:items-end">
              <span class="font-label-sm text-label-sm text-on-surface-variant uppercase mb-1">Data prevista de entrega</span>
              <span class="font-headline-md text-headline-md text-tertiary-fixed-dim">22 Out - 25 Out</span>
            </div>
          </div>
        </section>

        <!-- Stepper Component -->
        <section class="mb-16 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-outline-variant/10">
          <div class="relative flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-8 md:gap-0">
            <!-- Connectors for Desktop -->
            <div class="hidden md:block absolute top-1/2 left-0 w-full h-[2px] -translate-y-[22px] px-12 z-0">
              <div class="w-full h-full stepper-line relative">
                <div class="absolute top-0 left-0 h-full stepper-line-active" style="width: 25%;"></div>
              </div>
            </div>

            <!-- Step 1: Completed -->
            <div class="relative z-10 flex md:flex-col items-center gap-4 md:gap-4">
              <div class="w-12 h-12 rounded-full bg-tertiary-fixed-dim text-on-tertiary-fixed flex items-center justify-center shadow-md ring-4 ring-white">
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">check_circle</span>
              </div>
              <div class="flex flex-col md:items-center">
                <span class="font-label-md text-label-md text-on-surface">Pedido feito</span>
                <span class="font-label-sm text-label-sm text-outline">14 Out, 14:20</span>
              </div>
            </div>

            <!-- Step 2: Pending -->
            <div class="relative z-10 flex md:flex-col items-center gap-4 md:gap-4">
              <div class="w-12 h-12 rounded-full bg-surface-container-high text-outline flex items-center justify-center ring-4 ring-white">
                <span class="material-symbols-outlined">inventory_2</span>
              </div>
              <div class="flex flex-col md:items-center">
                <span class="font-label-md text-label-md text-outline">Pedido em produção</span>
                <span class="font-label-sm text-label-sm text-outline-variant italic">Aguardando</span>
              </div>
            </div>

            <!-- Step 3: Pending -->
            <div class="relative z-10 flex md:flex-col items-center gap-4 md:gap-4">
              <div class="w-12 h-12 rounded-full bg-surface-container-high text-outline flex items-center justify-center ring-4 ring-white">
                <span class="material-symbols-outlined">local_shipping</span>
              </div>
              <div class="flex flex-col md:items-center">
                <span class="font-label-md text-label-md text-outline">Expedição</span>
                <span class="font-label-sm text-label-sm text-outline-variant italic">Pendente</span>
              </div>
            </div>

            <!-- Step 4: Pending -->
            <div class="relative z-10 flex md:flex-col items-center gap-4 md:gap-4">
              <div class="w-12 h-12 rounded-full bg-surface-container-high text-outline flex items-center justify-center ring-4 ring-white">
                <span class="material-symbols-outlined">home_pin</span>
              </div>
              <div class="flex flex-col md:items-center">
                <span class="font-label-md text-label-md text-outline">Entrega</span>
                <span class="font-label-sm text-label-sm text-outline-variant italic">Pendente</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Details Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          <!-- Left: Products List -->
          <div class="lg:col-span-2 space-y-6">
            <h3 class="font-headline-md text-headline-md text-primary px-2">Itens do Pedido</h3>

            <!-- Product Card 1 -->
            <div *ngFor="let item of orderItems" class="bg-white p-6 rounded-xl border border-outline-variant/10 flex gap-6 items-center group hover:shadow-md transition-shadow">
              <div class="w-24 h-24 bg-surface-container-low rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center">
                <span class="material-symbols-outlined text-[48px] text-primary opacity-30" style="font-variation-settings: 'FILL' 1;">{{item.icon}}</span>
              </div>
              <div class="flex-grow">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-label-md text-label-md text-on-surface">{{item.name}}</h4>
                    <p class="font-label-sm text-label-sm text-outline">Compatível: {{item.compatibility}}</p>
                  </div>
                  <span class="font-label-md text-label-md text-primary">{{item.price}}</span>
                </div>
                <div class="mt-4 flex justify-between items-center">
                  <span class="font-body-md text-body-md text-on-surface-variant">Qtd: {{item.qty}}</span>
                  <button class="text-tertiary-fixed-dim font-label-sm text-label-sm hover:underline">Ver detalhes do produto</button>
                </div>
              </div>
            </div>

            <!-- Support CTA -->
            <div class="bg-surface-container-low p-8 rounded-xl border-2 border-dashed border-outline-variant/50 flex flex-col items-center text-center">
              <span class="material-symbols-outlined text-outline-variant text-[48px] mb-4">support_agent</span>
              <h5 class="font-label-md text-label-md text-on-surface mb-2">Dúvidas sobre o pedido?</h5>
              <p class="font-body-md text-body-md text-on-surface-variant mb-6">Nosso concierge está pronto para ajudar você com qualquer informação adicional.</p>
              <button class="px-8 py-3 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity">Falar com Concierge</button>
            </div>
          </div>

          <!-- Right: Summary and Address -->
          <div class="space-y-6">
            <!-- Summary Card -->
            <div class="bg-white p-8 rounded-xl border border-outline-variant/10 shadow-sm">
              <h3 class="font-headline-md text-headline-md text-primary mb-6">Resumo</h3>
              <div class="space-y-4 font-body-md text-body-md">
                <div class="flex justify-between">
                  <span class="text-on-surface-variant">Subtotal</span>
                  <span class="text-on-surface font-medium">R$ 218,00</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-on-surface-variant">Entrega (Expressa)</span>
                  <span class="text-on-surface font-medium">R$ 25,00</span>
                </div>
                <div class="flex justify-between text-error">
                  <span class="text-on-surface-variant">Desconto Cupom</span>
                  <span class="font-medium">- R$ 15,00</span>
                </div>
                <div class="pt-4 border-t border-outline-variant/20 flex justify-between items-baseline">
                  <span class="font-label-md text-label-md text-primary uppercase">Total</span>
                  <span class="font-headline-md text-headline-md text-primary">R$ 228,00</span>
                </div>
              </div>
              <div class="mt-8 pt-6 border-t border-outline-variant/20">
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-outline">credit_card</span>
                  <div>
                    <p class="font-label-sm text-label-sm text-on-surface-variant uppercase">Pagamento</p>
                    <p class="font-body-md text-body-md text-on-surface">Cartão Visa &bull;&bull;&bull;&bull; 4412</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Shipping Address Card -->
            <div class="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
              <h3 class="font-label-md text-label-md text-primary mb-4 flex items-center gap-2">
                <span class="material-symbols-outlined text-[20px]">location_on</span>
                Endereço de Entrega
              </h3>
              <div class="font-body-md text-body-md text-on-surface-variant space-y-1">
                <p class="font-medium text-on-surface">Roberto Mendes de Oliveira</p>
                <p>Avenida Brigadeiro Faria Lima, 2232</p>
                <p>Andar 4, Sala 402 - Itaim Bibi</p>
                <p>São Paulo, SP - 01451-000</p>
              </div>
              <div class="mt-6 flex gap-4">
                <button class="flex-1 bg-white border border-outline-variant py-2 rounded-lg font-label-sm text-label-sm hover:bg-surface transition-colors">Copiar Rastreio</button>
                <button class="flex-1 bg-white border border-outline-variant py-2 rounded-lg font-label-sm text-label-sm hover:bg-surface transition-colors">Segunda Via NF</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <app-footer></app-footer>
    </div>
  `
})
export class OrderTrackingComponent {
  orderItems = [
    { name: 'Filtro Oster - 400 un', compatibility: 'BVSTDC4401RD', price: 'R$ 129,00', qty: 1, icon: 'coffee' },
    { name: 'Filtro Bravilor B10 - 250 un', compatibility: 'Modelo B10 / B20', price: 'R$ 89,00', qty: 1, icon: 'local_cafe' },
  ];
}
