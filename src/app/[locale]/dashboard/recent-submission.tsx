import 'server-only';
import { getSubmissionData } from "@/data/submission";
import { Typography } from '@mui/material';
import CustomizedDataGrid from '@/components/customized-data-grid';

export default async function RecentSubmission() {
    const { data } = await getSubmissionData();
    return (
        <div>
            <Typography component="h2" variant="h6" sx={{ mb: 1 }} >
                  Recent Submissions
            </Typography>
            <CustomizedDataGrid data={data} />
        </div>
    )
}