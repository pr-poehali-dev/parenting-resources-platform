import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  const [chatMessages, setChatMessages] = useState<Array<{text: string, isUser: boolean}>>([
    { text: 'Здравствуйте! Я AI-помощник для родителей. Задайте мне любой вопрос о воспитании, здоровье или развитии детей.', isUser: false }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');

  const categories = [
    { name: 'Воспитание', icon: 'Heart', color: 'bg-primary/20 text-primary' },
    { name: 'Образование', icon: 'GraduationCap', color: 'bg-secondary/30 text-secondary-foreground' },
    { name: 'Здоровье', icon: 'Stethoscope', color: 'bg-accent/30 text-accent-foreground' },
    { name: 'Досуг', icon: 'Sparkles', color: 'bg-primary/20 text-primary' },
  ];

  const articles = [
    { id: 1, title: 'Как выбрать первую секцию для ребёнка', category: 'Досуг', image: 'https://cdn.poehali.dev/projects/d1171827-1bda-4150-9a6f-a93dc7020e3d/files/09ad46ff-8115-4382-a7ab-5ef70b8bab08.jpg', author: 'Анна Петрова', date: '2 дня назад' },
    { id: 2, title: 'Развитие эмоционального интеллекта у детей 3-7 лет', category: 'Воспитание', image: 'https://cdn.poehali.dev/projects/d1171827-1bda-4150-9a6f-a93dc7020e3d/files/09ad46ff-8115-4382-a7ab-5ef70b8bab08.jpg', author: 'Мария Иванова', date: '5 дней назад' },
    { id: 3, title: 'Топ-10 музеев для семейного посещения', category: 'Образование', image: 'https://cdn.poehali.dev/projects/d1171827-1bda-4150-9a6f-a93dc7020e3d/files/0522412c-5ef0-457b-bf4b-8d4a36dee635.jpg', author: 'Олег Смирнов', date: '1 неделю назад' },
  ];

  const places = [
    { 
      id: 1, 
      name: 'Детский центр "Радуга"', 
      type: 'Развивающий центр', 
      address: 'ул. Пушкина, 15',
      rating: 4.8,
      price: '₽₽',
      age: '1-7 лет',
      image: 'https://cdn.poehali.dev/projects/d1171827-1bda-4150-9a6f-a93dc7020e3d/files/0522412c-5ef0-457b-bf4b-8d4a36dee635.jpg'
    },
    { 
      id: 2, 
      name: 'Спортивный клуб "Олимпик"', 
      type: 'Спорт', 
      address: 'пр. Победы, 42',
      rating: 4.9,
      price: '₽₽₽',
      age: '5-15 лет',
      image: 'https://cdn.poehali.dev/projects/d1171827-1bda-4150-9a6f-a93dc7020e3d/files/0522412c-5ef0-457b-bf4b-8d4a36dee635.jpg'
    },
    { 
      id: 3, 
      name: 'Творческая студия "Палитра"', 
      type: 'Творчество', 
      address: 'ул. Ленина, 8',
      rating: 4.7,
      price: '₽₽',
      age: '3-12 лет',
      image: 'https://cdn.poehali.dev/projects/d1171827-1bda-4150-9a6f-a93dc7020e3d/files/0522412c-5ef0-457b-bf4b-8d4a36dee635.jpg'
    },
    { 
      id: 4, 
      name: 'Языковая школа "Полиглот"', 
      type: 'Образование', 
      address: 'ул. Гагарина, 23',
      rating: 5.0,
      price: '₽₽₽',
      age: '4-16 лет',
      image: 'https://cdn.poehali.dev/projects/d1171827-1bda-4150-9a6f-a93dc7020e3d/files/0522412c-5ef0-457b-bf4b-8d4a36dee635.jpg'
    },
  ];

  const handleSendMessage = () => {
    if (!currentMessage.trim()) return;
    
    setChatMessages([...chatMessages, { text: currentMessage, isUser: true }]);
    setCurrentMessage('');
    
    setTimeout(() => {
      const responses = [
        'Отличный вопрос! По моему опыту, важно учитывать возраст ребёнка и его индивидуальные особенности.',
        'Рекомендую начать с небольших шагов. Главное - последовательность и поддержка.',
        'В нашей базе есть несколько статей на эту тему. Могу порекомендовать экспертов в вашем районе.',
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setChatMessages(prev => [...prev, { text: randomResponse, isUser: false }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Heart" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">РодителиВместе</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-sm font-medium text-primary">Главная</Link>
              <Link to="/articles" className="text-sm font-medium hover:text-primary transition-colors">Статьи</Link>
              <Link to="/places" className="text-sm font-medium hover:text-primary transition-colors">Места</Link>
              <Link to="/profile" className="text-sm font-medium hover:text-primary transition-colors">Профиль</Link>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Icon name="Bot" size={18} className="mr-2" />
                    AI-помощник
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-full sm:max-w-md">
                  <SheetHeader>
                    <SheetTitle className="flex items-center gap-2">
                      <Icon name="Bot" className="text-accent" />
                      AI-помощник для родителей
                    </SheetTitle>
                    <SheetDescription>
                      Задавайте вопросы о воспитании, здоровье и развитии детей
                    </SheetDescription>
                  </SheetHeader>
                  
                  <div className="flex flex-col h-[calc(100vh-200px)] mt-6">
                    <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                      {chatMessages.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                            msg.isUser 
                              ? 'bg-primary text-primary-foreground ml-4' 
                              : 'bg-muted mr-4'
                          }`}>
                            {msg.text}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-2 border-t pt-4">
                      <Input 
                        placeholder="Напишите ваш вопрос..."
                        value={currentMessage}
                        onChange={(e) => setCurrentMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      />
                      <Button onClick={handleSendMessage}>
                        <Icon name="Send" size={18} />
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Icon name="Menu" size={24} />
              </Button>
              <Link to="/profile">
                <Avatar>
                  <AvatarFallback>У</AvatarFallback>
                </Avatar>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <Badge className="mb-4">Платформа для родителей</Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Всё для заботливых родителей в одном месте
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Локальный контент, проверенные места, экспертные советы и AI-помощник для воспитания счастливых детей
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/places">
                <Button size="lg" className="text-lg">
                  <Icon name="MapPin" size={20} className="mr-2" />
                  Найти место
                </Button>
              </Link>
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="lg" variant="outline" className="text-lg">
                    <Icon name="Bot" size={20} className="mr-2" />
                    Спросить AI
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-full sm:max-w-md">
                  <SheetHeader>
                    <SheetTitle className="flex items-center gap-2">
                      <Icon name="Bot" className="text-accent" />
                      AI-помощник для родителей
                    </SheetTitle>
                    <SheetDescription>
                      Задавайте вопросы о воспитании, здоровье и развитии детей
                    </SheetDescription>
                  </SheetHeader>
                  
                  <div className="flex flex-col h-[calc(100vh-200px)] mt-6">
                    <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                      {chatMessages.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                            msg.isUser 
                              ? 'bg-primary text-primary-foreground ml-4' 
                              : 'bg-muted mr-4'
                          }`}>
                            {msg.text}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-2 border-t pt-4">
                      <Input 
                        placeholder="Напишите ваш вопрос..."
                        value={currentMessage}
                        onChange={(e) => setCurrentMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      />
                      <Button onClick={handleSendMessage}>
                        <Icon name="Send" size={18} />
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Card key={cat.name} className="hover:shadow-lg transition-all cursor-pointer hover-scale">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className={`p-4 rounded-2xl ${cat.color} mb-3`}>
                    <Icon name={cat.icon as any} size={32} />
                  </div>
                  <h3 className="font-semibold">{cat.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Популярные статьи</h2>
              <p className="text-muted-foreground">Экспертные материалы от местных специалистов</p>
            </div>
            <Link to="/articles">
              <Button variant="outline">
                Все статьи
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-all cursor-pointer hover-scale">
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">{article.category}</Badge>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback>{article.author[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{article.author}</span>
                    <span className="text-sm text-muted-foreground">• {article.date}</span>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Рекомендуемые места</h2>
              <p className="text-muted-foreground">Проверенные партнёры для развития ваших детей</p>
            </div>
            <Link to="/places">
              <Button variant="outline">
                Все места
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {places.map((place) => (
              <Dialog key={place.id}>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden hover:shadow-xl transition-all cursor-pointer hover-scale">
                    <img src={place.image} alt={place.name} className="w-full h-40 object-cover" />
                    <CardHeader className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{place.type}</Badge>
                        <div className="flex items-center gap-1">
                          <Icon name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                          <span className="text-sm font-semibold">{place.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg">{place.name}</CardTitle>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Icon name="MapPin" size={14} />
                          <span>{place.address}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Icon name="Baby" size={14} />
                            <span>{place.age}</span>
                          </div>
                          <span className="font-semibold">{place.price}</span>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{place.name}</DialogTitle>
                    <DialogDescription>
                      <Badge variant="outline">{place.type}</Badge>
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <img src={place.image} alt={place.name} className="w-full h-64 object-cover rounded-lg" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Icon name="MapPin" size={18} className="text-primary" />
                        <span>{place.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                        <span>Рейтинг: {place.rating}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Baby" size={18} className="text-primary" />
                        <span>Возраст: {place.age}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Wallet" size={18} className="text-primary" />
                        <span>Цена: {place.price}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1">
                        <Icon name="Phone" size={18} className="mr-2" />
                        Позвонить
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Icon name="MapPin" size={18} className="mr-2" />
                        На карте
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-accent/20 to-primary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardHeader className="text-center">
                <div className="mx-auto w-20 h-20 bg-accent/30 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Bot" size={40} className="text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl md:text-3xl">AI-помощник всегда на связи</CardTitle>
                <CardDescription className="text-base">
                  Получите персональные рекомендации и ответы на вопросы о воспитании, здоровье и развитии детей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 rounded-xl p-6 space-y-4">
                  <div className="flex gap-3">
                    <div className="bg-primary/20 p-3 rounded-full h-fit">
                      <Icon name="MessageCircle" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold mb-1">Быстрые ответы</p>
                      <p className="text-sm text-muted-foreground">На основе опыта тысяч родителей и экспертов</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-secondary/30 p-3 rounded-full h-fit">
                      <Icon name="Lightbulb" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold mb-1">Персональные советы</p>
                      <p className="text-sm text-muted-foreground">С учётом возраста и особенностей вашего ребёнка</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-accent/30 p-3 rounded-full h-fit">
                      <Icon name="Clock" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold mb-1">Доступен 24/7</p>
                      <p className="text-sm text-muted-foreground">Помощь в любое время дня и ночи</p>
                    </div>
                  </div>
                </div>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button size="lg" className="w-full mt-6">
                      <Icon name="Bot" size={20} className="mr-2" />
                      Начать диалог с AI-помощником
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="w-full sm:max-w-md">
                    <SheetHeader>
                      <SheetTitle className="flex items-center gap-2">
                        <Icon name="Bot" className="text-accent" />
                        AI-помощник для родителей
                      </SheetTitle>
                      <SheetDescription>
                        Задавайте вопросы о воспитании, здоровье и развитии детей
                      </SheetDescription>
                    </SheetHeader>
                    
                    <div className="flex flex-col h-[calc(100vh-200px)] mt-6">
                      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                        {chatMessages.map((msg, idx) => (
                          <div key={idx} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                              msg.isUser 
                                ? 'bg-primary text-primary-foreground ml-4' 
                                : 'bg-muted mr-4'
                            }`}>
                              {msg.text}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex gap-2 border-t pt-4">
                        <Input 
                          placeholder="Напишите ваш вопрос..."
                          value={currentMessage}
                          onChange={(e) => setCurrentMessage(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        />
                        <Button onClick={handleSendMessage}>
                          <Icon name="Send" size={18} />
                        </Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Интерактивная карта мест</h2>
            <p className="text-muted-foreground">Все локации партнёров на одной карте</p>
          </div>
          
          <Card className="overflow-hidden">
            <div className="relative h-[500px] bg-muted/30 flex items-center justify-center">
              <div className="absolute inset-0 grid grid-cols-12 grid-rows-12">
                {places.map((place, idx) => (
                  <div 
                    key={place.id}
                    className="absolute hover:z-10"
                    style={{
                      left: `${20 + (idx * 20)}%`,
                      top: `${30 + (idx * 10)}%`
                    }}
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="relative group">
                          <div className="absolute -inset-2 bg-primary/20 rounded-full animate-ping opacity-75"></div>
                          <div className="relative bg-primary text-primary-foreground p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                            <Icon name="MapPin" size={24} />
                          </div>
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{place.name}</DialogTitle>
                          <DialogDescription>
                            <Badge variant="outline">{place.type}</Badge>
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <img src={place.image} alt={place.name} className="w-full h-64 object-cover rounded-lg" />
                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                              <Icon name="MapPin" size={18} className="text-primary" />
                              <span>{place.address}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Icon name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                              <span>Рейтинг: {place.rating}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Icon name="Baby" size={18} className="text-primary" />
                              <span>Возраст: {place.age}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Icon name="Wallet" size={18} className="text-primary" />
                              <span>Цена: {place.price}</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button className="flex-1">
                              <Icon name="Phone" size={18} className="mr-2" />
                              Позвонить
                            </Button>
                            <Button variant="outline" className="flex-1">
                              <Icon name="Navigation" size={18} className="mr-2" />
                              Построить маршрут
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                ))}
              </div>
              <div className="text-center z-10">
                <Icon name="Map" size={64} className="mx-auto text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground">Интерактивная карта с локациями партнёров</p>
                <p className="text-sm text-muted-foreground mt-2">Нажмите на маркеры для просмотра деталей</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 bg-muted/30 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Heart" className="text-primary" size={28} />
                <span className="text-xl font-bold">РодителиВместе</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Платформа для заботливых родителей с локальным контентом и AI-помощником
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Главная</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Статьи</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Места</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карта</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О проекте</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Для партнёров</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Свяжитесь с нами</h4>
              <div className="flex gap-3">
                <Button variant="outline" size="icon">
                  <Icon name="Mail" size={18} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="MessageCircle" size={18} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Phone" size={18} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2024 РодителиВместе. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;