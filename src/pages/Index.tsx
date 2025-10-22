import { Instagram, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import headshotImage from "@/assets/katelyn-headshot.jpg";

const Index = () => {
  const featuredWork = [
    {
      title: "Anna Kendrick Reveals Haunting Details About Woman of the Hour",
      publication: "Radio Times",
      url: "https://www.radiotimes.com/movies/anna-kendrick-haunting-details-woman-of-the-hour-exclusive-newsupdate/",
      type: "Film Interview"
    },
    {
      title: "Jimmy Akingbola Opens Up About 'Sorry I Didn't Know'",
      publication: "Radio Times",
      url: "https://www.radiotimes.com/tv/entertainment/jimmy-akingbola-sorry-i-didnt-know-big-rt-interview/",
      type: "TV Interview"
    },
    {
      title: "Katie Piper on Mental Exhaustion in 'Locked Up in Louisiana'",
      publication: "Radio Times",
      url: "https://www.radiotimes.com/tv/documentaries/katie-piper-mental-exhaustion-locked-up-in-louisiana-exclusive-newsupdate/",
      type: "Documentary"
    }
  ];

  const videos = [
    { id: "aLgCmTOzmnI", title: "Featured Interview 1" },
    { id: "wrgk0m5wnsQ", title: "Featured Interview 2" },
    { id: "inOCGm4zM9w", title: "Featured Interview 3" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
                Katelyn Mensah
              </h1>
              <p className="text-xl sm:text-2xl text-primary font-semibold mb-6">
                Entertainment Journalist
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Multiskilled and creative entertainment journalist offering six years of experience in digital media across television, film and celebrity news. Skilled at leading content strategy, commissioning features and collaborating with talent to deliver high quality content.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <a href="#contact">Get in Touch</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#work" className="flex items-center gap-2">
                    View Work
                  </a>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
                <img
                  src={headshotImage}
                  alt="Katelyn Mensah - Entertainment Journalist"
                  className="relative rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Highlighting interviews and articles across television, film, and entertainment
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {featuredWork.map((work, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                      {work.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {work.publication}
                  </p>
                  <Button asChild variant="ghost" size="sm" className="w-full">
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Read Article <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <a
                href="https://muckrack.com/katelyn-mensah-1/articles"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                View Full Portfolio <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Video Interviews
            </h2>
            <p className="text-lg text-muted-foreground">
              Watch some of my featured video content
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, index) => (
              <div key={index} className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground">
              Get in touch for collaborations, interviews, or media inquiries
            </p>
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href="mailto:katelyn2mensah@gmail.com"
                    className="text-lg hover:text-primary transition-colors"
                  >
                    katelynm3nsah@outlook.com
                  </a>
                </div>

                <div className="flex justify-center gap-4 pt-6">
                  <Button asChild size="lg" variant="outline">
                    <a
                      href="https://www.instagram.com/katelynmensahjourno"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Instagram className="h-5 w-5" />
                      Instagram
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a
                      href="https://www.tiktok.com/@katelynmensahjourno"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                      </svg>
                      TikTok
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a
                      href="https://www.linkedin.com/in/katelyn-mensah"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="h-5 w-5" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Katelyn Mensah. Entertainment Journalist.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
