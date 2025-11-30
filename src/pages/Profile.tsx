import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const favoriteArticles = [
    { id: 1, title: 'Как выбрать первую секцию для ребёнка', category: 'Досуг', date: '2 дня назад' },
    { id: 2, title: 'Развитие эмоционального интеллекта у детей 3-7 лет', category: 'Воспитание', date: '5 дней назад' },
    { id: 7, title: 'Подготовка к школе: что важно знать', category: 'Образование', date: '4 дня назад' },
  ];

  const favoritePlaces = [
    { 
      id: 1, 
      name: 'Детский центр "Радуга"', 
      type: 'Развивающий центр', 
      address: 'ул. Пушкина, 15',
      rating: 4.8,
      image: 'https://cdn.poehali.dev/projects/d1171827-1bda-4150-9a6f-a93dc7020e3d/files/0522412c-5ef0-457b-bf4b-8d4a36dee635.jpg'
    },
    { 
      id: 4, 
      name: 'Языковая школа "Полиглот"', 
      type: 'Образование', 
      address: 'ул. Гагарина, 23',
      rating: 5.0,
      image: 'https://cdn.poehali.dev/projects/d1171827-1bda-4150-9a6f-a93dc7020e3d/files/0522412c-5ef0-457b-bf4b-8d4a36dee635.jpg'
    },
    { 
      id: 6, 
      name: 'Робототехника "ТехноКидс"', 
      type: 'Образование', 
      address: 'ул. Космонавтов, 11',
      rating: 4.9,
      image: 'https://cdn.poehali.dev/projects/d1171827-1bda-4150-9a6f-a93dc7020e3d/files/0522412c-5ef0-457b-bf4b-8d4a36dee635.jpg'
    },
  ];

  const aiHistory = [
    { id: 1, question: 'Как подготовить ребёнка к детскому саду?', date: 'Сегодня, 14:32', category: 'Воспитание' },
    { id: 2, question: 'Какие витамины нужны школьнику?', date: 'Вчера, 18:45', category: 'Здоровье' },
    { id: 3, question: 'Лучшие кружки для ребёнка 5 лет?', date: '3 дня назад', category: 'Досуг' },
    { id: 4, question: 'Как научить ребёнка читать?', date: '5 дней назад', category: 'Образование' },
  ];

  const children = [
    { id: 1, name: 'Маша', age: 5, gender: 'Девочка', interests: ['Рисование', 'Танцы'] },
    { id: 2, name: 'Петя', age: 8, gender: 'Мальчик', interests: ['Футбол', 'Робототехника'] },
  ];

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
              <Link to="/articles" className="text-sm font-medium hover:text-primary transition-colors">Статьи</Link>
              <Link to="/places" className="text-sm font-medium hover:text-primary transition-colors">Места</Link>
              <Link to="/profile" className="text-sm font-medium text-primary">Профиль</Link>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Icon name="Menu" size={24} />
              </Button>
              <Avatar>
                <AvatarFallback>У</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>

      <section className="py-12 bg-gradient-to-br from-accent/20 via-primary/10 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <Avatar className="w-24 h-24">
                    <AvatarFallback className="text-3xl">У</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 space-y-2">
                    {isEditing ? (
                      <div className="space-y-4">
                        <div>
                          <Label>Имя</Label>
                          <Input defaultValue="Елена Иванова" />
                        </div>
                        <div>
                          <Label>Email</Label>
                          <Input defaultValue="elena@example.com" type="email" />
                        </div>
                        <div>
                          <Label>Телефон</Label>
                          <Input defaultValue="+7 (999) 123-45-67" />
                        </div>
                      </div>
                    ) : (
                      <>
                        <h1 className="text-3xl font-bold">Елена Иванова</h1>
                        <div className="flex flex-col gap-1 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Icon name="Mail" size={16} />
                            <span>elena@example.com</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Icon name="Phone" size={16} />
                            <span>+7 (999) 123-45-67</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Icon name="Calendar" size={16} />
                            <span>На платформе с января 2024</span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  <Button 
                    variant={isEditing ? 'default' : 'outline'}
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    <Icon name={isEditing ? 'Check' : 'Pencil'} size={18} className="mr-2" />
                    {isEditing ? 'Сохранить' : 'Редактировать'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="favorites" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="favorites">
                  <Icon name="Heart" size={18} className="mr-2" />
                  Избранное
                </TabsTrigger>
                <TabsTrigger value="children">
                  <Icon name="Baby" size={18} className="mr-2" />
                  Дети
                </TabsTrigger>
                <TabsTrigger value="history">
                  <Icon name="History" size={18} className="mr-2" />
                  История AI
                </TabsTrigger>
              </TabsList>

              <TabsContent value="favorites" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="BookmarkCheck" className="text-primary" />
                      Избранные статьи
                    </CardTitle>
                    <CardDescription>Статьи, которые вы сохранили для чтения позже</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {favoriteArticles.map((article) => (
                      <div key={article.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="secondary" className="text-xs">{article.category}</Badge>
                            <span className="text-xs text-muted-foreground">{article.date}</span>
                          </div>
                          <h4 className="font-semibold">{article.title}</h4>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon">
                            <Icon name="ExternalLink" size={18} />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Icon name="Heart" size={18} className="fill-red-500 text-red-500" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="MapPin" className="text-primary" />
                      Избранные места
                    </CardTitle>
                    <CardDescription>Места, которые вы добавили в избранное</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      {favoritePlaces.map((place) => (
                        <Card key={place.id} className="overflow-hidden hover:shadow-lg transition-all cursor-pointer hover-scale">
                          <img src={place.image} alt={place.name} className="w-full h-32 object-cover" />
                          <CardHeader className="space-y-2 p-4">
                            <Badge variant="outline" className="w-fit text-xs">{place.type}</Badge>
                            <CardTitle className="text-sm">{place.name}</CardTitle>
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Icon name="MapPin" size={12} />
                                <span className="line-clamp-1">{place.address}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Icon name="Star" size={12} className="text-yellow-500 fill-yellow-500" />
                                <span>{place.rating}</span>
                              </div>
                            </div>
                          </CardHeader>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="children" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Информация о детях</CardTitle>
                        <CardDescription>Добавьте данные о ваших детях для персонализированных рекомендаций</CardDescription>
                      </div>
                      <Button>
                        <Icon name="Plus" size={18} className="mr-2" />
                        Добавить ребёнка
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {children.map((child) => (
                      <Card key={child.id}>
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between">
                            <div className="space-y-3 flex-1">
                              <div className="flex items-center gap-3">
                                <Avatar>
                                  <AvatarFallback>{child.name[0]}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <h3 className="font-semibold text-lg">{child.name}</h3>
                                  <p className="text-sm text-muted-foreground">{child.age} {child.age === 1 ? 'год' : child.age < 5 ? 'года' : 'лет'} • {child.gender}</p>
                                </div>
                              </div>
                              
                              <Separator />
                              
                              <div>
                                <Label className="text-xs text-muted-foreground">Интересы</Label>
                                <div className="flex gap-2 mt-2">
                                  {child.interests.map((interest, idx) => (
                                    <Badge key={idx} variant="secondary">{interest}</Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                            
                            <Button variant="ghost" size="icon">
                              <Icon name="Pencil" size={18} />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="history" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Bot" className="text-accent" />
                      История обращений к AI-помощнику
                    </CardTitle>
                    <CardDescription>Ваши предыдущие вопросы и консультации</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {aiHistory.map((item) => (
                      <div key={item.id} className="flex items-start gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                        <div className="bg-accent/20 p-2 rounded-full">
                          <Icon name="MessageSquare" size={20} className="text-accent-foreground" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline" className="text-xs">{item.category}</Badge>
                            <span className="text-xs text-muted-foreground">{item.date}</span>
                          </div>
                          <p className="font-medium">{item.question}</p>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Icon name="RotateCcw" size={18} />
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
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

export default Profile;
