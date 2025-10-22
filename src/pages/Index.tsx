import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const cottages = [
  {
    id: 1,
    name: 'Эконом',
    capacity: '2-3 человека',
    price: '2500',
    features: ['Кухня', 'Душ', 'Wi-Fi'],
    image: 'https://cdn.poehali.dev/projects/a6dfec63-bef6-4f24-b69a-0be23d3929ff/files/05962742-7dc0-4385-990b-046e953fae9d.jpg'
  },
  {
    id: 2,
    name: 'Стандарт',
    capacity: '2-4 человека',
    price: '3500',
    features: ['Камин', 'Кухня', 'Веранда', 'Душ'],
    image: 'https://cdn.poehali.dev/projects/a6dfec63-bef6-4f24-b69a-0be23d3929ff/files/062e286e-7619-4d5f-aa3d-f472d7b31fa5.jpg'
  },
  {
    id: 3,
    name: 'Комфорт',
    capacity: '4-6 человек',
    price: '5000',
    features: ['Сауна', 'Барбекю', 'Терраса', 'Камин'],
    image: 'https://cdn.poehali.dev/projects/a6dfec63-bef6-4f24-b69a-0be23d3929ff/files/05962742-7dc0-4385-990b-046e953fae9d.jpg'
  },
  {
    id: 4,
    name: 'Семейный',
    capacity: '6-8 человек',
    price: '7000',
    features: ['Сауна', 'Камин', 'Барбекю', 'Терраса', '2 спальни'],
    image: 'https://cdn.poehali.dev/projects/a6dfec63-bef6-4f24-b69a-0be23d3929ff/files/062e286e-7619-4d5f-aa3d-f472d7b31fa5.jpg'
  },
  {
    id: 5,
    name: 'Романтик',
    capacity: '2 человека',
    price: '4200',
    features: ['Джакузи', 'Камин', 'Вид на озеро', 'Веранда'],
    image: 'https://cdn.poehali.dev/projects/a6dfec63-bef6-4f24-b69a-0be23d3929ff/files/05962742-7dc0-4385-990b-046e953fae9d.jpg'
  },
  {
    id: 6,
    name: 'Люкс',
    capacity: '4-5 человек',
    price: '6500',
    features: ['Сауна', 'Джакузи', 'Камин', 'Барбекю', 'Панорамные окна'],
    image: 'https://cdn.poehali.dev/projects/a6dfec63-bef6-4f24-b69a-0be23d3929ff/files/062e286e-7619-4d5f-aa3d-f472d7b31fa5.jpg'
  },
  {
    id: 7,
    name: 'Премиум',
    capacity: '8-10 человек',
    price: '9500',
    features: ['Сауна', 'Джакузи', 'Камин', 'Кухня', 'Барбекю', 'Терраса', '3 спальни'],
    image: 'https://cdn.poehali.dev/projects/a6dfec63-bef6-4f24-b69a-0be23d3929ff/files/062e286e-7619-4d5f-aa3d-f472d7b31fa5.jpg'
  }
];

const amenities = [
  { icon: 'Waves', title: 'Пляж', description: 'Собственный песчаный пляж на берегу озера' },
  { icon: 'Flame', title: 'Костровые зоны', description: 'Оборудованные места для костра и шашлыка' },
  { icon: 'Bike', title: 'Прокат', description: 'Велосипеды, лодки, катамараны' },
  { icon: 'Utensils', title: 'Кафе', description: 'Летнее кафе с домашней кухней' },
  { icon: 'ParkingSquare', title: 'Парковка', description: 'Охраняемая парковка для гостей' },
  { icon: 'Wifi', title: 'Wi-Fi', description: 'Бесплатный интернет на всей территории' }
];

const gallery = [
  'https://cdn.poehali.dev/projects/a6dfec63-bef6-4f24-b69a-0be23d3929ff/files/a7a7704d-fc21-4bcc-8284-9cebdb5431dd.jpg',
  'https://cdn.poehali.dev/projects/a6dfec63-bef6-4f24-b69a-0be23d3929ff/files/05962742-7dc0-4385-990b-046e953fae9d.jpg',
  'https://cdn.poehali.dev/projects/a6dfec63-bef6-4f24-b69a-0be23d3929ff/files/062e286e-7619-4d5f-aa3d-f472d7b31fa5.jpg',
  'https://cdn.poehali.dev/projects/a6dfec63-bef6-4f24-b69a-0be23d3929ff/files/a7a7704d-fc21-4bcc-8284-9cebdb5431dd.jpg',
  'https://cdn.poehali.dev/projects/a6dfec63-bef6-4f24-b69a-0be23d3929ff/files/05962742-7dc0-4385-990b-046e953fae9d.jpg',
  'https://cdn.poehali.dev/projects/a6dfec63-bef6-4f24-b69a-0be23d3929ff/files/062e286e-7619-4d5f-aa3d-f472d7b31fa5.jpg'
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
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="TreePine" size={28} className="text-accent" />
              <h1 className="text-2xl font-bold text-primary">Forrest</h1>
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
                src="https://cdn.poehali.dev/projects/a6dfec63-bef6-4f24-b69a-0be23d3929ff/files/a7a7704d-fc21-4bcc-8284-9cebdb5431dd.jpg"
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
              От уютных коттеджей для двоих до просторных семейных домов — для каждого найдется идеальный вариант
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity) => (
              <Card key={amenity.title} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                    <Icon name={amenity.icon} size={32} className="text-accent" />
                  </div>
                  <CardTitle className="text-xl">{amenity.title}</CardTitle>
                  <CardDescription>{amenity.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="цены" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Цены на проживание</h2>
            <p className="text-lg text-muted-foreground">
              Стоимость указана за сутки проживания
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Прайс-лист</CardTitle>
                <CardDescription>Сезон 2024-2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 font-semibold text-lg border-b pb-3">
                    <div>Коттедж</div>
                    <div className="text-center">Будни</div>
                    <div className="text-right">Выходные</div>
                  </div>
                  {cottages.map((cottage) => (
                    <div key={cottage.id} className="grid grid-cols-3 py-3 border-b items-center hover:bg-secondary/10 transition-colors">
                      <div>
                        <div className="font-medium">{cottage.name}</div>
                        <div className="text-sm text-muted-foreground">{cottage.capacity}</div>
                      </div>
                      <div className="text-center text-primary font-semibold">{cottage.price} ₽</div>
                      <div className="text-right text-primary font-semibold">{Math.round(parseInt(cottage.price) * 1.2)} ₽</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-secondary/20 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <Icon name="Info" size={16} className="inline mr-2" />
                    При бронировании от 7 дней — скидка 15%. Минимальный срок проживания — 2 суток.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="галерея" className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Фотогалерея</h2>
            <p className="text-lg text-muted-foreground">
              Посмотрите, как выглядит наша база отдыха
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl shadow-lg group h-64">
                <img
                  src={image}
                  alt={`Фото ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Контакты</h2>
            <p className="text-lg text-muted-foreground">
              Свяжитесь с нами для бронирования
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Как добраться</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={24} className="text-accent mt-1" />
                  <div>
                    <div className="font-medium">Адрес</div>
                    <div className="text-muted-foreground">Московская область, Рузский район, п. Сосновый Бор</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Car" size={24} className="text-accent mt-1" />
                  <div>
                    <div className="font-medium">На автомобиле</div>
                    <div className="text-muted-foreground">95 км от МКАД по Минскому шоссе, поворот на Тучково</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Train" size={24} className="text-accent mt-1" />
                  <div>
                    <div className="font-medium">На электричке</div>
                    <div className="text-muted-foreground">С Белорусского вокзала до ст. Тучково, далее на такси 10 км</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Связь</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={24} className="text-accent mt-1" />
                  <div>
                    <div className="font-medium">Телефон</div>
                    <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                    <div className="text-muted-foreground">+7 (916) 987-65-43</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={24} className="text-accent mt-1" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">info@forrest-baza.ru</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={24} className="text-accent mt-1" />
                  <div>
                    <div className="font-medium">Режим работы</div>
                    <div className="text-muted-foreground">Ежедневно с 9:00 до 21:00</div>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 mt-4" size="lg">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="TreePine" size={24} />
            <span className="font-bold text-xl">Forrest</span>
          </div>
          <p className="text-sm opacity-90">
            База отдыха в сосновом лесу © 2024. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
