import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Index() {
  const [count, setCount] = useState(0);

  const capabilities = [
    { title: "Talk to PDF", description: "Interact with PDF documents using natural language.", link: "/talk-to-pdf" },
    { title: "Scrape a site", description: "Extract data from websites efficiently.", link: "/scrape-site" },
  ];

  return (
    <div className="flex flex-col items-center justify-start min-h-screen space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {capabilities.map((capability, index) => (
          <Card key={index} className="w-full self-start">
            <CardHeader>
              <CardTitle>{capability.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{capability.description}</p>
            <Link to={capability.link}>
                <Button className="mt-4">Go to {capability.title}</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Index;