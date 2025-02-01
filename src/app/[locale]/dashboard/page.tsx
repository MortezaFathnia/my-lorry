import Box from '@mui/material/Box';
import AppNavbar from '@/components/app-navbar';
import SideMenu from '@/components/side-menu';
import MainGrid from "./main-grid";
import Header from "./header";
import { Stack } from "@mui/system";
import { setRequestLocale } from 'next-intl/server';
import { Locale } from '@/types/locals';
type Props = {
  params: {locale: Locale};
};
export default async function DashboardPage({ params }: Props) {
  const { locale } = await params; 
  setRequestLocale(locale);
  return (
    <Box sx={{ display: 'flex' }}>
      <SideMenu />
      <AppNavbar />
      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          overflow: 'auto',
        }}
      >
        <Stack
          spacing={2}
          sx={{
            alignItems: 'center',
            mx: 3,
            pb: 5,
            mt: { xs: 8, md: 0 },
          }}
        >
          <Header />
          <MainGrid />
        </Stack>
      </Box>
    </Box>
  )
}