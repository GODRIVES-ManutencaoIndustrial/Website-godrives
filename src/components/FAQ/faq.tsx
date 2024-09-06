import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { frequencesQuestion, FrequencesQuestionType } from "./faqs.data"
import { Motion } from "../motion/motion"

export default function Faq() {
  return (
    <div id="FAQ" className="bg-secondary-900 px-3 py-28">
      <Motion
        initial={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mx-auto my-0 max-w-lg lg:max-w-7xl"
        children={
          <div>
            <h2 className="mx-auto my-0 mb-12 text-center text-4xl font-semibold leading-[2.5rem] text-primaryWhite">
              Perguntas frequentes
            </h2>
            <Accordion type="single" collapsible className="">
              {frequencesQuestion.map(
                ({ question, response, value }: FrequencesQuestionType) => (
                  <Motion
                    initial={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    key={value}
                    children={
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
                    }
                  />
                ),
              )}
            </Accordion>
          </div>
        }
      />
    </div>
  )
}
