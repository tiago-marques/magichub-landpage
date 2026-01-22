import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
      <div class="max-w-4xl mx-auto px-4 py-12">
        <h1 class="text-4xl font-bold mb-8">Política de Privacidade</h1>
        
        <div class="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 class="text-2xl font-bold mt-8 mb-4">1. Introdução</h2>
            <p>
              Esta Política de Privacidade descreve como a nossa empresa coleta, utiliza, compartilha e protege as informações pessoais que você nos fornece através do nosso site e serviços. Estamos comprometidos em proteger sua privacidade e garantir que você tenha uma experiência positiva em nossa plataforma.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold mt-8 mb-4">2. Informações que Coletamos</h2>
            <p>Coletamos informações de várias maneiras:</p>
            <ul class="list-disc pl-6 space-y-2">
              <li><strong>Informações fornecidas diretamente:</strong> Nome, email, telefone e outras informações que você voluntariamente compartilha conosco</li>
              <li><strong>Informações de navegação:</strong> Dados sobre como você interage com nosso site, incluindo páginas visitadas, tempo gasto e ações realizadas</li>
              <li><strong>Informações técnicas:</strong> Endereço IP, tipo de navegador, sistema operacional e cookies</li>
              <li><strong>Informações de localização:</strong> Dados de localização aproximados com base no seu endereço IP</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold mt-8 mb-4">3. Como Usamos Suas Informações</h2>
            <p>Usamos as informações coletadas para:</p>
            <ul class="list-disc pl-6 space-y-2">
              <li>Fornecer, manter e melhorar nossos serviços</li>
              <li>Personalizar sua experiência e oferecer conteúdo relevante</li>
              <li>Comunicar-se com você sobre atualizações, promoções e ofertas especiais</li>
              <li>Analisar tendências e monitorar o funcionamento do site</li>
              <li>Cumprir obrigações legais e regulatórias</li>
              <li>Prevenir fraude e proteger a segurança da plataforma</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold mt-8 mb-4">4. Compartilhamento de Informações</h2>
            <p>
              Não vendemos suas informações pessoais para terceiros. Podemos compartilhar informações com:
            </p>
            <ul class="list-disc pl-6 space-y-2">
              <li>Prestadores de serviços que auxiliam no funcionamento de nossa plataforma</li>
              <li>Autoridades legais quando exigido por lei</li>
              <li>Parceiros comerciais (apenas com seu consentimento)</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold mt-8 mb-4">5. Segurança de Dados</h2>
            <p>
              Implementamos medidas de segurança técnicas, administrativas e físicas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela internet ou armazenamento eletrônico é 100% seguro.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold mt-8 mb-4">6. Cookies e Tecnologias de Rastreamento</h2>
            <p>
              Utilizamos cookies e tecnologias similares para melhorar sua experiência, analisar o uso do site e personalizar conteúdo. Você pode controlar as preferências de cookies através das configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold mt-8 mb-4">7. Seus Direitos</h2>
            <p>Você tem o direito de:</p>
            <ul class="list-disc pl-6 space-y-2">
              <li>Acessar suas informações pessoais</li>
              <li>Corrigir informações imprecisas</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Optar por não receber comunicações de marketing</li>
              <li>Solicitar a portabilidade de seus dados</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold mt-8 mb-4">8. Retenção de Dados</h2>
            <p>
              Reteremos suas informações pessoais pelo tempo necessário para fornecer nossos serviços e cumprir as obrigações legais. Você pode solicitar a exclusão de seus dados a qualquer momento.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold mt-8 mb-4">9. Links para Terceiros</h2>
            <p>
              Nosso site pode conter links para sites de terceiros. Não somos responsáveis pelas práticas de privacidade desses sites. Recomendamos que você revise suas políticas de privacidade antes de fornecer informações pessoais.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold mt-8 mb-4">10. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. As alterações significativas serão comunicadas através de aviso em nossa plataforma. Seu uso continuado do site após as alterações constitui sua aceitação da Política de Privacidade atualizada.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold mt-8 mb-4">11. Contato</h2>
            <p>
              Se você tiver dúvidas sobre esta Política de Privacidade ou desejar exercer seus direitos, entre em contato conosco:
            </p>
            <div class="mt-4 p-4 bg-gray-100 rounded-lg">
              <p><strong>Email:</strong> privacidade@magichub.com</p>
              <p><strong>Endereço:</strong> [Seu endereço aqui]</p>
              <p><strong>Telefone:</strong> [Seu telefone aqui]</p>
            </div>
          </section>

          <section>
            <p class="text-sm text-gray-600 mt-8">
              <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
            </p>
          </section>
        </div>
      </div>
  );
});
