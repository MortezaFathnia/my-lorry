
'use client';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Box, CardHeader, Divider } from '@mui/material';

interface DriverData {
    type: 'driver';
    driverCount: number;
    onDutyCount: number;
    offDutyCount: number;
}

interface VehicleData {
    type: 'vehicle';
    vehicleCount: number;
    vehicleOnDutyCount: number;
    vehicleOffDutyCount: number;
}

interface IPropsDriver {
    data: DriverData | VehicleData;
    title: string;
    subtitles: string[];
}

export default function DriverCard({ data, title, subtitles }: IPropsDriver) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Card
            style={{ background: 'linear-gradient(to right bottom, #0081AA, #00AA4F)' }}
            sx={{ height: '100%', color: '#fff', padding: '0' }}>
            <CardHeader
                style={{ padding: '10px 16px ', background: 'linear-gradient(to right bottom, #006686, #049045)' }}
                title={title}
            />
            <CardContent sx={{
                display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row'
                , mt: isSmallScreen ? 2 : 4, mb: isSmallScreen ? 2 : 4,
                gap: isSmallScreen ? 2 : 6, justifyContent: 'center', alignContent: 'center'
            }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography
                        component="h2"
                        sx={{ fontWeight: '600', fontSize: 29 }}
                    >
                        {data.type == 'vehicle' ? data.vehicleCount : data.driverCount}
                    </Typography>
                    <Typography sx={{ fontWeight: '400', fontSize: 12 }}>
                        {subtitles[0]}
                    </Typography>
                </Box>
                <Divider style={{ borderColor: '#fff' }} orientation="vertical" flexItem />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography
                        component="h2"
                        sx={{ fontWeight: '600', fontSize: 29 }}
                    >
                        {data.type == 'vehicle' ? data.vehicleOnDutyCount : data.onDutyCount}
                    </Typography>
                    <Typography sx={{ fontWeight: '400', fontSize: 12 }}>
                        {subtitles[1]}
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography
                        component="h2"
                        sx={{ fontWeight: '600', fontSize: 29 }}
                    >
                        {data.type == 'vehicle' ? data.vehicleOffDutyCount : data.offDutyCount}
                    </Typography>
                    <Typography sx={{ fontWeight: '400', fontSize: 12 }}>
                        {subtitles[2]}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
