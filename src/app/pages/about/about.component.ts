import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent, FooterComponent],
  styles: [],
  template: `
    <div class="bg-background font-body-md overflow-x-hidden">
      <app-navbar></app-navbar>

      <main>
        <!-- Hero Section: Editorial Intro -->
        <section class="relative h-[614px] min-h-[500px] flex items-center overflow-hidden bg-primary pt-16">
          <div class="absolute inset-0">
            <div class="absolute inset-0" style="background: linear-gradient(to right, rgba(19, 8, 5, 0.9) 0%, rgba(19, 8, 5, 0.4) 100%);"></div>
          </div>
          <div class="relative px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full text-on-primary">
            <div class="max-w-2xl">
              <span class="font-label-md text-label-md uppercase tracking-[0.2em] text-tertiary-fixed mb-4 block">A Nossa Essência</span>
              <h1 class="font-display-lg text-display-lg leading-tight mb-6">Excelência em cada gota.</h1>
              <p class="font-body-lg text-body-lg text-secondary-fixed opacity-90 leading-relaxed mb-8">
                Na Smart Coffee Brasil, acreditamos que a filtragem não é apenas uma etapa técnica, mas a alma de um café excepcional. Elevamos o padrão da indústria brasileira com engenharia de precisão.
              </p>
            </div>
          </div>
        </section>

        <!-- Mission & Values: Bento Grid -->
        <section class="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <!-- Main Mission Card -->
            <div class="md:col-span-7 bg-surface-container-low p-12 rounded-xl border border-outline-variant/10 flex flex-col justify-between group hover:shadow-lg transition-all duration-500">
              <div>
                <h2 class="font-headline-lg text-headline-lg mb-6">Nossa Missão</h2>
                <p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Prover soluções de filtragem profissional que respeitem a complexidade do grão brasileiro. Nossa meta é democratizar a alta performance, garantindo que cada cafeteria, do pequeno produtor à grande rede, alcance a xícara perfeita com consistência matemática.
                </p>
              </div>
              <div class="mt-12 flex items-center gap-4 border-t border-outline-variant/20 pt-8">
                <div class="w-12 h-12 bg-primary flex items-center justify-center rounded-full text-on-primary">
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">verified</span>
                </div>
                <div>
                  <p class="font-label-md text-label-md text-primary">Qualidade Certificada</p>
                  <p class="text-sm text-on-surface-variant">Padrão internacional, coração brasileiro.</p>
                </div>
              </div>
            </div>

            <!-- Secondary Value Card -->
            <div class="md:col-span-5 bg-primary p-10 rounded-xl text-on-primary flex flex-col justify-center relative overflow-hidden">
              <div class="relative z-10">
                <h3 class="font-headline-md text-headline-md text-tertiary-fixed mb-4">Apoio à Indústria</h3>
                <p class="font-body-md text-body-md opacity-80 mb-6">
                  Nascemos da necessidade de um suporte técnico real para o mercado nacional. Oferecemos mais que produtos; entregamos consultoria em compatibilidade.
                </p>
                <a [routerLink]="['/catalogo']" class="inline-flex items-center gap-2 font-label-md text-label-md text-tertiary-fixed-dim hover:gap-4 transition-all">
                  SAIBA MAIS <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
              <div class="absolute -bottom-10 -right-10 opacity-10">
                <span class="material-symbols-outlined text-[180px]">coffee_maker</span>
              </div>
            </div>

            <!-- Three smaller cards -->
            <div *ngFor="let value of coreValues" class="md:col-span-4 bg-surface-container p-8 rounded-xl border border-outline-variant/10 hover:border-tertiary-fixed-dim transition-colors group">
              <span class="material-symbols-outlined text-tertiary-fixed-dim mb-4 text-3xl">{{value.icon}}</span>
              <h4 class="font-headline-md text-headline-md mb-2">{{value.title}}</h4>
              <p class="font-body-md text-body-md text-on-surface-variant">{{value.description}}</p>
            </div>
          </div>
        </section>

        <!-- Quality Standards: Editorial Layout -->
        <section class="py-24 bg-surface-container-low overflow-hidden">
          <div class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row items-center gap-16">
            <div class="w-full md:w-1/2 relative">
              <div class="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative z-10 bg-surface-container-high flex items-center justify-center">
                <span class="material-symbols-outlined text-[120px] text-primary opacity-20" style="font-variation-settings: 'FILL' 1;">science</span>
              </div>
              <div class="absolute -top-8 -left-8 w-48 h-48 border-[1px] border-tertiary-fixed-dim/30 rounded-full animate-pulse"></div>
              <div class="absolute -bottom-8 -right-8 w-64 h-64 border-[1px] border-primary/10 rounded-full"></div>
            </div>
            <div class="w-full md:w-1/2 space-y-8">
              <h2 class="font-headline-lg text-headline-lg">Padrões de Qualidade: O Rigor que nos Define.</h2>
              <div class="space-y-6">
                <div *ngFor="let standard of qualityStandards" class="flex gap-4">
                  <span class="font-headline-md text-tertiary-fixed-dim">{{standard.number}}</span>
                  <div>
                    <h5 class="font-label-md text-label-md text-primary mb-2">{{standard.title}}</h5>
                    <p class="text-on-surface-variant leading-relaxed">{{standard.description}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Contact Section -->
        <section class="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div class="bg-white rounded-2xl shadow-sm border border-outline-variant/10 overflow-hidden flex flex-col md:flex-row">
            <div class="w-full md:w-2/5 bg-primary p-12 text-on-primary">
              <h3 class="font-headline-lg text-headline-lg mb-8">Fale Conosco</h3>
              <p class="font-body-md text-body-md opacity-80 mb-12">Dúvidas sobre compatibilidade ou pedidos em atacado? Nossa equipe de concierges está pronta para ajudar.</p>
              <div class="space-y-6">
                <div *ngFor="let contact of contactInfo" class="flex items-center gap-4 group">
                  <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-tertiary-fixed-dim transition-colors">
                    <span class="material-symbols-outlined text-[20px] group-hover:text-primary">{{contact.icon}}</span>
                  </div>
                  <span class="font-label-md">{{contact.value}}</span>
                </div>
              </div>
            </div>
            <div class="w-full md:w-3/5 p-12">
              <form class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label class="font-label-sm text-on-surface-variant uppercase">Nome Completo</label>
                    <input class="w-full bg-surface-container border-none rounded-lg px-4 py-3 focus:ring-1 focus:ring-tertiary-fixed-dim" placeholder="Ex: João Silva" type="text"/>
                  </div>
                  <div class="space-y-2">
                    <label class="font-label-sm text-on-surface-variant uppercase">E-mail Corporativo</label>
                    <input class="w-full bg-surface-container border-none rounded-lg px-4 py-3 focus:ring-1 focus:ring-tertiary-fixed-dim" placeholder="joao@suaempresa.com" type="email"/>
                  </div>
                </div>
                <div class="space-y-2">
                  <label class="font-label-sm text-on-surface-variant uppercase">Assunto</label>
                  <select class="w-full bg-surface-container border-none rounded-lg px-4 py-3 focus:ring-1 focus:ring-tertiary-fixed-dim">
                    <option>Dúvida sobre Compatibilidade</option>
                    <option>Orçamento para Atacado</option>
                    <option>Suporte Pós-Venda</option>
                    <option>Outros</option>
                  </select>
                </div>
                <div class="space-y-2">
                  <label class="font-label-sm text-on-surface-variant uppercase">Mensagem</label>
                  <textarea class="w-full bg-surface-container border-none rounded-lg px-4 py-3 focus:ring-1 focus:ring-tertiary-fixed-dim" placeholder="Como podemos ajudar você hoje?" rows="4"></textarea>
                </div>
                <button class="w-full bg-tertiary-fixed-dim text-primary font-bold py-4 rounded-lg hover:brightness-110 transition-all active:scale-[0.98]" type="submit">
                  ENVIAR MENSAGEM
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <app-footer></app-footer>
    </div>
  `
})
export class AboutComponent {
  coreValues = [
    { icon: 'precision_manufacturing', title: 'Engenharia', description: 'Fibras selecionadas para uma extração uniforme, sem resíduos amargos.' },
    { icon: 'eco', title: 'Sustentabilidade', description: 'Processos de branqueamento livre de oxigênio e compostagem simplificada.' },
    { icon: 'support_agent', title: 'Suporte 24h', description: 'Concierge dedicado para frotas de máquinas profissionais e eventos.' },
  ];

  qualityStandards = [
    { number: '01.', title: 'Micro-Porosidade Controlada', description: 'Cada lote é testado para garantir que a passagem da água ocorra no tempo exato, permitindo que os óleos essenciais passem enquanto retém sedimentos indesejados.' },
    { number: '02.', title: 'Compatibilidade Universal', description: 'Nossa base de dados contém mais de 500 modelos de cafeteiras industriais e domésticas, garantindo o "Verified Fit" em cada compra.' },
    { number: '03.', title: 'Origem Certificada', description: 'Trabalhamos apenas com celulose de reflorestamento e parceiros que compartilham nossa visão de baixo impacto ambiental.' },
  ];

  contactInfo = [
    { icon: 'mail', value: 'contato@smartcoffeebrasil.com.br' },
    { icon: 'call', value: '(11) 9999-9999' },
    { icon: 'location_on', value: 'São Paulo, SP - Brasil' },
  ];
}
