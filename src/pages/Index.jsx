import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

function Index() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome to the Bare-Bones App</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center mb-4">This is a simple counter application.</p>
          <div className="flex justify-center items-center space-x-4">
            <Button onClick={() => setCount(count - 1)}>-</Button>
            <span className="text-2xl">{count}</span>
            <Button onClick={() => setCount(count + 1)}>+</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Index;