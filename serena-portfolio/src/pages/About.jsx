import { School } from 'lucide-react'
import { Card, CardContent, Badge, Section } from '../components/UI'

const academics = [
  {
    school: "Northwestern University",
    degree: "B.S. Mechanical Engineering",
    period: "2019–2025",
    details: [
      "StrengthsFinder: Activator, Learner, Ideation, Arranger, Restorative",
      "Aerospace focus; NASA-related research; ME 315/363/364/495 highlights",
    ],
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Section label="About">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardContent className="p-6">
              <p>
                Hi! I'm Serena Frolli, originally from Italy and graduating with a B.S. in Mechanical
                Engineering from Northwestern University. I've worked across aerospace, power
                electronics testing, and manufacturing. My happy place is the boundary where analysis
                meets build: quick loops from model → prototype → data → iterate.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Love: clean mechanisms, robust test plans, and tidy BOMs.</li>
                <li>Toolbelt: Python, MATLAB, ANSYS/FEA, SolidWorks/Onshape, tolerance analysis.</li>
                <li>Bonus: Student‑athlete mindset from NCAA Cross Country—consistency wins.</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-3">
              <div className="flex items-center gap-2 font-medium">
                <School className="w-4 h-4"/> Northwestern University
              </div>
              <div className="text-sm text-slate-600">B.S. Mechanical Engineering (2019–2025)</div>
              <div className="flex flex-wrap gap-2 pt-2">
                {academics[0].details.map((d) => (<Badge key={d}>{d}</Badge>))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
}
