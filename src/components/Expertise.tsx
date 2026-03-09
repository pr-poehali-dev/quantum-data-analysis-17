import { useEffect, useRef, useState } from "react"
import { User, Gamepad2, BookOpen, Star } from "lucide-react"
import { HighlightedText } from "./HighlightedText"

const expertiseAreas = [
  {
    title: "Персонажи и OC",
    description: "Рисую оригинальных персонажей, фанарт и авторские концепты — от набросков до финальной цифровой живописи.",
    icon: User,
  },
  {
    title: "Игровая графика",
    description:
      "Спрайты, иконки, UI-элементы и концепт-арт для игр в любом стиле — от пиксель-арта до детального рисунка.",
    icon: Gamepad2,
  },
  {
    title: "Книжная иллюстрация",
    description:
      "Иллюстрации для детских книг, комиксов, манги и авторских проектов с нуля — от идеи до готового макета.",
    icon: BookOpen,
  },
  {
    title: "Коммерческий арт",
    description:
      "Маскоты, брендинг, мерч и иллюстрации для соцсетей — всё, что помогает вашему бизнесу выделиться.",
    icon: Star,
  },
]

export function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Что я рисую</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            <HighlightedText>Направления</HighlightedText>, в которых
            <br />
            я работаю
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Иллюстрации для любых целей — будь то личный проект, игра, книга или коммерческий заказ.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={area.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`relative pl-8 border-l border-border transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`transition-all duration-1000 ${
                    visibleItems.includes(index) ? "animate-draw-stroke" : ""
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <Icon className="w-10 h-10 mb-4 text-foreground" strokeWidth={1.25} />
                </div>
                <h3 className="text-xl font-medium mb-4">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}