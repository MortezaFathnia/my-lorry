'use cleint'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { DueDate } from '@/types/dueDates';
import { countRenewTag, groupBy, sumGroupCounts } from '@/lib/utils';

interface IPropsDueDates {
    DueDates: DueDate[];
}

export default function ReminderCards({ DueDates }: IPropsDueDates) {
    const groupedDueDates = groupBy(DueDates, (dueDate: DueDate) => dueDate.type);


    const renewTagCounts = countRenewTag(groupedDueDates, 'renew');
    const truckPermitCounts = countRenewTag(groupedDueDates, 'Truck Permit');
    const summedData = sumGroupCounts(groupedDueDates)
    return (
        <Box
            sx={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: 2,
                height: '100%'
            }}
        >
            {summedData.map((item, index: number) => (
                <Card key={index}>
                    <CardContent sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', flexDirection: 'column', height: '100%' }}>
                        <Typography variant="h5" sx={{ fontWeight: 600, fontSize: '28px' }} component="div">
                            {item.totalCount}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.group}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
            <Card>
                <CardContent sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', flexDirection: 'column', height: '100%' }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, fontSize: '28px' }} component="div">
                        {renewTagCounts.tagCount}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        renewed
                    </Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', flexDirection: 'column', height: '100%' }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, fontSize: '28px' }} component="div">
                        {truckPermitCounts.tagCount}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Truck Permit
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}