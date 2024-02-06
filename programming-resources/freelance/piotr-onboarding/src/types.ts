export type Answer = {
    text: string;
    priceCalculation: string;
};

export type Question = {
    text: string;
    conditions: string;
    answers: Answer[];
};

export interface ICustomizationData {
    phoneNumber: string;
    color: string;
    backgroundImage: string;
    informationToCollect: string;
    zipCodes: string;
    ratings: string;
    appointmentsDays: string;
    appointmentsHours: string;
    appointmentsTimezone: string;
    additionalChanges: string;
}

export interface IConfigurationData {
    callToActionsAssistance: string;
    email: string;
    domainName: string;
    dnsAssistance: string;
}

export interface IOnboardingData {
    questions: Question[];
    customization: ICustomizationData;
    configuration: IConfigurationData;
}

export interface IUser {
    onboardingData: IOnboardingData;
    logo: string;
}