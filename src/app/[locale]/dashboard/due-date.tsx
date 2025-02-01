import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ReminderCards from '@/components/reminder-cards';
import ChartDueDates from '@/components/ui/ChartDueDates';
import { getDueDateData } from '@/data/due-date';
import { getTranslations } from 'next-intl/server';

export default async function DueDate() {
    const { data } = await getDueDateData();
    const t = await getTranslations('DueDate');
    return (
        <Grid container
            spacing={2}
            columns={12}
            sx={{mb:2}}>
            <Grid size={{ xs: 12, lg: 6 }}>
                <Stack gap={2} direction={{ xs: 'column', sm: 'row', lg: 'column' }}>
                    <ChartDueDates chartData={data} />
                </Stack>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }} sx={{ mb: 5 }}>
                <Typography component="h2" variant="h6" sx={{ mb: 1 }} >
                    {t('title')}
                </Typography>
                <ReminderCards DueDates={data}/>
            </Grid>
        </Grid>
    )
}