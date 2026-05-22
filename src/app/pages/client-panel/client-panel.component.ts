import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-client-panel',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent, FooterComponent],
  styles: [],
  template: `
    <div class="bg-background text-on-background font-body-md">
      <app-navbar></app-navbar>

      <main class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 pt-28">
        <!-- Welcome Section -->
        <section class="mb-12">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 class="font-headline-lg text-headline-lg text-primary mb-2">Olá, Ricardo!</h1>
              <p class="text-on-surface-variant text-body-lg">Seja bem-vindo de volta à sua área exclusiva de café profissional.</p>
            </div>
            <div class="flex gap-4">
              <a [routerLink]="['/catalogo']" class="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-md hover:opacity-90 transition-opacity flex items-center gap-2">
                <span class="material-symbols-outlined text-sm">add_shopping_cart</span>
                Nova Compra
              </a>
              <button class="border border-outline text-primary px-6 py-3 rounded-lg font-label-md hover:bg-surface-container-low transition-colors">
                Sair
              </button>
            </div>
          </div>
        </section>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <!-- Tracking & Summary (Bento Left) -->
          <div class="md:col-span-8 space-y-gutter">
            <!-- Active Order Tracking Widget -->
            <div class="bg-surface-container rounded-xl p-8 shadow-sm border border-outline-variant/30 relative overflow-hidden">
              <div class="absolute top-0 right-0 p-4 opacity-10">
                <span class="material-symbols-outlined text-9xl">local_shipping</span>
              </div>
              <div class="flex items-center gap-3 mb-6">
                <div class="w-3 h-3 bg-tertiary-fixed-dim rounded-full active-dot"></div>
                <h2 class="font-headline-md text-headline-md text-primary">Pedido em Andamento</h2>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                <div>
                  <p class="font-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Número do Pedido</p>
                  <p class="font-headline-md text-headline-md text-primary">#SCB-98442-2024</p>
                  <div class="mt-6 flex items-center gap-4">
                    <div class="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-xs font-bold">
                      Status: Pedido feito
                    </div>
                    <span class="text-on-surface-variant text-sm">Realizado em 12/05/2024</span>
                  </div>
                </div>
                <div class="flex flex-col justify-between">
                  <div class="space-y-4">
                    <div class="flex items-center gap-4">
                      <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary">
                        <span class="material-symbols-outlined text-xl">check</span>
                      </div>
                      <div class="flex-1">
                        <div class="h-1 bg-primary w-full rounded-full"></div>
                        <p class="font-label-sm mt-2 text-primary">Pedido Feito</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-4">
                      <div class="w-10 h-10 rounded-full bg-surface-container-high border-2 border-outline-variant flex items-center justify-center text-outline-variant">
                        <span class="material-symbols-outlined text-xl">inventory_2</span>
                      </div>
                      <div class="flex-1">
                        <div class="h-1 bg-surface-container-highest w-full rounded-full"></div>
                        <p class="font-label-sm mt-2 text-outline">Preparando Envio</p>
                      </div>
                    </div>
                  </div>
                  <a [routerLink]="['/acompanhamento']" class="mt-6 text-primary font-bold flex items-center gap-2 group">
                    Ver detalhes completos
                    <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Bento Grid Content Bottom -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
              <!-- Quick Link: Favorite Products -->
              <div class="card-hover bg-surface-container-low p-6 rounded-xl border border-outline-variant/20 hover:shadow-md transition-shadow group cursor-pointer">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">favorite</span>
                  </div>
                  <span class="material-symbols-outlined text-outline-variant">open_in_new</span>
                </div>
                <h3 class="font-headline-md text-headline-md text-primary mb-2">Meus Favoritos</h3>
                <p class="text-on-surface-variant text-sm mb-4">Acesse rapidamente os filtros e acessórios que você mais compra.</p>
                <div class="flex -space-x-3">
                  <div class="w-10 h-10 rounded-full bg-surface-container-high border-2 border-surface-container-low flex items-center justify-center">
                    <span class="material-symbols-outlined text-primary text-sm">coffee</span>
                  </div>
                  <div class="w-10 h-10 rounded-full bg-surface-container-high border-2 border-surface-container-low flex items-center justify-center">
                    <span class="material-symbols-outlined text-primary text-sm">local_cafe</span>
                  </div>
                  <div class="w-10 h-10 rounded-full bg-secondary-container border-2 border-surface-container-low flex items-center justify-center text-[10px] font-bold text-on-secondary-container">+4</div>
                </div>
              </div>

              <!-- Quick Link: My Orders -->
              <div class="card-hover bg-surface-container-low p-6 rounded-xl border border-outline-variant/20 hover:shadow-md transition-shadow group cursor-pointer">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span class="material-symbols-outlined text-primary">history</span>
                  </div>
                  <span class="material-symbols-outlined text-outline-variant">open_in_new</span>
                </div>
                <h3 class="font-headline-md text-headline-md text-primary mb-2">Histórico</h3>
                <p class="text-on-surface-variant text-sm mb-4">Visualize seus pedidos anteriores e repita compras em um clique.</p>
                <div class="flex items-center gap-2">
                  <span class="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Última compra:</span>
                  <span class="text-xs bg-secondary-container px-2 py-0.5 rounded">R$ 249,90</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar Info (Bento Right) -->
          <div class="md:col-span-4 space-y-gutter">
            <!-- Account Profile Card -->
            <div class="bg-white p-8 rounded-xl shadow-sm border border-outline-variant/10">
              <div class="text-center mb-6">
                <div class="w-24 h-24 rounded-full bg-surface-container-highest mx-auto mb-4 border-4 border-surface-container flex items-center justify-center overflow-hidden">
                  <span class="material-symbols-outlined text-[48px] text-outline-variant" style="font-variation-settings: 'FILL' 1;">account_circle</span>
                </div>
                <h4 class="font-headline-md text-headline-md text-primary">Ricardo Mendes</h4>
                <p class="text-on-surface-variant text-sm">Cliente VIP desde 2022</p>
              </div>
              <div class="space-y-4 border-t border-outline-variant/20 pt-6">
                <a href="#" class="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors py-2">
                  <span class="material-symbols-outlined text-lg">person_edit</span>
                  <span class="font-label-md">Dados da Conta</span>
                </a>
                <a href="#" class="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors py-2">
                  <span class="material-symbols-outlined text-lg">location_on</span>
                  <span class="font-label-md">Meus Endereços</span>
                </a>
                <a href="#" class="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors py-2">
                  <span class="material-symbols-outlined text-lg">credit_card</span>
                  <span class="font-label-md">Cartões Salvos</span>
                </a>
                <a href="#" class="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors py-2">
                  <span class="material-symbols-outlined text-lg">lock</span>
                  <span class="font-label-md">Privacidade e Senha</span>
                </a>
              </div>
            </div>

            <!-- Support Widget -->
            <div class="bg-primary text-on-primary p-6 rounded-xl relative overflow-hidden group">
              <div class="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
                <span class="material-symbols-outlined text-8xl">support_agent</span>
              </div>
              <h5 class="font-headline-md text-headline-md mb-2">Precisa de Ajuda?</h5>
              <p class="text-on-primary-container text-sm mb-6">Fale com nosso concierge especializado em compatibilidade de filtros.</p>
              <button class="w-full bg-tertiary-fixed text-on-tertiary-fixed font-bold py-3 rounded-lg hover:brightness-110 transition-all">
                Iniciar Atendimento
              </button>
            </div>
          </div>
        </div>

        <!-- Featured Compatibility Recommendation -->
        <section class="mt-16 bg-surface-container-high/40 p-10 rounded-2xl border border-outline-variant/30 flex flex-col lg:flex-row items-center gap-12">
          <div class="lg:w-1/3 flex items-center justify-center">
            <div class="w-48 h-48 bg-surface-container rounded-xl flex items-center justify-center">
              <span class="material-symbols-outlined text-[80px] text-primary opacity-30" style="font-variation-settings: 'FILL' 1;">coffee_maker</span>
            </div>
          </div>
          <div class="lg:w-2/3">
            <span class="bg-primary text-on-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Recomendação Baseada na sua Máquina</span>
            <h2 class="font-headline-lg text-headline-lg text-primary mb-4 italic">O par perfeito para sua Oster BVSTDC4401RD</h2>
            <p class="text-on-surface-variant text-body-lg mb-8 max-w-2xl">Identificamos que seu estoque de Filtros de Papel 400un pode estar baixo. Garanta o melhor fluxo de extração com nossa tecnologia de filtragem profissional.</p>
            <div class="flex flex-wrap gap-4">
              <a [routerLink]="['/catalogo']" class="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform">Comprar Novamente</a>
              <a [routerLink]="['/catalogo']" class="text-primary font-bold flex items-center gap-2 group px-4">
                Ver detalhes técnicos
                <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <app-footer></app-footer>
    </div>
  `
})
export class ClientPanelComponent {}
