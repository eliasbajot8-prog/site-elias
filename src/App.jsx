import React, { useState, useEffect } from 'react';
import {
  BookOpen, Video, MapPin, Star, MessageCircle, Brain, Calculator,
  Menu, X, ChevronDown, ChevronUp, Check, User, Send
} from 'lucide-react';

// --- Styles CSS personnalisés pour les animations ---
const customStyles = `
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
  .animate-blob { animation: blob 7s infinite; }
  .animation-delay-2000 { animation-delay: 2s; }
  .animate-fadeIn { animation: fadeIn 0.5s ease-out; }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const COLORS = {
  primary: "bg-indigo-600",
  primaryHover: "hover:bg-indigo-700",
  secondary: "bg-slate-800",
  accent: "text-indigo-600",
  light: "bg-slate-50"
};

const SectionTitle = ({ children, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{children}</h2>
    <div className="w-24 h-1 bg-indigo-600 mx-auto rounded"></div>
    {subtitle && <p className="mt-4 text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${className}`}>
    {children}
  </div>
);

const REVIEWS = [
  { id: 1, name: "Lucas M.", level: "Terminale", text: "Grâce à Elias, j'ai gagné 4 points de moyenne en physique. Il explique super bien les concepts compliqués.", rating: 5 },
  { id: 2, name: "Mme Dubois", level: "Parent d'élève (4ème)", text: "Très pédagogue et patient. Mon fils a repris confiance en lui en mathématiques.", rating: 5 },
  { id: 3, name: "Chloé", level: "MPSI (Prépa)", text: "L'aide d'un élève ingénieur est précieuse. Il connait les exigences de la prépa et m'aide à m'organiser.", rating: 4.5 },
];

const FAQS = [
  { q: "Quels niveaux acceptes-tu ?", a: "Je donne des cours du niveau Primaire jusqu'à la 1ère année de Classes Préparatoires aux Grandes Écoles (CPGE)." },
  { q: "Comment fonctionne l'option Premium ?", a: "Pour 5€/mois en plus, vous avez accès à un espace privé sur ce site contenant des annales corrigées, des exercices ciblés et une IA entraînée pour répondre à vos questions 24/7." },
  { q: "Comment s'applique la réduction Saint-Augustin ?", a: "Si vous habitez le quartier Saint-Augustin à Bordeaux, je propose une réduction de 10% sur le tarif horaire pour soutenir le voisinage !" },
  { q: "Acceptes-tu les CESU ?", a: "C'est à discuter lors de notre premier contact, n'hésitez pas à me poser la question sur WhatsApp." },
];

const Hero = ({ navigateToBooking }) => (
  <div className="relative bg-slate-900 text-white pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
    </div>
    <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
        <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/30 text-indigo-200 text-sm font-semibold mb-4 border border-indigo-500/50">
          Mathématiques & Physique
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Visez l'excellence avec un <span className="text-indigo-400">futur ingénieur</span>
        </h1>
        <p className="text-lg text-slate-300 mb-8 max-w-lg mx-auto md:mx-0">
          Du primaire à la prépa. Méthodologie rigoureuse, pédagogie adaptée et outils numériques innovants pour réussir vos études.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button onClick={navigateToBooking} className={`${COLORS.primary} ${COLORS.primaryHover} text-white font-bold py-3 px-8 rounded-lg transition transform hover:-translate-y-1`}>
            Réserver un cours
          </button>
          <a href="#cv" className="bg-transparent border-2 border-slate-500 hover:border-white text-white font-semibold py-3 px-8 rounded-lg transition">
            Voir mon parcours
          </a>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center relative">
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute inset-4 bg-slate-800 rounded-full flex items-center justify-center border-4 border-slate-700 overflow-hidden">
            <div className="text-center p-6 flex flex-col items-center">
              <User size={80} className="text-slate-400 mb-4" />
              <p className="text-xl font-bold text-white">Elias</p>
              <p className="text-sm text-slate-400">Bajot-Angeloski</p>
              <p className="text-xs text-indigo-400 mt-1 uppercase tracking-wider font-bold">Étudiant Ingénieur</p>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 bg-white text-slate-900 p-3 rounded-lg shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="flex items-center gap-2">
              <Calculator className="text-indigo-600" size={20} />
              <span className="font-bold text-sm">Maths Expert</span>
            </div>
          </div>
          <div className="absolute bottom-10 -left-8 bg-white text-slate-900 p-3 rounded-lg shadow-xl animate-bounce" style={{ animationDuration: '4s' }}>
            <div className="flex items-center gap-2">
              <Brain className="text-purple-600" size={20} />
              <span className="font-bold text-sm">Physique & Méca</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const About = () => (
  <section id="cv" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <SectionTitle subtitle="Un parcours d'excellence pour vous accompagner">Qui suis-je ?</SectionTitle>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-slate-700 leading-relaxed">
            Bonjour ! Je m'appelle <span className="font-bold text-indigo-700">Elias Bajot-Angeloski</span>.
            Actuellement étudiant ingénieur à <span className="font-bold">l'École Nationale Supérieure de Cognitique & Matmeca (Bordeaux INP)</span>,
            je suis passionné par les sciences et la transmission du savoir.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Après un Baccalauréat mention Maths & Physique au Lycée Sévigné (Rennes) et deux années intenses de
            <span className="font-bold"> Classes Préparatoires (CPGE)</span> au Lycée Assomption, j'ai acquis une rigueur et des méthodes de travail
            que je souhaite partager avec mes élèves.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-indigo-500">
              <h4 className="font-bold text-slate-900">Compétences</h4>
              <ul className="text-sm text-slate-600 mt-2 space-y-1">
                <li>• Modélisation Mathématique</li>
                <li>• Mécanique des fluides/solides</li>
                <li>• Python, C++, Matlab</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold text-slate-900">Expérience</h4>
              <ul className="text-sm text-slate-600 mt-2 space-y-1">
                <li>• Projets Ingénierie (Aérospatial)</li>
                <li>• Employé Polyvalent (Contact humain)</li>
                <li>• Accompagnement scolaire</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-indigo-100 rounded-2xl transform rotate-3"></div>
          <Card className="relative p-8 transform -rotate-2">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <BookOpen className="text-indigo-600" />
              Mon Parcours Académique
            </h3>
            <div className="space-y-6 border-l-2 border-slate-200 pl-6 ml-2">
              <div className="relative">
                <div className="absolute -left-[31px] bg-indigo-600 h-4 w-4 rounded-full border-4 border-white"></div>
                <p className="text-sm text-slate-500 font-semibold">2024 - 2027</p>
                <h4 className="text-lg font-bold text-slate-900">Cycle Ingénieur</h4>
                <p className="text-slate-600">Bordeaux Graduate School of Engineering (Matmeca)</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] bg-slate-400 h-4 w-4 rounded-full border-4 border-white"></div>
                <p className="text-sm text-slate-500 font-semibold">2022 - 2024</p>
                <h4 className="text-lg font-bold text-slate-900">Classes Préparatoires (CPGE)</h4>
                <p className="text-slate-600">Lycée Assomption, Rennes. Concours Grandes Écoles.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] bg-slate-300 h-4 w-4 rounded-full border-4 border-white"></div>
                <p className="text-sm text-slate-500 font-semibold">2019 - 2022</p>
                <h4 className="text-lg font-bold text-slate-900">Baccalauréat Général</h4>
                <p className="text-slate-600">Lycée Sévigné, Rennes. Spécialités Maths & Physique.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

const Pricing = ({ onOpenPremium }) => {
  const [isStAugustin, setIsStAugustin] = useState(false);
  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Des tarifs clairs et adaptés à vos besoins">Formules de Cours</SectionTitle>
        <div className="flex justify-center mb-12">
          <div className="bg-white p-2 rounded-full shadow-md flex items-center gap-3 px-6 cursor-pointer border border-indigo-100 hover:shadow-lg transition-all" onClick={() => setIsStAugustin(!isStAugustin)}>
            <div className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${isStAugustin ? 'bg-indigo-600 border-indigo-600' : 'border-slate-300'}`}>
              {isStAugustin && <Check size={16} className="text-white" />}
            </div>
            <div className="flex flex-col text-left">
              <span className="font-semibold text-slate-800">J'habite le quartier Saint-Augustin</span>
              {isStAugustin && <span className="text-xs text-green-600 font-bold animate-fadeIn">Réduction de 10% appliquée !</span>}
            </div>
            <MapPin className={`${isStAugustin ? 'text-indigo-600' : 'text-slate-400'}`} />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-t-4 border-blue-400 flex flex-col">
            <div className="p-8 flex-grow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600"><Video /></div>
              <h3 className="text-2xl font-bold mb-2">Cours en Visio</h3>
              <p className="text-slate-500 text-sm mb-6">Flexibilité maximale, outils interactifs.</p>
              <div className="text-4xl font-bold text-slate-900 mb-2 transition-all duration-300">
                {isStAugustin ? '13,50' : '15'}€ <span className="text-lg font-normal text-slate-500">/h</span>
              </div>
              {isStAugustin && <p className="text-sm text-green-600 font-bold mb-4 animate-fadeIn">Prix réduit (-1.50€)</p>}
              <ul className="space-y-3 text-slate-600 mb-8">
                <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Tablette graphique partagée</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Enregistrement du cours</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Horaires flexibles</li>
              </ul>
            </div>
            <div className="p-4 bg-slate-50 text-center">
              <a href="#contact" className="block w-full py-2 bg-white border border-blue-400 text-blue-600 font-bold rounded hover:bg-blue-50 transition">Réserver</a>
            </div>
          </Card>
          <Card className="border-t-4 border-indigo-600 transform md:-translate-y-4 shadow-xl flex flex-col relative">
            <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAIRE</div>
            <div className="p-8 flex-grow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 text-indigo-600"><User /></div>
              <h3 className="text-2xl font-bold mb-2">Cours Présentiel</h3>
              <p className="text-slate-500 text-sm mb-6">À domicile ou lieu public (Bordeaux).</p>
              <div className="text-4xl font-bold text-slate-900 mb-2 transition-all duration-300">
                {isStAugustin ? '18' : '20'}€ <span className="text-lg font-normal text-slate-500">/h</span>
              </div>
              {isStAugustin && <p className="text-sm text-green-600 font-bold mb-4 animate-fadeIn">Prix réduit (-2.00€)</p>}
              <ul className="space-y-3 text-slate-600 mb-8">
                <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Contact humain direct</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Suivi cahier de l'élève</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Méthodologie approfondie</li>
              </ul>
            </div>
            <div className="p-4 bg-indigo-50 text-center">
              <a href="#contact" className={`block w-full py-3 ${COLORS.primary} text-white font-bold rounded shadow hover:bg-indigo-700 transition`}>Réserver maintenant</a>
            </div>
          </Card>
          <Card className="border-t-4 border-purple-500 flex flex-col bg-gradient-to-b from-purple-50 to-white">
            <div className="p-8 flex-grow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600"><Star /></div>
              <h3 className="text-2xl font-bold mb-2">Option Premium</h3>
              <p className="text-slate-500 text-sm mb-6">Le complément idéal aux cours.</p>
              <div className="text-4xl font-bold text-purple-700 mb-2">
                +5€ <span className="text-lg font-normal text-slate-500">/mois</span>
              </div>
              <p className="text-sm text-slate-500 mb-4">Ajouté à votre formule de cours</p>
              <ul className="space-y-3 text-slate-600 mb-8">
                <li className="flex items-center gap-2"><Check size={16} className="text-purple-500" /> <strong>Accès Annales & Exos</strong></li>
                <li className="flex items-center gap-2"><Check size={16} className="text-purple-500" /> <strong>Assistant IA 24/7</strong></li>
                <li className="flex items-center gap-2"><Check size={16} className="text-purple-500" /> Corrections détaillées</li>
              </ul>
            </div>
            <div className="p-4 bg-white text-center">
              <button onClick={onOpenPremium} className="block w-full py-2 bg-purple-100 text-purple-700 font-bold rounded hover:bg-purple-200 transition">
                Voir la démo
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

const PremiumDemo = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('ia');
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: "Bonjour ! Je suis l'assistant IA d'Elias. Je connais tes cours par cœur. As-tu une question sur un exercice de maths ou de physique ?" }
  ]);
  const [input, setInput] = useState('');

  if (!isOpen) return null;

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { id: Date.now(), sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'bot', text: "Ceci est une démo. Dans la version complète, je t'aiderais à résoudre le problème pas à pas en utilisant les méthodes vues en cours !" }]);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white w-full max-w-4xl h-[600px] rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-red-500 z-10"><X size={24} /></button>
        <div className="w-full md:w-64 bg-slate-100 p-6 flex flex-col gap-4 border-r border-slate-200">
          <div className="flex items-center gap-2 font-bold text-xl text-indigo-700 mb-4"><Star className="fill-indigo-700" size={24} /> Espace Premium</div>
          <button onClick={() => setActiveTab('ia')} className={`p-3 rounded-lg text-left flex items-center gap-3 transition ${activeTab === 'ia' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-200 text-slate-700'}`}><Brain size={20} /> Assistant IA</button>
          <button onClick={() => setActiveTab('annales')} className={`p-3 rounded-lg text-left flex items-center gap-3 transition ${activeTab === 'annales' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-200 text-slate-700'}`}><BookOpen size={20} /> Annales & Exos</button>
          <div className="mt-auto bg-yellow-50 p-3 rounded text-xs text-yellow-800 border border-yellow-200">Ceci est un aperçu de l'option à 5€/mois.</div>
        </div>
        <div className="flex-1 bg-white flex flex-col">
          {activeTab === 'ia' ? (
            <>
              <div className="p-4 border-b bg-indigo-50 flex justify-between items-center"><h3 className="font-bold text-indigo-900">TutorBot - Entraînement</h3><span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">En ligne</span></div>
              <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50">
                {messages.map(msg => (
                  <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-2xl ${msg.sender === 'user' ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-sm'}`}>{msg.text}</div>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSend} className="p-4 border-t flex gap-2">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Pose ta question ici..." className="flex-1 border border-slate-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <button type="submit" className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700"><Send size={20} /></button>
              </form>
            </>
          ) : (
            <div className="p-8 h-full overflow-y-auto">
              <h3 className="text-2xl font-bold mb-6">Bibliothèque de Ressources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Annales Bac Maths 2024', 'Fiche Révision Mécanique', 'QCM Physique Quantique', 'Exercices Suites Numériques'].map((item, i) => (
                  <div key={i} className="border border-slate-200 p-4 rounded-lg hover:border-indigo-500 cursor-pointer transition flex items-center justify-between group">
                    <div className="flex items-center gap-3"><div className="bg-orange-100 p-2 rounded text-orange-600">PDF</div><span className="font-medium text-slate-700">{item}</span></div><span className="text-indigo-600 opacity-0 group-hover:opacity-100 text-sm font-bold">Télécharger</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-slate-100 rounded-xl text-center"><p className="text-slate-500">Plus de 150 documents disponibles dans la version complète.</p></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Reviews = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <SectionTitle subtitle="La réussite de mes élèves est ma meilleure publicité">Témoignages</SectionTitle>
      <div className="grid md:grid-cols-3 gap-6">
        {REVIEWS.map(review => (
          <Card key={review.id} className="p-6 bg-slate-50 border border-slate-100">
            <div className="flex gap-1 text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill={i < Math.floor(review.rating) ? "currentColor" : "none"} className={i >= Math.floor(review.rating) ? "text-slate-300" : ""} />
              ))}
            </div>
            <p className="text-slate-600 italic mb-6">"{review.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-700">{review.name.charAt(0)}</div>
              <div><p className="font-bold text-slate-900">{review.name}</p><p className="text-xs text-slate-500">{review.level}</p></div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionTitle>Questions Fréquentes</SectionTitle>
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button className="w-full px-6 py-4 text-left flex justify-between items-center font-semibold text-slate-800 hover:bg-slate-50" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                {faq.q}
                {openIndex === index ? <ChevronUp className="text-indigo-600" /> : <ChevronDown className="text-slate-400" />}
              </button>
              {openIndex === index && <div className="px-6 py-4 bg-slate-50 text-slate-600 border-t border-slate-100 animate-fadeIn">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold mb-6">Discutons de vos objectifs</h2>
            <p className="text-slate-400 mb-8">Remplissez le formulaire pour une demande de réservation, ou contactez-moi directement via WhatsApp pour une réponse rapide.</p>
            <div className="space-y-6">
              <a href="https://wa.me/33763332247" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-green-600/20 border border-green-600/50 rounded-lg hover:bg-green-600/30 transition group">
                <div className="bg-green-500 p-3 rounded-full text-white"><MessageCircle /></div>
                <div><p className="font-bold text-green-400 group-hover:text-green-300">WhatsApp Direct</p><p className="text-sm text-slate-300">07 63 33 22 47</p></div>
              </a>
              <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg">
                <div className="bg-indigo-500 p-3 rounded-full text-white"><MapPin /></div>
                <div><p className="font-bold text-indigo-400">Zone d'intervention</p><p className="text-sm text-slate-300">Bordeaux & Visio (Toute la France)</p></div>
              </div>
            </div>
          </div>
          <div className="bg-white text-slate-900 rounded-xl p-8 shadow-2xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold mb-4">Réserver un créneau</h3>
                <div><label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Votre Nom</label><input id="name" required type="text" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Ex: Jean Dupont" /></div>
                <div><label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Téléphone</label><input id="phone" required type="tel" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="06..." /></div>
                <div>
                  <label htmlFor="level" className="block text-sm font-medium text-slate-700 mb-1">Niveau / Matière</label>
                  <select id="level" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-indigo-500 outline-none">
                    <option>Primaire - Maths</option><option>Collège - Maths</option><option>Collège - Physique</option><option>Lycée - Maths</option><option>Lycée - Physique</option><option>Prépa/Supérieur</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 rounded hover:bg-indigo-700 transition">Envoyer la demande</button>
              </form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4"><Check size={32} /></div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Demande reçue !</h3>
                <p className="text-slate-600 mb-6">Je vous recontacterai sous 24h sur le numéro indiqué.</p>
                <button onClick={() => setSubmitted(false)} className="text-indigo-600 font-semibold hover:underline">Nouvelle demande</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPremiumDemo, setShowPremiumDemo] = useState(false);
  const scrollToSection = (id) => { setIsMobileMenuOpen(false); const element = document.getElementById(id); if (element) element.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <style>{customStyles}</style>
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-40 border-b border-slate-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-extrabold text-indigo-700 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Calculator className="stroke-[3]" /> Elias<span className="text-slate-900">Maths</span>
          </div>
          <div className="hidden md:flex gap-8 font-medium text-slate-600">
            <button onClick={() => scrollToSection('cv')} className="hover:text-indigo-600 transition">À propos</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-indigo-600 transition">Tarifs</button>
            <button onClick={() => setShowPremiumDemo(true)} className="flex items-center gap-1 text-purple-600 hover:text-purple-700 transition font-bold"><Star size={16} /> Premium</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-indigo-600 transition">Contact</button>
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-slate-700">{isMobileMenuOpen ? <X /> : <Menu />}</button>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full px-4 py-4 shadow-xl flex flex-col gap-4 top-[73px]">
            <button onClick={() => scrollToSection('cv')} className="text-left p-2 hover:bg-slate-50 rounded">À propos</button>
            <button onClick={() => scrollToSection('pricing')} className="text-left p-2 hover:bg-slate-50 rounded">Tarifs</button>
            <button onClick={() => { setShowPremiumDemo(true); setIsMobileMenuOpen(false); }} className="text-left p-2 hover:bg-slate-50 rounded text-purple-600 font-bold">Option Premium</button>
            <button onClick={() => scrollToSection('contact')} className="text-left p-2 hover:bg-slate-50 rounded text-indigo-600 font-bold">Contact</button>
          </div>
        )}
      </nav>
      <main>
        <Hero navigateToBooking={() => scrollToSection('pricing')} />
        <About />
        <Pricing onOpenPremium={() => setShowPremiumDemo(true)} />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2024 Elias Bajot-Angeloski. Tous droits réservés.</p>
          <div className="flex gap-4"><a href="#" className="hover:text-white transition">Mentions Légales</a><a href="#" className="hover:text-white transition">CGV</a></div>
        </div>
      </footer>
      <PremiumDemo isOpen={showPremiumDemo} onClose={() => setShowPremiumDemo(false)} />
    </div>
  );
}