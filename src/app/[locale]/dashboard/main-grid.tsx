import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Vehicle from './vehicle';
import Driver from './driver';
import DueDate from './due-date';
import RecentSubmission from './recent-submission';
import { getTranslations } from 'next-intl/server';


export default async function MainGrid() {
  const t = await getTranslations('MainGrid');
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        👋 {t('title')}
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: 2}}
      >
        <Grid size={{ xs: 12, sm: 12, lg: 6 }}>
          <Driver />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, lg: 6 }}>
          <Vehicle />
        </Grid>
      </Grid>
      <DueDate/>
      <Grid container spacing={2} columns={12} sx={{ mb: 2}}>
        <Grid size={{ xs: 12 }}>
          <RecentSubmission />
        </Grid>
      </Grid>
    </Box>
  );
}
