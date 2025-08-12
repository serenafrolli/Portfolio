import { Card, CardContent, Badge, Section } from '../components/UI'

const skills = [
  {
    title: "Core",
    items: ["Mechanical Design", "DFM/DFA", "GD&T", "Tolerance Stacks", "Materials"],
  },
  {
    title: "Analysis",
    items: ["CFD (RANS)", "ANSYS/FEA", "Dynamics", "Controls", "Heat Transfer"],
  },
  {
    title: "Software",
    items: ["Python", "MATLAB", "SolidWorks/Onshape", "Fusion 360", "Altium (basic)"]
  },
  {
    title: "PM",
    items: ["Agile for hardware", "Risk Mgmt", "Requirements", "Test planning"],
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Section label="Skills">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s) => (
            <Card key={s.title}>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">{s.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((it) => (<Badge key={it}>{it}</Badge>))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
