import 'server-only';
import { cookies } from "next/headers";

export const getVehiclesData = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("firebaseAuthToken")?.value;

  if (!token) {
    return {};
  }


  const response = await fetch('https://sg-api.mylorry.ai/api/org/57/vehicle/statistics', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = response.ok ? await response.json() : null;

  return data || {};
};
