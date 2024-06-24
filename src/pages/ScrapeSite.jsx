import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function ScrapeSite() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen space-y-4">
      <Card className="w-full self-start">
        <CardHeader>
          <CardTitle>Scrape a site</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Extract data from websites efficiently.</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default ScrapeSite;