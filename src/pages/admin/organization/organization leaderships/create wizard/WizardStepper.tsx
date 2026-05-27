import { Stack, Typography } from '@mui/material';

type WizardStepperProps = {
    stepTitles: readonly string[];
    activeStep: number;
    onStepClick: (index: number) => void;
};

export const WizardStepper = ({ stepTitles, activeStep, onStepClick }: WizardStepperProps) => (
    <Stack direction="row" alignItems="center" sx={{ overflowX: 'auto', pb: 1 }}>
        {stepTitles.map((title, index) => {
            const isActive = index === activeStep;
            const isCompleted = index < activeStep;

            return (
                <Stack key={title} direction="row" alignItems="center">
                    <Stack
                        direction="row"
                        alignItems="center"
                        onClick={() => {
                            if (index <= activeStep) onStepClick(index);
                        }}
                        sx={{
                            cursor: index <= activeStep ? 'pointer' : 'default',
                            backgroundColor: isActive ? '#fff7ed' : '#f3f4f6',
                            borderRadius: '30px',
                            px: 2,
                            py: 1,
                            border: isActive ? '2px solid #f97316' : '1px solid #e5e7eb',
                            transition: 'all 0.3s ease',
                        }}
                    >
                        <Stack
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                                width: 36,
                                height: 36,
                                borderRadius: '50%',
                                backgroundColor: isActive ? '#f97316' : isCompleted ? '#16a34a' : '#e5e7eb',
                                color: isActive || isCompleted ? '#fff' : '#6b7280',
                                fontWeight: 600,
                                mr: 1.5,
                            }}
                        >
                            {String(index + 1).padStart(2, '0')}
                        </Stack>
                        <Typography
                            sx={{
                                fontWeight: isActive ? 600 : 500,
                                color: isActive ? '#c2410c' : '#374151',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {title}
                        </Typography>
                    </Stack>
                    {index < stepTitles.length - 1 && (
                        <Stack
                            sx={{
                                width: 40,
                                height: 2,
                                backgroundColor: index < activeStep ? '#16a34a' : '#e5e7eb',
                                mx: 1,
                            }}
                        />
                    )}
                </Stack>
            );
        })}
    </Stack>
);
