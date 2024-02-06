import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Answer, IOnboardingData, Question } from "../types";
import { DebounceInput } from "react-debounce-input";
import { ConditionsModal } from "./ConditionsModal";
import { Accordion, AccordionDetails, AccordionSummary, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

interface IProps {
    onboardingData: IOnboardingData;
    saveChanges: (withSnackbar: boolean, newOnboardingData?: IOnboardingData) => void;
    setOnboardingData: (onboardingData: IOnboardingData) => void;
}

export function Questions({ onboardingData, setOnboardingData, saveChanges }: IProps) {
    const [conditionsModalVisibleIndex, setConditionsModalVisibleIndex] = useState<number>(null);

    const addQuestion = () => {
        const newQuestion: Question = {
            text: "",
            conditions: "",
            answers: [],
        };

        setOnboardingData({ ...onboardingData, questions: [...onboardingData?.questions, newQuestion] });

        saveChanges(false, { ...onboardingData, questions: [...onboardingData?.questions, newQuestion] });
    };

    const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const updatedQuestions = [...onboardingData?.questions];

        updatedQuestions[index].text = event.target.value;

        setOnboardingData({ ...onboardingData, questions: updatedQuestions });

        saveChanges(false, { ...onboardingData, questions: updatedQuestions });
    };

    const handleConditionsChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const updatedQuestions = [...onboardingData?.questions];

        updatedQuestions[index].conditions = event.target.value;

        setOnboardingData({ ...onboardingData, questions: updatedQuestions });

        saveChanges(false, { ...onboardingData, questions: updatedQuestions });
    };

    const addAnswer = (questionIndex: number) => {
        const newAnswer: Answer = {
            text: "",
            priceCalculation: "",
        };

        const updatedQuestions = [...onboardingData?.questions];

        updatedQuestions[questionIndex].answers.push(newAnswer);

        setOnboardingData({ ...onboardingData, questions: updatedQuestions });

        saveChanges(false, { ...onboardingData, questions: updatedQuestions });
    };

    const handleAnswerTextChange = (event: React.ChangeEvent<HTMLInputElement>, questionIndex: number, answerIndex: number) => {
        const updatedQuestions = [...onboardingData?.questions];

        updatedQuestions[questionIndex].answers[answerIndex].text = event.target.value;

        setOnboardingData({ ...onboardingData, questions: updatedQuestions });

        saveChanges(false, { ...onboardingData, questions: updatedQuestions });
    };

    const handleAnswerPriceChange = (event: React.ChangeEvent<HTMLInputElement>, questionIndex: number, answerIndex: number) => {
        const updatedQuestions = [...onboardingData?.questions];

        updatedQuestions[questionIndex].answers[answerIndex].priceCalculation = event.target.value;

        setOnboardingData({ ...onboardingData, questions: updatedQuestions });

        saveChanges(false, { ...onboardingData, questions: updatedQuestions });
    };

    const removeAnswer = (questionIndex: number, answerIndex: number) => {
        const updatedQuestions = [...onboardingData?.questions];

        const question = updatedQuestions[questionIndex];

        const answers = [...question.answers];

        answers.splice(answerIndex, 1);

        question.answers = answers;

        setOnboardingData({ ...onboardingData, questions: updatedQuestions });

        saveChanges(false, { ...onboardingData, questions: updatedQuestions });
    };

    const removeQuestion = (questionIndex: number) => {
        const updatedQuestions = [...onboardingData?.questions];

        updatedQuestions.splice(questionIndex, 1);

        setOnboardingData({ ...onboardingData, questions: updatedQuestions });

        saveChanges(false, { ...onboardingData, questions: updatedQuestions });
    };

    return (
        <div className="m-4">
            {onboardingData?.questions.map((question, index) => (
                <div key={index} className="mb-8 mt-4">
                    <Accordion defaultExpanded className="accordion-area">
                        <AccordionSummary
                            className="accordion-summary"
                            expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Fragment>
                                <span className="self-center mr-2">{index + 1}.</span>
                                <input
                                    // className="p-2 mr-4 w-1/2 font-medium focus:outline-none border-2"
                                    className="p-2 mr-4 w-full font-medium border-2 rounded-lg"
                                    type="text"
                                    value={question.text}
                                    onChange={(event) => handleQuestionChange(event, index)}
                                    placeholder="Enter your question..."
                                    onClick={(event) => event.stopPropagation()}
                                />
                            </Fragment>
                            <div className="flex justify-end min-w-max self-center">
                                <button
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        setConditionsModalVisibleIndex(index);
                                    }}
                                    className={
                                        question.conditions
                                            ? "bg-green-500 hover:bg-green-600 text-white font-medium py-1 px-2 mr-2 rounded"
                                            : `bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-1 px-2 mr-2 rounded`
                                    }
                                >
                                    Show when
                                </button>

                                <button
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        removeQuestion(index);
                                    }}
                                    className="bg-red-500 hover:bg-red-700 text-white font-medium py-1 px-2 rounded mr-4"
                                >
                                    Remove
                                </button>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails className="flex flex-col justify-center items-center">
                            <Fragment>
                                <TableContainer className="mb-4">
                                    <Table>
                                        {question.answers.length > 0 ? (
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell className="border-r-2 head-cell" align="center">
                                                        Answers
                                                    </TableCell>
                                                    <TableCell className="head-cell" align="center">
                                                        Price formula
                                                    </TableCell>
                                                </TableRow>
                                            </TableHead>
                                        ) : null}

                                        <TableBody>
                                            {question.answers.map((answer, answerIndex) => (
                                                <TableRow key={answerIndex} className="mb-4">
                                                    <TableCell className="px-0 border-r-2 flex justify-between items-center mb-2">
                                                        <input
                                                            className="mr-4 w-full font-medium focus:outline-none"
                                                            type="text"
                                                            value={answer.text}
                                                            onChange={(event) => handleAnswerTextChange(event, index, answerIndex)}
                                                            placeholder="Answer"
                                                        />
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="flex justify-between items-center">
                                                            <DebounceInput
                                                                className="pr-2 w-full font-medium focus:outline-none"
                                                                type="text"
                                                                value={answer.priceCalculation}
                                                                onChange={(event) => handleAnswerPriceChange(event, index, answerIndex)}
                                                                placeholder="Price"
                                                                debounceTimeout={500}
                                                            />
                                                            <FontAwesomeIcon
                                                                icon={faXmark}
                                                                className="text-red-500 hover:text-red-700 cursor-pointer"
                                                                onClick={() => removeAnswer(index, answerIndex)}
                                                            />
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Fragment>
                            <button
                                onClick={() => addAnswer(index)}
                                className="w-2/5 m-auto bg-blue-500 hover:bg-blue-700 text-white font-medium py-1 px-2 rounded ml-6 mr-8"
                            >
                                <FontAwesomeIcon icon={faPlus} />
                                <span className="ml-1">Add Answer</span>
                            </button>
                        </AccordionDetails>
                    </Accordion>
                    <ConditionsModal
                        conditions={question.conditions}
                        isVisible={conditionsModalVisibleIndex === index}
                        hide={() => {
                            setConditionsModalVisibleIndex(null);
                        }}
                        handleConditionsChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            handleConditionsChange(event, index);
                        }}
                    />
                </div>
            ))}
            <div className="flex justify-start">
                <button
                    onClick={addQuestion}
                    className="flex items-center bg-white justify-center border-2 border-gray-400 rounded-lg py-1 px-2 transition duration-500 ease-in-out hover:bg-gray-100 hover:border-gray-500 hover:text-gray-500"
                >
                    <span className="text-gray-600 text-lg mr-2">+</span>
                    <span className="text-gray-600 font-medium">Add Question</span>
                </button>
            </div>
        </div>
    );
}
