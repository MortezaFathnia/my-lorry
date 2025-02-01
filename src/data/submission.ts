import 'server-only';
import { cookies } from "next/headers";

export const getSubmissionData = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get("firebaseAuthToken")?.value;

    if (!token) {
        return {};
    }

    const params = {
        pageSize: '25',
        pageNumber: '1',
    };
    const queryString = new URLSearchParams(params).toString();
    const url = `https://sg-api.mylorry.ai/api/org/57/driver/submitted-forms?${queryString}`;

    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });

    const data = response.ok ? await response.json() : null;

    return data || {};
};
