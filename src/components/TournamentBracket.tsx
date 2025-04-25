import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Flame, Hexagon } from "lucide-react";

interface TeamProps {
  name: string;
  score?: number;
  seed?: number;
  won?: boolean;
}

const Team = ({ name, score, seed, won = false }: TeamProps) => {
  return (
    <div className={`flex items-center justify-between p-2 border-l-2 ${won ? "border-cs-accent" : "border-gray-700"}`}>
      <div className="flex items-center gap-2">
        {seed && (
          <span className="text-sm text-gray-500 w-5 text-center">{seed}</span>
        )}
        <span className={`${won ? "font-semibold text-white" : "text-gray-300"}`}>{name}</span>
      </div>
      {score !== undefined && (
        <span className={`font-bold ${won ? "text-cs-accent" : "text-gray-400"}`}>{score}</span>
      )}
    </div>
  );
};

interface MatchProps {
  teamA: TeamProps;
  teamB: TeamProps;
  matchNumber: number;
  completed?: boolean;
}

const Match = ({ teamA, teamB, matchNumber, completed = false }: MatchProps) => {
  return (
    <div className={`bg-[#1E2329] border border-gray-700 rounded-md overflow-hidden 
                    hover:border-cs-accent/50 transition-colors
                    ${completed ? "" : "opacity-75"}`}>
      <div className="bg-gray-800 px-3 py-1 text-xs text-gray-400 flex items-center justify-between">
        <span>Матч #{matchNumber}</span>
        {completed ? (
          <Badge variant="outline" className="text-xs bg-cs-accent/20 text-cs-accent border-cs-accent/30">
            Завершен
          </Badge>
        ) : (
          <Badge variant="outline" className="text-xs bg-gray-700/50 text-gray-400 border-gray-700">
            Ожидается
          </Badge>
        )}
      </div>
      <Team {...teamA} />
      <div className="h-px bg-gray-700" />
      <Team {...teamB} />
    </div>
  );
};

interface RoundProps {
  title: string;
  matches: MatchProps[];
  roundNumber: number;
  icon?: React.ReactNode;
}

const Round = ({ title, matches, roundNumber, icon }: RoundProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h3 className="text-md font-bold text-white">{title}</h3>
      </div>
      <div className={`flex flex-col gap-6 h-full ${roundNumber > 1 ? "justify-around" : ""}`}>
        {matches.map((match, index) => (
          <Match key={`round-${roundNumber}-match-${index}`} {...match} />
        ))}
      </div>
    </div>
  );
};

const TournamentBracket = () => {
  // Данные о матчах
  const round1Matches: MatchProps[] = [
    {
      teamA: { name: "Astralis", score: 16, seed: 1, won: true },
      teamB: { name: "Liquid", score: 10, seed: 10 },
      matchNumber: 1,
      completed: true
    },
    {
      teamA: { name: "NaVi", score: 16, seed: 4, won: true },
      teamB: { name: "Vitality", score: 14, seed: 5 },
      matchNumber: 2,
      completed: true
    },
    {
      teamA: { name: "FaZe", score: 16, seed: 2, won: true },
      teamB: { name: "ENCE", score: 13, seed: 7 },
      matchNumber: 3,
      completed: true
    },
    {
      teamA: { name: "G2", score: 9, seed: 6 },
      teamB: { name: "Cloud9", score: 16, seed: 3, won: true },
      matchNumber: 4,
      completed: true
    }
  ];

  const round2Matches: MatchProps[] = [
    {
      teamA: { name: "Astralis", score: 8, seed: 1 },
      teamB: { name: "NaVi", score: 16, seed: 4, won: true },
      matchNumber: 5,
      completed: true
    },
    {
      teamA: { name: "FaZe", seed: 2 },
      teamB: { name: "Cloud9", seed: 3 },
      matchNumber: 6,
      completed: false
    }
  ];

  const round3Matches: MatchProps[] = [
    {
      teamA: { name: "NaVi", seed: 4 },
      teamB: { name: "TBD", seed: 0 },
      matchNumber: 7,
      completed: false
    }
  ];

  return (
    <Card className="bg-[#232A35] border-gray-700">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
          <Trophy className="h-6 w-6 text-cs-orange" />
          Турнирная сетка плей-офф
        </h2>
        
        <div className="text-center text-sm text-gray-400 mb-8">
          10 команд | Single Elimination | 25-28 мая 2025
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 overflow-x-auto">
          <Round 
            title="Четвертьфинал" 
            matches={round1Matches} 
            roundNumber={1}
            icon={<Hexagon className="h-5 w-5 text-gray-500" />}
          />
          
          <Round 
            title="Полуфинал" 
            matches={round2Matches} 
            roundNumber={2}
            icon={<Flame className="h-5 w-5 text-cs-accent" />}
          />
          
          <Round 
            title="Финал" 
            matches={round3Matches} 
            roundNumber={3}
            icon={<Trophy className="h-5 w-5 text-cs-orange" />}
          />
        </div>
        
        <div className="mt-8 p-4 bg-[#1E2329] rounded-md border border-gray-700">
          <h3 className="font-bold text-white mb-2">Как читать турнирную сетку</h3>
          <ul className="text-sm text-gray-400 space-y-1 list-disc pl-5">
            <li>Команда-победитель каждого матча выделена синей полосой слева</li>
            <li>Матчи проходят в формате Best of 3 (до двух побед)</li>
            <li>Финал проходит в формате Best of 5 (до трех побед)</li>
            <li>TBD (To Be Determined) - команда, которая определится после предыдущих матчей</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default TournamentBracket;
