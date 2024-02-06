import React, { useEffect, useState } from "react";
import { IOnboardingData, IUser } from "../types";

interface IProps {
    onboardingData: IOnboardingData;
    user: IUser;
    setOnboardingData: (onboardingData: IOnboardingData) => void;
}

export function Configuration({ onboardingData, setOnboardingData, user }: IProps) {
    const [initialValues, setInitialValues] = useState({
        callToActionsAssistance: false,
        dnsAssistance: false
    });

    useEffect(() => {
        setInitialValues({
            callToActionsAssistance: onboardingData.configuration.callToActionsAssistance === 'Yes',
            dnsAssistance: onboardingData.configuration.dnsAssistance === 'Yes'
        });
    }, [user]);

    return (
        <div id="customization" className="mt-10">
            <form>
                <div className="mb-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">1. Do you need assistance with placing call-to-action buttons on your website?</label>

                        <div className="mt-1">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    value="yes"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    checked={initialValues.callToActionsAssistance}
                                    onChange={() => {
                                        setInitialValues({ ...initialValues, callToActionsAssistance: true });
                                        setOnboardingData({ ...onboardingData, configuration: { ...onboardingData.configuration, callToActionsAssistance: 'Yes' }})
                                    }}
                                />
                                <label className="ml-2 block text-sm font-medium text-gray-700">Yes</label>
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    value="yes"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    checked={!initialValues.callToActionsAssistance}
                                    onChange={() => {
                                        setInitialValues({ ...initialValues, callToActionsAssistance: false });
                                        setOnboardingData({ ...onboardingData, configuration: { ...onboardingData.configuration, callToActionsAssistance: 'No' }})
                                    }}
                                />
                                <label className="ml-2 block text-sm font-medium text-gray-700">No</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="mt-3">
                        <label className="block text-gray-700 font-medium mb-2">2. What is the email address to receive notifications about new leads?</label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="email@example.com"
                            value={onboardingData.configuration.email}
                            onChange={(event) =>
                                setOnboardingData({
                                    ...onboardingData,
                                    configuration: { ...onboardingData.configuration, email: event.target.value },
                                })
                            }
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <div className="mt-3">
                        <label className="block text-gray-700 font-medium mb-2">3. What domain should we host the website on?</label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="e.g.: estimator.domain.com"
                            value={onboardingData.configuration.domainName}
                            onChange={(event) =>
                                setOnboardingData({
                                    ...onboardingData,
                                    configuration: { ...onboardingData.configuration, domainName: event.target.value },
                                })
                            }
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">4. Do you need help with updating DNS records? <span className='text-gray-400 font-normal'>(They are necessary for the domain name to function correctly)</span></label>

                        <div className="mt-1">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    value="yes"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    checked={initialValues.dnsAssistance}
                                    onChange={() => {
                                        setInitialValues({ ...initialValues, dnsAssistance: true });
                                        setOnboardingData({ ...onboardingData, configuration: { ...onboardingData.configuration, dnsAssistance: 'Yes' }})
                                    }}
                                />
                                <label className="ml-2 block text-sm font-medium text-gray-700">Yes</label>
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    value="yes"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    checked={!initialValues.dnsAssistance}
                                    onChange={() => {
                                        setInitialValues({ ...initialValues, dnsAssistance: false });
                                        setOnboardingData({ ...onboardingData, configuration: { ...onboardingData.configuration, dnsAssistance: 'No' }})
                                    }}
                                />
                                <label className="ml-2 block text-sm font-medium text-gray-700">No</label>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
