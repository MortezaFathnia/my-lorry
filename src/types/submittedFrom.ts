interface CheckInOut {
    lat: string;
    lng: string;
}

interface ProfilePicture {
    createdAt: string;
    filename: string;
    id: number;
    link: string;
    source: string | null;
    sourceId: string | null;
    updatedAt: string;
    uuid: string;
}

interface Driver {
    id: number;
    firstname: string;
    lastname: string;
    profilePicture: ProfilePicture
}

interface Organization {
    id: number;
    name: string;
}

interface MileagePhoto {
    id: number;
    uuid: string;
    filename: string;
    link: string;
    source: string | null;
}

interface Vehicle {
    id: number;
    image: string | null;
    name: string;
    plateNo: string;
}

export interface SessionData {
    attentionStatus: string | null;
    checkIn: CheckInOut;
    checkOut: CheckInOut;
    checkoutTime: string;
    createdAt: string;
    driver: Driver;
    endMileage: number;
    expiredDateTime: string | null;
    id: number;
    organization: Organization;
    startMileage: number;
    startMileagePhoto: MileagePhoto;
    startTime: string;
    status: string;
    sysCheckoutTime: string;
    taskCompletionTime: string;
    vehicle:Vehicle;
}

export interface SubmittedForm {
    clientUniqueId: string;
    createdAt: string;
    data: {
        data: { key: string, value: true }[];
    };
    endorsedBy: string | null;
    endorsementTime: string | null;
    form: {
        name: string;
        lang: string;
        id: number;
        type: string;
    };
    id: number;
    isEndorsed: boolean | null;
    session: SessionData;
    settings: {
        unmatchedCount: number;
    };
    submittedTime: string;
}