import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { mockSubmitForm } from '../mock';
import { toast } from './ui/sonner';

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await mockSubmitForm(formData);
      toast.success("Sucesso!", {
        description: "Recebemos seu contato! Em breve entraremos em contato para agendar sua consultoria gratuita.",
      });
      
      // Reset form
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        empresa: '',
        mensagem: ''
      });
    } catch (error) {
      toast.error("Erro", {
        description: "Ocorreu um erro ao enviar. Tente novamente."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Agende sua <span className="text-[#E74C3C]">Consultoria Gratuita</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Preencha estes dados e faremos um agendamento gratuito para um call de uma hora já dando ideias do que você precisa fazer em marketing para sua empresa
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nome */}
            <div className="space-y-2">
              <Label htmlFor="nome" className="text-gray-700 font-medium">
                Nome Completo *
              </Label>
              <Input
                id="nome"
                name="nome"
                type="text"
                required
                value={formData.nome}
                onChange={handleChange}
                placeholder="Seu nome"
                className="w-full border-gray-300 focus:border-[#E74C3C] focus:ring-[#E74C3C]"
              />
            </div>

            {/* Email and Telefone - Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  E-mail *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full border-gray-300 focus:border-[#E74C3C] focus:ring-[#E74C3C]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefone" className="text-gray-700 font-medium">
                  Telefone/WhatsApp *
                </Label>
                <Input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  required
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  className="w-full border-gray-300 focus:border-[#E74C3C] focus:ring-[#E74C3C]"
                />
              </div>
            </div>

            {/* Empresa */}
            <div className="space-y-2">
              <Label htmlFor="empresa" className="text-gray-700 font-medium">
                Empresa *
              </Label>
              <Input
                id="empresa"
                name="empresa"
                type="text"
                required
                value={formData.empresa}
                onChange={handleChange}
                placeholder="Nome da sua empresa"
                className="w-full border-gray-300 focus:border-[#E74C3C] focus:ring-[#E74C3C]"
              />
            </div>

            {/* Mensagem */}
            <div className="space-y-2">
              <Label htmlFor="mensagem" className="text-gray-700 font-medium">
                Mensagem
              </Label>
              <Textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                placeholder="Conte-nos um pouco sobre suas necessidades e objetivos..."
                rows={4}
                className="w-full border-gray-300 focus:border-[#E74C3C] focus:ring-[#E74C3C] resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#E74C3C] hover:bg-[#C0392B] text-white py-6 text-lg font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Enviando...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Solicitar Consultoria Gratuita
                </span>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};