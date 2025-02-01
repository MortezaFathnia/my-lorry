import React, { useTransition } from "react";
import { Menu, MenuItem } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import IconButton, { IconButtonOwnProps } from '@mui/material/IconButton';
import { usePathname, useRouter } from '@/i18n/routing';
import {useParams} from 'next/navigation';


export default function LanguagesDropdown(props: IconButtonOwnProps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const params = useParams();
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleMode = (locale: 'en' | 'de') => () => {
        startTransition(() => {
            router.replace(
                // @ts-expect-error -- TypeScript will validate that only known `params`
                // are used in combination with a given `pathname`. Since the two will
                // always match for the current route, we can skip runtime checks.
                { pathname, params },
                { locale: locale }
            );
        });
        handleClose();
    };
    return (
        <React.Fragment>
            <IconButton
                data-screenshot="toggle-mode"
                onClick={handleClick}
                disableRipple
                size="small"
                disabled={isPending}
                aria-controls={open ? 'color-scheme-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                {...props}
            >
                <LanguageIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                slotProps={{
                    paper: {
                        variant: 'outlined',
                        elevation: 0,
                        sx: {
                            my: '4px',
                        },
                    },
                }}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleMode('en')}>
                    En
                </MenuItem>
                <MenuItem onClick={handleMode('de')}>
                    De
                </MenuItem>
            </Menu>
        </React.Fragment>
    )
}