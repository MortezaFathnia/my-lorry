import 'server-only';
import { getDriversData } from "@/data/drivers";
import DriverCard from '@/components/driver-card';

export default async function Driver() {
    const { data } = await getDriversData();
    return (
        <div>
            <DriverCard data={{...data,type:'driver'}} title={'Driver'} subtitles={['Total no. of driver', 'On duty', 'Off duty']} />
        </div>
    )
}