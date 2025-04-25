import { Button } from "@/components/ui/button";
import { Calendar, Trophy, Users } from "lucide-react";

const TournamentHeader = () => {
  return (
    <div className="w-full bg-cs-dark text-white py-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold text-cs-accent">CS2 Турнир 2025</h1>
            <p className="text-cs-light mt-2">Соревнования лучших команд</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex items-center gap-2 text-cs-light">
              <Calendar className="h-5 w-5 text-cs-accent" />
              <span>25 мая 2025</span>
            </div>
            
            <div className="flex items-center gap-2 text-cs-light">
              <Trophy className="h-5 w-5 text-cs-orange" />
              <span>Призовой фонд: 500 000 ₽</span>
            </div>
            
            <div className="flex items-center gap-2 text-cs-light">
              <Users className="h-5 w-5 text-cs-accent" />
              <span>32 команды</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentHeader;
