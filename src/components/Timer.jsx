import { Box, Button, LinearProgress } from '@mui/material';
import { useTimer } from '../hooks/useTimer.hook';



const Timer = () => {

    const [seconds, minutes, progress, running, resetTimer, toggleTimer] = useTimer(120);

    return (
        <Box width={600} height={280} border={`1px solid var(--text_color)`} borderRadius={2}>

            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                height={48}
                borderBottom={`1px solid var(--text_color)`}
            >
                <Box
                    color={'var(--accent_color)'}
                    gap={1} fontSize={14}
                    display={'flex'}
                    alignItems={'center'}
                >
                    <span className="material-icons" style={{ fontSize: '16px' }}>hourglass_empty</span>
                    TIMER
                </Box>
            </Box>

            <Box display={'flex'} alignItems={'center '} height={180} borderBottom={`1px solid var(--text_color)`} paddingLeft={6} gap={2}>
                <Box display={'flex'} gap={1} alignItems={'flex-end'}>
                    <Box fontSize={74}> {minutes} </Box>
                    <Box fontSize={38}> m </Box>
                </Box>

                <Box display={'flex'} gap={1} alignItems={'flex-end'}>
                    <Box fontSize={78}> {seconds} </Box>
                    <Box fontSize={38}> s </Box>
                </Box>
            </Box>

            <Box sx={{ width: '100%' }}>
                <LinearProgress
                    variant="determinate"
                    value={progress}
                    sx={{
                        background: 'none', position: 'relative', inset: 0, top: -2, height: '3px'
                    }}
                />
            </Box>

            <Box display={'flex'} alignItems={'center'} height={50} paddingLeft={2} gap={2}>

                <Button
                    variant="contained"
                    sx={{ borderRadius: 0, fontWeight: 400, color: 'black', backgroundColor: 'var(--accent_color)' }}
                    size='small'
                    onClick={toggleTimer}
                >
                    {running ? 'Stop' : 'Start'}
                </Button>

                <Button
                    variant="contained"
                    sx={
                        {
                            borderRadius: 0,
                            fontWeight: 400,
                            color: 'black',
                            backgroundColor: '#bdc1c6'
                        }
                    }
                    size='small'
                    onClick={resetTimer}
                >
                    Reset
                </Button>
            </Box>
        </Box>
    )
}

export { Timer }
