import { useState } from "react"
import { HighlightedText } from "./HighlightedText"
import Icon from "@/components/ui/icon"

const styleOptions = [
  {
    id: "lineart",
    name: "Лайнарт",
    description: "Чёткие линии без заливки",
    price: 1500,
    emoji: "✏️",
  },
  {
    id: "watercolor",
    name: "Акварель",
    description: "Мягкие переходы, прозрачность",
    price: 2500,
    emoji: "🎨",
  },
  {
    id: "digital",
    name: "Цифровой рисунок",
    description: "Детальная цифровая живопись",
    price: 3500,
    emoji: "💻",
  },
  {
    id: "chibi",
    name: "Чиби",
    description: "Милый мультяшный стиль",
    price: 2000,
    emoji: "🐾",
  },
  {
    id: "realistic",
    name: "Реализм",
    description: "Фотореалистичная детализация",
    price: 5000,
    emoji: "🖼️",
  },
  {
    id: "pixel",
    name: "Пиксель-арт",
    description: "Ретро-игровой стиль",
    price: 2200,
    emoji: "👾",
  },
]

const characterCountOptions = [
  { id: "one", label: "1 персонаж", price: 0 },
  { id: "two", label: "2 персонажа", price: 800 },
  { id: "three", label: "3+ персонажа", price: 1600 },
]

const backgroundOptions = [
  { id: "none", label: "Без фона", price: 0 },
  { id: "simple", label: "Простой фон", price: 500 },
  { id: "detailed", label: "Детальный фон", price: 1500 },
]

const complexityOptions = [
  { id: "simple", label: "Простая одежда", price: 0 },
  { id: "medium", label: "Средняя детализация", price: 600 },
  { id: "complex", label: "Сложный образ", price: 1400 },
]

const urgencyOptions = [
  { id: "standard", label: "Стандарт (7–10 дней)", price: 0 },
  { id: "fast", label: "Срочно (3–5 дней)", price: 1000 },
  { id: "express", label: "Экспресс (1–2 дня)", price: 2500 },
]

export function OrderConstructor() {
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null)
  const [selectedCharacters, setSelectedCharacters] = useState("one")
  const [selectedBackground, setSelectedBackground] = useState("none")
  const [selectedComplexity, setSelectedComplexity] = useState("simple")
  const [selectedUrgency, setSelectedUrgency] = useState("standard")

  const stylePrice = styleOptions.find((s) => s.id === selectedStyle)?.price ?? 0
  const charactersPrice = characterCountOptions.find((o) => o.id === selectedCharacters)?.price ?? 0
  const backgroundPrice = backgroundOptions.find((o) => o.id === selectedBackground)?.price ?? 0
  const complexityPrice = complexityOptions.find((o) => o.id === selectedComplexity)?.price ?? 0
  const urgencyPrice = urgencyOptions.find((o) => o.id === selectedUrgency)?.price ?? 0

  const total = stylePrice + charactersPrice + backgroundPrice + complexityPrice + urgencyPrice

  return (
    <section id="constructor" className="py-32 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Конструктор заказа</p>
          <h2 className="text-5xl font-medium leading-[1.15] tracking-tight mb-4 text-balance lg:text-6xl">
            Собери свою
            <br />
            <HighlightedText>иллюстрацию</HighlightedText>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Выбирай параметры — цена обновляется автоматически
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left: configurator */}
          <div className="lg:col-span-2 space-y-10">

            {/* Style */}
            <div>
              <h3 className="text-base font-medium mb-4 uppercase tracking-widest text-muted-foreground">Стиль рисунка</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {styleOptions.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setSelectedStyle(style.id)}
                    className={`text-left p-4 border transition-all duration-200 rounded-none group ${
                      selectedStyle === style.id
                        ? "border-foreground bg-foreground text-background"
                        : "border-border hover:border-foreground/50"
                    }`}
                  >
                    <div className="text-2xl mb-2">{style.emoji}</div>
                    <div className="font-medium text-sm mb-1">{style.name}</div>
                    <div className={`text-xs mb-3 ${selectedStyle === style.id ? "text-background/70" : "text-muted-foreground"}`}>
                      {style.description}
                    </div>
                    <div className={`text-sm font-medium ${selectedStyle === style.id ? "text-background" : "text-foreground"}`}>
                      от {style.price.toLocaleString("ru-RU")} ₽
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Characters */}
            <div>
              <h3 className="text-base font-medium mb-4 uppercase tracking-widest text-muted-foreground">Количество персонажей</h3>
              <div className="flex flex-wrap gap-3">
                {characterCountOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedCharacters(opt.id)}
                    className={`px-5 py-3 border text-sm transition-all duration-200 ${
                      selectedCharacters === opt.id
                        ? "border-foreground bg-foreground text-background"
                        : "border-border hover:border-foreground/50"
                    }`}
                  >
                    {opt.label}
                    {opt.price > 0 && (
                      <span className={`ml-2 ${selectedCharacters === opt.id ? "text-background/70" : "text-muted-foreground"}`}>
                        +{opt.price.toLocaleString("ru-RU")} ₽
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Background */}
            <div>
              <h3 className="text-base font-medium mb-4 uppercase tracking-widest text-muted-foreground">Фон</h3>
              <div className="flex flex-wrap gap-3">
                {backgroundOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedBackground(opt.id)}
                    className={`px-5 py-3 border text-sm transition-all duration-200 ${
                      selectedBackground === opt.id
                        ? "border-foreground bg-foreground text-background"
                        : "border-border hover:border-foreground/50"
                    }`}
                  >
                    {opt.label}
                    {opt.price > 0 && (
                      <span className={`ml-2 ${selectedBackground === opt.id ? "text-background/70" : "text-muted-foreground"}`}>
                        +{opt.price.toLocaleString("ru-RU")} ₽
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Complexity */}
            <div>
              <h3 className="text-base font-medium mb-4 uppercase tracking-widest text-muted-foreground">Сложность образа</h3>
              <div className="flex flex-wrap gap-3">
                {complexityOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedComplexity(opt.id)}
                    className={`px-5 py-3 border text-sm transition-all duration-200 ${
                      selectedComplexity === opt.id
                        ? "border-foreground bg-foreground text-background"
                        : "border-border hover:border-foreground/50"
                    }`}
                  >
                    {opt.label}
                    {opt.price > 0 && (
                      <span className={`ml-2 ${selectedComplexity === opt.id ? "text-background/70" : "text-muted-foreground"}`}>
                        +{opt.price.toLocaleString("ru-RU")} ₽
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Urgency */}
            <div>
              <h3 className="text-base font-medium mb-4 uppercase tracking-widest text-muted-foreground">Срочность</h3>
              <div className="flex flex-wrap gap-3">
                {urgencyOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedUrgency(opt.id)}
                    className={`px-5 py-3 border text-sm transition-all duration-200 ${
                      selectedUrgency === opt.id
                        ? "border-foreground bg-foreground text-background"
                        : "border-border hover:border-foreground/50"
                    }`}
                  >
                    {opt.label}
                    {opt.price > 0 && (
                      <span className={`ml-2 ${selectedUrgency === opt.id ? "text-background/70" : "text-muted-foreground"}`}>
                        +{opt.price.toLocaleString("ru-RU")} ₽
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 border border-border p-8 bg-background">
              <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-6">Ваш заказ</h3>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Стиль</span>
                  <span className={selectedStyle ? "font-medium" : "text-muted-foreground/50"}>
                    {selectedStyle
                      ? `${styleOptions.find((s) => s.id === selectedStyle)?.name} — ${stylePrice.toLocaleString("ru-RU")} ₽`
                      : "не выбран"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Персонажи</span>
                  <span>
                    {characterCountOptions.find((o) => o.id === selectedCharacters)?.label}
                    {charactersPrice > 0 && ` +${charactersPrice.toLocaleString("ru-RU")} ₽`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Фон</span>
                  <span>
                    {backgroundOptions.find((o) => o.id === selectedBackground)?.label}
                    {backgroundPrice > 0 && ` +${backgroundPrice.toLocaleString("ru-RU")} ₽`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Сложность</span>
                  <span>
                    {complexityOptions.find((o) => o.id === selectedComplexity)?.label}
                    {complexityPrice > 0 && ` +${complexityPrice.toLocaleString("ru-RU")} ₽`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Срочность</span>
                  <span>
                    {urgencyOptions.find((o) => o.id === selectedUrgency)?.label.split(" ")[0]}
                    {urgencyPrice > 0 && ` +${urgencyPrice.toLocaleString("ru-RU")} ₽`}
                  </span>
                </div>
              </div>

              <div className="border-t border-border pt-6 mb-8">
                <div className="flex justify-between items-end">
                  <span className="text-sm text-muted-foreground">Итого</span>
                  <div className="text-right">
                    <div className="text-3xl font-medium">
                      {total > 0 ? `${total.toLocaleString("ru-RU")} ₽` : "—"}
                    </div>
                    {!selectedStyle && (
                      <div className="text-xs text-muted-foreground mt-1">Выберите стиль рисунка</div>
                    )}
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium transition-all duration-300 ${
                  selectedStyle
                    ? "bg-foreground text-background hover:bg-foreground/80"
                    : "bg-foreground/20 text-foreground/40 cursor-not-allowed pointer-events-none"
                }`}
              >
                Оформить заказ
                <Icon name="ArrowRight" size={16} />
              </a>

              <p className="text-xs text-muted-foreground mt-4 text-center leading-relaxed">
                После оформления я свяжусь с вами для уточнения деталей
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
