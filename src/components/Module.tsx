import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Lesson } from "./Lesson";
import { useStore } from "../zustand-store";

interface ModuleProps {
  moduleIndex: number;
  title: string;
  amountOfLessons: number;
}

export function Module({ title, moduleIndex, amountOfLessons }: ModuleProps) {
  const { currentLessonIndex, currentModuleIndex, play, lessons } = useStore(
    (store) => {
      return {
        currentLessonIndex: store.currentLessonIndex,
        currentModuleIndex: store.currentModuleIndex,
        lessons: store.course?.modules[moduleIndex].lessons,
        play: store.play,
      };
    }
  );

  return (
    <Accordion.Root type="single" collapsible defaultValue="0">
      <Accordion.Item value={moduleIndex.toString()}>
        <Accordion.Header>
          <Accordion.Trigger className="flex w-full group items-center gap-3 bg-zinc-800 p-4">
            <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
              {moduleIndex + 1}
            </div>
            <div className="flex flex-col gap-1 text-left">
              <strong className="text-sm">{title}</strong>
              <span className="text-xs text-zinc-400">
                {amountOfLessons} aulas
              </span>
            </div>

            <ChevronDown className="w-5 h-5 ml-auto text-zinc-400 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180 transition-transform" />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]">
          <nav className="relative flex flex-col gap-4 p-6">
            {lessons &&
              lessons.map((lesson, lessonIndex) => {
                const isCurrent =
                  currentModuleIndex === moduleIndex &&
                  currentLessonIndex === lessonIndex;

                return (
                  <Lesson
                    key={lesson.id}
                    title={lesson.title}
                    duration={lesson.duration}
                    onPlay={() => play([moduleIndex, lessonIndex])}
                    isCurrent={isCurrent}
                  />
                );
              })}
          </nav>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
