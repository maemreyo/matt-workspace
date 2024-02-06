import React from "react";

interface IProps {
    activeTab: 1 | 2 | 3;
    setActiveTab: (tab: 1 | 2 | 3) => void;
}

export function Tabs({ activeTab, setActiveTab }: IProps) {
    return (
        <div id="tabs">
            {/* <ul className="border-b border-gray-200 dark:border-gray-700 flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400"> */}
            <ul className="flex">
                <li className="mr-2">
                    <span
                        className={
                            activeTab === 1
                                ? "cursor-pointer transition-all duration-300 inline-flex px-4 pt-4 pb-2 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group flex justify-center items-center"
                                : "cursor-pointer transition-all duration-300 inline-flex px-4 pt-4 pb-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group flex justify-center items-center"
                        }
                        onClick={() => setActiveTab(1)}
                    >
                        <svg
                            aria-hidden="true"
                            className={
                                activeTab === 1
                                    ? "transition-all duration-300 w-5 h-5 mr-2 text-blue-600 dark:text-blue-500"
                                    : "transition-all duration-300 w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                            }
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                            <path
                                fill-rule="evenodd"
                                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                        Questions (Step 1)
                    </span>
                </li>
                <li className="mr-2">
                    <span
                        className={
                            activeTab === 2
                                ? "cursor-pointer transition-all duration-300 inline-flex px-4 pt-4 pb-2 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group flex justify-center items-center"
                                : "cursor-pointer transition-all duration-300 inline-flex px-4 pt-4 pb-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group flex justify-center items-center"
                        }
                        onClick={() => setActiveTab(2)}
                    >
                        <svg
                            aria-hidden="true"
                            className={
                                activeTab === 2
                                    ? "transition-all duration-300 w-5 h-5 mr-2 text-blue-600 dark:text-blue-500"
                                    : "transition-all duration-300 w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                            }
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                        </svg>
                        Customization (Step 2)
                    </span>
                </li>

                <li className="mr-2">
                    <span
                        className={
                            activeTab === 3
                                ? "cursor-pointer transition-all duration-300 inline-flex px-4 pt-4 pb-2 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group flex justify-center items-center"
                                : "cursor-pointer transition-all duration-300 inline-flex px-4 pt-4 pb-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group flex justify-center items-center"
                        }
                        onClick={() => setActiveTab(3)}
                    >
                        <svg
                            className={
                                activeTab === 3
                                    ? "transition-all duration-300 w-5 h-5 mr-2 text-blue-600 dark:text-blue-500"
                                    : "transition-all duration-300 w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                            }
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                        </svg>
                        Configuration (Step 3)
                    </span>
                </li>
            </ul>
        </div>
    );
}
