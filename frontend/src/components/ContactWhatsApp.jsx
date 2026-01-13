import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { contactInfo } from '../data/whatsapp-lead-data';
import { toast } from 'sonner';

export const ContactWhatsApp = () => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    whatsapp: '',
    assunto: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ nome: '', empresa: '', email: '', whatsapp: '', assunto: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact-section" className="py-20 bg-black relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(220, 38, 38, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.2) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Entre em Contato</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6 shadow-[0_0_20px_rgba(220,38,38,0.5)]" />
            <p className="text-xl text-gray-300">
              Preencha o formulário e nossa equipe entrará em contato em breve
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Informações</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-600/20 border border-red-600/30 rounded-lg flex items-center justify-center text-red-500 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-white">Telefone</p>
                      <a href={`tel:${contactInfo.phoneLink}`} className="text-gray-400 hover:text-red-500 transition-colors">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-600/20 border border-red-600/30 rounded-lg flex items-center justify-center text-red-500 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-white">Email</p>
                      <a href={`mailto:${contactInfo.email}`} className="text-gray-400 hover:text-red-500 transition-colors">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-600/20 border border-red-600/30 rounded-lg flex items-center justify-center text-red-500 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-white">Localização</p>
                      <p className="text-gray-400">{contactInfo.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-600/10 border-l-4 border-red-600 p-6 backdrop-blur-sm rounded-r-lg">
                <p className="text-gray-300">
                  <strong className="text-white">Atendimento online 24/7</strong>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold text-white mb-2 tracking-wide">
                    Nome Completo *
                  </label>
                  <Input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="h-12 bg-red-950/30 border-red-900/30 text-white placeholder:text-gray-400 focus:border-red-600 focus:ring-red-600/20 hover:border-red-600/50 hover:bg-red-950/40 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="empresa" className="block text-sm font-semibold text-white mb-2 tracking-wide">
                    Empresa *
                  </label>
                  <Input
                    id="empresa"
                    name="empresa"
                    type="text"
                    required
                    value={formData.empresa}
                    onChange={handleChange}
                    placeholder="Nome da sua empresa"
                    className="h-12 bg-red-950/30 border-red-900/30 text-white placeholder:text-gray-400 focus:border-red-600 focus:ring-red-600/20 hover:border-red-600/50 hover:bg-red-950/40 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2 tracking-wide">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="h-12 bg-red-950/30 border-red-900/30 text-white placeholder:text-gray-400 focus:border-red-600 focus:ring-red-600/20 hover:border-red-600/50 hover:bg-red-950/40 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-semibold text-white mb-2 tracking-wide">
                    WhatsApp *
                  </label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className="h-12 bg-red-950/30 border-red-900/30 text-white placeholder:text-gray-400 focus:border-red-600 focus:ring-red-600/20 hover:border-red-600/50 hover:bg-red-950/40 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="assunto" className="block text-sm font-semibold text-white mb-2 tracking-wide">
                    Mensagem / Assunto *
                  </label>
                  <Textarea
                    id="assunto"
                    name="assunto"
                    required
                    value={formData.assunto}
                    onChange={handleChange}
                    placeholder="Conte-nos sobre seu projeto ou necessidade..."
                    rows={5}
                    className="resize-none bg-red-950/30 border-red-900/30 text-white placeholder:text-gray-400 focus:border-red-600 focus:ring-red-600/20 hover:border-red-600/50 hover:bg-red-950/40 transition-all"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 text-white h-12 text-lg font-semibold shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:shadow-[0_0_40px_rgba(220,38,38,0.6)] transition-all"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    <>Enviar Mensagem</>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
