import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function TalkToPDF() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen space-y-4">
      <Card className="w-full self-start">
        <CardHeader>
          <CardTitle>Talk to PDF</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Interact with PDF documents using natural language.</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default TalkToPDF;