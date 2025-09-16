import React, { useState, useEffect } from 'react';
import { Truck, Package, Globe, Phone, Mail, MapPin, Menu, X, ArrowRight, Star, Shield, Clock } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll spy para destacar seção ativa
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'fleet', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const fleetData = [
    {
      brand: 'Mercedes-Benz',
      model: 'Actros 2651',
      category: 'Contêineres',
      capacity: '26 toneladas',
      image: 'https://production.autoforce.com/uploads/used_model/profile_image/24455910/model_main_webp_comprar-actros-2651-mp5-s-2828_aa0a2bf572.jpg.webp',
      features: ['GPS Tracking', 'Sistema de Segurança', 'Baixo Consumo']
    },
    {
      brand: 'Scania',
      model: 'R 450',
      category: 'Cargas Soltas',
      capacity: '24 toneladas',
      image: 'https://img.olx.com.br/images/91/914566162945466.jpg',
      features: ['Cabine Ergonômica', 'Motor Eficiente', 'Rastreamento 24h']
    },
    {
      brand: 'Volvo',
      model: 'FH 540',
      category: 'Granel',
      capacity: '28 toneladas',
      image: 'https://img.olx.com.br/images/71/711346693096194.jpg',
      features: ['Sistema Anti-Colisão', 'Conforto Premium', 'Telemetria Avançada']
    },
    {
      brand: 'Mercedes-Benz',
      model: 'Axor',
      category: 'Cargas Urbanas',
      capacity: '17 toneladas',
      image: 'https://fotos-estradao-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2025/07/15111133/Axor-Abre-1160x774.jpg',
      features: ['Manobralidade Urbana', 'Baixa Emissão', 'Economia de Combustível']
    },
    {
      brand: 'Scania',
      model: 'G 410',
      category: 'Longa Distância',
      capacity: '25 toneladas',
      image: 'https://s3.ecompletocarros.dev/images/lojas/186/veiculos/194125/veiculoInfoVeiculoImagesMobile/vehicle_image_1718109488_06e80e27b134169ae7332e0f538e0d2e.jpeg',
      features: ['Cabine Sleeper', 'Cruise Control', 'Sistema de Navegação']
    },
    {
      brand: 'Volvo',
      model: 'FM 370',
      category: 'Multifuncional',
      capacity: '22 toneladas',
      image: 'https://http2.mlstatic.com/D_NQ_NP_840144-MLB84680227668_052025-O.webp',
      features: ['Versátil', 'Manutenção Fácil', 'Alta Durabilidade']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2 rounded-xl">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  LogiTrans
                </h1>
                <p className="text-xs text-gray-600 font-medium">PREMIUM TRANSPORT</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['home', 'about', 'services', 'fleet', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium transition-colors duration-200 ${
                    activeSection === item
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item === 'home' ? 'Início' : 
                   item === 'about' ? 'Sobre' : 
                   item === 'services' ? 'Serviços' : 
                   item === 'fleet' ? 'Frota' : 'Contato'}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {['home', 'about', 'services', 'fleet', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 capitalize"
                >
                  {item === 'home' ? 'Início' : 
                   item === 'about' ? 'Sobre' : 
                   item === 'services' ? 'Serviços' : 
                   item === 'fleet' ? 'Frota' : 'Contato'}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Transporte
                  <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    Premium
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 max-w-2xl">
                  Especialistas em transporte de contêineres, cargas soltas e granel com a maior frota premium do Brasil
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span>Nossos Serviços</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToSection('fleet')}
                  className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
                >
                  Ver Nossa Frota
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://images.pexels.com/photos/1823675/pexels-photo-1823675.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                  alt="Frota LogiTrans Premium"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <Star className="h-8 w-8 text-yellow-400 fill-current" />
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-gray-600">Entregas/Mês</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Excelência em
                <span className="block text-blue-600">Transporte Rodoviário</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Com mais de 15 anos de experiência no mercado, a LogiTrans Premium é referência nacional em 
                transporte de cargas, oferecendo soluções completas e personalizadas para empresas de todos os portes.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900">Segurança</h3>
                  <p className="text-sm text-gray-600">100% Rastreada</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <Clock className="h-12 w-12 text-green-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900">Pontualidade</h3>
                  <p className="text-sm text-gray-600">Entrega no Prazo</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <Star className="h-12 w-12 text-yellow-500 mx-auto mb-3 fill-current" />
                  <h3 className="font-bold text-gray-900">Qualidade</h3>
                  <p className="text-sm text-gray-600">Certificada ISO</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Caminhão em movimento"
                  className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
                <img 
                  src="https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Frota organizada"
                  className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções completas em transporte rodoviário com tecnologia de ponta e equipe especializada
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group">
              <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Package className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Transporte de Contêineres</h3>
              <p className="text-gray-700 mb-6">
                Movimentação eficiente de contêineres com equipamentos especializados e rotas otimizadas.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Contêineres 20' e 40'</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Rastreamento em tempo real</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Conexão porto-indústria</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group">
              <div className="bg-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cargas Soltas</h3>
              <p className="text-gray-700 mb-6">
                Transporte seguro de mercadorias diversas com embalagem e acondicionamento adequados.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Produtos industrializados</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Equipamentos pesados</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Embalagem especializada</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group">
              <div className="bg-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Transporte de Granel</h3>
              <p className="text-gray-700 mb-6">
                Movimentação especializada de produtos granulados e líquidos com tecnologia de ponta.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span>Grãos e cereais</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span>Produtos químicos</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span>Sistema pneumático</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Nossa Frota Premium
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veículos de última geração das melhores marcas europeias: Mercedes-Benz, Scania e Volvo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleetData.map((truck, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={truck.image} 
                    alt={`${truck.brand} ${truck.model}`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {truck.brand}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{truck.model}</h3>
                      <p className="text-blue-600 font-medium">{truck.category}</p>
                    </div>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                      {truck.capacity}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {truck.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-2xl inline-block">
              <h3 className="text-2xl font-bold mb-2">Frota Completa</h3>
              <p className="text-blue-100 mb-4">Mais de 150 veículos disponíveis 24/7</p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-200"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Solicite seu orçamento personalizado e descubra como podemos otimizar sua logística
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-xl">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Central de Atendimento</h3>
                  <p className="text-blue-100">(11) 4002-8922</p>
                  <p className="text-blue-100">(11) 98765-4321</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-xl">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">E-mail</h3>
                  <p className="text-blue-100">contato@logitrans.com.br</p>
                  <p className="text-blue-100">comercial@logitrans.com.br</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-xl">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Endereço</h3>
                  <p className="text-blue-100">Av. das Indústrias, 2500</p>
                  <p className="text-blue-100">Distrito Industrial - São Paulo/SP</p>
                  <p className="text-blue-100">CEP: 04571-020</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Solicitar Orçamento</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Nome"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:border-white transition-colors"
                  />
                  <input 
                    type="email" 
                    placeholder="E-mail"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <input 
                  type="tel" 
                  placeholder="Telefone"
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:border-white transition-colors"
                />
                <select className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:border-white transition-colors">
                  <option value="" className="text-gray-900">Tipo de Serviço</option>
                  <option value="containers" className="text-gray-900">Transporte de Contêineres</option>
                  <option value="solta" className="text-gray-900">Cargas Soltas</option>
                  <option value="granel" className="text-gray-900">Transporte de Granel</option>
                </select>
                <textarea 
                  rows={4}
                  placeholder="Detalhes da sua necessidade"
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:border-white transition-colors resize-none"
                ></textarea>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span>Enviar Solicitação</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2 rounded-xl">
                  <Truck className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">LogiTrans Premium</h3>
                  <p className="text-xs text-gray-400">TRANSPORT SOLUTIONS</p>
                </div>
              </div>
              <p className="text-gray-400 max-w-md">
                Liderando o mercado de transporte rodoviário com excelência, segurança e tecnologia de ponta.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm">
                <li>Transporte de Contêineres</li>
                <li>Cargas Soltas</li>
                <li>Transporte de Granel</li>
                <li>Logística Integrada</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Contato</h4>
              <ul className="space-y-2 text-sm">
                <li>(11) 4002-8922</li>
                <li>contato@logitrans.com.br</li>
                <li>São Paulo - SP</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 LogiTrans Premium. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
