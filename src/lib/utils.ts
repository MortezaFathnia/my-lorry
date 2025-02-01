import { DueDate } from "@/types/dueDates";
import { SessionData } from "@/types/submittedFrom";
type GroupedObject<T> = Record<string, T[]>;


type GroupedDataWithColor = {
    label: string;
    value: number;
    color: string;
};

interface GroupedData {
    [key: string]: DueDate[];
}

interface SummedData {
    group: string;
    totalCount: number;
}


export function groupBy<T, K extends string | number>(
    array: T[],
    key: (item: T) => K
): Record<K, T[]> {
    if (!array) return {} as Record<K, T[]>;

    return array.reduce((result, currentItem) => {
        const groupKey = key(currentItem);

        if (!result[groupKey]) {
            result[groupKey] = [];
        }

        result[groupKey].push(currentItem);
        return result;
    }, {} as Record<K, T[]>);
}



export function transformGroupedData(
    groupedData: GroupedObject<DueDate>,
    colors: string[]
): GroupedDataWithColor[] {
    const result: GroupedDataWithColor[] = [];
    let colorIndex = 0;

    for (const key in groupedData) {
        if (groupedData.hasOwnProperty(key)) {

            const sum = groupedData[key].reduce((acc, item) => acc + +item.count, 0);

            result.push({
                label: key,
                value: sum,
                color: colors[colorIndex % colors.length],
            });

            colorIndex++;
        }
    }

    return result;
}

export function sumGroupCounts(data: GroupedData): SummedData[] {
    return Object.keys(data).map(group => {
        const totalCount = data[group].reduce((sum, item) => sum + parseInt(item.count), 0);
        return { group, totalCount };
    });
};

export function countRenewTag(data: GroupedData, key: string): { tagCount: number } {
    const totalTagCount = Object.keys(data).reduce((total, group) => {
        const groupTagCount = data[group].filter(item => item.tag === key).length;
        return total + groupTagCount;
    }, 0);

    return { tagCount: totalTagCount };
};

export function formatSessionData(session: SessionData, id: number) {
    const mileageDifference = session.endMileage - session.startMileage;

    return {
        id: session.id + id,
        driver: `${session.driver.firstname} ${session.driver.lastname}`,
        vehicle: session.vehicle?.plateNo ?? "N/A",
        mileage: `${session.startMileage} - ${session.endMileage} (${mileageDifference} km)`,
        date: session.startTime,
    };
}