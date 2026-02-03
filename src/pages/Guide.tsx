import { AppLayout } from "@/components/layout/AppLayout";
import { BookOpen, Clock, ChevronRight } from "lucide-react";

const articles = [
  {
    id: "1",
    title: "Première rencontre : Les 5 règles d'or",
    excerpt: "Comment aborder sereinement votre première expérience en toute discrétion.",
    readTime: "5 min",
    category: "Conseils",
  },
  {
    id: "2", 
    title: "Comprendre sa curiosité",
    excerpt: "La fluidité masculine expliquée sans tabou ni jugement.",
    readTime: "8 min",
    category: "Exploration",
  },
  {
    id: "3",
    title: "Protéger sa vie privée en ligne",
    excerpt: "Nos conseils pour maintenir votre anonymat sur les applications.",
    readTime: "6 min",
    category: "Sécurité",
  },
  {
    id: "4",
    title: "Communication et consentement",
    excerpt: "L'art de la conversation respectueuse entre gentlemen.",
    readTime: "4 min",
    category: "Éthique",
  },
];

export default function Guide() {
  return (
    <AppLayout>
      <div className="container px-4 py-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-serif text-2xl mb-2">Le Guide</h1>
          <p className="text-muted-foreground text-sm">
            Ressources et conseils pour votre exploration
          </p>
        </div>

        {/* Articles */}
        <div className="space-y-4">
          {articles.map((article) => (
            <article 
              key={article.id}
              className="glass-card rounded-xl p-5 cursor-pointer hover:border-primary/30 transition-all group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-primary font-medium">{article.category}</span>
                    <span className="text-muted-foreground">•</span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>
                  <h2 className="font-medium mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
