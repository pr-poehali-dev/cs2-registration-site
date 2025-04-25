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

const formSchema = z.object({
  teamName: z.string().min(3, {
    message: "Имя команды должно содержать минимум 3 символа",
  }),
  captainName: z.string().min(2, {
    message: "Укажите имя капитана",
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
  playersInfo: z.string().min(10, {
    message: "Укажите информацию о всех игроках (минимум 10 символов)",
  }),
  experience: z.string().min(1, {
    message: "Выберите уровень опыта",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamName: "",
      captainName: "",
      email: "",
      phone: "",
      teamSize: "",
      playersInfo: "",
      experience: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Имитация отправки данных на сервер
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Заявка успешно отправлена!",
      description: `Команда "${data.teamName}" зарегистрирована. Мы свяжемся с вами для подтверждения участия.`,
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Регистрация на турнир</CardTitle>
        <CardDescription>
          Заполните форму, чтобы зарегистрировать свою команду на турнир по CS2
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="teamName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Название команды</FormLabel>
                  <FormControl>
                    <Input placeholder="Введите название команды" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="captainName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Имя капитана</FormLabel>
                    <FormControl>
                      <Input placeholder="Укажите имя капитана" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@mail.com" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Телефон</FormLabel>
                    <FormControl>
                      <Input placeholder="+7 (XXX) XXX-XX-XX" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="teamSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Размер команды</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите размер команды" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="5">5 игроков</SelectItem>
                        <SelectItem value="5+1">5 игроков + запасной</SelectItem>
                        <SelectItem value="5+2">5 игроков + 2 запасных</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="playersInfo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Информация о игроках</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Укажите информацию о всех игроках (Steam ID, никнеймы, роли)" 
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Укажите никнеймы, Steam ID и роли всех игроков команды
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Опыт команды</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите уровень опыта" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="beginner">Начинающие</SelectItem>
                      <SelectItem value="amateur">Любители</SelectItem>
                      <SelectItem value="advanced">Продвинутые</SelectItem>
                      <SelectItem value="semi-pro">Полу-профессионалы</SelectItem>
                      <SelectItem value="pro">Профессионалы</SelectItem>
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
              {isSubmitting ? "Отправка..." : "Зарегистрировать команду"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default RegistrationForm;
