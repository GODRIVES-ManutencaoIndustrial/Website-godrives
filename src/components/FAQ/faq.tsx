import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { frequencesQuestion, FrequencesQuestionType } from "./faqs.data"

export default function Faq() {
  return (
    <div className="bg-secondary-900 px-3 py-20">
      <div className="mx-auto my-0 max-w-lg lg:max-w-7xl">
        <h2 className="mx-auto my-0 mb-12 w-64 text-center text-4xl font-semibold leading-[2.5rem] text-primaryWhite">
          Perguntas frequentes
        </h2>
        <Accordion type="single" collapsible className="">
          {frequencesQuestion.map(
            ({ question, response, value }: FrequencesQuestionType) => (
              <AccordionItem
                value={value}
                className="mb-6 rounded-xl border border-blue p-6 text-blue"
                key={value}
              >
                <AccordionTrigger className="gap-5 text-left text-lg">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-left text-base text-secondary-300">
                  {response}
                </AccordionContent>
              </AccordionItem>
            ),
          )}
        </Accordion>
      </div>
    </div>
  )
}
