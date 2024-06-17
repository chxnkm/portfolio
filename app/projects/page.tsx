import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Home() {
    return (
      <main>
        <div className="text container mx-auto">
          <div className="col-span-2 lg:col-start-2 text-right mt-32 gap-8">
            <h1>My Projects 👨🏻‍💻</h1>
            <p className="text-xl mt-12">Click on each card to learn more!</p>
          </div>
          <div className='mt-12'>
            <Card>
              <CardHeader>
                <CardTitle>Internship at CPF Board</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    );
  }