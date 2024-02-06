import React, { useEffect, useState } from "react";
import { IUser, IOnboardingData, Question, Answer } from "../types";
import { Customization } from "./Customization";
import { Configuration } from "./Configuration";
import { Questions } from "./Questions";
import { Auth } from "./Auth";
import { Tabs } from "./Tabs";

function App() {
    const [activeTab, setActiveTab] = useState<1 | 2 | 3>(1);
    const [userId, setUserId] = useState<string>(null);
    const [user, setUser] = useState<IUser>(null);
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [onboardingData, setOnboardingData] = useState<IOnboardingData>({
        questions: [],
        customization: {
            phoneNumber: "",
            color: "",
            backgroundImage: "",
            informationToCollect: "",
            zipCodes: "",
            ratings: "",
            appointmentsDays: "",
            appointmentsHours: "",
            appointmentsTimezone: "",
            additionalChanges: "",
        },
        configuration: {
            email: "",
            domainName: "",
            callToActionsAssistance: "",
            dnsAssistance: "",
        },
    });

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);

        const id = params.get("id");

        if (id) {
            signIn(id);
        }
    }, []);

    const saveChanges = (withSnackbar: boolean = true, newOnboardingData?: IOnboardingData) => {
        fetch(`https://api.carybit.com/users/${userId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ onboardingData: newOnboardingData || onboardingData }),
        }).then(() => {
            if (withSnackbar) {
                setShowSnackbar(true);

                setTimeout(() => {
                    setShowSnackbar(false);
                }, 3000);
            }
        });
    };

    const signIn = (id: string) => {
        fetch(`https://api.carybit.com/users/onboarding-data/${id}`)
            .then((response) => response.json())
            .then((response) => {
                setUser(response);
                setOnboardingData(response.onboardingData);
                setUserId(id);
            })
            .catch(() => {
                setOnboardingData(null);
                setUser(null);
            });
    };

    return !user ? (
        <div id="main-container" className="mx-auto mt-5 flex justify-center flex-col">
            <div
                className={`fixed bottom-4 right-4 bg-green-500 text-white rounded-md shadow-lg py-2 px-4 flex items-center ${
                    showSnackbar ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500 ease-in-out`}
            >
                <h3 className="mr-2">Changes have been saved successfully</h3>
            </div>

            <div className="flex justify-center mb-10">
                <img src={user?.logo} width={250} />
            </div>

            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

            {activeTab === 1 && <Questions onboardingData={onboardingData} setOnboardingData={setOnboardingData} saveChanges={saveChanges} />}

            {activeTab === 2 && <Customization onboardingData={onboardingData} setOnboardingData={setOnboardingData} user={user} />}

            {activeTab === 3 && <Configuration onboardingData={onboardingData} setOnboardingData={setOnboardingData} user={user} />}

            {activeTab !== 1 && (
                <div className="flex justify-center mt-10">
                    <button onClick={() => saveChanges()} className="bg-green-500 hover:bg-green-700 text-white font-medium py-2 px-4 rounded mb-8">
                        Save Changes
                    </button>
                </div>
            )}
        </div>
    ) : (
        <Auth userId={userId} setUserId={setUserId} signIn={signIn} />
    );
}

export default App;
