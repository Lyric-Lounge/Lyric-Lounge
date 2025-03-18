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
               backgroundColor: '#303f9f', 
               '&:hover': {
                 backgroundColor: '#455a64', 
               },
             }}
          >
      Recommend Song
      </Button>
    </Stack>
  );
}

export default VariantButtonGroup