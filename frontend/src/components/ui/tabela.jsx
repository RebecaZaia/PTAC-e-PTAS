import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Fieldgroup } from "@/components/ui/fieldgroupe";

export function Tabela() {
  return (
    <Tabs defaultValue="shortener" className="w-full">
      <TabsList>
        <TabsTrigger value="shortener">Executar um link</TabsTrigger>
        <TabsTrigger value="qrcode">Gerar QR Code</TabsTrigger>

      </TabsList>
      <TabsContent value="shortener">
        <Card>
          <CardHeader>
            <CardContent className="text-sm text-muted-foreground">
            Executar um link longo
          </CardContent>
          <Fieldgroup />
          </CardHeader>
        </Card>
      </TabsContent>
      <TabsContent value="qrcode">
        <Card>
          <CardHeader>
            <CardTitle>Não disponível</CardTitle>
            <CardDescription>
              Está opção ainda não está disponível no momento.
            </CardDescription>
          </CardHeader>
        </Card>
      </TabsContent>
      <TabsContent value="reports">
        <Card>
          <CardHeader>
            <CardTitle>Reports</CardTitle>
            <CardDescription>
              Generate and download your detailed reports. Export data in
              multiple formats for analysis.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            You have 5 reports ready and available to export.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="settings">
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>
              Manage your account preferences and options. Customize your
              experience to fit your needs.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Configure notifications, security, and themes.
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}