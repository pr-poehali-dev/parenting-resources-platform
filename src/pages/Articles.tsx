import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const articles = [
    { id: 1, title: 'Как выбрать первую секцию для ребёнка', category: 'Досуг', image: 'https://cdn.poehali.dev/projects/d1171827-1bda-4150-9a6f-a93dc7020e3d/files/09ad46ff-8115-4382-a7ab-5ef70b8bab08.jpg', author: 'Анна Петрова', date: '2 дня назад', readTime: '5 мин', excerpt: 'Подробное руководство по выбору первого кружка или секции для вашего ребёнка с учётом его интересов и возраста.' },
    { id: 2, title: 'Развитие эмоционального интеллекта у детей 3-7 лет', category: 'Воспитание', image: 'https://cdn.poehali.dev/projects/d1171827-1bda-4150-9a6f-a93dc7020e3d/files/09ad46ff-8115-4382-a7ab-5ef70b8bab08.jpg', author: 'Мария Иванова', date: '5 дней назад', readTime: '7 мин', excerpt: 'Практические советы и упражнения для развития эмоционального интеллекта в дошкольном возрасте.' },
    { id: 3, title: 'Топ-10 музеев для семейного посещения', category: 'Образование', image: 'https://cdn.poehali.dev/projects/d1171827-1bda-4150-9a6f-a93dc7020e3d/files/0522412c-5ef0-457b-bf4b-8d4a36dee635.jpg', author: 'Олег Смирнов', date: '1 неделю назад', readTime: '10 мин', excerpt: 'Лучшие музеи города, которые будут интересны и детям, и взрослым. С описанием программ и ценами.' },
    { id: 4, title: 'Здоровое питание для школьников', category: 'Здоровье', image: 'https://cdn.poehali.dev/projects/d1171827-1bda-4150-9a6f-a93dc7020e3d/files/09ad46ff-8115-4382-a7ab-5ef70b8bab08.jpg', author: 'Елена Волкова', date: '3 дня назад', readTime: '6 мин', excerpt: 'Как составить сбалансированное меню для школьника и избежать проблем с перекусами.' },
    { id: 5, title: 'Адаптация ребёнка в детском саду', category: 'Воспитание', image: 'https://cdn.poehali.dev/projects/d1171827-1bda-4150-9a6f-a93dc7020e3d/files/09ad46ff-8115-4382-a7ab-5ef70b8bab08.jpg', author: 'Ирина Козлова', date: '1 день назад', readTime: '8 мин', excerpt: 'Пошаговая инструкция для родителей: как помочь ребёнку комфортно войти в новую среду.' },
    { id: 6, title: 'Летние лагеря 2024: полный гид', category: 'Досуг', image: 'https://cdn.poehali.dev/projects/d1171827-1bda-4150-9a6f-a93dc7020e3d/files/0522412c-5ef0-457b-bf4b-8d4a36dee635.jpg', author: 'Анна Петрова', date: '2 недели назад', readTime: '12 мин', excerpt: 'Обзор лучших летних лагерей с ценами, программами и отзывами родителей.' },
    { id: 7, title: 'Подготовка к школе: что важно знать', category: 'Образование', image: 'https://cdn.poehali.dev/projects/d1171827-1bda-4150-9a6f-a93dc7020e3d/files/0522412c-5ef0-457b-bf4b-8d4a36dee635.jpg', author: 'Мария Иванова', date: '4 дня назад', readTime: '9 мин', excerpt: 'Навыки и знания, которые действительно нужны будущему первокласснику.' },
    { id: 8, title: 'Профилактика простуд у детей', category: 'Здоровье', image: 'https://cdn.poehali.dev/projects/d1171827-1bda-4150-9a6f-a93dc7020e3d/files/09ad46ff-8115-4382-a7ab-5ef70b8bab08.jpg', author: 'Елена Волкова', date: '6 дней назад', readTime: '5 мин', excerpt: 'Эффективные методы укрепления иммунитета и профилактики ОРВИ в детском возрасте.' },
    { id: 9, title: 'Творческие занятия дома: 20 идей', category: 'Досуг', image: 'https://cdn.poehali.dev/projects/d1171827-1bda-4150-9a6f-a93dc7020e3d/files/09ad46ff-8115-4382-a7ab-5ef70b8bab08.jpg', author: 'Олег Смирнов', date: '1 неделю назад', readTime: '11 мин', excerpt: 'Простые и интересные творческие активности для детей разного возраста.' },
  ];

  const categories = ['all', 'Воспитание', 'Образование', 'Здоровье', 'Досуг'];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Icon name="Heart" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">РодителиВместе</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Главная</Link>
              <Link to="/articles" className="text-sm font-medium text-primary">Статьи</Link>
              <Link to="/places" className="text-sm font-medium hover:text-primary transition-colors">Места</Link>
              <Link to="/profile" className="text-sm font-medium hover:text-primary transition-colors">Профиль</Link>
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

      <section className="py-12 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <Badge>Экспертные материалы</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">Статьи для родителей</h1>
            <p className="text-lg text-muted-foreground">
              Полезные советы от местных экспертов по воспитанию, образованию и здоровью детей
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <Input
                    placeholder="Поиск статей..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map(cat => (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(cat)}
                    size="sm"
                  >
                    {cat === 'all' ? 'Все' : cat}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-all cursor-pointer hover-scale group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" 
                    />
                    <Badge className="absolute top-3 left-3" variant="secondary">
                      {article.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl line-clamp-2">{article.title}</CardTitle>
                    <CardDescription className="line-clamp-2 text-sm">
                      {article.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback>{article.author[0]}</AvatarFallback>
                        </Avatar>
                        <span className="text-xs text-muted-foreground">{article.author}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Icon name="Clock" size={12} />
                          {article.readTime}
                        </span>
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <Icon name="SearchX" size={48} className="mx-auto text-muted-foreground/50 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Статьи не найдены</h3>
                <p className="text-muted-foreground">Попробуйте изменить параметры поиска</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="py-12 bg-muted/30 border-t">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 РодителиВместе. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Articles;
