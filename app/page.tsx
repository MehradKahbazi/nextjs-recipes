import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

interface Recipe {
  title: string,
  image: string,
  time: number,
  description: string,
  vegan: boolean,
  id: string
}
async function getData(): Promise<Recipe[]> {
  const data = [
    {
      id: "1",
      title: "Veggie Carbonara",
      image: "/veggie_carbonara.jpg",
      time: 20,
      description: "A vegetarian twist on the classic Italian pasta dish with eggs, cheese, and vegetarian bacon.",
      vegan: false
    },
    {
      id: "2",
      title: "Veg Stir-Fry",
      image: "/veg_stir_fry.jpg",
      time: 25,
      description: "A quick and healthy vegetarian stir-fry with fresh vegetables and tofu.",
      vegan: true
    },
    {
      id: "3",
      title: "Veg Alfredo",
      image: "/veg_alfredo.jpg",
      time: 30,
      description: "Creamy pasta with grilled vegetarian chicken and a rich Alfredo sauce.",
      vegan: false
    },
    {
      id: "5",
      title: "Veg Lentil Soup",
      image: "/veg_lentil_soup.jpg",
      time: 35,
      description: "A hearty and nutritious vegetarian soup made with lentils and a blend of spices.",
      vegan: true
    },
    {
      id: "6",
      title: "Grilled Mushrooms",
      image: "/grilled_mushrooms.jpg",
      time: 15,
      description: "Flavorful grilled Portobello mushrooms with a lemon and herb marinade.",
      vegan: true
    },
    {
      id: "7",
      title: "Roasted Veg Salad",
      image: "/roasted_veg_salad.jpg",
      time: 30,
      description: "A colorful vegetarian salad featuring roasted vegetables and a balsamic vinaigrette.",
      vegan: true
    },
    {
      id: "8",
      title: "Veggie Tacos",
      image: "/veggie_tacos.jpg",
      time: 25,
      description: "Tasty vegetarian tacos with seasoned plant-based meat and fresh toppings.",
      vegan: true
    },
  ]

  await new Promise((resolve) => setTimeout(resolve, 3000));
  return data
}

export default async function Home() {
  const data = await getData()
  return (
    <>
      <NavigationMenu className="h-[7vh] fixed z-20 !w-screen bg-[#2c3f5bd9]">
        <NavigationMenuList className="w-[30vw] justify-around">
          <NavigationMenuItem className="w-1/4 text-center text-white">
            <NavigationMenuLink className="hover:bg-transparent hover:border-b hover:text-white rounded-none">Link</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="w-1/4 text-center text-white">
            <NavigationMenuLink className="hover:bg-transparent hover:border-b hover:text-white rounded-none">Link</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="w-1/4 text-center text-white">
            <NavigationMenuLink className="hover:bg-transparent hover:border-b hover:text-white rounded-none">Link</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <header className="relative">
        <Image className=" w-full h-auto" src="/img/close-up-chocolate-dessert-with-sugar-powder.jpg" width={2000} height={1500} alt="" />
        <div className=" static lg:absolute z-10 text-white top-1/4 left-1/12  p-9 rounded-lg w-full lg:w-1/3">
          <h1 className="mb-3">My Recipe Website</h1>
          <small >Here I share recipes I enjoy</small>
          <div className="mt-5">
            <h3 className="font-bold">
              About Me
            </h3>
            <p>
              I'm a web developer with a significant passion for food and cakes
              I'm a web developer with a significant passion for food and cakes
              I'm a web developer with a significant passion for food and cakes
              I'm a web developer with a significant passion for food and cakes
            </p>
          </div>
        </div>
      </header>
      <main className=" static top-0 lg:relative lg:-top-40">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-auto">
          {data.map(item => (
            <Card key={item.id} className="flex flex-col justify-between mx-4 pt-0">
              <Image className="w-full rounded-xl rounded-b-none" src={`/img${item.image}`} width={300} height={300} alt="" />
              <CardHeader className="flex flex-row gap-4 items-start justify-between">

                <div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.time} mins to cook</CardDescription>
                </div>
                <div>
                  {item.vegan && <Badge variant="secondary">Vegan!</Badge>}

                </div>
              </CardHeader>
              <CardContent>

                <p>
                  {item.description}
                </p>
              </CardContent>
              <CardFooter className="flex items-start justify-between">
                <Avatar>
                  <AvatarImage src={`/img/${item.image}`} alt="recipe image" />
                  <AvatarFallback>
                    {item.title.slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h6>Mehrad Kahbazi</h6>
                  <small className="text-slate-500">2 Hours Ago</small>
                </div>
                <Button>View recipe</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}
