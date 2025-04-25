import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Crosshair, 
  CalendarClock, 
  Trophy, 
  Map, 
  Headphones, 
  Shield 
} from "lucide-react";

const TournamentInfo = () => {
  return (
    <Tabs defaultValue="format" className="w-full max-w-2xl mx-auto">
      <TabsList className="grid grid-cols-3 mb-6">
        <TabsTrigger value="format">Формат</TabsTrigger>
        <TabsTrigger value="rules">Правила</TabsTrigger>
        <TabsTrigger value="prizes">Призы</TabsTrigger>
      </TabsList>
      
      <TabsContent value="format">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Crosshair className="h-5 w-5 text-cs-accent" />
              Формат турнира
            </CardTitle>
            <CardDescription>
              Основная информация о структуре и формате соревнований
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <CalendarClock className="h-5 w-5 text-cs-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Даты проведения</h4>
                <p className="text-sm text-muted-foreground">Квалификация: 10-15 мая 2025</p>
                <p className="text-sm text-muted-foreground">Основной турнир: 25-28 мая 2025</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Map className="h-5 w-5 text-cs-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Структура</h4>
                <p className="text-sm text-muted-foreground">Плей-офф: Single elimination bracket (Bo3)</p>
                <p className="text-sm text-muted-foreground">Гранд-финал: Bo5</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Headphones className="h-5 w-5 text-cs-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Карты</h4>
                <p className="text-sm text-muted-foreground">
                  Dust II, Mirage, Inferno, Nuke, Overpass, Ancient, Anubis
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="rules">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-cs-accent" />
              Правила турнира
            </CardTitle>
            <CardDescription>
              Основные требования и правила участия
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold">Общие положения</h4>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mt-2">
                <li>Возраст участников: от 16 лет</li>
                <li>Каждый участник должен иметь лицензионную копию CS2</li>
                <li>Запрещено использование любого стороннего ПО</li>
                <li>Возможность онлайн-трансляции всех матчей</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold">Технические требования</h4>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mt-2">
                <li>Стабильное интернет-соединение (пинг не выше 80 мс)</li>
                <li>Наличие микрофона и Discord</li>
                <li>Запрет на использование скриптов и макросов</li>
                <li>Обязательная проверка ПО перед началом матчей</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold">Дисциплинарные меры</h4>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mt-2">
                <li>Опоздание более чем на 15 минут – техническое поражение</li>
                <li>Нарушение правил – дисквалификация команды</li>
                <li>Неспортивное поведение – предупреждение/дисквалификация</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="prizes">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-cs-orange" />
              Призовой фонд
            </CardTitle>
            <CardDescription>
              Распределение призового фонда между участниками
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center gap-2">
                <div className="bg-yellow-500 text-white p-1.5 rounded-full flex items-center justify-center w-8 h-8">1</div>
                <span className="font-semibold">1 место</span>
              </div>
              <span className="font-bold text-lg">250 000 ₽</span>
            </div>
            
            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center gap-2">
                <div className="bg-gray-300 text-gray-800 p-1.5 rounded-full flex items-center justify-center w-8 h-8">2</div>
                <span className="font-semibold">2 место</span>
              </div>
              <span className="font-bold text-lg">125 000 ₽</span>
            </div>
            
            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center gap-2">
                <div className="bg-amber-700 text-white p-1.5 rounded-full flex items-center justify-center w-8 h-8">3</div>
                <span className="font-semibold">3-4 места</span>
              </div>
              <span className="font-bold text-lg">50 000 ₽</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-gray-200 text-gray-800 p-1.5 rounded-full flex items-center justify-center w-8 h-8">5</div>
                <span className="font-semibold">5-8 места</span>
              </div>
              <span className="font-bold text-lg">25 000 ₽</span>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default TournamentInfo;
