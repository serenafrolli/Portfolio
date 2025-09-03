import { Trophy } from 'lucide-react'
import { Card, CardContent, Section } from '../components/UI'

const athletics = [
  {
    team: "Northwestern University – Women's Cross Country",
    role: "Student‑Athlete",
    period: "2019–2023",
    notes: ["Discipline, endurance, and team leadership carry into engineering"]
  }
];

export default function Athletics() {
  return (
    <div className="min-h-screen site-bg text-slate-900">
      <Section label="Athletics">
        <div className="grid md:grid-cols-2 gap-6">
          {athletics.map((a) => (
            <Card key={a.team}>
              <CardContent className="p-6">
                <div className="text-sm text-slate-600 flex items-center gap-2">
                  <Trophy className="w-4 h-4"/> {a.period}
                </div>
                <h3 className="text-lg font-semibold mt-1">{a.team}</h3>
                <p className="mt-2">{a.role}</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  {a.notes.map((n) => (<li key={n}>{n}</li>))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
