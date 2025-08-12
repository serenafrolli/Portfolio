import { Mail, Link as LinkIcon, Github } from 'lucide-react'
import { Card, CardContent, Button, Section } from '../components/UI'

const LINKS = {
  email: "serenafrolli@example.com",
  linkedin: "https://www.linkedin.com/in/serena-frolli/",
  github: "https://github.com/serenafrolli",
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Section label="Get in touch">
        <Card>
          <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-semibold">Let's build something.</h4>
              <p className="text-slate-600 mt-1">Open to Mechanical/TPM roles in aerospace, electrification, and test engineering.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${LINKS.email}`}>
                <Button>
                  <span className="inline-flex items-center gap-2">
                    <Mail className="w-4 h-4"/> Email
                  </span>
                </Button>
              </a>
              <a href={LINKS.linkedin}>
                <Button variant="outline">
                  <span className="inline-flex items-center gap-2">
                    <LinkIcon className="w-4 h-4"/> LinkedIn
                  </span>
                </Button>
              </a>
              <a href={LINKS.github}>
                <Button variant="outline">
                  <span className="inline-flex items-center gap-2">
                    <Github className="w-4 h-4"/> GitHub
                  </span>
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </Section>
    </div>
  );
}
