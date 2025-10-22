import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const cottages = [
  {
    id: 1,
    name: 'Сосновый',
    capacity: '2-4 человека',
    price: '3500',
    features: ['Камин', 'Кухня', 'Веранда'],
    image: 'https://cdn.poehali.dev/projects/a6dfec63-bef6-4f24-b69a-0be23d3929ff/files/349ebe05-982d-4afa-b7eb-0b8b5f5d8e6c.jpg'
  },
  {
    id: 2,
    name: 'Лесной',
    capacity: '4-6 человек',
    price: '5000',
    features: ['Сауна', 'Барбекю', 'Терраса'],
    image: 'https://cdn.poehali.dev/projects/a6dfec63-bef6-4f24-b69a-0be23d3929ff/files/990d595c-1587-4306-8896-3302a6cc82ea.jpg'
  },
  {
    id: 3,
    name: 'Уютный',
    capacity: '2 человека',
    price: '2800',
    features: ['Вид на лес', 'Кухня'],
    image: 'https://cdn.poehali.dev/projects/a6dfec63-bef6-4f24-b69a-0be23d3929ff/files/349ebe05-982d-4afa-b7eb-0b8b5f5d8e6c.jpg'
  },
  {
    id: 4,
    name: 'Семейный',
    capacity: '6-8 человек',
    price: '7000',
    features: ['Сауна', 'Камин', 'Барбекю', 'Терраса'],
    image: 'https://cdn.poehali.dev/projects/a6dfec63-bef6-4f24-b69a-0be23d3929ff/files/990d595c-1587-4306-8896-3302a6cc82ea.jpg'
  },
  {
    id: 5,
    name: 'Романтик',
    capacity: '2 человека',
    price: '4200',
    features: ['Джакузи', 'Камин', 'Вид на озеро'],
    image: 'https://cdn.poehali.dev/projects/a6dfec63-bef6-4f24-b69a-0be23d3929ff/files/349ebe05-982d-4afa-b7eb-0b8b5f5d8e6c.jpg'
  },
  {
    id: 6,
    name: 'Охотничий',
    capacity: '4-5 человек',
    price: '4500',
    features: ['Камин', 'Барбекю', 'Веранда'],
    image: 'https://cdn.poehali.dev/projects/a6dfec63-bef6-4f24-b69a-0be23d3929ff/files/990d595c-1587-4306-8896-3302a6cc82ea.jpg'
  },
  {
    id: 7,
    name: 'Премиум',
    capacity: '8-10 человек',
    price: '9500',
    features: ['Сауна', 'Джакузи', 'Камин', 'Кухня', 'Барбекю', 'Терраса'],
    image: 'https://cdn.poehali.dev/projects/a6dfec63-bef6-4f24-b69a-0be23d3929ff/files/990d595c-1587-4306-8896-3302a6cc82ea.jpg'
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="TreePine" size={28} className="text-accent" />
              <h1 className="text-2xl font-bold text-primary">Сосновый Бор</h1>
            </div>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Коттеджи', 'Территория', 'Цены', 'Галерея', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={18} className="mr-2" />
              Забронировать
            </Button>
          </div>
        </div>
      </nav>

      <section id="главная" className="pt-24 pb-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                Отдых в сосновом лесу
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                7 уютных коттеджей на берегу озера в окружении соснового бора. 
                Тишина, свежий воздух и единение с природой.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => scrollToSection('коттеджи')}>
                  <Icon name="Home" size={20} className="mr-2" />
                  Выбрать коттедж
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('контакты')}>
                  <Icon name="MapPin" size={20} className="mr-2" />
                  Как добраться
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">7</div>
                  <div className="text-sm text-muted-foreground">Коттеджей</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50</div>
                  <div className="text-sm text-muted-foreground">Гектаров леса</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2</div>
                  <div className="text-sm text-muted-foreground">Озера</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/a6dfec63-bef6-4f24-b69a-0be23d3929ff/files/2696752a-4b96-42ec-8a79-e33b2caaa80e.jpg"
                alt="Сосновый лес"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="коттеджи" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Наши коттеджи</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите уютный коттедж по вашему вкусу — от романтичного для двоих до просторного семейного
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cottages.map((cottage) => (
              <Card key={cottage.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={cottage.image}
                    alt={cottage.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    {cottage.capacity}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{cottage.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">
                    от {cottage.price} ₽/сутки
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cottage.features.map((feature) => (
                      <Badge key={feature} variant="secondary">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="территория" className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Территория базы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              50 гектаров соснового леса с развитой инфраструктурой для комфортного отдыха
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Waves', title: 'Пляж', desc: 'Оборудованный пляж на берегу озера' },
              { icon: 'Flame', title: 'Костровые зоны', desc: 'Места для барбекю и костра' },
              { icon: 'Trees', title: 'Прогулочные тропы', desc: '5 км экотроп по лесу' },
              { icon: 'Bike', title: 'Прокат', desc: 'Велосипеды, лодки, снаряжение' }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-accent/10 rounded-full">
                      <Icon name={item.icon as any} size={32} className="text-accent" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="цены" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Цены и условия</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Прозрачные цены без скрытых платежей
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Стоимость проживания</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Будни (пн-чт)</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Эконом коттеджи: от 2800 ₽</li>
                      <li>• Стандарт коттеджи: от 3500 ₽</li>
                      <li>• Премиум коттеджи: от 7000 ₽</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Выходные (пт-вс)</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Эконом коттеджи: от 3500 ₽</li>
                      <li>• Стандарт коттеджи: от 4500 ₽</li>
                      <li>• Премиум коттеджи: от 9500 ₽</li>
                    </ul>
                  </div>
                </div>
                <div className="pt-6 border-t">
                  <h3 className="font-semibold mb-3 text-lg">Дополнительно</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Прокат велосипедов: 300 ₽/день</li>
                    <li>• Прокат лодки: 500 ₽/час</li>
                    <li>• Баня/сауна: 1500 ₽/2 часа</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="галерея" className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Галерея</h2>
            <p className="text-lg text-muted-foreground">Фотографии нашей базы отдыха</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              'https://cdn.poehali.dev/projects/a6dfec63-bef6-4f24-b69a-0be23d3929ff/files/349ebe05-982d-4afa-b7eb-0b8b5f5d8e6c.jpg',
              'https://cdn.poehali.dev/projects/a6dfec63-bef6-4f24-b69a-0be23d3929ff/files/2696752a-4b96-42ec-8a79-e33b2caaa80e.jpg',
              'https://cdn.poehali.dev/projects/a6dfec63-bef6-4f24-b69a-0be23d3929ff/files/990d595c-1587-4306-8896-3302a6cc82ea.jpg',
              'https://cdn.poehali.dev/projects/a6dfec63-bef6-4f24-b69a-0be23d3929ff/files/349ebe05-982d-4afa-b7eb-0b8b5f5d8e6c.jpg',
              'https://cdn.poehali.dev/projects/a6dfec63-bef6-4f24-b69a-0be23d3929ff/files/990d595c-1587-4306-8896-3302a6cc82ea.jpg',
              'https://cdn.poehali.dev/projects/a6dfec63-bef6-4f24-b69a-0be23d3929ff/files/2696752a-4b96-42ec-8a79-e33b2caaa80e.jpg'
            ].map((img, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={img}
                  alt={`Галерея ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Контакты и как добраться</h2>
            <p className="text-lg text-muted-foreground">Мы находимся всего в 80 км от города</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Phone" size={24} className="text-primary" />
                  Свяжитесь с нами
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={20} className="text-accent mt-1" />
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-muted-foreground">+7 (XXX) XXX-XX-XX</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={20} className="text-accent mt-1" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">info@sosnovybor.ru</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={20} className="text-accent mt-1" />
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-muted-foreground">Сосновый бор, участок 12</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={20} className="text-accent mt-1" />
                  <div>
                    <div className="font-semibold">Время работы</div>
                    <div className="text-muted-foreground">Круглосуточно</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Car" size={24} className="text-primary" />
                  Как добраться
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Car" size={18} className="text-accent" />
                    На автомобиле
                  </div>
                  <p className="text-muted-foreground text-sm">
                    По трассе М-5 до поворота на п. Сосновый. Далее 12 км по асфальтированной дороге. 
                    Время в пути: 1 час 20 минут.
                  </p>
                </div>
                <div>
                  <div className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Bus" size={18} className="text-accent" />
                    На общественном транспорте
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Автобус №125 от автовокзала до остановки "Сосновый бор". 
                    Отправление каждые 2 часа.
                  </p>
                </div>
                <div>
                  <div className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Users" size={18} className="text-accent" />
                    Трансфер
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Организуем встречу и трансфер от города. Стоимость: 1500 ₽ (до 4 человек).
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="TreePine" size={24} />
              <span className="font-bold text-xl">Сосновый Бор</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm opacity-90">База отдыха в сосновом лесу</p>
              <p className="text-xs opacity-75 mt-1">© 2024 Все права защищены</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
