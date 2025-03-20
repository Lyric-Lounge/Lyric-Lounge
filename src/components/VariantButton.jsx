import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Stack from '@mui/joy/Stack';

const VariantButtonGroup = () => {
  return (
    <Stack spacing={2}>
     <Button
             variant="contained"
             type="submit"
             size="sm"
             sx={{
               marginTop: 2,
               backgroundColor: '#0094c6', 
               color: '#000000',
               '&:hover': {
                 backgroundColor: '#349dfe', 
               },
             }}
          >
      Recommend Song
      </Button>
    </Stack>
  );
}

export default VariantButtonGroup