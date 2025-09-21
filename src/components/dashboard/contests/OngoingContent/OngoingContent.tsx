"use client";
import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Poppins } from "next/font/google";
import coverImg from "@/assets/images/coverImage.png";
import EditIcon from "@/assets/svgs/edit-icon.svg";
import EditIconFilled from "@/assets/svgs/edit-icon-2.svg";
import TrashIcon from "@/assets/svgs/delete-filled-icon.svg";
import DividerUI from "@/components/dump/DividerUI";
import CalendarInput from "@/components/dump/CalendarInput";
import TimeInput from "@/components/dump/TimeInput";
import InputField from "@/components/dump/InputField";
import ButtonUI from "@/components/dump/Button";
import RadioButton from "@/components/dump/RadioButton";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

type Question = {
  id: number;
  question: string;
  options: string[];
  verifiedBy: string;
  activeTill: string;
  source: string;
};

const OngoingContent = () => {
  const initialQuestions = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    question: "Will the 2024 MacBook Pro have a 5G chip?",
    options: ["Paris", "London"],
    verifiedBy: "Source Name",
    activeTill: "23/07/01",
    source: "https://example.com",
  }));

  const [questions, setQuestions] = useState<Question[]>(initialQuestions);
  const [editingQuestionId, setEditingQuestionId] = useState<number | null>(
    null
  );

  const handleSave = (id: number, updated: Question) => {
    setQuestions((prev) => prev.map((q) => (q.id === id ? updated : q)));
    setEditingQuestionId(null);
  };

  const handleDelete = (id: number) => {
    setQuestions((prev) => prev.filter((q) => q.id !== id));
    if (editingQuestionId === id) setEditingQuestionId(null);
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
    <main className="flex flex-col gap-4">
      {/* Cover card */}
      <div className="flex w-full bg-[#F0F0F3] rounded-2xl relative overflow-hidden mb-5">
        <div className="flex-1 py-3 px-3 sm:py-8 sm:px-8">
          <div
            className={clsx(
              poppins.className,
              "flex flex-col md:flex-row justify-between md:items-center font-semibold text-base sm:text-lg xl:text-[28px] text-[#282828] tracking-wider"
            )}
          >
            <div>
              Ongoing Contest{" "}
              <span className="font-normal">| 23/06/01 - 23/07/01</span>
            </div>
            <div className="font-light text-[#282828]">Second timer</div>
          </div>
          <div
            className={clsx(
              poppins.className,
              "text-sm sm:text-base text-[#222222] opacity-80 mt-1.5"
            )}
          >
            Add, remove questions
          </div>
        </div>

        <div className="relative w-[120px] sm:w-[200px] md:w-[233px] flex-shrink-0">
          <Image
            src={coverImg}
            alt="cover image"
            priority
            className="object-cover w-full h-full rounded-r-2xl"
          />
          <Image
            src={EditIcon}
            alt="Edit Icon"
            priority
            className="w-6 h-6 absolute top-4 right-3.5 cursor-pointer hover:opacity-90"
            onClick={() => console.log("Edit cover card")}
          />
        </div>
      </div>

      {/* Questions */}
      {questions.map((q, index) =>
        editingQuestionId === q.id ? (
          // Editable card
          <div
            key={q.id}
            className="bg-[#F0F0F3] border-l-8 border-[#010B28] rounded-2xl px-6 py-6 flex flex-col gap-4 max-w-[778px]"
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
            </div>

            <InputField
              variant="textarea"
              label="Question"
              value={q.question}
              onChange={(e) => {
                const newQs = [...questions];
                newQs[index].question = e.target.value;
                setQuestions(newQs);
              }}
              id={""}
              name={""}
            />

            {/* Options */}
            <div className="min-h-[120px] py-2 px-4 resize-none rounded-[12px] border border-opacity-25 bg-[#EFF0F3] text-[#010B28] border-[#0000003D] pb-12.5 flex flex-col gap-1.5">
              {q.options.map((opt, optIdx) => (
                <div key={optIdx} className="flex items-center gap-2">
                  <InputField
                    variant="text"
                    placeholder={`Option ${optIdx + 1}`}
                    value={opt}
                    onChange={(e) => {
                      const newQs = [...questions];
                      newQs[index].options[optIdx] = e.target.value;
                      setQuestions(newQs);
                    }}
                    id={""}
                    name={""}
                    label={""}
                  />
                  {optIdx === q.options.length - 1 ? (
                    <IoMdAdd
                      className="cursor-pointer"
                      onClick={() => handleAddOption(index)}
                    />
                  ) : (
                    q.options.length > 2 && (
                      <RiSubtractFill
                        className="cursor-pointer"
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
                value={q.activeTill}
                onChange={(val) => {
                  const newQs = [...questions];
                  newQs[index].activeTill = val;
                  setQuestions(newQs);
                }}
                id={""}
              />
              <TimeInput value="" onChange={() => {}} id="time" />
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
                  onChange={(e) => {
                    const newQs = [...questions];
                    newQs[index].verifiedBy = e.target.value;
                    setQuestions(newQs);
                  }}
                />
              </div>
            </div>

            <ButtonUI
              variant="dark"
              onClick={() => handleSave(q.id, q)}
              className="max-w-[165px]"
            >
              Save
            </ButtonUI>
          </div>
        ) : (
          // Read-only card
          <div
            key={q.id}
            className={clsx(
              poppins.className,
              "lg:max-w-[778px] w-full py-[32px] px-[24px] flex flex-col bg-[#F0F0F3] border border-[#0629A2] rounded-2xl"
            )}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4 md:gap-6 lg:gap-12">
                <div
                  className={clsx(
                    poppins.className,
                    "font-medium text-base tracking-[3%] text-[#323A53]"
                  )}
                >
                  QUESTION {q.id}/{questions.length}
                </div>
                <div className="px-[14px] py-1 rounded-[40px] border border-[#12BAAF] bg-white text-[#12BAB0] text-[13px] font-normal inline-flex items-center justify-center">
                  <div className="font-semibold text-[#12BAB0]">
                    Active{" "}
                    <span className="font-medium text-[#0629A2]">Until </span>
                  </div>
                  <div className="ml-[7px] font-normal">{q.activeTill}</div>
                </div>
              </div>

              <div className="flex items-center gap-[12px]">
                <Image
                  src={EditIconFilled}
                  alt="Edit Icon"
                  priority
                  className="w-6 h-6 cursor-pointer hover:opacity-90 !text-[#4C4D4E]"
                  onClick={() => setEditingQuestionId(q.id)}
                />
                <Image
                  src={TrashIcon}
                  alt="Delete Icon"
                  priority
                  className="w-6 h-6 cursor-pointer hover:opacity-90 !text-[#4C4D4E]"
                  onClick={() => handleDelete(q.id)}
                />
              </div>
            </div>

            <DividerUI className="!bg-[#D9D9D9] my-5.5" />

            <div>
              <div
                className={clsx(
                  poppins.className,
                  "font-semibold text-xl md:text-2xl leading-[100%] tracking-[2%] text-[#282828]"
                )}
              >
                {q.question}
              </div>
              <div className="flex flex-col gap-1 mt-4 mb-5.5">
                {q.options.map((opt, idx) => (
                  <RadioButton key={idx} label={opt} />
                ))}
              </div>
              <div
                className={clsx(
                  poppins.className,
                  "font-medium text-[12px] tracking-[3%] underline decoration-solid decoration-0 text-[#1C77FF]"
                )}
              >
                Verified By <span className="font-normal">{q.verifiedBy}</span>
              </div>
            </div>
          </div>
        )
      )}
    </main>
  );
};

export default OngoingContent;
