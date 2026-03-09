import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Сколько времени занимает выполнение заказа?",
    answer:
      "Стандартный срок — 7–10 рабочих дней. Если нужно быстрее, выберите срочность «Срочно» (3–5 дней) или «Экспресс» (1–2 дня) в конструкторе заказа. Срок отсчитывается после согласования всех деталей и оплаты.",
  },
  {
    question: "Сколько правок входит в стоимость?",
    answer:
      "В цену включены 2 раунда правок. На этапе эскиза вы можете скорректировать позу, выражение, цветовую схему. После финальной версии правки оплачиваются дополнительно по договорённости.",
  },
  {
    question: "Можно ли заказать иллюстрацию по референсу?",
    answer:
      "Да, приветствуется! Присылайте любые референсы — фото, другие арты, описание. Чем точнее вы опишете идею, тем ближе результат к вашим ожиданиям.",
  },
  {
    question: "В каком формате я получу файлы?",
    answer:
      "По умолчанию — PNG с прозрачным фоном и JPG. По запросу предоставляю PSD, SVG или другие форматы. Если нужно для печати — делаю версию в высоком разрешении (300 dpi).",
  },
  {
    question: "Можно ли использовать иллюстрацию в коммерческих целях?",
    answer:
      "Зависит от цели: для личного использования и некоммерческих проектов — включено в цену. Для коммерческого использования (продажа мерча, брендинг, реклама) — обсуждаем отдельно, стоимость выше.",
  },
  {
    question: "Как сделать заказ?",
    answer:
      "Собери заказ в конструкторе выше, нажми «Оформить заказ» — и я свяжусь с тобой для уточнения деталей. Также можно написать напрямую через контактную форму.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}