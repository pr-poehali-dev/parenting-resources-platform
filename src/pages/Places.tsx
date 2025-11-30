import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Slider } from '@/components/ui/slider';

const Places = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('rating');
  const [priceRange, setPriceRange] = useState([1, 3]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const places = [
    { 
      id: 1, 
      name: 'Детский центр "Радуга"', 
      type: 'Развивающий центр', 
      address: 'ул. Пушкина, 15',
      rating: 4.8,
      price: 2,
      age: '1-7 лет',
      phone: '+7 (495) 123-45-67',
      description: 'Современный развивающий центр с комплексными программами для дошкольников.',
      image: 'https://cdn.poehali.dev/projects/d1171827-1bda-4150-9a6f-a93dc7020e3d/files/0522412c-5ef0-457b-bf4b-8d4a36dee635.jpg',
      reviews: 156
    },
    { 
      id: 2, 
      name: 'Спортивный клуб "Олимпик"', 
      type: 'Спорт', 
      address: 'пр. Победы, 42',
      rating: 4.9,
      price: 3,
      age: '5-15 лет',
      phone: '+7 (495) 234-56-78',
      description: 'Профессиональный спортивный клуб с программами по 10+ видам спорта.',
      image: 'https://cdn.poehali.dev/projects/d1171827-1bda-4150-9a6f-a93dc7020e3d/files/0522412c-5ef0-457b-bf4b-8d4a36dee635.jpg',
      reviews: 203
    },
    { 
      id: 3, 
      name: 'Творческая студия "Палитра"', 
      type: 'Творчество', 
      address: 'ул. Ленина, 8',
      rating: 4.7,
      price: 2,
      age: '3-12 лет',
      phone: '+7 (495) 345-67-89',
      description: 'Студия для юных художников и мастеров прикладного творчества.',
      image: 'https://cdn.poehali.dev/projects/d1171827-1bda-4150-9a6f-a93dc7020e3d/files/0522412c-5ef0-457b-bf4b-8d4a36dee635.jpg',
      reviews: 89
    },
    { 
      id: 4, 
      name: 'Языковая школа "Полиглот"', 
      type: 'Образование', 
      address: 'ул. Гагарина, 23',
      rating: 5.0,
      price: 3,
      age: '4-16 лет',
      phone: '+7 (495) 456-78-90',
      description: 'Изучение иностранных языков по современным методикам с носителями.',
      image: 'https://cdn.poehali.dev/projects/d1171827-1bda-4150-9a6f-a93dc7020e3d/files/0522412c-5ef0-457b-bf4b-8d4a36dee635.jpg',
      reviews: 312
    },
    { 
      id: 5, 
      name: 'Театральная студия "Маска"', 
      type: 'Творчество', 
      address: 'ул. Чехова, 7',
      rating: 4.6,
      price: 2,
      age: '5-14 лет',
      phone: '+7 (495) 567-89-01',
      description: 'Обучение актёрскому мастерству и постановка детских спектаклей.',
      image: 'https://cdn.poehali.dev/projects/d1171827-1bda-4150-9a6f-a93dc7020e3d/files/0522412c-5ef0-457b-bf4b-8d4a36dee635.jpg',
      reviews: 127
    },
    { 
      id: 6, 
      name: 'Робототехника "ТехноКидс"', 
      type: 'Образование', 
      address: 'ул. Космонавтов, 11',
      rating: 4.9,
      price: 3,
      age: '6-15 лет',
      phone: '+7 (495) 678-90-12',
      description: 'Программирование, робототехника и 3D-моделирование для детей.',
      image: 'https://cdn.poehali.dev/projects/d1171827-1bda-4150-9a6f-a93dc7020e3d/files/0522412c-5ef0-457b-bf4b-8d4a36dee635.jpg',
      reviews: 178
    },
    { 
      id: 7, 
      name: 'Бассейн "Дельфин"', 
      type: 'Спорт', 
      address: 'ул. Морская, 5',
      rating: 4.8,
      price: 2,
      age: '3-14 лет',
      phone: '+7 (495) 789-01-23',
      description: 'Обучение плаванию для детей всех возрастов, аквааэробика.',
      image: 'https://cdn.poehali.dev/projects/d1171827-1bda-4150-9a6f-a93dc7020e3d/files/0522412c-5ef0-457b-bf4b-8d4a36dee635.jpg',
      reviews: 234
    },
    { 
      id: 8, 
      name: 'Музыкальная школа "Гармония"', 
      type: 'Творчество', 
      address: 'пр. Мира, 33',
      rating: 4.7,
      price: 2,
      age: '4-16 лет',
      phone: '+7 (495) 890-12-34',
      description: 'Обучение игре на музыкальных инструментах и вокалу.',
      image: 'https://cdn.poehali.dev/projects/d1171827-1bda-4150-9a6f-a93dc7020e3d/files/0522412c-5ef0-457b-bf4b-8d4a36dee635.jpg',
      reviews: 167
    },
    { 
      id: 9, 
      name: 'Скалодром "Вершина"', 
      type: 'Спорт', 
      address: 'ул. Горная, 19',
      rating: 4.9,
      price: 2,
      age: '7-16 лет',
      phone: '+7 (495) 901-23-45',
      description: 'Детские программы скалолазания с профессиональными инструкторами.',
      image: 'https://cdn.poehali.dev/projects/d1171827-1bda-4150-9a6f-a93dc7020e3d/files/0522412c-5ef0-457b-bf4b-8d4a36dee635.jpg',
      reviews: 143
    },
  ];

  const types = ['all', 'Развивающий центр', 'Спорт', 'Творчество', 'Образование'];

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const filteredPlaces = places
    .filter(place => {
      const matchesSearch = place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           place.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = selectedType === 'all' || place.type === selectedType;
      const matchesPrice = place.price >= priceRange[0] && place.price <= priceRange[1];
      return matchesSearch && matchesType && matchesPrice;
    })
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'reviews') return b.reviews - a.reviews;
      if (sortBy === 'price') return a.price - b.price;
      return 0;
    });

  const getPriceLabel = (price: number) => '₽'.repeat(price);

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
              <Link to="/places" className="text-sm font-medium text-primary">Места</Link>
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

      <section className="py-12 bg-gradient-to-br from-secondary/20 via-primary/10 to-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <Badge>Проверенные партнёры</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">Каталог мест</h1>
            <p className="text-lg text-muted-foreground">
              Лучшие кружки, секции и развивающие центры для ваших детей
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="lg:col-span-2">
                    <label className="text-sm font-medium mb-2 block">Поиск</label>
                    <div className="relative">
                      <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                      <Input
                        placeholder="Название или описание..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Тип</label>
                    <Select value={selectedType} onValueChange={setSelectedType}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Все типы</SelectItem>
                        {types.slice(1).map(type => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Сортировка</label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rating">По рейтингу</SelectItem>
                        <SelectItem value="reviews">По отзывам</SelectItem>
                        <SelectItem value="price">По цене</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="lg:col-span-4">
                    <label className="text-sm font-medium mb-2 block">
                      Цена: {getPriceLabel(priceRange[0])} - {getPriceLabel(priceRange[1])}
                    </label>
                    <Slider
                      min={1}
                      max={3}
                      step={1}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Найдено: <span className="font-semibold text-foreground">{filteredPlaces.length}</span> {filteredPlaces.length === 1 ? 'место' : 'мест'}
              </p>
              <Button variant="outline" size="sm" onClick={() => {
                setSearchQuery('');
                setSelectedType('all');
                setPriceRange([1, 3]);
              }}>
                <Icon name="X" size={16} className="mr-2" />
                Сбросить фильтры
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlaces.map((place) => (
                <Dialog key={place.id}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all cursor-pointer hover-scale group relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 z-10 bg-white/90 hover:bg-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(place.id);
                      }}
                    >
                      <Icon 
                        name="Heart" 
                        size={18} 
                        className={favorites.includes(place.id) ? 'fill-red-500 text-red-500' : ''} 
                      />
                    </Button>
                    <DialogTrigger asChild>
                      <div>
                        <img src={place.image} alt={place.name} className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110" />
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
                              <span className="line-clamp-1">{place.address}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Icon name="Baby" size={14} />
                                <span>{place.age}</span>
                              </div>
                              <span className="font-semibold">{getPriceLabel(place.price)}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs">
                              <Icon name="MessageSquare" size={12} />
                              <span>{place.reviews} отзывов</span>
                            </div>
                          </div>
                        </CardHeader>
                      </div>
                    </DialogTrigger>
                  </Card>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">{place.name}</DialogTitle>
                      <DialogDescription>
                        <Badge variant="outline">{place.type}</Badge>
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <img src={place.image} alt={place.name} className="w-full h-64 object-cover rounded-lg" />
                      
                      <p className="text-sm">{place.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Icon name="MapPin" size={18} className="text-primary" />
                          <span className="text-sm">{place.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                          <span className="text-sm">Рейтинг: {place.rating}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Baby" size={18} className="text-primary" />
                          <span className="text-sm">Возраст: {place.age}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Wallet" size={18} className="text-primary" />
                          <span className="text-sm">Цена: {getPriceLabel(place.price)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="MessageSquare" size={18} className="text-primary" />
                          <span className="text-sm">{place.reviews} отзывов</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Phone" size={18} className="text-primary" />
                          <span className="text-sm">{place.phone}</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-2 pt-4">
                        <Button className="flex-1">
                          <Icon name="Phone" size={18} className="mr-2" />
                          Позвонить
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Icon name="MapPin" size={18} className="mr-2" />
                          На карте
                        </Button>
                        <Button 
                          variant={favorites.includes(place.id) ? 'default' : 'outline'}
                          onClick={() => toggleFavorite(place.id)}
                        >
                          <Icon name="Heart" size={18} className={favorites.includes(place.id) ? 'fill-current' : ''} />
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>

            {filteredPlaces.length === 0 && (
              <div className="text-center py-12">
                <Icon name="SearchX" size={48} className="mx-auto text-muted-foreground/50 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Места не найдены</h3>
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

export default Places;
