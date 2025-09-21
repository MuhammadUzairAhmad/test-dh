"use client";
import React, { useState } from "react";
import Heading from "../../sharedComp/Heading";
import DividerUI from "@/components/dump/DividerUI";
import CalendarInput from "@/components/dump/CalendarInput";
import TimeInput from "@/components/dump/TimeInput";
import ButtonUI from "@/components/dump/Button";
import ImageUpload from "@/components/dump/ImageUpload";
import InputField from "@/components/dump/InputField";
import RadioButton from "@/components/dump/RadioButton";
import clsx from "clsx";
import Image from "next/image";
import EditIconFilled from "@/assets/svgs/edit-icon-2.svg";
import TrashIcon from "@/assets/svgs/delete-filled-icon.svg";
import { RiSubtractFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { useRouter } from "next/navigation";
import { Question } from "@/types";
import { poppins } from "@/lib/font";



const CreateNewContest = () => {
  const [contestName, setContestName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [duration, setDuration] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const [questions, setQuestions] = useState<Question[]>([
    { id: 1, text: "", options: ["", "", "", ""], source: "", activeTill: "" },
  ]);

  const [activeQuestionId, setActiveQuestionId] = useState<number | null>(1);
  const router = useRouter();

  const handleCreateContest = () => {
    console.log({
      contestName,
      startDate,
      duration,
      image,
      questions,
    });
    router.push("/contests");
  };

  const handleAddQuestion = () => {
    const newId = questions.length + 1;
    setQuestions([
      ...questions,
      {
        id: newId,
        text: "",
        options: ["", "", "", ""],
        source: "",
        activeTill: "",
      },
    ]);
    setActiveQuestionId(newId);
  };

  const handleSaveQuestion = () => {
    setActiveQuestionId(null);
  };

  const handleDeleteQuestion = (id: number) => {
    const updated = questions.filter((q) => q.id !== id);
    setQuestions(updated);
    if (activeQuestionId === id) setActiveQuestionId(null);
  };

  const handleAddOption = (qIndex: number) => {
    const newQs = [...questions];
    newQs[qIndex].options.push("");
    setQuestions(newQs);
  };

  const handleRemoveOption = (qIndex: number, optIndex: number) => {
    const newQs = [...questions];
    if (newQs[qIndex].options.length > 2) {
      newQs[qIndex].options.splice(optIndex, 1);
      setQuestions(newQs);
    }
  };

  return (
    <main>
      <Heading title="Create new contest" />

      {/* Contest Info */}
      <div className="mt-10 mb-8 flex flex-col sm:flex-row items-start gap-4 sm:gap-8 max-w-[710px]">
        <ImageUpload onChange={(data) => setImage(data)} />
        <div className="flex-col flex w-full justify-between gap-4 sm:gap-10">
          {/* Contest Name */}
          <div>
            <label
              htmlFor="contestName"
              className={clsx(
                poppins.className,
                "font-normal text-sm sm:text-base text-[#181818] opacity-70"
              )}
            >
              Name of the contest
            </label>
            <InputField
              id="contestName"
              name="contestName"
              type="text"
              className="w-full mt-1"
              inputClass="!h-8"
              value={contestName}
              onChange={(e) => setContestName(e.target.value)}
              label={""}
            />
          </div>

          {/* Contest Active Till */}
          <div>
            <label
              htmlFor="ContestActiveTill"
              className={clsx(
                poppins.className,
                "font-normal text-sm sm:text-base text-[#181818] opacity-70"
              )}
            >
              Contest Active till
            </label>
            <div className="flex items-center gap-8 mt-1">
              <CalendarInput
                value={startDate}
                onChange={(val) => setStartDate(val)}
                id="contestDate"
              />
              <TimeInput
                value={duration}
                onChange={(val) => setDuration(val)}
                id="contestTime"
              />
            </div>
          </div>
        </div>
      </div>

      <DividerUI className="!bg-[#010B28] !opacity-25" />

      {/* Questions Section */}
      <div className="flex flex-col gap-6 mt-8 max-w-[710px]">
        {questions.map((q, index) =>
          q.id === activeQuestionId ? (
            <div
              key={q.id}
              className="bg-[#F0F0F3] border-l-8 border-[#010B28] rounded-2xl px-6 py-6 flex flex-col gap-4"
            >
              <div className="flex justify-between items-center mb-4">
                <div
                  className={clsx(
                    poppins.className,
                    "font-bold text-base text-[#12BAAF]"
                  )}
                >
                  Question {index + 1}
                </div>
                <Image
                  src={TrashIcon}
                  alt="Del Icon"
                  priority
                  className="w-6 h-6 cursor-pointer hover:opacity-90 !text-[#4C4D4E]"
                  onClick={() => handleDeleteQuestion(q.id)}
                />
              </div>

              <div className="max-w-[610px] flex flex-col gap-6">
                <InputField
                  variant="textarea"
                  id={`question-${q.id}`}
                  name="question"
                  label="Type the question:"
                  placeholder="Type your question..."
                  value={q.text}
                  onChange={(e) => {
                    const newQs = [...questions];
                    newQs[index].text = e.target.value;
                    setQuestions(newQs);
                  }}
                />

                <div className="min-h-[120px] py-2 px-4 resize-none rounded-[12px] border border-opacity-25 bg-[#EFF0F3] text-[#010B28] border-[#0000003D] pb-12.5 flex flex-col gap-1.5">
                  {q.options.map((opt, optIdx) => (
                    <div key={optIdx} className="flex items-center gap-3">
                      <InputField
                        variant="text"
                        id={`option-${q.id}-${optIdx}`}
                        name={`option-${optIdx}`}
                        label=""
                        placeholder={`Option ${optIdx + 1}`}
                        value={opt}
                        onChange={(e) => {
                          const newQs = [...questions];
                          newQs[index].options[optIdx] = e.target.value;
                          setQuestions(newQs);
                        }}
                      />

                      {optIdx === q.options.length - 1 ? (
                        <IoMdAdd
                          className="text-[#222222] cursor-pointer"
                          onClick={() => handleAddOption(index)}
                        />
                      ) : (
                        // If not last option → show "-" (but only if > 2 total)
                        q.options.length > 2 && (
                          <RiSubtractFill
                            className="text-[#222222] cursor-pointer"
                            onClick={() => handleRemoveOption(index, optIdx)}
                          />
                        )
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-2 grid sm:grid-cols-3 items-center gap-2.5">
                  <label
                    htmlFor="ContestActiveTill"
                    className={clsx(
                      poppins.className,
                      "text-sm sm:text-base text-[#222222] font-extrabold"
                    )}
                  >
                    Contest Active till:
                  </label>
                  <CalendarInput
                    value={startDate}
                    onChange={(val) => setStartDate(val)}
                    id="contestDate"
                  />
                  <TimeInput
                    value={duration}
                    onChange={(val) => setDuration(val)}
                    id="contestTime"
                  />
                </div>

                <div className="grid grid-cols-3 text-base leading-[128%] tracking-[1%] text-[#222222]">
                  <div className="font-extrabold ">Source: </div>
                  <div className="font-normal opacity-80 col-span-2">
                    <InputField
                      variant="text"
                      id="answer"
                      name="answer"
                      label=""
                      placeholder="Placeholder for the link of the source of answer"
                    />
                  </div>
                </div>

                {q.id !== questions.length && (
                  <div className="mt-4">
                    <ButtonUI
                      variant="dark"
                      size="sm"
                      className="max-w-[165px]"
                      onClick={handleSaveQuestion}
                    >
                      Save
                    </ButtonUI>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div
              key={q.id}
              className={clsx(
                poppins.className,
                "lg:max-w-[778px] w-full py-6.5 px-4.5 flex flex-col bg-[#F0F0F3] border border-[#0629A2] rounded-2xl"
              )}
            >
              <div className="flex justify-between items-center mb-2">
                <div
                  className={clsx(
                    poppins.className,
                    "font-bold text-base text-[#12BAAF]"
                  )}
                >
                  QUESTION {q.id}
                </div>
                <Image
                  src={EditIconFilled}
                  alt="Edit Icon"
                  priority
                  className="w-6 h-6 cursor-pointer hover:opacity-90 !text-[#4C4D4E]"
                  onClick={() => setActiveQuestionId(q.id)}
                />
              </div>
              <div>
                <div
                  className={clsx(
                    poppins.className,
                    "font-semibold text-xl md:text-2xl tracking-[2%] text-[#282828] opacity-85"
                  )}
                >
                  {q.text || `Question ${q.id}`}
                </div>

                <div className="flex flex-col gap-1 mt-4 mb-5.5">
                  {q.options.map((opt, idx) => (
                    <RadioButton key={idx} label={opt || `Option ${idx + 1}`} />
                  ))}
                </div>

                <div className=" mt-6.5 grid grid-cols-3 text-base leading-[128%] tracking-[1%] text-[#222222]">
                  <div className="font-extrabold ">Question Active Till: </div>
                  <div className="font-normal opacity-80">
                    {q.activeTill || "yy/mm/dd"}
                  </div>
                  <div className="font-normal opacity-80">
                    {q.activeTill || "00h:00m:00sc "}
                  </div>
                </div>

                <div className=" mt-5 grid grid-cols-3 text-base leading-[128%] tracking-[1%] text-[#222222]">
                  <div className="font-extrabold ">Source: </div>
                  <div className="font-normal opacity-80 col-span-2">
                    {q.source ||
                      "Placeholder for the link of the source of answer"}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      <div className="flex justify-between items-center mt-8 max-w-[710px]">
        <ButtonUI
          onClick={handleAddQuestion}
          className="max-w-[177px]"
          rightIcon={<IoMdAdd />}
          variant="textUnderline"
        >
          New Question
        </ButtonUI>
        <ButtonUI
          onClick={handleCreateContest}
          className="max-w-[165px]"
          size="sm"
        >
          Submit
        </ButtonUI>
      </div>
    </main>
  );
};

export default CreateNewContest;
