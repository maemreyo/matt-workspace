import React, { useEffect, useState } from "react";
import { IOnboardingData, IUser } from "../types";

interface IProps {
    onboardingData: IOnboardingData;
    user: IUser;
    setOnboardingData: (onboardingData: IOnboardingData) => void;
}

export function Customization({ user, onboardingData, setOnboardingData }: IProps) {
    const [informationToCollect, setInformationToCollect] = useState<string[]>(onboardingData.customization?.informationToCollect.split(", ") || []);

    const handleInformationToCollectChange = (isChecked: boolean, name: string) => {
        setInitialValues({ ...initialValues, informationToCollect: { ...initialValues.informationToCollect, [name]: isChecked } });

        if (isChecked) {
            setOnboardingData({
                ...onboardingData,
                customization: { ...onboardingData.customization, informationToCollect: [...informationToCollect, name].join(", ") },
            });

            setInformationToCollect([...informationToCollect, name]);
        } else {
            setOnboardingData({
                ...onboardingData,
                customization: { ...onboardingData.customization, informationToCollect: informationToCollect.filter((x) => x !== name).join(", ") },
            });

            setInformationToCollect(informationToCollect.filter((x) => x !== name));
        }
    };

    const [initialValues, setInitialValues] = useState({
        phoneNumber: false,
        zipCodes: false,
        ratings: false,
        appointments: false,
        informationToCollect: {
            Name: false,
            Email: false,
            Phone: false,
            Address: false,
        },
    });

    useEffect(() => {
        setInitialValues({
            phoneNumber: !!onboardingData.customization.phoneNumber,
            zipCodes: !!onboardingData.customization.zipCodes,
            ratings: !!onboardingData.customization.ratings,
            appointments: !!onboardingData.customization.appointmentsDays || !! !!onboardingData.customization.appointmentsHours || !! !!onboardingData.customization.appointmentsTimezone,
            informationToCollect: {
                Name: !!onboardingData.customization.informationToCollect?.includes("Name"),
                Email: !!onboardingData.customization.informationToCollect?.includes("Email"),
                Phone: !!onboardingData.customization.informationToCollect?.includes("Phone"),
                Address: !!onboardingData.customization.informationToCollect?.includes("Address"),
            },
        });
    }, [user]);

    return (
        <div id="customization" className="mt-10">
            <form>
                <div className="mb-4">
                    <div className="mt-3">
                        <label className="block text-gray-700 font-medium mb-2">1. What's your brand color?</label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder=""
                            value={onboardingData?.customization?.color}
                            onChange={(event) =>
                                setOnboardingData({
                                    ...onboardingData,
                                    customization: { ...onboardingData.customization, color: event.target.value },
                                })
                            }
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">2. What personal information should we collect?</label>

                    <div>
                        <label className="inline-flex items-center">
                            <input
                                checked={initialValues.informationToCollect.Name}
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-gray-600"
                                onChange={(event) => handleInformationToCollectChange(event.target.checked, "Name")}
                            />
                            <span className="ml-2 text-gray-700">Name</span>
                        </label>
                        <label className="inline-flex items-center ml-6">
                            <input
                                checked={initialValues.informationToCollect.Email}
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-gray-600"
                                onChange={(event) => handleInformationToCollectChange(event.target.checked, "Email")}
                            />
                            <span className="ml-2 text-gray-700">Email</span>
                        </label>
                        <label className="inline-flex items-center ml-6">
                            <input
                                checked={initialValues.informationToCollect.Phone}
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-gray-600"
                                onChange={(event) => handleInformationToCollectChange(event.target.checked, "Phone")}
                            />
                            <span className="ml-2 text-gray-700">Phone Number</span>
                        </label>
                        <label className="inline-flex items-center ml-6">
                            <input
                                checked={initialValues.informationToCollect.Address}
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-gray-600"
                                onChange={(event) => handleInformationToCollectChange(event.target.checked, "Address")}
                            />
                            <span className="ml-2 text-gray-700">Address</span>
                        </label>
                    </div>
                </div>

                {initialValues.informationToCollect.Address && (
                    <div className="mb-4">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Should we restrict access to only the selected zip codes?</label>

                            <div className="mt-1">
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        value="yes"
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                        checked={initialValues.zipCodes}
                                        onChange={() => setInitialValues({ ...initialValues, zipCodes: true })}
                                    />
                                    <label className="ml-2 block text-sm font-medium text-gray-700">Yes</label>
                                </div>

                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        value="yes"
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                        checked={!initialValues.zipCodes}
                                        onChange={() => setInitialValues({ ...initialValues, zipCodes: false })}
                                    />
                                    <label className="ml-2 block text-sm font-medium text-gray-700">No</label>
                                </div>
                            </div>
                        </div>

                        {initialValues.zipCodes && (
                            <div className="mt-3">
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Please specify which areas, states, or zip codes should be allowed"
                                    value={onboardingData?.customization?.zipCodes}
                                    onChange={(event) =>
                                        setOnboardingData({
                                            ...onboardingData,
                                            customization: { ...onboardingData.customization, zipCodes: event.target.value },
                                        })
                                    }
                                />
                            </div>
                        )}
                    </div>
                )}

                <div className="mb-4">
                    <div className="mt-3">
                        <label className="block text-gray-700 font-medium mb-2">3. Do you prefer a default or a custom background image?</label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="If custom, please provide a link or a description"
                            value={onboardingData?.customization?.backgroundImage}
                            onChange={(event) =>
                                setOnboardingData({
                                    ...onboardingData,
                                    customization: { ...onboardingData.customization, backgroundImage: event.target.value },
                                })
                            }
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">4. Should we display your phone number?</label>

                        <div className="mt-1">
                            <div className="flex items-center">
                                <input
                                    id="phone-yes"
                                    type="radio"
                                    name="phone"
                                    value="yes"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    checked={initialValues.phoneNumber}
                                    onChange={() => setInitialValues({ ...initialValues, phoneNumber: true })}
                                />
                                <label htmlFor="phone-yes" className="ml-2 block text-sm font-medium text-gray-700">
                                    Yes
                                </label>
                            </div>

                            <div className="flex items-center">
                                <input
                                    id="phone-no"
                                    type="radio"
                                    name="phone"
                                    value="yes"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    checked={!initialValues.phoneNumber}
                                    onChange={() => setInitialValues({ ...initialValues, phoneNumber: false })}
                                />
                                <label htmlFor="phone-no" className="ml-2 block text-sm font-medium text-gray-700">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>

                    {initialValues.phoneNumber && (
                        <div className="mt-3">
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="text"
                                type="text"
                                placeholder="(123) 456-7890"
                                value={onboardingData?.customization?.phoneNumber}
                                onChange={(event) =>
                                    setOnboardingData({
                                        ...onboardingData,
                                        customization: { ...onboardingData.customization, phoneNumber: event.target.value },
                                    })
                                }
                            />
                        </div>
                    )}
                </div>

                <div className="mb-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            5. Should we display your ratings from Google, Facebook, and/or Yelp?
                        </label>

                        <div className="mt-1">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    value="yes"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    checked={initialValues.ratings}
                                    onChange={() => setInitialValues({ ...initialValues, ratings: true })}
                                />
                                <label className="ml-2 block text-sm font-medium text-gray-700">Yes</label>
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    value="yes"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    checked={!initialValues.ratings}
                                    onChange={() => setInitialValues({ ...initialValues, ratings: false })}
                                />
                                <label className="ml-2 block text-sm font-medium text-gray-700">No</label>
                            </div>
                        </div>
                    </div>

                    {initialValues.ratings && (
                        <div className="mt-3">
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Which ones specifically? - Google/Facebook/Yelp"
                                value={onboardingData?.customization?.ratings}
                                onChange={(event) =>
                                    setOnboardingData({
                                        ...onboardingData,
                                        customization: { ...onboardingData.customization, ratings: event.target.value },
                                    })
                                }
                            />
                        </div>
                    )}
                </div>

                <div className="mb-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">6. Should we enable appointment scheduling?</label>

                        <div className="mt-1">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    value="yes"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    checked={initialValues.appointments}
                                    onChange={() => setInitialValues({ ...initialValues, appointments: true })}
                                />
                                <label className="ml-2 block text-sm font-medium text-gray-700">Yes</label>
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    value="yes"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    checked={!initialValues.appointments}
                                    onChange={() => setInitialValues({ ...initialValues, appointments: false })}
                                />
                                <label className="ml-2 block text-sm font-medium text-gray-700">No</label>
                            </div>
                        </div>
                    </div>

                    {initialValues.appointments && (
                        <>
                            <div className="mt-3">
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Which days should be available (Monday, Tuesday, Wednesday, etc.)"
                                    value={onboardingData?.customization?.appointmentsDays}
                                    onChange={(event) =>
                                        setOnboardingData({
                                            ...onboardingData,
                                            customization: { ...onboardingData.customization, appointmentsDays: event.target.value },
                                        })
                                    }
                                />
                            </div>

                            <div className="mt-3">
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Which hours should be available (e.g., 8AM - 5PM, 10AM - 9PM)"
                                    value={onboardingData?.customization?.appointmentsHours}
                                    onChange={(event) =>
                                        setOnboardingData({
                                            ...onboardingData,
                                            customization: { ...onboardingData.customization, appointmentsHours: event.target.value },
                                        })
                                    }
                                />
                            </div>

                            <div className="mt-3">
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Should we display a timezone?"
                                    value={onboardingData?.customization?.appointmentsTimezone}
                                    onChange={(event) =>
                                        setOnboardingData({
                                            ...onboardingData,
                                            customization: { ...onboardingData.customization, appointmentsTimezone: event.target.value },
                                        })
                                    }
                                />
                            </div>
                        </>
                    )}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="textarea">
                        7. Are there any other modifications you'd like to make?
                    </label>
                    <textarea
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="textarea"
                        placeholder=""
                        rows={4}
                        value={onboardingData.customization.additionalChanges}
                        onChange={(event) =>
                            setOnboardingData({
                                ...onboardingData,
                                customization: { ...onboardingData.customization, additionalChanges: event.target.value },
                            })
                        }
                    ></textarea>
                </div>
            </form>
        </div>
    );
}
