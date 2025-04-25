import TournamentHeader from "@/components/TournamentHeader";
import RegistrationForm from "@/components/RegistrationForm";
import TournamentInfo from "@/components/TournamentInfo";
import TournamentBracket from "@/components/TournamentBracket";
import { Separator } from "@/components/ui/separator";
import { Trophy, Calendar, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cs-dark to-[#1b2838]">
      <div className="bg-cs-pattern">
        <div className="content-above-overlay">
          <div className="container mx-auto px-4 pt-16 pb-20">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                CS2 Турнир 2025
              </h1>
              <p className="text-xl text-cs-light mb-6">
                Докажите, что вы лучшие! Регистрируйтесь на самый престижный турнир по Counter-Strike 2
              </p>
              <div className="flex justify-center gap-3 flex-wrap">
                <span className="inline-flex items-center bg-cs-accent/20 px-3 py-1 rounded-lg text-cs-accent">
                  <Trophy className="w-4 h-4 mr-1" />
                  500 000 ₽
                </span>
                <span className="inline-flex items-center bg-cs-accent/20 px-3 py-1 rounded-lg text-cs-accent">
                  <Calendar className="w-4 h-4 mr-1" />
                  25 мая 2025
                </span>
                <span className="inline-flex items-center bg-cs-accent/20 px-3 py-1 rounded-lg text-cs-accent">
                  <Users className="w-4 h-4 mr-1" />
                  8 команд
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <TournamentHeader />
      
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="info" className="w-full">
          <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-8">
            <TabsTrigger value="info">Информация</TabsTrigger>
            <TabsTrigger value="bracket">Турнирная сетка</TabsTrigger>
            <TabsTrigger value="register">Регистрация</TabsTrigger>
          </TabsList>
          
          <TabsContent value="info" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-3">
                <h2 className="text-2xl font-bold text-white mb-6">Информация о турнире</h2>
                <div className="bg-[#1E2329] p-6 rounded-lg shadow-lg mb-8">
                  <p className="text-cs-light mb-4">
                    Приглашаем вас принять участие в ежегодном турнире по Counter-Strike 2, который пройдет в мае 2025 года. 
                    Этот турнир объединит лучшие команды со всей России и СНГ для соревнований в одной из самых популярных 
                    киберспортивных дисциплин.
                  </p>
                  <p className="text-cs-light mb-4">
                    Наш турнир предоставляет уникальную возможность для команд всех уровней - от начинающих до профессионалов - 
                    проявить себя на киберспортивной арене и побороться за внушительный призовой фонд.
                  </p>
                  <p className="text-cs-light">
                    Регистрация открыта до 1 мая 2025 года. Спешите подать заявку! Вы можете зарегистрироваться как индивидуально,
                    так и командой от 2 до 5 игроков.
                  </p>
                </div>
                
                <TournamentInfo />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="bracket">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">Турнирная сетка</h2>
              <TournamentBracket />
            </div>
          </TabsContent>
          
          <TabsContent value="register">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-6">Регистрация</h2>
              <RegistrationForm />
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <Separator className="bg-cs-accent/20" />
      
      <footer className="bg-cs-dark text-cs-light py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">© 2025 CS2 Турнир. Все права защищены.</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-cs-accent hover:text-cs-accent/80 transition">Правила</a>
              <a href="#" className="text-cs-accent hover:text-cs-accent/80 transition">Контакты</a>
              <a href="#" className="text-cs-accent hover:text-cs-accent/80 transition">FAQ</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
