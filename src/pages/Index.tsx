import { Instagram, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import headshotImage from "@/assets/katelyn-headshot.jpg";

const Index = () => {
  const featuredWork = [
    {
      title: "Anna Kendrick reveals haunting details about Woman of the Hour",
      publication: "Radio Times",
      url: "https://www.radiotimes.com/movies/anna-kendrick-haunting-details-woman-of-the-hour-exclusive-newsupdate/",
      type: "Film Interview"
    },
    {
      title: "Jimmy Akingbola opens up about 'Sorry I Didn't Know'",
      publication: "Radio Times",
      url: "https://www.radiotimes.com/tv/entertainment/jimmy-akingbola-sorry-i-didnt-know-big-rt-interview/",
      type: "TV Interview"
    },
    {
      title: "Katie Piper on mental exhaustion in 'Locked Up in Louisiana'",
      publication: "Radio Times",
      url: "https://www.radiotimes.com/tv/documentaries/katie-piper-mental-exhaustion-locked-up-in-louisiana-exclusive-newsupdate/",
      type: "Documentary"
    },
    {
      title: "50 First Dates: The Musical review – Could this be the most charming musical yet?",
      publication: "Radio Times",
      url: "https://www.radiotimes.com/going-out/going-out-reviews/50-first-dates-the-musical-review/",
      type: "Theatre Review"
    },
    {
      title: "Joel Dommett admits NTAs 30th anniversary hosting pressure and reveals his standout TV show of last three decades",
      publication: "Radio Times",
      url: "https://www.radiotimes.com/tv/entertainment/joel-dommett-national-television-awards-interview-exclusive-newsupdate/",
      type: "Awards Interview"
    },
    {
      title: 'Love Is Blind UK’s Sarover and Kal react to "one-sided" split after reunion drama',
      publication: "Radio Times",
      url: "https://www.radiotimes.com/tv/entertainment/reality-tv/love-is-blind-uk-sarover-kal-one-sided-split-exclusive-newsupdate/",
      type: "Netflix Interview"
    },
    {
      title: 'Rob Rinder breaks down "explosive" new show The Inheritance: \'At its core, it\'s a social experiment\'',
      publication: "Radio Times",
      url: "Rob Rinder breaks down \"explosive\" new show The Inheritance: 'At its core, it's a social experiment'",
      type: "TV Interview"
    },
    {
      title: "Take a trip down memory lane with 10 of the most dramatic moments in reality TV history",
      publication: "Radio Times",
      url: "https://www.radiotimes.com/tv/entertainment/reality-tv/reality-tv-dramatic-moments-comment/",
      type: "Reality TV"
    },
    {
      title: "\"We're all accountable\": How Destination X is paving the way for more sustainable television",
      publication: "Radio Times",
      url: "https://www.radiotimes.com/tv/entertainment/reality-tv/destination-x-sustainability-exclusive-newsupdate/",
      type: "Sustainablity"
    },
    {
      title: "Geordie Shore's Nathan Henry on grief, reality TV and growing up in the North",
      publication: "Radio Times",
      url: "https://www.radiotimes.com/tv/documentaries/geordie-shore-nathan-henry-documentary-interview-exclusive-newsupdate/",
      type: "TV Interview"
    },
    {
      title: "Rapman says Supacell season 2 gets \"really dark\" after finale cliffhanger",
      publication: "Radio Times",
      url: "https://www.radiotimes.com/tv/sci-fi/supacell-season-2-dark-rapman-exclusive-newsupdate/",
      type: "Netflix Interview"
    },
    {
      title: "How The Honesty Box separates itself from reality TV overload – Lucinda Light and Vicky Pattison break it down",
      publication: "Radio Times",
      url: "https://www.radiotimes.com/tv/entertainment/reality-tv/vicky-pattison-lucinda-light-the-honesty-box-exclusive-interview/",
      type: "Reality TV"
    },
    {
      title: "Paddy McGuinness on Tempting Fortune: \"It took me back to doing Top Gear\"",
      publication: "Radio Times",
      url: "https://www.radiotimes.com/tv/entertainment/reality-tv/paddy-mcguinness-the-big-rt-interview/",
      type: "TV Interview"
    },
  ];

  const videos = [
    { id: "aLgCmTOzmnI", title: "Featured Interview 1" },
    { id: "wrgk0m5wnsQ", title: "Featured Interview 2" },
    { id: "inOCGm4zM9w", title: "Featured Interview 3" },
    { id: "Z0ot_22h904", title: "Amanda Holden and Paul C Brunson give us their HONEST relationship advice" },
    { id: "OJbNpfg9St8", title: "“Oh he’s going to hate me!” Made in Chelsea's Tristan and Jules REVEAL cast secrets" },
    { id: "3aC3IjwJigA", title: "Jack Rooke & Big Boys cast GUESS iconic quotes from TV & Film" },
    { id: "GXmOeQchnLU", title: "The Traitors REUNITE and REVEAL all about life after the show" },
    { id: "FUwt4C73FHg", title: "\"I wanted to apologise\" Love Is Blind UK cast open up about the show and marriage a year on" },
    { id: "05rF3f_YFYc", title: "Josh O'Connor REVEALS why fans should stick with new film" }
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
                Multi-skilled and creative entertainment journalist offering six years of experience in digital media across television, film and celebrity news. Skilled at leading content strategy and collaborating with talent to deliver high quality content.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <a href="#contact">Get in touch</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#work" className="flex items-center gap-2">
                    View work
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
              Highlighting interviews and exclusives across television and film.
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
            {videos.reverse().map((video, index) => (
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
              Get in touch for collaborations, interviews or media inquiries
            </p>
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href="mailto:info@katelynmensah.com"
                    className="text-lg hover:text-primary transition-colors"
                  >
                    info@katelynmensah.com
                  </a>
                </div>

                <div className="flex justify-center gap-4 pt-6">
                  <Button asChild size="lg" variant="outline">
                    <a
                      href="https://www.instagram.com/katelynnmensah"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a
                      href="https://www.tiktok.com/@katelynmensah"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                      </svg>
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a
                      href="https://www.linkedin.com/in/katelyn-mensah-683504196/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="h-5 w-5" />
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
