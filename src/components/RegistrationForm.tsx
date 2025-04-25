import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { InfoIcon, Users, User } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const formSchema = z.object({
  registrationType: z.enum(["individual", "team"], {
    required_error: "Выберите тип регистрации",
  }),
  teamName: z.string().optional(),
  playerName: z.string().min(2, {
    message: "Укажите ваше имя/никнейм",
  }),
  email: z.string().email({
    message: "Укажите корректный email",
  }),
  phone: z.string().min(10, {
    message: "Укажите корректный номер телефона",
  }),
  teamSize: z.string().min(1, {
    message: "Выберите размер команды",
  }),
  playersInfo: z.string().optional(),
  experience: z.string().min(1, {
    message: "Выберите уровень опыта",
  }),
  steamId: z.string().min(5, {
    message: "Укажите ваш Steam ID",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationType, setRegistrationType] = useState<"individual" | "team">("individual");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      registrationType: "individual",
      teamName: "",
      playerName: "",
      email: "",
      phone: "",
      teamSize: "1",
      playersInfo: "",
      experience: "",
      steamId: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Имитация отправки данных на сервер
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const successMessage = data.registrationType === "individual"
      ? `Игрок "${data.playerName}" зарегистрирован. Мы подберем для вас команду и свяжемся с вами.`
      : `Команда ${data.teamName ? `"${data.teamName}"` : ""} (${data.teamSize} участников) зарегистрирована. Мы свяжемся с вами для подтверждения участия.`;
    
    toast({
      title: "Заявка успешно отправлена!",
      description: successMessage,
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  // Обработчик изменения типа регистрации
  const handleRegistrationTypeChange = (value: "individual" | "team") => {
    setRegistrationType(value);
    form.setValue("registrationType", value);
    if (value === "individual") {
      form.setValue("teamSize", "1");
    } else {
      form.setValue("teamSize", "");
    }
  };

  return (
    <Card className="w-full mx-auto bg-[#1E2329]">
      <CardHeader>
        <CardTitle className="text-2xl text-white">Регистрация на турнир</CardTitle>
        <CardDescription className="text-cs-light">
          Заполните форму, чтобы зарегистрироваться на турнир по CS2
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="registrationType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-white">Тип регистрации</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(value) => handleRegistrationTypeChange(value as "individual" | "team")}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-4"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="individual" />
                        </FormControl>
                        <FormLabel className="font-normal text-white flex items-center">
                          <User className="mr-2 h-4 w-4 text-cs-accent" />
                          Индивидуальная
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="team" />
                        </FormControl>
                        <FormLabel className="font-normal text-white flex items-center">
                          <Users className="mr-2 h-4 w-4 text-cs-accent" />
                          Командная
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {registrationType === "individual" && (
              <Alert className="bg-cs-accent/10 text-cs-light border-cs-accent/30">
                <InfoIcon className="h-4 w-4 text-cs-accent" />
                <AlertTitle className="text-cs-accent">Индивидуальная регистрация</AlertTitle>
                <AlertDescription>
                  Вы регистрируетесь как один игрок. Мы подберем для вас команду из подходящих по уровню игроков.
                </AlertDescription>
              </Alert>
            )}
            
            {registrationType === "team" && (
              <FormField
                control={form.control}
                name="teamName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Название команды</FormLabel>
                    <FormControl>
                      <Input placeholder="Введите название команды" {...field} className="bg-[#2A303C] border-[#3A4356] text-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            
            <FormField
              control={form.control}
              name="playerName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">
                    {registrationType === "individual" ? "Ваше имя/никнейм" : "Имя капитана"}
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder={registrationType === "individual" ? "Укажите ваше имя/никнейм" : "Укажите имя капитана"} 
                      {...field}
                      className="bg-[#2A303C] border-[#3A4356] text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="example@mail.com" 
                        type="email" 
                        {...field}
                        className="bg-[#2A303C] border-[#3A4356] text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Телефон</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="+7 (XXX) XXX-XX-XX" 
                        {...field}
                        className="bg-[#2A303C] border-[#3A4356] text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="steamId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Steam ID</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Ваш Steam ID" 
                        {...field}
                        className="bg-[#2A303C] border-[#3A4356] text-white"
                      />
                    </FormControl>
                    <FormDescription className="text-cs-light/70">
                      Например: STEAM_0:1:12345678
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {registrationType === "team" && (
                <FormField
                  control={form.control}
                  name="teamSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Размер команды</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-[#2A303C] border-[#3A4356] text-white">
                            <SelectValue placeholder="Выберите размер команды" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-[#2A303C] border-[#3A4356] text-white">
                          <SelectItem value="2">2 игрока</SelectItem>
                          <SelectItem value="3">3 игрока</SelectItem>
                          <SelectItem value="4">4 игрока</SelectItem>
                          <SelectItem value="5">5 игроков</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </div>
            
            {registrationType === "team" && (
              <FormField
                control={form.control}
                name="playersInfo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Информация о игроках</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Укажите информацию о всех игроках (Steam ID, никнеймы, роли)" 
                        className="min-h-[100px] bg-[#2A303C] border-[#3A4356] text-white"
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription className="text-cs-light/70">
                      Укажите никнеймы, Steam ID и роли всех игроков команды
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            
            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Уровень опыта</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-[#2A303C] border-[#3A4356] text-white">
                        <SelectValue placeholder="Выберите уровень опыта" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-[#2A303C] border-[#3A4356] text-white">
                      <SelectItem value="beginner">Начинающий</SelectItem>
                      <SelectItem value="amateur">Любитель</SelectItem>
                      <SelectItem value="advanced">Продвинутый</SelectItem>
                      <SelectItem value="semi-pro">Полу-профессионал</SelectItem>
                      <SelectItem value="pro">Профессионал</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              className="w-full bg-cs-accent hover:bg-blue-600" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Отправка..." : registrationType === "individual" 
                ? "Зарегистрироваться как игрок" 
                : "Зарегистрировать команду"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default RegistrationForm;
