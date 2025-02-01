'use client';
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Typography, Card, CardContent, Box, Stack } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { groupBy, transformGroupedData } from '@/lib/utils';
import { DueDate } from '@/types/dueDates';

const colors = ['#377E58', '#FCA50E', '#EF663B'];

interface IPropsDueDates {
  chartData: DueDate[];
}

export default function ChartDueDates({ chartData }: IPropsDueDates) {
  const groupedDueDates = groupBy(chartData, (dueDate: DueDate) => dueDate.situation);
  const transformedData = transformGroupedData(groupedDueDates, colors) || [];
  const totalValue = transformedData.reduce((sum, country) => sum + country.value, 0);

  const seriesCreated = transformedData.map(({ label, value }) => ({
    label,
    value,
  }));


  return (
    <React.Fragment>
      {seriesCreated.length > 0 ? (
        <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexGrow: 1 }}>
          <CardContent>
            <Typography component="h2" variant="subtitle2">
              Due Dates
            </Typography>
            <Stack sx={{ display: 'grid', alignItems: 'center', gridTemplateColumns: '40% 20% 40%' }}>
              <PieChart
                colors={colors}
                margin={{ top: 20, left: 20, right: 20, bottom: 20 }}
                series={[{
                  innerRadius: 75,
                  outerRadius: 100,
                  paddingAngle: 0,
                  highlightScope: { faded: 'global', highlighted: 'item' }, 
                  data: seriesCreated
                }]}
                height={230}
                width={230}
                slotProps={{ legend: { hidden: true } }}
              />
              <Box>
                {transformedData.map((item, index) => (
                  <Stack key={index} direction="row" sx={{ alignItems: 'center', gap: 2, pb: 2 }}>
                    <Box component="div" width={12} height={12} mt={1} sx={{ bgcolor: item.color }} />
                    <Stack sx={{ gap: 1 }}>
                      <Typography sx={{ display:'flex',alignItems:'center',fontWeight: 600, fontSize: '12px' }}>
                        {item.value}
                        <InfoIcon sx={{ fontSize: '15px', ml: 1, color: '#757575' }} />
                      </Typography>
                      <Typography sx={{ fontWeight: 600, fontSize: '12px' }}>
                        {item.label}
                      </Typography>
                    </Stack>
                  </Stack>
                ))}
              </Box>
              <Stack sx={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '36px' }}>
                  {totalValue}
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 400, color: '#757575', fontSize: '12px' }}>
                  Total Reminders
                </Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      ) : (
        <Box sx={{ textAlign: 'center', p: 2 }}>No Data Available</Box>
      )}
    </React.Fragment>
  );
}
