import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold font-heading text-primary">УВЕЛКА | Мастер-Класс</h1>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors font-medium">Главная</button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors font-medium">О событии</button>
              <button onClick={() => scrollToSection('gallery')} className="text-foreground hover:text-primary transition-colors font-medium">Галерея</button>
              <button onClick={() => scrollToSection('register')} className="text-foreground hover:text-primary transition-colors font-medium">Регистрация</button>
              <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors font-medium">Контакты</button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/20 to-accent/5 animate-fade-in">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <div className="inline-block bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm mb-4">
                УВЕЛКА
              </div>
              <h2 className="text-5xl md:text-6xl font-bold font-heading text-foreground leading-tight">
                Мастер-класс по приготовлению
                <span className="block text-primary mt-2">лучшей гречки на свете! 🌾</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                От лучшего технолога УВЕЛКА — узнайте все секреты идеальной гречневой каши с мясом
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => scrollToSection('register')} size="lg" className="text-lg px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  Зарегистрироваться сейчас
                </Button>
                <Button onClick={() => scrollToSection('about')} variant="outline" size="lg" className="text-lg px-8 py-6 font-semibold hover:scale-105 transition-all">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-3xl blur-2xl opacity-20"></div>
              <img 
                src="https://cdn.poehali.dev/projects/95baa52c-6025-4060-b398-7435ddc5da11/files/8adde67a-b266-4b1c-9185-05c396d73614.jpg" 
                alt="Технолог УВЕЛКА на мастер-классе" 
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">О событии</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl hover:-translate-y-2 duration-300">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Icon name="ChefHat" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold font-heading">Лучший технолог УВЕЛКА</h3>
                <p className="text-muted-foreground">Женщина-профессионал с 15-летним опытом научит готовить лучшую гречку</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all hover:shadow-xl hover:-translate-y-2 duration-300">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Icon name="Users" size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold font-heading">Малые группы</h3>
                <p className="text-muted-foreground">До 15 участников для индивидуального подхода и комфортного обучения</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl hover:-translate-y-2 duration-300">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Icon name="Clock" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold font-heading">3 часа практики</h3>
                <p className="text-muted-foreground">Полное погружение в процесс: от выбора ингредиентов до финальной подачи</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-secondary/50 to-primary/5 rounded-3xl p-12">
            <h3 className="text-3xl font-bold font-heading text-foreground mb-6">Программа мастер-класса</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Выбор и подготовка ингредиентов</h4>
                    <p className="text-muted-foreground">Узнаете секреты выбора качественной гречки и мяса, правильной подготовки продуктов</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Техники приготовления</h4>
                    <p className="text-muted-foreground">Освоите профессиональные методы обжарки, тушения и томления</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Секреты вкуса</h4>
                    <p className="text-muted-foreground">Правильная комбинация специй, травы и приправы для идеального блюда</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Презентация блюда</h4>
                    <p className="text-muted-foreground">Научитесь красиво подавать готовое блюдо как в ресторане</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">Галерея</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground mt-6">Взгляните на наши кулинарные шедевры</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "https://cdn.poehali.dev/projects/95baa52c-6025-4060-b398-7435ddc5da11/files/857f6919-fe89-4df7-8254-9cbad8bfd4e6.jpg",
              "https://cdn.poehali.dev/projects/95baa52c-6025-4060-b398-7435ddc5da11/files/8adde67a-b266-4b1c-9185-05c396d73614.jpg",
              "https://cdn.poehali.dev/projects/95baa52c-6025-4060-b398-7435ddc5da11/files/e413dfb5-57ac-41eb-a0b2-4c3c97849ec0.jpg",
              "https://cdn.poehali.dev/projects/95baa52c-6025-4060-b398-7435ddc5da11/files/857f6919-fe89-4df7-8254-9cbad8bfd4e6.jpg",
              "https://cdn.poehali.dev/projects/95baa52c-6025-4060-b398-7435ddc5da11/files/8adde67a-b266-4b1c-9185-05c396d73614.jpg",
              "https://cdn.poehali.dev/projects/95baa52c-6025-4060-b398-7435ddc5da11/files/f310e191-e9a7-4563-8f3d-e80f913ae523.jpg",
            ].map((img, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <img 
                  src={img} 
                  alt={`Галерея ${idx + 1}`} 
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold text-lg">Гречка УВЕЛКА</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="register" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">Регистрация</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground mt-6">Присоединяйтесь к нашему мастер-классу!</p>
          </div>

          <Card className="border-2 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Ваше имя *</label>
                  <Input 
                    required
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="h-12 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Email *</label>
                  <Input 
                    type="email"
                    required
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="h-12 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Телефон *</label>
                  <Input 
                    type="tel"
                    required
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="h-12 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Комментарий</label>
                  <Textarea 
                    placeholder="Расскажите о своём опыте приготовления или задайте вопросы..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="min-h-32 text-base"
                  />
                </div>

                <div className="bg-secondary/50 rounded-xl p-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground">Стоимость участия:</span>
                    <span className="text-2xl font-bold text-primary">2 500 ₽</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Включено: все ингредиенты, напитки, сертификат участника</p>
                </div>

                <Button type="submit" size="lg" className="w-full text-lg py-6 font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  Зарегистрироваться
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">Контакты</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Icon name="MapPin" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold font-heading">Адрес</h3>
                <p className="text-muted-foreground">г. Москва, ул. Кулинарная, д. 10</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all hover:shadow-xl">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Icon name="Phone" size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold font-heading">Телефон</h3>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Icon name="Mail" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold font-heading">Email</h3>
                <p className="text-muted-foreground">info@masterclass.ru</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h3 className="text-2xl font-bold font-heading mb-4">УВЕЛКА | Мастер-Класс</h3>
          <p className="text-white/70 mb-6">Откройте мир вкуса вместе с лучшим технологом</p>
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="icon" className="text-white hover:text-primary hover:bg-white/10">
              <Icon name="Instagram" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-primary hover:bg-white/10">
              <Icon name="Facebook" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-primary hover:bg-white/10">
              <Icon name="Youtube" size={24} />
            </Button>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-white/60 text-sm">© 2024 УВЕЛКА. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;