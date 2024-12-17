import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface Client {
  client: string;
  position: string;
  date: string;
  skills: string;
  tools: string;
  description: string;
}

interface ClientsProps {
  clients: Client[];
}

export default function Clients({ clients }: ClientsProps) {
  return (
    <div aria-labelledby="clients-heading" className="relative bg-[#1c2432] text-white flex flex-col items-center rounded-lg border border-gray-600 mx-auto w-full px-6 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            id="clients-heading"
            className="text-3xl font-bold text-white"
          >
            Clients
          </h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
            Brief introduction about your clients and the impact of your work. Highlight the tools, technologies, and skills involved.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <Card
              key={index}
              className="bg-gray-800 text-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg"
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{client.client}</CardTitle>
                <CardDescription className="text-sm text-gray-400">
                  {client.position}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <strong>Date:</strong> {client.date}
                </div>
                <div className="text-sm">
                  <strong>Skills:</strong> {client.skills}
                </div>
                <div className="text-sm">
                  <strong>Tools:</strong> {client.tools}
                </div>
                <p className="text-sm leading-6">{client.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
