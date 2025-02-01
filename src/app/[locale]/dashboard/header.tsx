'use client';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import NavbarBreadcrumbs from '@/components/ui/NavbarBreadcrumbs';
import ColorModeIconDropdown from '@/components/color-mode-icon-dropdown';
import LanguagesDropdown from '@/components/languages-dropdown';


export default function Header() {
  return (
    <Stack
      direction="row"
      sx={{
        display: { xs: 'none', md: 'flex' },
        width: '100%',
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        maxWidth: { sm: '100%', md: '1700px' },
        pt: 1.5,
      }}
      spacing={2}
    >
      <NavbarBreadcrumbs />
      <Stack direction="row" sx={{ gap: 1 }}>
        <LanguagesDropdown/>
        <ColorModeIconDropdown />
      </Stack>
    </Stack>
  );
}
