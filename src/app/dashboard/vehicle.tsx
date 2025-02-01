import 'server-only';
import { getVehiclesData } from "@/data/vehicles";
import DriverCard from '@/components/driver-card';

export default async function Vehicle() {
    const { data } = await getVehiclesData();
    return (
        <div>
            <DriverCard data={{...data,type:'vehicle'}} title={'Vehicle'} subtitles={['Total no. of vehicle', 'In Use', 'Unused']} />
        </div>
    )
}