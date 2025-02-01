'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Box, Checkbox, FormControlLabel, Link, Typography } from '@mui/material';
import Image from 'next/image';
import FormControl from '@mui/material/FormControl';
import { GoogleIcon } from './ui/CustomIcons';
import { useAuth } from '@/context/auth';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { ThemeProvider } from '@mui/material/styles';
import loginTheme from '@/theme/login-theme';
import { loginSchema } from '@/validation/loginUser';

type FormValues = Record<string, string | boolean>;

export default function LoginForm() {
  const [formValues, setFormValues] = React.useState<FormValues>({});
  const auth = useAuth();
  const router = useRouter();
  const [errors, setErrors] = React.useState<Record<string, string | undefined>>({});

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event?.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    checked: boolean
  ) => {
    const { name } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
  };

  const handleSubmit = async () => {
    try {
      const validatedData = loginSchema.parse(formValues);
      await auth?.loginWithEmail(validatedData.email, validatedData.password).then(() => {
        router.push('/dashboard');
      });
    } catch (error: unknown) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string | undefined> = {};
        error.issues.forEach((issue) => {
          fieldErrors[issue.path[0]] = issue.message;
        });
        setErrors(fieldErrors);
      }
    }
  };

  const isTermsChecked = formValues.terms as boolean;

  return (
    
    <ThemeProvider theme={loginTheme}>
      <Dialog open={true} fullWidth={true}>
        <form>
        
          <DialogContent
            sx={{
              flex: '1 1 auto',
              paddingBlock: '32px',
              paddingInline: '16px',
            }}
          >
            {isTermsChecked}
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
            >
              <Image src={'./img-logo.svg'} width={100} height={100} alt='logo' />
            </Box>

            <FormControl fullWidth>
              <TextField
                onChange={handleTextFieldChange}
                name='email'
                placeholder='Email*'
                sx={{ mb: 1 }}
                variant='outlined'
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                onChange={handleTextFieldChange}
                name='password'
                placeholder='password*'
                type='password'
                variant='outlined'
              />
            </FormControl>
            <Link
              component="button"
              type="button"
              variant="body2"
              sx={{
                alignSelf: 'center',
                textDecoration: 'none',
                display: 'block',
                mt: 2,
                mb: 1,
              }}
            >
              FORGOT PASSWORD?
            </Link>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleCheckboxChange}
                  value="terms"
                  name="terms"
                  color="primary"
                />
              }
              label="I accept the terms and conditions"
            />
            {errors.terms && <Typography color="error">{errors.terms}</Typography>}
          </DialogContent>
          <DialogActions>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                padding: '0 8px',
                flexDirection: 'column',
                mb: 4,
                gap: 2,
              }}
            >
              <Button
                fullWidth
                variant="contained"
                onClick={handleSubmit}
                disabled={!isTermsChecked}
              >
                LOGIN
              </Button>
              <Box component="div" sx={{ textAlign: 'center' }} role="presentation">
                <Typography>Or</Typography>
              </Box>
              <Button
                fullWidth
                variant="outlined"
                color="secondary"
                startIcon={<GoogleIcon />}
              >
                LOGIN WITH GOOGLE
              </Button>
            </Box>
          </DialogActions>
        </form>
      </Dialog>
    </ThemeProvider>
  );
}
